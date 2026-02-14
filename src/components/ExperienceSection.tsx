import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    id: 1,
    role: "Information Technology Support Specialist",
    company: "RSUD Kudungga",
    companyUrl: "https://rsudkudungga.kutaitimurkab.go.id",
    location: "Sangatta, East Kutai, Indonesia",
    period: "Feb 2025 - Present",
    description: [
      "Ensure all IT systems including networks, servers, computers, and software operate reliably",
      "Perform routine maintenance and troubleshooting for hardware and software issues",
      "Support hospital staff with technical issues to ensure uninterrupted healthcare services",
      "Assist in system monitoring, data management, and IT documentation",
    ],
    tech: ["Networking", "Hardware Troubleshooting", "Windows Server", "IT Support", "Documentation"],
  },
  {
    id: 2,
    role: "Web Designer Intern",
    company: "GAOTek Inc",
    companyUrl: "https://gaotek.com",
    location: "New York, United States (Remote)",
    period: "Jun 2024 - Aug 2024",
    description: [
      "Designed and developed responsive WordPress websites for international clients",
      "Customized WordPress themes and plugins to meet specific business requirements",
      "Translated design concepts into functional and user-friendly websites",
      "Optimized website layout for usability and responsiveness",
    ],
    tech: ["WordPress", "HTML", "CSS", "PHP", "UI/UX Design"],
  },
  {
    id: 3,
    role: "Social Media Strategist Intern",
    company: "Eduwork.id",
    companyUrl: "https://eduwork.id",
    location: "Yogyakarta, Indonesia",
    period: "Sep 2024 - Dec 2024",
    description: [
      "Planned and executed digital content strategies across multiple platforms",
      "Collaborated with marketing teams to increase brand awareness and engagement",
      "Analyzed social media metrics to improve content performance",
      "Maintained consistent brand voice and visual identity",
    ],
    tech: ["Digital Marketing", "Content Strategy", "Analytics", "Copywriting"],
  },
  {
    id: 4,
    role: "Social Media Specialist Intern",
    company: "CGI Creative Lab",
    companyUrl: "https://cgicreativelab.com/",
    location: "Denpasar, Bali, Indonesia",
    period: "Mar 2024 - Jun 2024",
    description: [
      "Defined and executed digital and technology-driven content strategies",
      "Aligned content planning with business goals and industry trends",
      "Assisted in overseeing content production and campaign execution",
    ],
    tech: ["Content Planning", "Digital Strategy", "Brand Management"],
  },
  {
    id: 5,
    role: "Content Planner Intern",
    company: "Kelascuan",
    companyUrl: "https://kelascuan.com/",
    location: "Indonesia",
    period: "Aug 2024 - Oct 2024",
    description: [
      "Created structured content plans for social media platforms",
      "Maintained brand consistency in messaging and visuals",
      "Monitored content performance and optimized engagement strategies",
    ],
    tech: ["Content Planning", "Social Media Strategy", "Analytics"],
  },
  {
    id: 6,
    role: "Social Media Specialist Intern",
    company: "Solo Technopark",
    companyUrl: "https://solotechnopark.id/",
    location: "Surakarta, Indonesia",
    period: "Aug 2023 - Jan 2024",
    description: [
      "Assisted in developing and managing social media content for institutional branding",
      "Collaborated with teams to execute digital campaigns",
      "Analyzed engagement metrics and proposed optimization strategies",
    ],
    tech: ["Digital Marketing", "Content Creation", "Analytics"],
  },
];


export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding bg-card/50" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
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
                className={`relative flex flex-col md:flex-row gap-8 scroll-fade-in stagger-${Math.min(index + 1, 4)} ${isVisible ? 'visible' : ''} ${
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
