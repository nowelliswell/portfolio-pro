import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: 1,
    role: "Senior Fullstack Developer",
    company: "TechCorp Indonesia",
    companyUrl: "https://techcorp.id",
    location: "Jakarta, Indonesia",
    period: "Jan 2022 - Present",
    description: [
      "Lead development of enterprise SaaS platform serving 50K+ users",
      "Architected microservices infrastructure reducing response time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines improving deployment frequency by 3x",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Digital Agency XYZ",
    companyUrl: "https://agencyxyz.com",
    location: "Bandung, Indonesia",
    period: "Jun 2019 - Dec 2021",
    description: [
      "Developed 20+ client websites and web applications",
      "Built custom CMS solutions for content management",
      "Collaborated with design team to implement pixel-perfect UIs",
      "Optimized website performance achieving 90+ Lighthouse scores",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Startup Hub",
    companyUrl: "https://startuphub.com",
    location: "Remote",
    period: "Jan 2018 - May 2019",
    description: [
      "Built responsive web interfaces for multiple startup clients",
      "Implemented state management using Redux and Context API",
      "Created reusable component libraries",
      "Worked in agile environment with weekly sprints",
    ],
    tech: ["React", "Redux", "SASS", "REST APIs"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-mono text-sm tracking-wider">04. Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Where I've Worked
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey building digital products across various industries.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className="flex-1 ml-8 md:ml-0">
                  <div
                    className={`p-6 rounded-xl card-gradient border border-border hover:border-primary/50 hover-lift ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    {/* Header */}
                    <div className="space-y-2 mb-4">
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink size={14} />
                        </a>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary mt-1.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="tech" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
