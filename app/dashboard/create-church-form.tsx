'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase-client';

const COLORS = ['#ff5c1f', '#3b82f6', '#10b981', '#a855f7', '#ec4899'];

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40);
}

export function CreateChurchForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [color, setColor] = useState(COLORS[0]);
  const [status, setStatus] = useState<'idle' | 'creating' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('creating');
    setErrorMsg('');

    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setStatus('error');
      setErrorMsg('Not signed in.');
      return;
    }

    const baseSlug = slugify(name) || `church-${Date.now().toString(36)}`;
    let slug = baseSlug;
    let attempt = 0;

    while (attempt < 5) {
      const { data: church, error } = await supabase
        .from('churches')
        .insert({ name, slug, primary_color: color, created_by: user.id })
        .select()
        .single();

      if (!error && church) {
        // Add membership
        const { error: memberError } = await supabase
          .from('church_members')
          .insert({ church_id: church.id, user_id: user.id, role: 'admin' });

        if (memberError) {
          setStatus('error');
          setErrorMsg(memberError.message);
          return;
        }

        // Initialise live state to "black"
        await supabase
          .from('live_state')
          .insert({
            church_id: church.id,
            slide_type: 'black',
            content: {},
            updated_by: user.id,
          });

        router.push(`/setup/${slug}`);
        return;
      }

      if (error && error.code === '23505') {
        // Unique violation on slug — try a new one
        attempt += 1;
        slug = `${baseSlug}-${attempt}`;
        continue;
      }

      setStatus('error');
      setErrorMsg(error?.message ?? 'Unknown error');
      return;
    }

    setStatus('error');
    setErrorMsg('Could not generate a unique church name. Try a different name.');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-muted mb-2">
          Church name
        </label>
        <input
          id="name"
          type="text"
          required
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Hope Community Church"
          className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:border-beam transition"
          disabled={status === 'creating'}
        />
      </div>

      <div>
        <label className="block text-sm text-muted mb-2">Primary colour</label>
        <div className="flex gap-3">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              className={`w-10 h-10 rounded-lg border-2 transition ${
                color === c ? 'border-text' : 'border-border'
              }`}
              style={{ background: c }}
              aria-label={`Use ${c}`}
            />
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'creating' || !name}
        className="w-full px-4 py-3 bg-beam text-bg font-medium rounded-lg hover:opacity-90 disabled:opacity-50 transition"
      >
        {status === 'creating' ? 'Creating…' : 'Create church'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}
    </form>
  );
}
