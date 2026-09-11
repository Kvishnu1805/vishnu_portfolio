const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="section-heading mb-12 max-w-3xl">
      {/* Eyebrow */}
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="section-heading-line h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />

          <p className="section-eyebrow text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            {eyebrow}
          </p>

          <span className="section-heading-dot h-1.5 w-1.5 rounded-full bg-purple-500" />
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}

      {/* Bottom Accent */}
      <div className="section-heading-accent mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
    </div>
  );
};

export default SectionHeading;