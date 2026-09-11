import placementImg from "../../assets/images/projects/placement.png";
import weatherImg from "../../assets/images/projects/weather.png";
import portfolioImg from "../../assets/images/projects/portfolio.png";

const projectImages = {
  "smart-placement-cell": placementImg,
  "portfolio-website": portfolioImg,
  "weather-webapp": weatherImg,
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) {
    return null;
  }

  const displayImage = project.image || projectImages[project.id];

  return (
    <div
      className="project-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-hidden overscroll-none bg-slate-950/70 p-3 sm:p-4 backdrop-blur-md"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="project-modal max-h-[90vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-[#0b1120]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* ========================================
            HEADER
        ======================================== */}
        <div className="relative overflow-hidden border-b border-slate-200 p-5 sm:p-6 dark:border-slate-800">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                {project.category}
              </p>

              <h2
                id="project-modal-title"
                className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl"
              >
                {project.name}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-500 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-red-500/30 dark:hover:bg-red-500/10 dark:hover:text-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ========================================
            BODY
        ======================================== */}
        <div className="space-y-6 sm:space-y-8 p-5 sm:p-6">
          {/* Optional Project Preview Image */}
          {displayImage && (
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
              <img
                src={displayImage}
                alt={`${project.name} preview`}
                className="w-full max-h-72 object-cover"
              />
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              About the Project
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              Key Highlights & Contributions
            </h3>

            <ul className="mt-4 space-y-3">
              {project.responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Technologies Used
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* External Link */}
          {project.link && (
            <div className="border-t border-slate-200 pt-6 dark:border-slate-800">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <span>View on GitHub</span>

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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;