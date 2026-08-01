import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      title="Technologies & tools"
      kicker="A toolkit for building modern web applications from concept to deployment."
    >
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="bg-background p-7">
            <h3 className="font-mono text-[0.65rem] tracking-[0.25em] text-primary uppercase">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="size-1 shrink-0 bg-primary/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
