"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = document.querySelectorAll("main > section, main article");
    elements.forEach((element, index) => {
      element.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700", "ease-out");
      if (element.tagName === "ARTICLE") {
        element.classList.add("hover:-translate-y-1", "hover:border-ocean/30", "hover:shadow-soft");
      }
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
      element.style.transitionDelay = `var(--reveal-delay)`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-6");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -45px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
