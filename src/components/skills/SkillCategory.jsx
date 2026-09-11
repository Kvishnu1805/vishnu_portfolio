const SkillCategory = ({ category, index = 0 }) => {
  const accentStyles = [
    {
      icon: "bg-blue-500/10 text-blue-500 dark:bg-blue-500/10 dark:text-blue-400",
      glow: "bg-blue-500/10",
      border: "hover:border-blue-300 dark:hover:border-blue-500/40",
      badge:
        "hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400",
    },
    {
      icon: "bg-purple-500/10 text-purple-500 dark:bg-purple-500/10 dark:text-purple-400",
      glow: "bg-purple-500/10",
      border: "hover:border-purple-300 dark:hover:border-purple-500/40",
      badge:
        "hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 dark:hover:border-purple-500/40 dark:hover:bg-purple-500/10 dark:hover:text-purple-400",
    },
    {
      icon: "bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/10 dark:text-cyan-400",
      glow: "bg-cyan-500/10",
      border: "hover:border-cyan-300 dark:hover:border-cyan-500/40",
      badge:
        "hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400",
    },
    {
      icon: "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400",
      glow: "bg-emerald-500/10",
      border: "hover:border-emerald-300 dark:hover:border-emerald-500/40",
      badge:
        "hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400",
    },
    {
      icon: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/10 dark:text-indigo-400",
      glow: "bg-indigo-500/10",
      border: "hover:border-indigo-300 dark:hover:border-indigo-500/40",
      badge:
        "hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400",
    },
    {
      icon: "bg-amber-500/10 text-amber-500 dark:bg-amber-500/10 dark:text-amber-400",
      glow: "bg-amber-500/10",
      border: "hover:border-amber-300 dark:hover:border-amber-500/40",
      badge:
        "hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600 dark:hover:border-amber-500/40 dark:hover:bg-amber-500/10 dark:hover:text-amber-400",
    },
  ];

  const accent = accentStyles[index % accentStyles.length];

  return (
    <article
      className={`skills-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60 ${accent.border}`}
      style={{
        "--card-delay": `${index * 100}ms`,
      }}
    >
      {/* Ambient Glow */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl transition-all duration-500 group-hover:scale-150 ${accent.glow}`}
      />

      <div className="relative">
        {/* Category Header */}
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent.icon}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
            >
              {/* Programming Languages - Code brackets */}
              {index === 0 && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5-4.5 4.5 4.5 4.5m10.5-9 4.5 4.5-4.5 4.5m-3-12-6 15"
                />
              )}

              {/* Web Technologies - Browser window */}
              {index === 1 && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              )}

              {/* Python Concepts - CPU chip */}
              {index === 2 && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                />
              )}

              {/* Database & SQL - Database cylinders */}
              {index === 3 && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              )}

              {/* JavaScript Concepts - Lightning bolt */}
              {index === 4 && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              )}

              {/* Developer Tools - Wrench & screwdriver */}
              {index === 5 && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.32l-3.276 3.277a1.5 1.5 0 0 1-2.122-2.122l3.277-3.276a4.5 4.5 0 0 0-6.32 4.486c.048.58.024 1.193-.14 1.743m-.233 5.108-3.03 2.496"
                />
              )}
            </svg>
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              {category.category}
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {category.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent dark:from-slate-700 dark:via-slate-800 dark:to-transparent" />

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className={`skill-badge cursor-default rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-200 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 ${accent.badge}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SkillCategory;