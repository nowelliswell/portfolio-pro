import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart management, payment integration, and admin dashboard. Built with modern tech stack for optimal performance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/demo/ecommerce",
    category: "Fullstack",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://demo-taskapp.com",
    githubUrl: "https://github.com/demo/taskapp",
    category: "Fullstack",
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Interactive financial portfolio tracker with real-time market data, analytics charts, and investment insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["React", "Chart.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://demo-portfolio.com",
    githubUrl: "https://github.com/demo/portfolio",
    category: "Frontend",
  },
  {
    id: 4,
    title: "API Gateway Service",
    description: "Scalable microservices API gateway with authentication, rate limiting, and comprehensive logging system.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tech: ["Node.js", "Express", "Redis", "Docker"],
    liveUrl: "https://api-gateway-demo.com",
    githubUrl: "https://github.com/demo/api-gateway",
    category: "Backend",
  },
  {
    id: 5,
    title: "Blog CMS Platform",
    description: "Content management system with markdown editor, image optimization, and SEO-friendly features.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    tech: ["Next.js", "MDX", "PostgreSQL", "Vercel"],
    liveUrl: "https://demo-blog-cms.com",
    githubUrl: "https://github.com/demo/blog-cms",
    category: "Fullstack",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and customizable widgets.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    tech: ["React", "OpenWeather API", "Leaflet", "CSS Modules"],
    liveUrl: "https://demo-weather.com",
    githubUrl: "https://github.com/demo/weather",
    category: "Frontend",
  },
];

const categories = ["All", "Fullstack", "Frontend", "Backend"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <p className="text-primary font-mono text-sm tracking-wider">03. Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Live Demo Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects with live demos. Each project showcases different 
            skills and technologies I've mastered.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Filter size={18} className="text-muted-foreground" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-xl overflow-hidden card-gradient border border-border hover:border-primary/50 hover-lift"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 backdrop-blur-sm">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="shrink-0">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="tech" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/nowelliswell" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
