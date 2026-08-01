import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./Section";
import { projects, profile } from "@/data/portfolio";

const filters = ["All", "Fullstack", "Frontend", "Backend"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section
      id="projects"
      index="03"
      title="Live demo projects"
      kicker="Recent work with live demos — each project explores a different stack and problem space."
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`border px-4 py-2 font-mono text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${
              filter === f
                ? "border-primary text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-px border border-border bg-border md:grid-cols-2">
        {visible.map((p) => (
          <article key={p.title} className="group flex flex-col bg-background">
            <div className="relative overflow-hidden border-b border-border">
              <img
                src={p.image}
                alt={`${p.title} — ${p.description}`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-medium">{p.title}</h3>
                <span className="mt-1 shrink-0 font-mono text-[0.6rem] tracking-[0.2em] text-primary uppercase">
                  {p.category}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-border px-2.5 py-1 font-mono text-[0.6rem] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-5">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-sm text-primary hover:text-primary-soft"
                >
                  Live demo <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-sm text-muted-foreground hover:text-foreground"
                >
                  <Github className="size-4" /> Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex items-center gap-2 border border-primary/40 px-6 py-3 font-display text-sm text-primary transition-colors hover:bg-primary/10"
      >
        View more on GitHub <ArrowUpRight className="size-4" />
      </a>
    </Section>
  );
}
