import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  kicker,
  children,
}: {
  id: string;
  index: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">{index}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
        <h2 className="mt-6 text-3xl leading-[1.1] font-semibold md:text-5xl">{title}</h2>
        {kicker && <p className="mt-4 max-w-xl text-muted-foreground">{kicker}</p>}
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
