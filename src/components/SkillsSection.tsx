import { Code, Database, Globe, Layers, Server, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["HTML", "CSS", "TypeScript", "Bootstrap", "Three.js", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python (Flask)", "Go (Gorilla Mux)", "Dart (Shelf)", "REST APIs", "OpenCV"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "SQLite", "ORM (GORM)", "Database Design"],
  },
  {
    title: "DevOps",
    icon: Layers,
    skills: ["Git/GitHub", "Deployment (Heroku/Cloud/Server)", "CI/CD Basics", "Environment Config"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["VS Code", "Postman", "Flask CLI", "Go Tools", "Dart Tools", "Debugging"],
  },
  {
    title: "Other",
    icon: Code,
    skills: ["REST API Design", "Object-Oriented Programming", "UI/UX Foundations", "Version Control (Git)", "Testing & Debugging", "Documentation"],
  },
];


export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-card/50" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-mono text-sm tracking-wider">02. Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technologies & Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications from concept to deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 hover-lift scroll-scale-up stagger-${Math.min(index + 1, 4)} ${isVisible ? 'visible' : ''}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
