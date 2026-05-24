import type { Metadata } from 'next';
import { Fraunces, Inter_Tight } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Beamcue — Slide and scripture overlay for OBS',
  description: 'Browser-based slide and scripture overlay for OBS Studio. Push lyrics, scripture, and lower thirds from your phone. Built for churches that stream.',
  openGraph: {
    title: 'Beamcue — Slide and scripture overlay for OBS',
    description: 'Browser-based slide and scripture overlay for OBS Studio. Push from your phone. No install.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  );
}
