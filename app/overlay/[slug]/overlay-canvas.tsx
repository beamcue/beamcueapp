'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase-client';

type SlideType = 'title' | 'scripture' | 'lower_third' | 'plain_text' | 'black';

interface Props {
  churchId: string;
  churchSlug: string;
  churchName: string;
  primaryColor: string;
  plan: string;
  initialLiveState: { slide_type: SlideType; content: any };
}

export function OverlayCanvas({ churchId, churchSlug, churchName, primaryColor, plan, initialLiveState }: Props) {
  const [state, setState] = useState(initialLiveState);

  useEffect(() => {
    if (churchId === 'demo') return;

    const supabase = createClient();
    const channel = supabase
      .channel(`overlay-${churchId}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'live_state', filter: `church_id=eq.${churchId}` },
        (payload) => {
          if (payload.new) {
            setState({
              slide_type: (payload.new as any).slide_type,
              content: (payload.new as any).content,
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [churchId]);

  return (
    <div className="fixed inset-0 bg-transparent">
      <SlideRender slideType={state.slide_type} content={state.content} color={primaryColor} />
      {plan === 'free' && (
        <div className="fixed bottom-4 right-4 px-3 py-1.5 bg-black/70 rounded-md text-white/60 text-sm font-light">
          beamcue.com
        </div>
      )}
    </div>
  );
}

function SlideRender({
  slideType,
  content,
  color,
}: {
  slideType: SlideType;
  content: any;
  color: string;
}) {
  if (slideType === 'black') {
    return <div className="w-screen h-screen bg-black" />;
  }

  if (slideType === 'title') {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black">
        <h1
          className="text-8xl font-semibold text-center px-12 leading-tight"
          style={{ color }}
        >
          {content.text || ''}
        </h1>
      </div>
    );
  }

  if (slideType === 'scripture') {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-black px-24 text-center">
        <p className="text-6xl text-white font-light leading-snug max-w-5xl mb-12">
          {content.text || ''}
        </p>
        <p className="text-3xl font-semibold tracking-wide" style={{ color }}>
          {content.reference || ''}
        </p>
      </div>
    );
  }

  if (slideType === 'lower_third') {
    return (
      <div className="w-screen h-screen flex flex-col justify-end items-start p-16 bg-transparent">
        <div className="bg-black/85 backdrop-blur-sm border-l-[6px] px-8 py-6 shadow-2xl" style={{ borderColor: color }}>
          <div className="text-5xl font-semibold text-white mb-1">{content.name || ''}</div>
          <div className="text-2xl text-white/70">{content.role || ''}</div>
        </div>
      </div>
    );
  }

  if (slideType === 'plain_text') {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black px-24 text-center">
        <p className="text-6xl text-white font-light leading-snug max-w-5xl">
          {content.text || ''}
        </p>
      </div>
    );
  }

  return null;
}
