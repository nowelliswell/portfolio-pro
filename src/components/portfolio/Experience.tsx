import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      title="Where I've worked"
      kicker="A professional journey across healthcare, international business, and education."
    >
      <ol className="border-l border-border">
        {experience.map((job) => (
          <li key={job.role + job.company} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
            <span className="absolute top-1.5 -left-[4.5px] size-2 rounded-full bg-primary" />
            <p className="font-mono text-[0.65rem] tracking-[0.2em] text-primary uppercase">
              {job.period}
            </p>
            <h3 className="mt-3 font-display text-xl font-medium">{job.role}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline-offset-4 hover:underline"
              >
                {job.company}
              </a>
              {" · "}
              {job.location}
            </p>
            <ul className="mt-5 space-y-2">
              {job.points.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground before:mt-2 before:size-1 before:shrink-0 before:bg-primary/60 before:content-['']"
                >
                  {pt}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <li
                  key={t}
                  className="border border-border px-2.5 py-1 font-mono text-[0.6rem] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
