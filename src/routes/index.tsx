import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/portfolio/SideNav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noel Grevansha — Web Developer & IT Support Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Noel Grevansha: live web projects, IT support experience across healthcare and international teams, skills and certifications.",
      },
      { property: "og:title", content: "Noel Grevansha — Web Developer & IT Support Portfolio" },
      {
        property: "og:description",
        content:
          "Live web projects, IT support experience, skills and certifications from Noel Grevansha.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SideNav />
      <main className="md:pl-[17rem]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
