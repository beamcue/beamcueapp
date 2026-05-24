import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';
import { OperatorBoard } from '@/app/operator/[slug]/operator-board';

// Dev-only route. No auth check. Works against the seeded "test" church.
// Delete or guard this route before production deploy.
export default async function DevOperatorPage() {
  const supabase = createClient();

  const { data: church } = await supabase
    .from('churches')
    .select('*')
    .eq('slug', 'test')
    .single();

  if (!church) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-semibold mb-4">No test church found</h1>
        <p className="text-muted mb-6 max-w-md">
          Run <code className="bg-surface px-2 py-1 rounded text-beam">supabase/migrations/002_test_data.sql</code>
          {' '}in your Supabase SQL Editor to create the "test" church.
        </p>
        <Link href="/" className="text-beam">← Back home</Link>
      </main>
    );
  }

  const { data: liveState } = await supabase
    .from('live_state')
    .select('*')
    .eq('church_id', church.id)
    .single();

  return (
    <div>
      <div className="bg-yellow-900/30 border-b border-yellow-700/50 text-yellow-200 text-xs px-4 py-2 text-center">
        ⚠️ DEV MODE — no auth, hardcoded to test church. Delete /dev/operator before production.
      </div>
      <OperatorBoard church={church} initialLiveState={liveState} />
    </div>
  );
}
