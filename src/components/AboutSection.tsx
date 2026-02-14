import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profilephoto from "@/assets/pas-foto.png";

const techStack = [
  "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL"
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`space-y-6 scroll-slide-left ${isVisible ? 'visible' : ''}`}>
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
          <div className={`relative max-w-sm mx-auto lg:mx-0 lg:ml-auto scroll-slide-right ${isVisible ? 'visible' : ''}`}>
            <div className="relative group">
              {/* Animated Gradient Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                  <img 
                    src={profilephoto} 
                    alt="Noel Grevansha - Fullstack Web Developer and IT Support Specialist"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
              
              {/* Decorative Border */}
              <div className="absolute top-6 left-6 w-full h-full rounded-2xl border-2 border-primary/20 -z-10 transition-all duration-500 group-hover:top-3 group-hover:left-3 group-hover:border-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
