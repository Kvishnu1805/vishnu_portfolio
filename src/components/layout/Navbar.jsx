import { useState, useEffect } from "react";
import Container from "../common/Container";
import ThemeToggle from "../common/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (event, href) => {
  event.preventDefault();

  setIsMenuOpen(false);

  const target = document.querySelector(href);

  if (!target) return;

  const navbarHeight = 72;
  const extraSpacing = 18;

  const targetPosition =
    target.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight -
    extraSpacing;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
};

useEffect(() => {
  const handleScroll = () => {
  const scrollPosition = window.scrollY;

  setIsScrolled(scrollPosition > 20);

  const activationPoint = scrollPosition + 100;
  let currentSection = "home";

  navLinks.forEach((link) => {
    const section = document.querySelector(link.href);

    if (!section) {
      return;
    }

    const sectionTop = section.getBoundingClientRect().top + scrollPosition;

    if (activationPoint >= sectionTop) {
      currentSection = section.id;
    }
  });

  setActiveSection(currentSection);
};

  handleScroll();

  const handleResize = () => {
    handleScroll();
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  window.addEventListener("resize", handleResize);
  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  return (
    <header
  className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
    isScrolled
      ? "border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl dark:border-slate-800/70 dark:bg-[#050816]/80"
      : "border-b border-transparent bg-white/70 backdrop-blur-md dark:bg-[#050816]/70"
  }`}

    >
      <Container>
        <nav className="flex h-[72px] items-center justify-between">

          {/* ========================================
              LOGO
          ======================================== */}
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, "#home")}
            className="group flex items-center gap-2"
          >
            {/* Logo Mark */}
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-sm font-bold text-white">
                VK
              </span>

              {/* Shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>

            {/* Logo Text */}
            <div className="hidden sm:block">
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                Portfolio
              </span>

              <span className="ml-1 text-blue-500">.</span>
            </div>
          </a>

          {/* ========================================
              DESKTOP NAVIGATION
          ======================================== */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                   onClick={(event) => handleNavClick(event, link.href)}
                  className={`group relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Active Indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-70"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* ========================================
              DESKTOP THEME TOGGLE
          ======================================== */}
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          {/* ========================================
              MOBILE CONTROLS
          ======================================== */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-xl border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-blue-500/50 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* ========================================
            MOBILE NAVIGATION
        ======================================== */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "max-h-[600px] pb-4 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;