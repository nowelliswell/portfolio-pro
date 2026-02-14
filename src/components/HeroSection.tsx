import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroBg}
          alt=""
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm tracking-wider animate-fade-up" role="doc-subtitle">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold animate-fade-up-delay-1">
            <span className="text-foreground">Noel </span>
            <span className="gradient-text">Grevansha</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground animate-fade-up-delay-2">
            Junior Web Developer and IT Support
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-balance animate-fade-up-delay-3">
            I build reliable digital solutions, focusing on modern web development, 
            scalable systems, and efficient IT support.
          </p>

          {/* CTA Buttons */}
          <nav className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-up-delay-3" aria-label="Primary actions">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 animate-bounce" size={20} aria-hidden="true" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/cv-noel.pdf" download aria-label="Download CV (PDF)">
                <Download size={20} aria-hidden="true" />
                Download CV
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">
                <Mail size={20} aria-hidden="true" />
                Contact Me
              </a>
            </Button>
          </nav>

          {/* Social Links */}
          <nav className="flex items-center justify-center gap-6 pt-8 animate-fade-up-delay-3" aria-label="Social media links">
            <a
              href="https://github.com/nowelliswell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors inline-block"
              aria-label="GitHub profile"
              style={{ textDecoration: 'none' }}
            >
              <span className="inline-flex items-center justify-center">
                <Github size={24} aria-hidden="true" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/noelino-grevansha-b4ba19215/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors inline-block"
              aria-label="LinkedIn profile"
              style={{ textDecoration: 'none' }}
            >
              <span className="inline-flex items-center justify-center">
                <Linkedin size={24} aria-hidden="true" />
              </span>
            </a>
          </nav>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to about section">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
