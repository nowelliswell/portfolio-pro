import { Section } from "./Section";
import { aboutParagraphs, profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" index="01" title="Passionate about building digital experiences">
      <div className="grid gap-14 md:grid-cols-[1.35fr_1fr] md:items-start">
        <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          <dl className="grid grid-cols-3 gap-px border border-border bg-border pt-0">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-5">
                <dt className="font-display text-3xl text-primary">{s.value}</dt>
                <dd className="mt-1 font-mono text-[0.6rem] tracking-[0.18em] uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative">
          <div className="absolute -inset-3 border border-primary/25" aria-hidden="true" />
          <img
            src={profile.portrait}
            alt="Portrait of Noel Grevansha, web developer and IT support specialist"
            loading="lazy"
            className="relative w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
        </figure>
      </div>
    </Section>
  );
}
