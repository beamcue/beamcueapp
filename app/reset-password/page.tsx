'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase-client';

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'invalid_link';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // When the user lands here from the email link, Supabase has already set
  // a session via the auth callback. We check that on mount.
  useEffect(() => {
    async function checkSession() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        setStatus('invalid_link');
      }
    }
    checkSession();
  }, []);

  function validatePassword(pw: string): string | null {
    if (pw.length < 8) {
      return 'Password must be at least 8 characters.';
    }
    if (!/\d/.test(pw)) {
      return 'Password must contain at least one number.';
    }
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg('');

    const validationError = validatePassword(password);
    if (validationError) {
      setStatus('error');
      setErrorMsg(validationError);
      return;
    }

    if (password !== confirmPassword) {
      setStatus('error');
      setErrorMsg("The passwords don't match.");
      return;
    }

    setStatus('submitting');

    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
      return;
    }

    setStatus('success');
    setTimeout(() => {
      router.push('/dashboard');
      router.refresh();
    }, 1500);
  }

  if (status === 'invalid_link') {
    return (
      <main className="min-h-screen bg-cream text-ink flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm text-center">
          <Link href="/" className="block font-serif text-2xl tracking-tight mb-10 text-center">
            Beamcue
          </Link>
          <div className="bg-white border border-line rounded-lg p-7">
            <h2 className="font-serif text-2xl mb-3 tracking-tight">Link expired</h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              This reset link is invalid or has expired. Reset links work for one hour.
            </p>
            <Link
              href="/forgot-password"
              className="inline-block px-4 py-2 bg-ink text-cream rounded-md text-sm hover:bg-beam transition"
            >
              Request a new link
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream text-ink flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <Link href="/" className="block font-serif text-2xl tracking-tight mb-10 text-center">
          Beamcue
        </Link>

        {status === 'success' ? (
          <div className="bg-white border border-line rounded-lg p-7 text-center">
            <h2 className="font-serif text-2xl mb-3 tracking-tight">Password updated</h2>
            <p className="text-sm text-muted leading-relaxed">
              Taking you to your dashboard…
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-6">
              <h1 className="font-serif text-3xl tracking-tight mb-2">Set a new password</h1>
              <p className="text-sm text-muted">
                Choose something you'll remember.
              </p>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-muted mb-2">
                New password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoFocus
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters with a number"
                  className="w-full px-4 py-3 pr-20 bg-white border border-line rounded-md focus:outline-none focus:border-beam transition"
                  disabled={status === 'submitting'}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-ink"
                  tabIndex={-1}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm text-muted mb-2">
                Confirm password
              </label>
              <input
                id="confirm-password"
                type={showPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Type it again"
                className="w-full px-4 py-3 bg-white border border-line rounded-md focus:outline-none focus:border-beam transition"
                disabled={status === 'submitting'}
                autoComplete="new-password"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || !password || !confirmPassword}
              className="w-full px-4 py-3 bg-ink text-cream font-medium rounded-md hover:bg-beam disabled:opacity-50 transition"
            >
              {status === 'submitting' ? 'Updating…' : 'Update password'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-600 text-center pt-2">{errorMsg}</p>
            )}
          </form>
        )}
      </div>
    </main>
  );
}
