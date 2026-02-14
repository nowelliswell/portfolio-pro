import { Award, ExternalLink, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    id: 1,
    title: "Junior Web Programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "2024",
    credentialUrl: "https://www.linkedin.com/in/noelino-grevansha-b4ba19215/overlay/Certifications/1494626304/treasury/?profileId=ACoAADZvHCsBW-gKIzQDPwNmGddBm3D-XqP8l6w",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=120&fit=crop",
  },
  {
    id: 2,
    title: "Python Programming",
    issuer: "Dicoding Indonesia",
    date: "2024",
    credentialUrl: "https://www.dicoding.com/certificates/KEXLY10G0ZG2",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=200&h=120&fit=crop",
  },
  {
    id: 3,
    title: "Project Management",
    issuer: "Microsoft",
    date: "2023",
    credentialUrl: "https://www.linkedin.com/in/noelino-grevansha-b4ba19215/overlay/Certifications/1514853635/treasury/?profileId=ACoAADZvHCsBW-gKIzQDPwNmGddBm3D-XqP8l6w",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=120&fit=crop",
  },
  {
    id: 4,
    title: "Digital Marketing",
    issuer: "Microsoft",
    date: "2023",
    credentialUrl: "https://www.linkedin.com/in/noelino-grevansha-b4ba19215/overlay/Certifications/2036098289/treasury/?profileId=ACoAADZvHCsBW-gKIzQDPwNmGddBm3D-XqP8l6w",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=200&h=120&fit=crop",
  },
];


export function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-mono text-sm tracking-wider">05. Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Certified expertise validated by industry-leading organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-xl overflow-hidden card-gradient border border-border hover:border-primary/50 hover-lift scroll-scale-up stagger-${Math.min(index + 1, 4)} ${isVisible ? 'visible' : ''}`}
            >
              {/* Image */}
              <div className="relative aspect-[5/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={`${cert.title} certification from ${cert.issuer}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-primary/20 text-primary" aria-hidden="true">
                  <Award size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                  <span className="flex items-center gap-1 text-primary">
                    View <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://www.linkedin.com/in/noelino-grevansha-b4ba19215/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Certifications
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
