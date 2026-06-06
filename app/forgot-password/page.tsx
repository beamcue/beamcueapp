'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-client';

type Status = 'idle' | 'submitting' | 'sent' | 'error';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('sent');
    }
  }

  return (
    <main className="min-h-screen bg-cream text-ink flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <Link href="/" className="block font-serif text-2xl tracking-tight mb-10 text-center">
          Beamcue
        </Link>

        {status === 'sent' ? (
          <div className="bg-white border border-line rounded-lg p-7 text-center">
            <h2 className="font-serif text-2xl mb-3 tracking-tight">Check your inbox</h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              If <span className="text-ink font-medium">{email}</span> is registered, we sent
              a link to reset your password. The link expires in an hour.
            </p>
            <Link href="/login" className="text-sm text-muted hover:text-ink underline">
              Back to sign in
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-6">
              <h1 className="font-serif text-3xl tracking-tight mb-2">Forgot password?</h1>
              <p className="text-sm text-muted">
                Enter your email and we'll send you a reset link.
              </p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-muted mb-2">
                Email
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
                disabled={status === 'submitting'}
                autoComplete="email"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || !email}
              className="w-full px-4 py-3 bg-ink text-cream font-medium rounded-md hover:bg-beam disabled:opacity-50 transition"
            >
              {status === 'submitting' ? 'Sending…' : 'Send reset link'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-600 text-center pt-2">{errorMsg}</p>
            )}

            <p className="text-xs text-muted text-center pt-4">
              Remembered your password?{' '}
              <Link href="/login" className="text-ink hover:text-beam underline">
                Sign in
              </Link>
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
