import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      title="Let's build something great"
      kicker="I'm currently open for freelance work and full-time opportunities."
    >
      <div className="grid gap-px border border-border bg-border md:grid-cols-2">
        <div className="bg-background p-8 md:p-10">
          <h3 className="font-mono text-[0.65rem] tracking-[0.25em] text-primary uppercase">
            Direct
          </h3>
          <ul className="mt-8 space-y-6">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                <span className="font-display text-sm md:text-base">{profile.email}</span>
              </a>
            </li>
            <li>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-primary" />
                <span className="font-display text-sm md:text-base">{profile.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={profile.locationUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground transition-colors hover:text-foreground"
              >
                <MapPin className="size-4 text-primary" />
                <span className="font-display text-sm md:text-base">{profile.location}</span>
              </a>
            </li>
          </ul>

          <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-background p-8 md:p-10">
          <div>
            <h3 className="font-mono text-[0.65rem] tracking-[0.25em] text-primary uppercase">
              Say hello
            </h3>
            <p className="mt-8 font-display text-2xl leading-snug md:text-3xl">
              Have a project, a role, or a system that needs fixing?
            </p>
          </div>
          <a
            href={`mailto:${profile.email}?subject=Project%20inquiry`}
            className="mt-10 inline-flex w-fit items-center gap-2 bg-primary px-6 py-3 font-display text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" /> Send a message
          </a>
        </div>
      </div>

      <footer className="mt-16 flex flex-col gap-2 border-t border-border pt-8 font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Noel Grevansha</span>
        <span>Designed & built in East Kalimantan</span>
      </footer>
    </Section>
  );
}
