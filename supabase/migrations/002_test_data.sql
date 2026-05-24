-- Beamcue — Test data for local development
-- Run AFTER 001_init.sql
-- This creates a single test church called "Test Church" with slug "test"
-- Lets you preview the overlay + operator without going through magic-link auth

insert into churches (slug, name, primary_color, plan)
values ('test', 'Test Church', '#ff5c1f', 'free')
on conflict (slug) do nothing;

-- Initialise live state for the test church
insert into live_state (church_id, slide_type, content)
select id, 'title', '{"text": "Test Church"}'::jsonb
from churches where slug = 'test'
on conflict (church_id) do nothing;

-- View what we just created
select c.slug, c.name, c.primary_color, ls.slide_type, ls.content
from churches c
left join live_state ls on ls.church_id = c.id
where c.slug = 'test';
