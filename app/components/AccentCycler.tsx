"use client";

import { useEffect, useState } from "react";

const palettes = [
  { id: "indigo",  light: "#6366f1", dark: "#818cf8", label: "Indigo"  },
  { id: "amber",   light: "#f59e0b", dark: "#fbbf24", label: "Amber"   },
  { id: "emerald", light: "#059669", dark: "#34d399", label: "Emerald" },
];

export function AccentCycler() {
  const [idx, setIdx] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("accent") || "indigo";
    const savedIdx = palettes.findIndex((p) => p.id === saved);
    setIdx(savedIdx >= 0 ? savedIdx : 0);
    document.documentElement.dataset.accent = saved;

    setIsDark(document.documentElement.classList.contains("dark"));
    const obs = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    obs.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const cycle = () => {
    const next = (idx + 1) % palettes.length;
    setIdx(next);
    document.documentElement.dataset.accent = palettes[next].id;
    localStorage.setItem("accent", palettes[next].id);
  };

  const current = palettes[idx];
  const color = isDark ? current.dark : current.light;

  return (
    <button
      onClick={cycle}
      title={`Theme: ${current.label} · click to cycle`}
      aria-label="Cycle accent colour"
      style={{
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: color,
        border: "2px solid var(--border)",
        cursor: "pointer",
        padding: 0,
        flexShrink: 0,
        transition: "transform 0.15s ease, background 0.25s ease",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.25)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
    />
  );
}
