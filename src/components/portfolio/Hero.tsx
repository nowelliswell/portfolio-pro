import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="grain relative flex min-h-screen scroll-mt-24 flex-col justify-center px-6 pt-24 pb-20 md:px-16 md:pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-fade)" }}
      />
      <div className="relative mx-auto w-full max-w-5xl">
        <p className="rule-label">Hi, my name is</p>
        <h1 className="mt-6 text-[clamp(2.75rem,9vw,7rem)] leading-[0.92] font-bold">
          Noel
          <br />
          <span className="text-gold">Grevansha</span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="font-display text-lg text-muted-foreground md:text-2xl">{profile.role}</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              {profile.tagline}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-px border border-border bg-border">
            <div className="bg-background p-5">
              <dt className="font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                Based in
              </dt>
              <dd className="mt-2 font-display text-sm">{profile.location}</dd>
            </div>
            <div className="bg-background p-5">
              <dt className="font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                Status
              </dt>
              <dd className="mt-2 flex items-center gap-2 font-display text-sm">
                <span className="size-1.5 rounded-full bg-primary" />
                Open to work
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-display text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View projects <ArrowDown className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-primary/40 px-6 py-3 font-display text-sm text-primary transition-colors hover:bg-primary/10"
          >
            <Mail className="size-4" /> Contact me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 font-display text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Download className="size-4" /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}
