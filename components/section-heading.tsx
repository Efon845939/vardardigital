export function SectionHeading({
  id,
  index,
  label,
  title,
  sub,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="grid gap-4 border-b border-line px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[180px_1fr]">
      <p data-reveal="scroll" className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {index} / {label}
      </p>
      <div data-reveal="scroll">
        <h2 id={id} className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">{sub}</p>
      </div>
    </div>
  );
}
