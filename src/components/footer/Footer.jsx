import contactInfo from "../../data/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {contactInfo.name}
            </a>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Full-Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="#about"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Skills
            </a>

            <a
              href="#education"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Education
            </a>

            <a
              href="#certifications"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Certifications
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {currentYear} {contactInfo.name}. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 dark:text-gray-500">
            Designed & developed with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;