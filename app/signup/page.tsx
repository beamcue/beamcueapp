'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase-client';

type Status = 'idle' | 'submitting' | 'error';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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

    setStatus('submitting');

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setStatus('error');
      if (error.message.toLowerCase().includes('already registered')) {
        setErrorMsg('That email is already registered. Try signing in instead.');
      } else {
        setErrorMsg(error.message);
      }
      return;
    }

    // Signup succeeded — supabase auto-signs the user in (since email confirmation is off)
    router.push('/dashboard');
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-cream text-ink flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <Link href="/" className="block font-serif text-2xl tracking-tight mb-10 text-center">
          Beamcue
        </Link>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center mb-6">
            <h1 className="font-serif text-3xl tracking-tight mb-2">Create an account</h1>
            <p className="text-sm text-muted">
              Set up your church on Beamcue in under a minute.
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

          <div>
            <label htmlFor="password" className="block text-sm text-muted mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
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
            <p className="text-xs text-muted mt-2">
              Minimum 8 characters, must include a number.
            </p>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting' || !email || !password}
            className="w-full px-4 py-3 bg-ink text-cream font-medium rounded-md hover:bg-beam disabled:opacity-50 transition"
          >
            {status === 'submitting' ? 'Creating account…' : 'Create account'}
          </button>

          {status === 'error' && (
            <p className="text-sm text-red-600 text-center pt-2">{errorMsg}</p>
          )}

          <p className="text-xs text-muted text-center pt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-ink hover:text-beam underline">
              Sign in
            </Link>
          </p>

          <p className="text-xs text-muted/70 text-center pt-2">
            By creating an account, you agree to Beamcue's terms.
          </p>
        </form>
      </div>
    </main>
  );
}
