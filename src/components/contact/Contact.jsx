import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ContactInfo from "./ContactInfo";
import ScrollReveal from "../common/ScrollReveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section relative isolate overflow-hidden border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-[#080d1c] sm:py-24"
    >
      {/* Background glow */}
      <div className="contact-glow-1 pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-[140px] dark:bg-blue-600/10" />

      <div className="contact-glow-2 pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-400/10 blur-[140px] dark:bg-purple-600/10" />

      {/* Subtle grid */}
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
            eyebrow="Contact"
            title="Let's build something meaningful."
            description="Interested in discussing software engineering, development opportunities, or a technology initiative? Get in touch."
          />

          <div className="mt-12">
            <ContactInfo />
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
};

export default Contact;