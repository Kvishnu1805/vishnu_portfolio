import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ScrollReveal from "../common/ScrollReveal";
import certifications from "../../data/certifications";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden border-t border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-[#050816] sm:py-24"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-[140px] dark:bg-blue-600/10" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-purple-400/10 blur-[140px] dark:bg-purple-600/10" />

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
            eyebrow="Credentials"
            title="Certifications & professional training."
            description="Specialized full-stack training and recognized certifications that validate hands-on programming and web development expertise."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-1 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <article
                key={cert.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/40 sm:p-8"
              >
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      {/* Certificate Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.8"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                          />
                        </svg>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                          {cert.title}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
                      Verified Certification
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />

                  {/* Description */}
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                    {cert.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
};

export default Certifications;

