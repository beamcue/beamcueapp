import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';
import { OperatorBoard } from '@/app/operator/[slug]/operator-board';

// Dev-only route. No auth check. Works against the seeded "calvary-hephzibah" church.
// Mirrors /dev/operator but scoped to Calvary so Bolaji can rehearse with
// real Calvary branding before any production deploy.
export default async function DevCalvaryPage() {
  const supabase = createClient();

  const { data: church } = await supabase
    .from('churches')
    .select('*')
    .eq('slug', 'calvary-hephzibah')
    .single();

  if (!church) {
    return (
      <main className="min-h-screen bg-bg text-text flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-semibold mb-4">No Calvary Hephzibah church found</h1>
        <p className="text-white/60 mb-6 max-w-md">
          Run <code className="bg-surface px-2 py-1 rounded text-beam">supabase/migrations/004_seed_calvary.sql</code>
          {' '}in your Supabase SQL Editor to create the Calvary Hephzibah church.
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
        ⚠️ DEV MODE · Calvary Hephzibah · no auth · rehearsal only
      </div>
      <OperatorBoard church={church} initialLiveState={liveState} />
    </div>
  );
}
