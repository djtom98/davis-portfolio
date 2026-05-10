"use client";

import { useEffect, useRef } from "react";

export function InteractiveGrid() {
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch-only devices — mousemove never fires there
    if (window.matchMedia("(hover: none)").matches) return;

    let raf: number;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = `${e.clientX}px`;
        const y = `${e.clientY}px`;
        bgRef.current?.style.setProperty("--mx", x);
        bgRef.current?.style.setProperty("--my", y);
        glowRef.current?.style.setProperty("--mx", x);
        glowRef.current?.style.setProperty("--my", y);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={bgRef} className="grid-bg" aria-hidden />
      <div ref={glowRef} className="grid-glow" aria-hidden />
    </>
  );
}
