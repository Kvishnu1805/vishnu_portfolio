const EducationCard = ({ item, index = 0 }) => {
  const accents = [
    {
      badge:
        "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-400",
      glow: "bg-blue-500/10",
      border: "hover:border-blue-300 dark:hover:border-blue-500/40",
      accentLine: "from-blue-500 to-indigo-500",
    },
    {
      badge:
        "border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-900/50 dark:bg-purple-950/40 dark:text-purple-400",
      glow: "bg-purple-500/10",
      border: "hover:border-purple-300 dark:hover:border-purple-500/40",
      accentLine: "from-purple-500 to-pink-500",
    },
    {
      badge:
        "border-cyan-200 bg-cyan-50 text-cyan-600 dark:border-cyan-900/50 dark:bg-cyan-950/40 dark:text-cyan-400",
      glow: "bg-cyan-500/10",
      border: "hover:border-cyan-300 dark:hover:border-cyan-500/40",
      accentLine: "from-cyan-500 to-blue-500",
    },
    {
      badge:
        "border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-400",
      glow: "bg-indigo-500/10",
      border: "hover:border-indigo-300 dark:hover:border-indigo-500/40",
      accentLine: "from-indigo-500 to-purple-500",
    },
  ];

  const accent = accents[index % accents.length];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900/60 ${accent.border}`}
    >
      {/* Ambient Card Glow */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150 ${accent.glow}`}
      />

      <div className="relative">
        {/* Header with duration and accent line */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {item.duration ? (
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${accent.badge}`}
            >
              {item.duration}
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100/60 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400">
              Completed
            </span>
          )}

          <div
            className={`h-1 w-8 rounded-full bg-gradient-to-r ${accent.accentLine} opacity-60 transition-all duration-300 group-hover:w-14 group-hover:opacity-100`}
          />
        </div>

        {/* Degree */}
        <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 transition-colors duration-200 dark:text-white sm:text-[1.35rem]">
          {item.degree}
        </h3>

        {/* Institution */}
        <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 1-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7 8.5v3.25"
            />
          </svg>
          <span>{item.institution}</span>
        </div>

        {/* Percentage / Grade if available */}
        {item.percentage && (
          <div className="mt-5 border-t border-slate-200/60 pt-4 dark:border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Grade / Score
            </span>
            <p className="mt-1 text-base font-bold text-slate-900 dark:text-white">
              {item.percentage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationCard ;