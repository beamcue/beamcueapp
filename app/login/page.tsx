'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase-client';

type Status = 'idle' | 'submitting' | 'magic_sent' | 'error';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handlePasswordSignIn(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus('error');
      // Friendly error mapping
      if (error.message.toLowerCase().includes('invalid login credentials')) {
        setErrorMsg("That email and password don't match. Try again or use the magic link below.");
      } else if (error.message.toLowerCase().includes('email not confirmed')) {
        setErrorMsg('Please check your inbox to confirm your email first.');
      } else {
        setErrorMsg(error.message);
      }
      return;
    }

    router.push('/dashboard');
    router.refresh();
  }

  async function handleMagicLink() {
    if (!email) {
      setErrorMsg('Enter your email first, then tap the magic link button.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
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
      setStatus('magic_sent');
    }
  }

  return (
    <main className="min-h-screen bg-cream text-ink flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <Link href="/" className="block font-serif text-2xl tracking-tight mb-10 text-center">
          Beamcue
        </Link>

        {status === 'magic_sent' ? (
          <div className="bg-white border border-line rounded-lg p-7 text-center">
            <h2 className="font-serif text-2xl mb-3 tracking-tight">Check your inbox</h2>
            <p className="text-sm text-muted leading-relaxed">
              We sent a magic link to <span className="text-ink font-medium">{email}</span>.
              Click it to sign in.
            </p>
            <button
              onClick={() => {
                setStatus('idle');
                setErrorMsg('');
              }}
              className="text-xs text-muted hover:text-ink underline mt-6"
            >
              Use a different email
            </button>
          </div>
        ) : (
          <form onSubmit={handlePasswordSignIn} className="space-y-4">
            <div className="text-center mb-6">
              <h1 className="font-serif text-3xl tracking-tight mb-2">Sign in</h1>
              <p className="text-sm text-muted">
                Welcome back. Use your password or a magic link.
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
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-20 bg-white border border-line rounded-md focus:outline-none focus:border-beam transition"
                  disabled={status === 'submitting'}
                  autoComplete="current-password"
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
              <div className="flex justify-end mt-2">
                <Link href="/forgot-password" className="text-xs text-muted hover:text-ink underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || !email || !password}
              className="w-full px-4 py-3 bg-ink text-cream font-medium rounded-md hover:bg-beam disabled:opacity-50 transition"
            >
              {status === 'submitting' ? 'Signing in…' : 'Sign in'}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-600 text-center pt-2">{errorMsg}</p>
            )}

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-line"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-cream px-3 text-muted">or</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleMagicLink}
              disabled={status === 'submitting' || !email}
              className="w-full px-4 py-3 bg-white border border-line text-ink font-medium rounded-md hover:border-ink disabled:opacity-50 transition"
            >
              Email me a magic link
            </button>

            <p className="text-xs text-muted text-center pt-4">
              New here?{' '}
              <Link href="/signup" className="text-ink hover:text-beam underline">
                Create an account
              </Link>
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
