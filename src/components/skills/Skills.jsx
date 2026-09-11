import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import SkillCategory from "./SkillCategory";
import skills from "../../data/skills";
import ScrollReveal from "../common/ScrollReveal";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden border-t border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-[#050816] sm:py-20 lg:py-24"
    >
      {/* ========================================
          BACKGROUND EFFECTS
      ======================================== */}

      {/* Blue Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px] dark:bg-blue-600/10" />

      {/* Purple Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-purple-400/10 blur-[140px] dark:bg-purple-600/10" />

      {/* Cyan Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[100px] dark:bg-cyan-500/5" />

      {/* Subtle Grid */}
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
            eyebrow="Expertise"
            title="Technology expertise across the modern software lifecycle."
            description="A comprehensive technical skill set spanning Python backend, modern React frontend, relational databases, and industry developer tools."
          />

          {/* Skills Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 sm:mt-14">
            {skills.map((category, index) => (
              <SkillCategory
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
};

export default Skills;