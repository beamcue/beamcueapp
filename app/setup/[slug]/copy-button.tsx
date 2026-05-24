'use client';

import { useState } from 'react';

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 bg-surface border border-border rounded-md text-sm hover:bg-bg transition"
    >
      {copied ? 'Copied ✓' : 'Copy'}
    </button>
  );
}
