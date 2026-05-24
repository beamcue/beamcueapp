import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';
import { CreateChurchForm } from './create-church-form';
import { SignOutButton } from '@/components/sign-out-button';

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: memberships } = await supabase
    .from('church_members')
    .select('church_id, role, churches (id, slug, name, primary_color, plan)')
    .eq('user_id', user.id);

  const churches = (memberships ?? []).map((m: any) => m.churches).filter(Boolean);

  return (
    <main className="min-h-screen px-6 py-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <Link href="/" className="text-xl font-semibold">Beamcue</Link>
        <div className="flex items-center gap-4 text-sm text-muted">
          <span>{user.email}</span>
          <SignOutButton />
        </div>
      </div>

      {churches.length === 0 ? (
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-semibold mb-3">Welcome</h1>
          <p className="text-muted mb-8">
            Let's set up your church. This takes about 30 seconds.
          </p>
          <CreateChurchForm />
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-semibold mb-8">Your churches</h1>
          <div className="grid gap-4">
            {churches.map((church: any) => (
              <div key={church.id} className="bg-surface border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-medium mb-1">{church.name}</h2>
                    <p className="text-sm text-muted">/{church.slug} · {church.plan}</p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-lg border border-border"
                    style={{ background: church.primary_color }}
                  />
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/operator/${church.slug}`}
                    className="px-4 py-2 bg-beam text-bg rounded-lg text-sm font-medium hover:opacity-90 transition"
                  >
                    Open Operator
                  </Link>
                  <Link
                    href={`/setup/${church.slug}`}
                    className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-bg transition"
                  >
                    OBS setup
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
