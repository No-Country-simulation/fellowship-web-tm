"use client";

import { useEffect, useRef, useState } from "react";

export default function Closing() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#F9F9F9] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          ref={ref}
          className="max-w-[680px] transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <span className="block text-[13px] font-bold tracking-[0.2em] uppercase text-[#8a8a94] mb-4">
            Esto último es importante
          </span>
          <p className="font-extrabold text-[23px] md:text-[36px] leading-tight tracking-tight text-[#0a0a0f]">
            No es un CV. Es{" "}
            <span className="bg-gradient-to-r from-[#FF0094] to-[#02BEEF] bg-clip-text text-transparent">
              evidencia observable
            </span>{" "}
            mientras ocurre.
          </p>
        </div>
      </div>
    </section>
  );
}
