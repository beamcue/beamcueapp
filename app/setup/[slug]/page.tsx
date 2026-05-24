import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';
import { CopyButton } from './copy-button';

export default async function SetupPage({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  const { data: church } = await supabase
    .from('churches')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!church) notFound();

  // Use NEXT_PUBLIC_SITE_URL in production; for local dev, fall back
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const overlayUrl = `${baseUrl}/overlay/${church.slug}`;
  const operatorUrl = `${baseUrl}/operator/${church.slug}`;

  return (
    <main className="min-h-screen bg-bg text-text px-6 py-8"><div className="max-w-3xl mx-auto">
      <Link href="/dashboard" className="text-sm text-muted hover:text-text mb-12 inline-block">
        ← Back to dashboard
      </Link>

      <h1 className="text-3xl font-semibold mb-3">OBS Setup</h1>
      <p className="text-muted mb-12">
        Three steps. Takes about 60 seconds.
      </p>

      <div className="space-y-8">
        <Step
          n={1}
          title="Open OBS Studio"
          body="If you don't have OBS yet, download it free from obsproject.com. We'll wait."
        />

        <Step
          n={2}
          title="Add a new Browser Source to your scene"
          body="In OBS: Sources panel → click + → Browser. Name it 'Beamcue'. Click OK."
        />

        <Step
          n={3}
          title="Paste this URL into the URL field"
          body="Then set Width to 1920, Height to 1080, and click OK."
        >
          <div className="mt-4 flex items-center gap-3 bg-bg border border-border rounded-lg p-3">
            <code className="text-sm font-mono flex-1 truncate text-beam">
              {overlayUrl}
            </code>
            <CopyButton text={overlayUrl} />
          </div>
        </Step>
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <h2 className="text-xl font-medium mb-4">You're set up</h2>
        <p className="text-muted mb-6">
          Open the Operator app on your phone or tablet. When you push a slide,
          it appears instantly in OBS.
        </p>
        <Link
          href={`/operator/${church.slug}`}
          className="inline-block px-6 py-3 bg-beam text-bg font-medium rounded-lg hover:opacity-90 transition"
        >
          Open Operator →
        </Link>
      </div>
      </div>
    </main>
  );
}

function Step({ n, title, body, children }: { n: number; title: string; body: string; children?: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center font-medium">
        {n}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted">{body}</p>
        {children}
      </div>
    </div>
  );
}
