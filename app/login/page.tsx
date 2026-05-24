'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('sent');
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="block text-2xl font-semibold mb-12 text-center">
          Beamcue
        </Link>

        {status === 'sent' ? (
          <div className="bg-surface border border-border rounded-lg p-6 text-center">
            <h2 className="text-lg font-medium mb-2">Check your inbox</h2>
            <p className="text-sm text-muted">
              We sent a magic link to <span className="text-text">{email}</span>.
              Click it to sign in.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-muted mb-2">
                Your email
              </label>
              <input
                id="email"
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@church.org"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:border-beam transition"
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || !email}
              className="w-full px-4 py-3 bg-beam text-bg font-medium rounded-lg hover:opacity-90 disabled:opacity-50 transition"
            >
              {status === 'sending' ? 'Sending…' : 'Send magic link'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-400 text-center">{errorMsg}</p>
            )}
          </form>
        )}
      </div>
    </main>
  );
}
