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
    <main className="min-h-screen bg-cream text-ink flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="block font-serif text-2xl tracking-tight mb-12 text-center">
          Beamcue
        </Link>

        {status === 'sent' ? (
          <div className="bg-white border border-line rounded-lg p-7 text-center">
            <h2 className="font-serif text-2xl mb-3 tracking-tight">Check your inbox</h2>
            <p className="text-sm text-muted leading-relaxed">
              We sent a magic link to <span className="text-ink font-medium">{email}</span>.
              Click it to sign in.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h1 className="font-serif text-3xl tracking-tight mb-3 text-center">Sign in</h1>
              <p className="text-sm text-muted text-center mb-8">
                We'll email you a magic link. No password to remember.
              </p>
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
                className="w-full px-4 py-3 bg-white border border-line rounded-md focus:outline-none focus:border-beam transition"
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || !email}
              className="w-full px-4 py-3 bg-ink text-cream font-medium rounded-md hover:bg-beam disabled:opacity-50 transition"
            >
              {status === 'sending' ? 'Sending…' : 'Send magic link'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-600 text-center">{errorMsg}</p>
            )}

            <p className="text-xs text-muted text-center pt-4">
              New here? Just enter your email — we'll create your account.
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
