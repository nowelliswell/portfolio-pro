import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      index="05"
      title="Professional credentials"
      kicker="Certified expertise validated by industry-leading organizations."
    >
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {certifications.map((c) => (
          <a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start justify-between gap-6 bg-background p-7 transition-colors hover:bg-secondary"
          >
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-primary">{c.year}</p>
              <h3 className="mt-3 font-display text-lg font-medium">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            </div>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        ))}
      </div>
    </Section>
  );
}
