import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';
import { OperatorBoard } from './operator-board';

export default async function OperatorPage({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/login?next=/operator/${params.slug}`);

  const { data: church } = await supabase
    .from('churches')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!church) notFound();

  // Verify membership
  const { data: membership } = await supabase
    .from('church_members')
    .select('role')
    .eq('church_id', church.id)
    .eq('user_id', user.id)
    .single();

  if (!membership) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-muted mb-4">You're not a member of this church.</p>
          <Link href="/dashboard" className="text-beam">Back to dashboard</Link>
        </div>
      </main>
    );
  }

  const { data: liveState } = await supabase
    .from('live_state')
    .select('*')
    .eq('church_id', church.id)
    .single();

  return <OperatorBoard church={church} initialLiveState={liveState} />;
}
