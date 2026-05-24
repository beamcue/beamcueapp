'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-client';

type SlideType = 'title' | 'scripture' | 'lower_third' | 'plain_text' | 'black';

interface Church {
  id: string;
  slug: string;
  name: string;
  primary_color: string;
}

interface LiveState {
  church_id: string;
  slide_type: SlideType;
  content: any;
  updated_at: string;
}

interface Props {
  church: Church;
  initialLiveState: LiveState | null;
}

const SLIDE_TYPES: { type: SlideType; label: string; icon: string }[] = [
  { type: 'title', label: 'Title', icon: 'T' },
  { type: 'scripture', label: 'Scripture', icon: '✝' },
  { type: 'lower_third', label: 'Lower 3rd', icon: '⬇' },
  { type: 'plain_text', label: 'Text', icon: 'A' },
  { type: 'black', label: 'Cut to black', icon: '⬛' },
];

export function OperatorBoard({ church, initialLiveState }: Props) {
  const supabase = createClient();
  const [liveState, setLiveState] = useState<LiveState | null>(initialLiveState);
  const [stagedType, setStagedType] = useState<SlideType>('title');
  const [stagedContent, setStagedContent] = useState<any>({ text: church.name });
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'live' | 'offline'>('connecting');
  const [pushing, setPushing] = useState(false);
  const [justPushed, setJustPushed] = useState(false);
  const lastHeartbeat = useRef<number>(Date.now());

  useEffect(() => {
    const channel = supabase
      .channel(`live-state-${church.id}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'live_state', filter: `church_id=eq.${church.id}` },
        (payload) => {
          if (payload.new) {
            setLiveState(payload.new as LiveState);
            lastHeartbeat.current = Date.now();
          }
        }
      )
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          setConnectionStatus('live');
          lastHeartbeat.current = Date.now();
        } else if (status === 'CHANNEL_ERROR' || status === 'CLOSED') {
          setConnectionStatus('offline');
        }
      });

    // Heartbeat watchdog — flips to offline if no events for 15s
    const interval = setInterval(() => {
      if (Date.now() - lastHeartbeat.current > 15000) {
        setConnectionStatus((prev) => (prev === 'live' ? 'offline' : prev));
      }
    }, 5000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, [church.id, supabase]);

  function selectType(type: SlideType) {
    setStagedType(type);
    // Sensible defaults per type
    if (type === 'title') setStagedContent({ text: church.name });
    else if (type === 'scripture') setStagedContent({ reference: 'John 3:16', text: '' });
    else if (type === 'lower_third') setStagedContent({ name: '', role: '' });
    else if (type === 'plain_text') setStagedContent({ text: '' });
    else setStagedContent({});
  }

  async function pushLive() {
    setPushing(true);
    const { error } = await supabase
      .from('live_state')
      .update({ slide_type: stagedType, content: stagedContent })
      .eq('church_id', church.id);

    setPushing(false);
    if (!error) {
      setJustPushed(true);
      setTimeout(() => setJustPushed(false), 1500);
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-4 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="text-sm text-muted">← {church.name}</Link>
        <ConnectionBadge status={connectionStatus} />
      </header>

      {/* Live state preview */}
      <section className="border-b border-border px-4 py-4">
        <div className="text-xs text-muted mb-2 uppercase tracking-wide">Live now</div>
        <div className="bg-bg border border-border rounded-lg aspect-video flex items-center justify-center">
          {liveState ? (
            <SlidePreview slideType={liveState.slide_type} content={liveState.content} color={church.primary_color} />
          ) : (
            <div className="text-muted text-sm">Loading…</div>
          )}
        </div>
      </section>

      {/* Slide type picker */}
      <section className="border-b border-border px-4 py-4">
        <div className="text-xs text-muted mb-3 uppercase tracking-wide">Slide type</div>
        <div className="grid grid-cols-5 gap-2">
          {SLIDE_TYPES.map(({ type, label, icon }) => (
            <button
              key={type}
              onClick={() => selectType(type)}
              className={`flex flex-col items-center gap-1 py-3 rounded-lg border transition no-select ${
                stagedType === type
                  ? 'border-beam bg-surface'
                  : 'border-border hover:bg-surface'
              }`}
            >
              <span className="text-lg">{icon}</span>
              <span className="text-[10px] text-muted">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Staged content editor */}
      <section className="flex-1 px-4 py-4 space-y-4">
        <div className="text-xs text-muted uppercase tracking-wide">Staged (not live yet)</div>
        <SlideEditor slideType={stagedType} content={stagedContent} onChange={setStagedContent} />

        {/* Staged preview */}
        <div className="bg-bg border border-border rounded-lg aspect-video flex items-center justify-center">
          <SlidePreview slideType={stagedType} content={stagedContent} color={church.primary_color} />
        </div>
      </section>

      {/* Push button — fixed bottom */}
      <footer className="border-t border-border px-4 py-4 bg-surface">
        <button
          onClick={pushLive}
          disabled={pushing}
          className={`w-full py-5 rounded-lg font-semibold text-lg transition no-select ${
            justPushed
              ? 'bg-green-600 text-white'
              : 'bg-beam text-bg hover:opacity-90 disabled:opacity-50'
          }`}
        >
          {pushing ? 'Pushing…' : justPushed ? '✓ Live' : 'Push to live'}
        </button>
      </footer>
    </main>
  );
}

function ConnectionBadge({ status }: { status: 'connecting' | 'live' | 'offline' }) {
  const config = {
    connecting: { color: 'bg-yellow-500', label: 'Connecting…' },
    live: { color: 'bg-green-500', label: 'Live' },
    offline: { color: 'bg-red-500', label: 'Offline' },
  }[status];

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className={`w-2 h-2 rounded-full ${config.color} ${status === 'live' ? 'animate-pulse' : ''}`} />
      <span className="text-muted">{config.label}</span>
    </div>
  );
}

function SlideEditor({
  slideType,
  content,
  onChange,
}: {
  slideType: SlideType;
  content: any;
  onChange: (c: any) => void;
}) {
  if (slideType === 'black') {
    return <p className="text-sm text-muted">Clears the overlay. Nothing to configure.</p>;
  }

  if (slideType === 'title') {
    return (
      <input
        type="text"
        value={content.text || ''}
        onChange={(e) => onChange({ text: e.target.value })}
        placeholder="Title text"
        className="w-full px-4 py-3 bg-bg border border-border rounded-lg focus:outline-none focus:border-beam"
      />
    );
  }

  if (slideType === 'scripture') {
    return (
      <div className="space-y-3">
        <input
          type="text"
          value={content.reference || ''}
          onChange={(e) => onChange({ ...content, reference: e.target.value })}
          placeholder="Reference (e.g. John 3:16)"
          className="w-full px-4 py-3 bg-bg border border-border rounded-lg focus:outline-none focus:border-beam"
        />
        <textarea
          value={content.text || ''}
          onChange={(e) => onChange({ ...content, text: e.target.value })}
          placeholder="Verse text (paste from any translation)"
          rows={3}
          className="w-full px-4 py-3 bg-bg border border-border rounded-lg focus:outline-none focus:border-beam resize-none"
        />
      </div>
    );
  }

  if (slideType === 'lower_third') {
    return (
      <div className="space-y-3">
        <input
          type="text"
          value={content.name || ''}
          onChange={(e) => onChange({ ...content, name: e.target.value })}
          placeholder="Name"
          className="w-full px-4 py-3 bg-bg border border-border rounded-lg focus:outline-none focus:border-beam"
        />
        <input
          type="text"
          value={content.role || ''}
          onChange={(e) => onChange({ ...content, role: e.target.value })}
          placeholder="Role / title"
          className="w-full px-4 py-3 bg-bg border border-border rounded-lg focus:outline-none focus:border-beam"
        />
      </div>
    );
  }

  if (slideType === 'plain_text') {
    return (
      <textarea
        value={content.text || ''}
        onChange={(e) => onChange({ text: e.target.value })}
        placeholder="Plain text"
        rows={3}
        className="w-full px-4 py-3 bg-bg border border-border rounded-lg focus:outline-none focus:border-beam resize-none"
      />
    );
  }

  return null;
}

function SlidePreview({
  slideType,
  content,
  color,
}: {
  slideType: SlideType;
  content: any;
  color: string;
}) {
  if (slideType === 'black') {
    return <div className="w-full h-full bg-black rounded-md" />;
  }

  if (slideType === 'title') {
    return (
      <div className="w-full h-full flex items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-semibold" style={{ color }}>
          {content.text || 'Title'}
        </h1>
      </div>
    );
  }

  if (slideType === 'scripture') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
        <p className="text-sm mb-2 line-clamp-3">{content.text || 'Verse text'}</p>
        <p className="text-xs font-semibold" style={{ color }}>
          {content.reference || 'Reference'}
        </p>
      </div>
    );
  }

  if (slideType === 'lower_third') {
    return (
      <div className="w-full h-full flex flex-col items-end justify-end p-4">
        <div className="bg-bg/80 border-l-4 px-3 py-2" style={{ borderColor: color }}>
          <div className="text-sm font-semibold">{content.name || 'Name'}</div>
          <div className="text-xs text-muted">{content.role || 'Role'}</div>
        </div>
      </div>
    );
  }

  if (slideType === 'plain_text') {
    return (
      <div className="w-full h-full flex items-center justify-center p-6 text-center">
        <p className="text-base">{content.text || 'Plain text'}</p>
      </div>
    );
  }

  return null;
}
