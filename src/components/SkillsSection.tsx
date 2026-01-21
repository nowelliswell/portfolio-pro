import { Code, Database, Globe, Layers, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "NestJS", "Python", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Firebase"],
  },
  {
    title: "DevOps",
    icon: Layers,
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "Nginx", "Linux"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "VS Code", "Figma", "Postman", "Jest", "Webpack"],
  },
  {
    title: "Other",
    icon: Code,
    skills: ["Agile/Scrum", "UI/UX", "SEO", "Testing", "Documentation", "Code Review"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
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
              className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
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
