import Container from "../common/Container";
import profileImage1 from "../../assets/images/profile1.png";
import profile from "../../data/profile";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section relative isolate overflow-hidden bg-slate-50 py-24 dark:bg-[#050816] sm:py-32 lg:py-36"
    >
      {/* ========================================
          BACKGROUND GRID
      ======================================== */}
      <div
        className="hero-grid pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ========================================
          ANIMATED BACKGROUND LIGHTS
      ======================================== */}

      {/* Blue Light */}
      <div className="hero-light hero-light-blue pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px] dark:bg-blue-600/20" />

      {/* Purple Light */}
      <div className="hero-light hero-light-purple pointer-events-none absolute -right-40 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-purple-400/20 blur-[140px] dark:bg-purple-600/20" />

      {/* Cyan Light */}
      <div className="hero-light hero-light-cyan pointer-events-none absolute bottom-[-180px] left-1/3 -z-10 h-80 w-80 rounded-full bg-cyan-300/15 blur-[120px] dark:bg-cyan-500/10" />

      {/* ========================================
          FLOATING BACKGROUND BOXES
      ======================================== */}

      <div className="hero-particle hero-particle-1 pointer-events-none absolute left-[8%] top-[22%] -z-10 h-2 w-2 rounded-sm bg-blue-500/60" />

      <div className="hero-particle hero-particle-2 pointer-events-none absolute left-[18%] top-[70%] -z-10 h-3 w-3 rounded-sm border border-purple-400/40" />

      <div className="hero-particle hero-particle-3 pointer-events-none absolute left-[42%] top-[15%] -z-10 h-2 w-2 rounded-full bg-cyan-400/60" />

      <div className="hero-particle hero-particle-4 pointer-events-none absolute right-[12%] top-[25%] -z-10 h-3 w-3 rounded-sm border border-blue-400/40" />

      <div className="hero-particle hero-particle-5 pointer-events-none absolute right-[20%] top-[72%] -z-10 h-2 w-2 rounded-full bg-purple-400/60" />

      <div className="hero-particle hero-particle-6 pointer-events-none absolute right-[5%] bottom-[18%] -z-10 h-3 w-3 rounded-sm bg-cyan-400/40" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">

          {/* ========================================
              PROFILE IMAGE
          ======================================== */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">

              {/* Soft Image Glow */}
              <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />

              {/* Static Gradient Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-70 blur-[1px]" />

              {/* Inner Background */}
              <div className="absolute -inset-1 rounded-full bg-slate-50 dark:bg-[#080d1c]" />

              {/* Profile Image */}
              <img
                src={profileImage1}
                alt={`${profile.name} profile`}
                className="relative h-56 w-56 rounded-full border-4 border-slate-50 object-cover shadow-2xl shadow-blue-900/10 dark:border-[#080d1c] dark:shadow-blue-950/50 sm:h-64 sm:w-64"
              />
            </div>
          </div>

          {/* ========================================
              HERO CONTENT
          ======================================== */}
          <div className="max-w-4xl">

            {/* Experience Badge */}
            <div className="hero-fade-up inline-flex max-w-full flex-wrap items-center gap-2 rounded-2xl sm:rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 sm:px-4 sm:py-2 dark:border-blue-400/20 dark:bg-blue-500/5">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.7)] dark:bg-cyan-400" />

              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {profile.experience}
              </p>
            </div>

            {/* Name */}
            <h1 className="hero-fade-up-delay-1 mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] sm:leading-[1.05] tracking-tight text-slate-900 dark:text-white">
              {profile.name}
            </h1>

            {/* Role */}
            <h2 className="hero-fade-up-delay-2 mt-4 sm:mt-5 text-xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300">
              {profile.role}
            </h2>

            {/* Gradient Accent */}
            <div className="hero-fade-up-delay-2 mt-5 sm:mt-6 flex items-center gap-3">
              <div className="h-[2px] w-16 bg-gradient-to-r from-blue-500 to-purple-500" />

              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] dark:bg-cyan-400" />

              <div className="h-[2px] w-8 bg-purple-400/50 dark:bg-purple-500/40" />
            </div>

            {/* Description */}
            <p className="hero-fade-up-delay-3 mt-5 sm:mt-6 max-w-3xl text-base leading-7 sm:text-xl sm:leading-8 text-slate-600 dark:text-slate-400">
              {profile.summary}
            </p>

            {/* Buttons */}
            <div className="hero-fade-up-delay-3 mt-8 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">

              {/* Primary Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <span className="relative z-10">
                  View Projects
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>

              {/* Secondary Button */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:hover:border-blue-500/50 dark:hover:bg-blue-500/10"
              >
                Contact Me

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9.75h7.5m-7.5 3h4.5m-7.5 5.25L3 21l2.25-4.5A7.5 7.5 0 1 1 12 19.5a7.47 7.47 0 0 1-3.75-1Z"
                  />
                </svg>
              </a>
            </div>

            {/* Availability */}
            <div className="hero-fade-up-delay-3 mt-9 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-500">
              <span>Available for opportunities</span>

              <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />

              <span className="text-slate-600 dark:text-slate-400">
                Software Development
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />

              <span className="text-blue-600 dark:text-blue-400">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-100 to-transparent dark:from-[#0b1120]" />
    </section>
  );
};

export default Hero;