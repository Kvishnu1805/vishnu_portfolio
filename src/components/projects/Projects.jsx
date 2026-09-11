import { useEffect, useState } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projects from "../../data/projects";
import ScrollReveal from "../common/ScrollReveal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="projects"
        className="relative isolate overflow-hidden border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-[#080d1c] sm:py-24"
      >
        {/* ========================================
            BACKGROUND EFFECTS
        ======================================== */}

        <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-[140px] dark:bg-blue-600/10" />

        <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-400/10 blur-[140px] dark:bg-purple-600/10" />

        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <ScrollReveal direction="up" duration={700} delay={50}>
          <Container>
            <SectionHeading
              eyebrow="Projects"
              title="Selected work and software solutions."
              description="A selection of projects representing experience across software development, engineering, technology, and data-driven solutions."
            />

            {/* Project Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </Container>
        </ScrollReveal>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;