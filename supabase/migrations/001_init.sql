-- Beamcue v1 — Initial schema
-- Multi-tenant: every row scoped to a church
-- Run this in the Supabase SQL Editor

-- ─────────────────────────────────────────────────────────────
-- 1. CHURCHES (one row per tenant)
-- ─────────────────────────────────────────────────────────────
create table if not exists churches (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  primary_color text default '#ff5c1f',
  plan text default 'free' check (plan in ('free', 'pro')),
  created_at timestamptz default now(),
  created_by uuid references auth.users(id) on delete set null
);

-- ─────────────────────────────────────────────────────────────
-- 2. CHURCH MEMBERS (which users belong to which church)
-- ─────────────────────────────────────────────────────────────
create table if not exists church_members (
  church_id uuid references churches(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text default 'admin' check (role in ('admin', 'operator')),
  created_at timestamptz default now(),
  primary key (church_id, user_id)
);

-- ─────────────────────────────────────────────────────────────
-- 3. LIVE STATE (one row per church — the current overlay state)
-- ─────────────────────────────────────────────────────────────
create table if not exists live_state (
  church_id uuid primary key references churches(id) on delete cascade,
  slide_type text not null default 'black' check (slide_type in (
    'title', 'scripture', 'lower_third', 'plain_text', 'black'
  )),
  content jsonb default '{}',
  updated_at timestamptz default now(),
  updated_by uuid references auth.users(id) on delete set null
);

-- ─────────────────────────────────────────────────────────────
-- 4. SLIDE DECKS (the prepared deck for a service)
-- ─────────────────────────────────────────────────────────────
create table if not exists decks (
  id uuid primary key default gen_random_uuid(),
  church_id uuid references churches(id) on delete cascade,
  title text not null default 'Untitled service',
  service_date date,
  created_at timestamptz default now()
);

create table if not exists slides (
  id uuid primary key default gen_random_uuid(),
  deck_id uuid references decks(id) on delete cascade,
  position int not null,
  slide_type text not null check (slide_type in (
    'title', 'scripture', 'lower_third', 'plain_text', 'black'
  )),
  content jsonb default '{}',
  created_at timestamptz default now()
);

create index if not exists slides_deck_id_position_idx on slides(deck_id, position);

-- ─────────────────────────────────────────────────────────────
-- 5. ENABLE REALTIME on live_state
-- ─────────────────────────────────────────────────────────────
alter publication supabase_realtime add table live_state;

-- ─────────────────────────────────────────────────────────────
-- 6. ROW LEVEL SECURITY
-- ─────────────────────────────────────────────────────────────
alter table churches enable row level security;
alter table church_members enable row level security;
alter table live_state enable row level security;
alter table decks enable row level security;
alter table slides enable row level security;

-- Helper function: which churches does the current user belong to?
create or replace function user_churches() returns setof uuid
language sql stable security definer
as $$
  select church_id from church_members where user_id = auth.uid();
$$;

-- Churches: members can read their own church; anyone authenticated can create one
drop policy if exists "Members can read their churches" on churches;
create policy "Members can read their churches" on churches for select
  using (id in (select user_churches()));

drop policy if exists "Authenticated can create churches" on churches;
create policy "Authenticated can create churches" on churches for insert
  with check (auth.uid() is not null);

drop policy if exists "Members can update their churches" on churches;
create policy "Members can update their churches" on churches for update
  using (id in (select user_churches()));

-- Anonymous read of churches by slug — needed for the public overlay page
drop policy if exists "Public can read by slug" on churches;
create policy "Public can read by slug" on churches for select
  using (true);

-- Church members
drop policy if exists "Members can read their memberships" on church_members;
create policy "Members can read their memberships" on church_members for select
  using (user_id = auth.uid() or church_id in (select user_churches()));

drop policy if exists "Users can join churches they create" on church_members;
create policy "Users can join churches they create" on church_members for insert
  with check (user_id = auth.uid());

-- Live state
drop policy if exists "Members can read live state" on live_state;
create policy "Members can read live state" on live_state for select
  using (true); -- overlay needs to read without auth

drop policy if exists "Members can update live state" on live_state;
create policy "Members can update live state" on live_state for update
  using (church_id in (select user_churches()));

drop policy if exists "Members can insert live state" on live_state;
create policy "Members can insert live state" on live_state for insert
  with check (church_id in (select user_churches()));

-- Decks
drop policy if exists "Members can read their decks" on decks;
create policy "Members can read their decks" on decks for select
  using (church_id in (select user_churches()));

drop policy if exists "Members can write their decks" on decks;
create policy "Members can write their decks" on decks for all
  using (church_id in (select user_churches()))
  with check (church_id in (select user_churches()));

-- Slides
drop policy if exists "Members can read their slides" on slides;
create policy "Members can read their slides" on slides for select
  using (deck_id in (select id from decks where church_id in (select user_churches())));

drop policy if exists "Members can write their slides" on slides;
create policy "Members can write their slides" on slides for all
  using (deck_id in (select id from decks where church_id in (select user_churches())))
  with check (deck_id in (select id from decks where church_id in (select user_churches())));

-- ─────────────────────────────────────────────────────────────
-- 7. TRIGGER: bump updated_at on live_state changes
-- ─────────────────────────────────────────────────────────────
create or replace function bump_live_state_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists live_state_updated_at on live_state;
create trigger live_state_updated_at before update on live_state
  for each row execute function bump_live_state_updated_at();
