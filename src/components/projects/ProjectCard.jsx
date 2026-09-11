import placementImg from "../../assets/images/projects/placement.png";
import weatherImg from "../../assets/images/projects/weather.png";
import portfolioImg from "../../assets/images/projects/portfolio.png";

const projectImages = {
  "smart-placement-cell": placementImg,
  "portfolio-website": portfolioImg,
  "weather-webapp": weatherImg,
};

const ProjectCard = ({ project, onViewDetails, index = 0 }) => {
  const displayImage = project.image || projectImages[project.id];

  return (
    <article
      className="project-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-blue-500/40 dark:hover:shadow-blue-950/30"
      style={{
        "--card-delay": `${index * 100}ms`,
      }}
    >
      {/* ========================================
          PROJECT IMAGE
      ======================================== */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <a
          href={project.link || "https://github.com/Kvishnu1805"}
          className="block h-full w-full cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} code repository`}
        >
          {displayImage ? (
            <img
              src={displayImage}
              alt={`${project.name} preview`}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10">
              <span className="text-sm font-medium text-slate-400">
                Project Preview
              </span>
            </div>
          )}

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Category */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Hover View Link Icon */}
          <div className="absolute bottom-4 right-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
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
                  d="m13.5 4.5 7.5 7.5m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>

      {/* ========================================
          CONTENT
      ======================================== */}
      <div className="relative p-6">
        {/* Accent */}
        <div className="mb-4 h-[2px] w-10 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-16" />

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {project.name}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action */}
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="group/button mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-white dark:hover:text-blue-400 dark:focus:ring-offset-slate-900"
        >
          <span>View Details</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;