-- Beamcue — Dev-only RLS policy
-- Run AFTER 002_test_data.sql
-- Allows anonymous (unauthenticated) updates to the test church's live_state
-- so the /dev/operator route can push slides without login.
--
-- ⚠️ THIS WEAKENS SECURITY. Run only in your dev Supabase project.
-- DROP this policy before production launch (a 008_remove_dev_policies.sql will follow).

drop policy if exists "Dev: anon can update test church live state" on live_state;
create policy "Dev: anon can update test church live state" on live_state for update
  using (
    church_id in (select id from churches where slug = 'test')
  );

drop policy if exists "Dev: anon can insert test church live state" on live_state;
create policy "Dev: anon can insert test church live state" on live_state for insert
  with check (
    church_id in (select id from churches where slug = 'test')
  );
