import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Dec 2023",
    credentialUrl: "https://aws.amazon.com/certification/",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=120&fit=crop",
  },
  {
    id: 2,
    title: "Professional React Developer",
    issuer: "Meta",
    date: "Aug 2023",
    credentialUrl: "https://www.meta.com/certification/",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=120&fit=crop",
  },
  {
    id: 3,
    title: "Node.js Application Developer",
    issuer: "OpenJS Foundation",
    date: "Mar 2023",
    credentialUrl: "https://openjsf.org/certification/",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=200&h=120&fit=crop",
  },
  {
    id: 4,
    title: "Google Cloud Professional Developer",
    issuer: "Google",
    date: "Nov 2022",
    credentialUrl: "https://cloud.google.com/certification/",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=120&fit=crop",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
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
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden card-gradient border border-border hover:border-primary/50 hover-lift"
            >
              {/* Image */}
              <div className="relative aspect-[5/3] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-primary/20 text-primary">
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
      </div>
    </section>
  );
}
