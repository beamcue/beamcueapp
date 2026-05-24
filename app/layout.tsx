import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beamcue',
  description: 'Browser-based slide and scripture overlay for OBS Studio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
