import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase-server';
import { OverlayCanvas } from './overlay-canvas';

export default async function OverlayPage({ params }: { params: { slug: string } }) {
  const supabase = createClient();

  // Demo slug shows a static example
  if (params.slug === 'demo') {
    return (
      <OverlayCanvas
        churchId="demo"
        churchSlug="demo"
        churchName="Demo Church"
        primaryColor="#ff5c1f"
        plan="free"
        initialLiveState={{
          slide_type: 'title',
          content: { text: 'Beamcue Demo' },
        }}
      />
    );
  }

  const { data: church } = await supabase
    .from('churches')
    .select('id, slug, name, primary_color, plan')
    .eq('slug', params.slug)
    .single();

  if (!church) notFound();

  const { data: liveState } = await supabase
    .from('live_state')
    .select('slide_type, content')
    .eq('church_id', church.id)
    .single();

  return (
    <OverlayCanvas
      churchId={church.id}
      churchSlug={church.slug}
      churchName={church.name}
      primaryColor={church.primary_color}
      plan={church.plan}
      initialLiveState={liveState || { slide_type: 'black', content: {} }}
    />
  );
}
