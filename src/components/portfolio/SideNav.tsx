import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { profile, sections } from "@/data/portfolio";

export function SideNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile bar */}
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background/90 px-5 py-3 backdrop-blur md:hidden">
        <span className="font-display text-sm tracking-[0.3em] uppercase">
          Noel<span className="text-primary">.</span>
        </span>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-primary"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="fixed inset-0 top-[49px] z-40 bg-background px-6 py-8 md:hidden">
          <ul className="space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className="flex w-full items-baseline gap-4 border-b border-border py-4 text-left"
                >
                  <span className="font-mono text-xs text-primary">{s.index}</span>
                  <span className="font-display text-xl">{s.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop rail */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[var(--rail)] flex-col justify-between border-r border-border bg-background px-8 py-10 md:flex [--rail:17rem]">
        <div>
          <a href="#home" className="block">
            <span className="font-display text-lg tracking-[0.35em] uppercase">
              Noel<span className="text-primary">.</span>
            </span>
            <p className="mt-2 font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
              Web Dev · IT Support
            </p>
          </a>

          <nav className="mt-14">
            <ul className="space-y-px">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <button
                      onClick={() => go(s.id)}
                      className="group flex w-full items-center gap-4 py-2.5 text-left"
                    >
                      <span
                        className={`font-mono text-[0.65rem] transition-colors ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {s.index}
                      </span>
                      <span
                        className={`h-px transition-all duration-300 ${
                          isActive
                            ? "w-8 bg-primary"
                            : "w-4 bg-border group-hover:w-8 group-hover:bg-primary/60"
                        }`}
                      />
                      <span
                        className={`font-display text-sm tracking-wide transition-colors ${
                          isActive
                            ? "text-primary-soft"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
            </a>
          </div>
          <p className="font-mono text-[0.6rem] leading-relaxed tracking-[0.15em] text-muted-foreground uppercase">
            Available for
            <br />
            new opportunities
          </p>
        </div>
      </aside>
    </>
  );
}
