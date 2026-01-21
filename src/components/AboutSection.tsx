import { Badge } from "@/components/ui/badge";

const techStack = [
  "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL"
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-wider">01. About Me</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Passionate About Building Digital Experiences
              </h2>
            </div>

           <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm Noel, an Informatics Engineering graduate with a strong interest in 
              information technology, digital systems, and web development. I currently work 
              as an IT Support Specialist, ensuring IT systems run reliably to support daily operations.
            </p>
            <p>
              I have hands-on experience in IT support, web development, and digital 
              solutions across healthcare institutions, international companies, and education startups, 
              allowing me to bridge technical needs with business goals.
            </p>
            <p>
              Beyond technical skills, I bring leadership experience and a continuous learning 
              mindset, with a focus on building efficient, user-centered, and scalable digital systems.
            </p>
            </div>


            {/* Tech Stack */}
            <div className="space-y-3 pt-4">
              <p className="text-sm font-medium text-foreground">Tech Stack I Work With:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-xl overflow-hidden border-2 border-border">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-6xl font-bold text-primary-foreground">
                    AR
                  </div>
                </div>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute top-4 left-4 w-full h-full rounded-xl border-2 border-primary/30 -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
