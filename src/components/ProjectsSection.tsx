import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import hospitalRegPortalImg from "@/assets/hospital-reg-portal.png";
import coffeordersystem from "@/assets/coffe-order-system.png";
import clothbrand from "@/assets/clothbrand.png";
import reportingweb from "@/assets/reportingsysm.png";
import dental from "@/assets/dental-clinic.png"

const projects = [
  {
    id: 1,
    title: "Hospitally Register Portal",
    description:
      "Modern outpatient registration web application designed to streamline hospital registration workflows with a clean and structured interface.",
    image: hospitalRegPortalImg,
    tech: ["TypeScript", "HTML", "CSS"],
    liveUrl: "https://hospitally-register-portal.vercel.app/",
    githubUrl: "https://github.com/nowelliswell/hospitally-register-portal",
    category: "Fullstack",
  },
  {
    id: 2,
    title: "Clothing Brand Website",
    description:
      "Responsive fashion brand website featuring modern UI design, product showcase, and smooth user experience.",
    image: clothbrand,
    tech: ["React", "JavaScript", "CSS"],
    liveUrl: "https://cloth-brand-tawny.vercel.app/",
    githubUrl: "https://github.com/nowelliswell/cloth-brand",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Coffee Shop Ordering System",
    description:
      "Interactive coffee shop web application with menu display and ordering interface built using modern frontend tooling.",
    image: coffeordersystem,
    tech: ["React", "Vite", "JavaScript"],
    liveUrl: "https://coffeshopsystem.netlify.app/",
    githubUrl: "https://github.com/nowelliswell/CoffeShop-System",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Dental Clinic Website",
    description:
      "Professional dental clinic website featuring appointment booking, service information, and modern healthcare UI design for patient engagement.",
    image: dental,
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://dental-clinic-web-olive.vercel.app/",
    githubUrl: "https://github.com/nowelliswell/dental-clinic-web",
    category: "Frontend",
  },
  {
    id: 5,
    title: "SIMRS Error Reporting System",
    description:
      "Web-based reporting system to document and track hospital SIMRS issues, helping IT teams monitor and resolve system problems efficiently.",
    image: reportingweb,
    tech: ["Python", "Flask", "HTML"],
    liveUrl: "https://laporansistemsimrs-production.up.railway.app/dashboard",
    githubUrl: "https://github.com/nowelliswell/laporan_sistem_simrs",
    category: "Backend",
  },
  {
    id: 6,
    title: "Property Hub - Real Estate Platform",
    description:
      "Modern property listing and management platform with advanced search, filtering, and responsive design for seamless property browsing experience.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://property-hub-pro.vercel.app/",
    githubUrl: "https://github.com/nowelliswell/property-hub-pro",
    category: "Fullstack",
  },
  /*{
    id: 7,
    title: "Face Recognition Attendance System",
    description:
      "Automated attendance system utilizing face recognition technology to identify users and store attendance records in a database.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    tech: ["Python", "OpenCV", "MySQL"],
    liveUrl: "",
    githubUrl: "https://github.com/nowelliswell/absensi_facerecog",
    category: "AI / Backend",
  },
  {
    id: 8,
    title: "Dishub Vehicle Test Reminder System",
    description:
      "Automated reminder system for vehicle testing schedules, built to send notifications and manage data efficiently.",
    image: "https://images.unsplash.com/photo-1581091870627-3b1b14b9a5b0?w=600&h=400&fit=crop",
    tech: ["Python", "Flask", "SQLite", "Bootstrap"],
    liveUrl: "",
    githubUrl: "https://github.com/nowelliswell/dishub-reminder",
    category: "Backend",
  },
  {
    id: 9,
    title: "Book Management REST API",
    description:
      "RESTful API for managing book data with CRUD operations using Golang, PostgreSQL, and ORM integration.",
    image: "https://images.unsplash.com/photo-1584697964403-8a2c9a1fd806?w=600&h=400&fit=crop",
    tech: ["Go", "GORM", "PostgreSQL"],
    liveUrl: "",
    githubUrl: "https://github.com/nowelliswell/BookManagementAPIwithGolang",
    category: "Backend API",
  },
  {
    id: 10,
    title: "Task Manager REST API",
    description:
      "Backend task management API built with Dart using the Shelf framework, featuring structured routing and database integration.",
    image: "https://images.unsplash.com/photo-1584697964404-1a2b9c1fe807?w=600&h=400&fit=crop",
    tech: ["Dart", "Shelf", "PostgreSQL"],
    liveUrl: "",
    githubUrl: "https://github.com/nowelliswell/Task-Manager-API",
    category: "Backend API",
  },*/
];



const categories = ["All", "Fullstack", "Frontend", "Backend"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center space-y-4 mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
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
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`group rounded-xl overflow-hidden card-gradient border border-border hover:border-primary/50 hover-lift scroll-scale-up stagger-${Math.min(index + 1, 4)} ${isVisible ? 'visible' : ''}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  loading="lazy"
                  decoding="async"
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
