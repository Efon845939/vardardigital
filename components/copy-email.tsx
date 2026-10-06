"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email, copy, copied }: { email: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setDone(true);
        } catch {
          window.location.href = `mailto:${email}`;
          return;
        }
        setTimeout(() => setDone(false), 2000);
      }}
      className="inline-flex h-9 items-center gap-2 rounded-sharp border border-line bg-surface px-3 font-mono text-xs text-ink transition-colors hover:border-ink"
    >
      {done ? <Check aria-hidden="true" className="size-3.5 text-accent" /> : <Copy aria-hidden="true" className="size-3.5" />}
      <span aria-live="polite">{done ? copied : copy}</span>
    </button>
  );
}
