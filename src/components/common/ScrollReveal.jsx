import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 700,
  once = false,
}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.01,
    rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal scroll-reveal-${direction} ${
        isVisible ? "scroll-reveal-visible" : ""
      } ${className}`}
      style={{
        "--scroll-reveal-delay": `${delay}ms`,
        "--scroll-reveal-duration": `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;