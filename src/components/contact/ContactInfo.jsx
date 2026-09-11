import { useState } from "react";
import contactInfo from "../../data/contact";

const ContactInfo = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const subject = encodeURIComponent("Software Development & Career Inquiry — Vishnu K");
  const body = encodeURIComponent(
    "Hi Vishnu,\n\nI came across your portfolio and would like to discuss an opportunity / project with you.\n\nBest regards,"
  );
  const mailtoUrl = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contactInfo.email
  )}&su=${subject}&body=${body}`;

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contactInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contactInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleEmailCardClick = () => {
    // Directly trigger mailto protocol
    window.location.href = mailtoUrl;
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* ========================================
          INTRO
      ======================================== */}
      <div className="contact-intro mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-blue-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.026 1.925l-7.5 4.75a2.25 2.25 0 0 1-2.448 0l-7.5-4.75a2.25 2.25 0 0 1-1.026-1.925V6.75"
            />
          </svg>
        </div>

        <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Let's connect
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          Whether you are looking to discuss a software engineering opportunity, technical collaboration, or a new technology initiative, feel free to get in touch.
        </p>
      </div>

      {/* ========================================
          CONTACT DETAILS
      ======================================== */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Email Card */}
        <div
          onClick={handleEmailCardClick}
          className="contact-card group cursor-pointer flex flex-col justify-between"
        >
          <div className="flex items-center gap-3 w-full">
            <div className="contact-icon text-blue-600 dark:text-blue-400 shrink-0">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.026 1.925l-7.5 4.75a2.25 2.25 0 0 1-2.448 0l-7.5-4.75a2.25 2.25 0 0 1-1.026-1.925V6.75"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="contact-label">Email</p>
              <p className="mt-0.5 truncate text-sm font-medium text-slate-800 transition-colors group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400">
                {contactInfo.email}
              </p>
            </div>

            <span className="contact-arrow text-blue-500 shrink-0">→</span>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3 dark:border-slate-800/80 w-full">
            <a
              href={mailtoUrl}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-600 transition-colors hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:bg-blue-900/60"
              title="Open default email application"
            >
              <span>Mail App</span>
            </a>

            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              title="Open compose in Gmail"
            >
              <span>Gmail Web</span>
              <span className="text-[9px]">↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="ml-auto inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white"
              title="Copy email to clipboard"
            >
              <span>{copiedEmail ? "Copied!" : "Copy"}</span>
            </button>
          </div>
        </div>

        {/* Phone Card */}
        <div className="contact-card group flex flex-col justify-between">
          <div className="flex items-center gap-3 w-full">
            <div className="contact-icon text-purple-600 dark:text-purple-400 shrink-0">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.183a1.125 1.125 0 0 1-1.21.337 12.035 12.035 0 0 1-7.195-7.195 1.125 1.125 0 0 1 .337-1.21l1.183-.97c.348-.285.51-.74.417-1.173L6.77 3.902A1.125 1.125 0 0 0 5.68 3.05H4.5A2.25 2.25 0 0 0 2.25 5.3v1.45Z"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="contact-label">Phone</p>
              <p className="mt-0.5 text-sm font-medium text-slate-800 transition-colors group-hover:text-purple-600 dark:text-slate-200 dark:group-hover:text-purple-400">
                {contactInfo.phone}
              </p>
            </div>

            <span className="contact-arrow text-purple-500 shrink-0">→</span>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3 dark:border-slate-800/80 w-full">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-1 rounded-md bg-purple-50 px-2.5 py-1 text-[11px] font-semibold text-purple-600 transition-colors hover:bg-purple-100 dark:bg-purple-950/40 dark:text-purple-300 dark:hover:bg-purple-900/60"
            >
              <span>Call</span>
            </a>

            <button
              type="button"
              onClick={handleCopyPhone}
              className="ml-auto inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white"
            >
              <span>{copiedPhone ? "Copied!" : "Copy"}</span>
            </button>
          </div>
        </div>

        {/* Location Card */}
        <div className="contact-card flex flex-col justify-between">
          <div className="flex items-center gap-3 w-full">
            <div className="contact-icon text-cyan-600 dark:text-cyan-400 shrink-0">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <p className="contact-label">Location</p>
              <p className="mt-0.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                {contactInfo.location}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center border-t border-slate-100 pt-3 dark:border-slate-800/80 w-full text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            <span>Coimbatore, Tamil Nadu, India</span>
          </div>
        </div>
      </div>

      {/* ========================================
          SOCIAL + RESUME
      ======================================== */}

      <div className="contact-bottom mt-10 flex flex-col items-center justify-center gap-6">

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3">
          {contactInfo.socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button group"
            >
              {social.name}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Resume Downloads */}
        <div className="flex w-full flex-col sm:w-auto sm:flex-row items-center justify-center gap-4">
          <a
            href={contactInfo.resumePdf || "/VISHNU_K.pdf"}
            download="VISHNU_K.pdf"
            className="resume-button group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-center"
          >
            <span>Download Resume (.PDF)</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-y-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
              />
            </svg>
          </a>

          <a
            href={contactInfo.resumeDoc || "/VISHNU_K.docx"}
            download="VISHNU_K.docx"
            className="resume-button-doc group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-center"
          >
            <span>Download Resume (.DOC)</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-y-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;