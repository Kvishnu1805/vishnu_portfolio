import { useEffect, useRef, useState } from "react";
import EducationCard from "./EducationCard";

const EducationTimeline = ({ education = [] }) => {
  const timelineRef = useRef(null);

  const [isVisible, setIsVisible] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return true;
    }

    return false;
  });

  useEffect(() => {
    const element = timelineRef.current;

    if (!element) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* ========================================
          TIMELINE BASE TRACK
      ======================================== */}
      <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-slate-800 md:left-1/2 md:-translate-x-1/2" />

      {/* ========================================
          ANIMATED GRADIENT TIMELINE
      ======================================== */}
      <div
        className="absolute left-4 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transition-all duration-700 ease-out md:left-1/2 md:-translate-x-1/2"
        style={{
          height: isVisible ? "100%" : "0%",
        }}
      />

      <div className="space-y-8 sm:space-y-10 md:space-y-14">
        {education.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.id || index}
              className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12"
            >
              {/* ========================================
                  TIMELINE CENTER DOT
              ======================================== */}
              <div
                className={`absolute left-4 top-7 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 ring-4 ring-white transition-all duration-300 ease-out dark:ring-[#050816] md:left-1/2 ${
                  isVisible
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 80 + 120}ms`
                    : "0ms",
                }}
              />

              {/* ========================================
                  CARD CONTAINER
              ======================================== */}
              <div
                className={`${
                  isLeft
                    ? "md:col-start-1 md:pr-6"
                    : "md:col-start-2 md:pl-6"
                } pl-10 md:pl-0`}
              >
                <div
                  className={`transition-all duration-500 ease-out ${
                    isVisible
                      ? "translate-x-0 translate-y-0 opacity-100"
                      : isLeft
                      ? "translate-y-4 opacity-0 md:translate-x-[-24px] md:translate-y-0"
                      : "translate-y-4 opacity-0 md:translate-x-[24px] md:translate-y-0"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${index * 100 + 80}ms`
                      : "0ms",
                  }}
                >
                  <EducationCard
                    item={item}
                    index={index}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationTimeline;