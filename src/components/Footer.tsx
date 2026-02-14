import { Heart, Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/nowelliswell" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/noelino-grevansha-b4ba19215/" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            <span className="gradient-text">Noel</span>
            <span className="text-foreground">Porto</span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors inline-block"
                aria-label={social.label}
                style={{ textDecoration: 'none' }}
              >
                <span className="inline-flex items-center justify-center">
                  <social.icon size={20} />
                </span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              Built with <Heart size={14} className="text-primary fill-primary" /> by noelgrevansha
            </p>
            <p className="mt-1">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
