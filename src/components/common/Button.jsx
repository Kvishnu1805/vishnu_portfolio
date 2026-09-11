const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 active:scale-[0.98]";

  const variants = {
    /* ========================================
       PRIMARY
    ======================================== */

    primary:
      "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 dark:shadow-blue-500/20",

    /* ========================================
       SECONDARY
    ======================================== */

    secondary:
      "border border-slate-200 bg-white/80 text-slate-900 shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400",

    /* ========================================
       OUTLINE
    ======================================== */

    outline:
      "border border-slate-300 bg-transparent text-slate-800 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50/70 hover:text-blue-700 dark:border-slate-700 dark:text-white dark:hover:border-blue-500/50 dark:hover:bg-blue-500/10 dark:hover:text-blue-400",

    /* ========================================
       GHOST
    ======================================== */

    ghost:
      "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400",
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {/* Animated Shine */}
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}

      {/* Content */}
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;