import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ScrollReveal from "../common/ScrollReveal";

const About = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-[#080d1c] sm:py-24"
    >
      {/* ========================================
          BACKGROUND EFFECTS
      ======================================== */}

      {/* Blue Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px] dark:bg-blue-600/10" />

      {/* Purple Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-400/10 blur-[140px] dark:bg-purple-600/10" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <ScrollReveal direction="up" duration={700}>
        <Container>
          <SectionHeading
            eyebrow="About"
            title="Full-stack engineering with modern frameworks and AI tools."
            description="Building responsive web applications, developing scalable APIs, connecting databases, and exploring Generative & Agentic AI tools to solve real-world problems."
          />

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* ========================================
                ABOUT CONTENT
            ======================================== */}
            <div className="about-content space-y-6">
              {/* Paragraph 1 */}
              <div className="about-paragraph group relative pl-6">
                {/* Accent Line */}
                <span className="absolute left-0 top-2 h-[calc(100%-8px)] w-[2px] rounded-full bg-gradient-to-b from-blue-500 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                  I am a Full-Stack Developer with comprehensive knowledge of
                  Python, FastAPI, React.js, JavaScript, HTML, CSS, MySQL, and REST
                  APIs. I specialize in building responsive web applications, developing robust
                  APIs, and creating interactive user interfaces.
                </p>
              </div>

              {/* Paragraph 2 */}
              <div className="about-paragraph group relative pl-6">
                <span className="absolute left-0 top-2 h-[calc(100%-8px)] w-[2px] rounded-full bg-gradient-to-b from-purple-500 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                  Completed a Bachelor of Engineering in Computer Science and Engineering
(2022–2026) from Tamilnadu College of Engineering, Coimbatore, with a
CGPA of 7.87. Also completed Python Full Stack Development training at QSpiders.
                </p>
              </div>

              {/* Paragraph 3 */}
              <div className="about-paragraph group relative pl-6">
                <span className="absolute left-0 top-2 h-[calc(100%-8px)] w-[2px] rounded-full bg-gradient-to-b from-cyan-500 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
                  Passionate about emerging technologies, I actively explore Generative AI
                  and Agentic AI tools to optimize coding efficiency, automate complex
                  workflows, and build smarter software solutions for practical challenges.
                </p>
              </div>
            </div>

            {/* ========================================
                HIGHLIGHTS
            ======================================== */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* CGPA Card */}
              <div className="about-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/40">
                {/* Glow */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20" />

                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 1-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7 8.5v3.25"
                      />
                    </svg>
                  </div>

                  <p className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
                    7.87
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    BE CSE CGPA (2022–2026)
                  </p>
                </div>
              </div>

              {/* Full Stack Engineering */}
              <div className="about-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-purple-500/40">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />

                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 9 3.75-3.75L15.75 9M8.25 15l3.75 3.75L15.75 15M3.75 12h16.5"
                      />
                    </svg>
                  </div>

                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    Full-Stack Web
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Proficient with React, FastAPI, Python, REST APIs, and database connectivity.
                  </p>
                </div>
              </div>

              {/* Database & SQL */}
              <div className="about-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-cyan-500/40">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/20" />

                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      />
                    </svg>
                  </div>

                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    Database & SQL
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Skilled in MySQL, CRUD queries, joins, and stored procedures.
                  </p>
                </div>
              </div>

              {/* Certification & AI */}
              <div className="about-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-500/40">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20" />

                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>

                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    Certified by QSpiders
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Python Full Stack Development certified with active exploration of Generative AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
};

export default About;