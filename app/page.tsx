import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 mb-8 text-sm text-muted">
          <span className="w-2 h-2 rounded-full bg-beam animate-pulse" />
          v0.1 · in development
        </div>

        <h1 className="text-6xl font-semibold tracking-tight mb-6">
          Beamcue
        </h1>

        <p className="text-xl text-muted mb-12 leading-relaxed">
          Browser-based slide and scripture overlay for OBS Studio.
          Push live from your phone. No install. No PowerPoint.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/login"
            className="px-6 py-3 bg-beam text-bg font-medium rounded-lg hover:opacity-90 transition"
          >
            Get started
          </Link>
          <Link
            href="/overlay/demo"
            className="px-6 py-3 border border-border rounded-lg hover:bg-surface transition"
          >
            See the overlay
          </Link>
        </div>

        <div className="mt-24 text-xs text-muted">
          Built for churches that stream their services.
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-xs text-muted mb-3">Dev shortcuts</p>
            <div className="flex items-center justify-center gap-3 text-sm">
              <Link href="/dev/operator" className="px-3 py-1.5 border border-yellow-700/50 text-yellow-200 rounded">
                /dev/operator
              </Link>
              <Link href="/overlay/test" className="px-3 py-1.5 border border-yellow-700/50 text-yellow-200 rounded">
                /overlay/test
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
