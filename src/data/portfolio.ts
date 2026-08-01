export const profile = {
  name: "Noel Grevansha",
  role: "Junior Web Developer & IT Support Specialist",
  tagline:
    "I build reliable digital solutions — modern web development, scalable systems, and dependable IT support.",
  email: "noelgrevansha@gmail.com",
  phone: "+6285701733651",
  whatsapp: "https://wa.me/6285701733651",
  location: "East Kalimantan, Indonesia",
  locationUrl: "https://bit.ly/4sRqF3H",
  github: "https://github.com/nowelliswell",
  linkedin: "https://www.linkedin.com/in/noelino-grevansha-b4ba19215/",
  portrait: "PAS FOTO NOEL UPDATE.png",
};

export const sections = [
  { id: "home", index: "00", label: "Home" },
  { id: "about", index: "01", label: "About" },
  { id: "skills", index: "02", label: "Skills" },
  { id: "projects", index: "03", label: "Projects" },
  { id: "experience", index: "04", label: "Experience" },
  { id: "certifications", index: "05", label: "Certifications" },
  { id: "contact", index: "06", label: "Contact" },
];

export const aboutParagraphs = [
  "I'm an Informatics Engineering graduate with a strong interest in information technology, digital systems, and web development. I currently work as an IT Support Specialist, keeping systems running reliably to support daily operations.",
  "I have hands-on experience across healthcare institutions, international companies, and education startups — bridging technical needs with business goals.",
  "Beyond technical skills, I bring leadership experience and a continuous learning mindset, focused on efficient, user-centered, and scalable digital systems.",
];

export const stats = [
  { value: "6+", label: "Live projects" },
  { value: "6", label: "Roles & internships" },
  { value: "4", label: "Certifications" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "TypeScript", "Bootstrap", "Three.js", "JavaScript", "React"],
  },
  {
    title: "Backend",
    items: ["Python (Flask)", "Go (Gorilla Mux)", "Dart (Shelf)", "REST APIs", "OpenCV"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "SQLite", "ORM (GORM)", "Database Design"],
  },
  {
    title: "DevOps",
    items: ["Git / GitHub", "Heroku / Cloud / Server", "CI/CD Basics", "Environment Config"],
  },
  {
    title: "Tools",
    items: ["Antigravity", "Postman", "Flask CLI", "Go Tools", "Dart Tools", "Debugging"],
  },
  {
    title: "Other",
    items: [
      "REST API Design",
      "Object-Oriented Programming",
      "UI/UX Foundations",
      "Version Control",
      "Testing & Debugging",
      "Documentation",
    ],
  },
];

export type Project = {
  title: string;
  category: "Fullstack" | "Frontend" | "Backend";
  description: string;
  tags: string[];
  image: string;
  demo: string;
  code: string;
};

export const projects: Project[] = [
  {
    title: "Hospitally Register Portal",
    category: "Fullstack",
    description:
      "Outpatient registration web application that streamlines hospital registration workflows with a clean, structured interface.",
    tags: ["TypeScript", "HTML", "CSS"],
    image: "checkin-rs.png",
    demo: "https://hospitally-register-portal.vercel.app/",
    code: "https://github.com/nowelliswell/hospitally-register-portal",
  },
  {
    title: "Property Hub — Real Estate",
    category: "Fullstack",
    description:
      "Property listing and management platform with advanced search, filtering, and a responsive browsing experience.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "property-web.png",
    demo: "https://property-hub-pro.vercel.app/",
    code: "https://github.com/nowelliswell/property-hub-pro",
  },
  // {
  //   title: "SIMRS Error Reporting System",
  //   category: "Backend",
  //   description:
  //     "Web-based reporting system to document and track hospital SIMRS issues, helping IT teams resolve problems efficiently.",
  //   tags: ["Python", "Flask", "HTML"],
  //   image: "https://noel-porto.vercel.app/assets/reportingsysm-kuI2rhdp.png",
  //   demo: "https://laporansistemsimrs-production.up.railway.app/dashboard",
  //   code: "https://github.com/nowelliswell/laporan_sistem_simrs",
  // },
  {
    title: "Dental Clinic Website",
    category: "Frontend",
    description:
      "Professional dental clinic site with appointment booking, service information, and modern healthcare UI.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "dental-web.png",
    demo: "https://dental-clinic-web-olive.vercel.app/",
    code: "https://github.com/nowelliswell/dental-clinic-web",
  },
  {
    title: "Clothing Brand Website",
    category: "Frontend",
    description:
      "Responsive fashion brand website with modern UI design, product showcase, and smooth user experience.",
    tags: ["React", "JavaScript", "CSS"],
    image: "cloth-web.png",
    demo: "https://cloth-brand-tawny.vercel.app/",
    code: "https://github.com/nowelliswell/cloth-brand",
  },
  {
    title: "Coffee Shop Ordering System",
    category: "Frontend",
    description:
      "Interactive coffee shop web app with menu display and ordering interface built on modern frontend tooling.",
    tags: ["React", "Vite", "JavaScript"],
    image: "coffee-web.png",
    demo: "https://coffeshopsystem.netlify.app/",
    code: "https://github.com/nowelliswell/CoffeShop-System",
  },
];

export const experience = [
  {
    role: "Information Technology Support Specialist",
    company: "RSUD Kudungga",
    url: "https://rsudkudungga.kutaitimurkab.go.id/",
    location: "Sangatta, East Kutai, Indonesia",
    period: "Feb 2025 — Present",
    points: [
      "Ensure IT systems including networks, servers, computers, and software operate reliably",
      "Perform routine maintenance and troubleshooting for hardware and software issues",
      "Support hospital staff with technical issues to keep healthcare services uninterrupted",
      "Assist in system monitoring, data management, and IT documentation",
    ],
    tags: ["Networking", "Hardware Troubleshooting", "Windows Server", "IT Support"],
  },
  {
    role: "Web Designer Intern",
    company: "GAOTek Inc",
    url: "https://gaotek.com/",
    location: "New York, United States (Remote)",
    period: "Jun 2024 — Aug 2024",
    points: [
      "Designed and developed responsive WordPress websites for international clients",
      "Customized themes and plugins to meet specific business requirements",
      "Translated design concepts into functional, user-friendly websites",
    ],
    tags: ["WordPress", "HTML", "CSS", "PHP", "UI/UX Design"],
  },
  {
    role: "Social Media Strategist Intern",
    company: "Eduwork.id",
    url: "https://eduwork.id/",
    location: "Yogyakarta, Indonesia",
    period: "Sep 2024 — Dec 2024",
    points: [
      "Planned and executed digital content strategies across multiple platforms",
      "Collaborated with marketing teams to increase brand awareness and engagement",
      "Analyzed social media metrics to improve content performance",
    ],
    tags: ["Digital Marketing", "Content Strategy", "Analytics", "Copywriting"],
  },
  {
    role: "Content Planner Intern",
    company: "Kelascuan",
    url: "https://kelascuan.com/",
    location: "Indonesia",
    period: "Aug 2024 — Oct 2024",
    points: [
      "Created structured content plans for social media platforms",
      "Maintained brand consistency in messaging and visuals",
      "Monitored content performance and optimized engagement strategies",
    ],
    tags: ["Content Planning", "Social Media Strategy", "Analytics"],
  },
  {
    role: "Social Media Specialist Intern",
    company: "CGI Creative Lab",
    url: "https://cgicreativelab.com/",
    location: "Denpasar, Bali, Indonesia",
    period: "Mar 2024 — Jun 2024",
    points: [
      "Defined and executed digital and technology-driven content strategies",
      "Aligned content planning with business goals and industry trends",
      "Assisted in overseeing content production and campaign execution",
    ],
    tags: ["Content Planning", "Digital Strategy", "Brand Management"],
  },
  {
    role: "Social Media Specialist Intern",
    company: "Solo Technopark",
    url: "https://solotechnopark.id/",
    location: "Surakarta, Indonesia",
    period: "Aug 2023 — Jan 2024",
    points: [
      "Developed and managed social media content for institutional branding",
      "Collaborated with teams to execute digital campaigns",
      "Analyzed engagement metrics and proposed optimization strategies",
    ],
    tags: ["Digital Marketing", "Content Creation", "Analytics"],
  },
];

export const certifications = [
  {
    title: "Junior Web Programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2024",
    url: "https://www.linkedin.com/in/noelino-grevansha-b4ba19215/details/certifications/",
  },
  {
    title: "Python Programming",
    issuer: "Dicoding Indonesia",
    year: "2024",
    url: "https://www.dicoding.com/certificates/KEXLY10G0ZG2",
  },
  {
    title: "Project Management",
    issuer: "Microsoft",
    year: "2023",
    url: "https://www.linkedin.com/in/noelino-grevansha-b4ba19215/details/certifications/",
  },
  {
    title: "Digital Marketing",
    issuer: "Microsoft",
    year: "2023",
    url: "https://www.linkedin.com/in/noelino-grevansha-b4ba19215/details/certifications/",
  },
];
