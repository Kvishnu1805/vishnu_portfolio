import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import EducationTimeline from "./EducationTimeline";
import education from "../../data/education";
import ScrollReveal from "../common/ScrollReveal";

const Education = () => {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden border-t border-slate-200 bg-white py-16 sm:py-20 lg:py-24 dark:border-slate-800 dark:bg-[#050816]"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-80 w-80 rounded-full bg-blue-400/10 blur-[130px] dark:bg-blue-600/10" />

      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-purple-400/10 blur-[140px] dark:bg-purple-600/10" />

      {/* Subtle Grid Pattern for Visual Continuity */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container>
        <ScrollReveal direction="up" duration={650}>
          <SectionHeading
            eyebrow="Education"
            title="Academic foundations that shaped my technology journey."
            description="Academic background in Computer Science and Engineering, building a solid foundation in software development, data structures, and computer science principles."
          />
        </ScrollReveal>

        <div className="mt-10 sm:mt-14">
          <EducationTimeline education={education} />
        </div>
      </Container>
    </section>
  );
};

export default Education;