import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  // SEO: Update document title and meta description dynamically
  useEffect(() => {
    document.title = "Noel Porto | Noel Grevansha - Fullstack Web Developer Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Noel Porto - Portfolio website of Noel Grevansha, Junior Web Developer and IT Support specialist. Showcasing projects, skills, and experience in modern web development with React, TypeScript, and Node.js."
      );
    }
  }, []);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background relative">
        <div className="relative z-10">
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificationsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
