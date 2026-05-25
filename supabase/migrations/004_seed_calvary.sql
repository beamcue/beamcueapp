-- Beamcue — Seed Calvary Hephzibah for rehearsal use
-- Run AFTER 003_dev_policies.sql
-- Creates the Calvary church with brand colour + initial live state
-- Adds an anon-write RLS policy scoped to the Calvary slug so the
-- /dev/calvary route can push without authentication.
-- ⚠️ Delete the anon policy before any production launch.

-- ─────────────────────────────────────────────────────────────
-- 1. INSERT Calvary as a church
-- ─────────────────────────────────────────────────────────────
insert into churches (slug, name, primary_color, plan)
values ('calvary-hephzibah', 'Calvary Hephzibah', '#D0441C', 'pro')
on conflict (slug) do update set
  name = excluded.name,
  primary_color = excluded.primary_color,
  plan = excluded.plan;

-- ─────────────────────────────────────────────────────────────
-- 2. Initialise live state for Calvary
-- ─────────────────────────────────────────────────────────────
insert into live_state (church_id, slide_type, content)
select id, 'title', '{"text": "Calvary Hephzibah"}'::jsonb
from churches where slug = 'calvary-hephzibah'
on conflict (church_id) do nothing;

-- ─────────────────────────────────────────────────────────────
-- 3. Dev-only RLS: allow anon to push slides for Calvary
-- (Mirrors the test-church policy; lets /dev/calvary work without auth)
-- ⚠️ REMOVE before production deploy
-- ─────────────────────────────────────────────────────────────
drop policy if exists "Dev: anon can update calvary live state" on live_state;
create policy "Dev: anon can update calvary live state" on live_state for update
  using (
    church_id in (select id from churches where slug = 'calvary-hephzibah')
  );

drop policy if exists "Dev: anon can insert calvary live state" on live_state;
create policy "Dev: anon can insert calvary live state" on live_state for insert
  with check (
    church_id in (select id from churches where slug = 'calvary-hephzibah')
  );

-- ─────────────────────────────────────────────────────────────
-- 4. Verification — show what we created
-- ─────────────────────────────────────────────────────────────
select c.slug, c.name, c.primary_color, c.plan, ls.slide_type, ls.content
from churches c
left join live_state ls on ls.church_id = c.id
where c.slug = 'calvary-hephzibah';
