"use client";

import { useEffect, useState } from "react";

const palettes = [
  { id: "indigo",  light: "#6366f1", dark: "#818cf8",  label: "Indigo"  },
  { id: "amber",   light: "#f59e0b", dark: "#fbbf24",  label: "Amber"   },
  { id: "emerald", light: "#059669", dark: "#34d399",  label: "Emerald" },
];

export function AccentPicker() {
  const [active, setActive] = useState("indigo");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("accent") || "indigo";
    apply(saved);
    setActive(saved);
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const apply = (id: string) => {
    document.documentElement.dataset.accent = id;
    localStorage.setItem("accent", id);
  };

  const pick = (id: string) => {
    setActive(id);
    apply(id);
  };

  return (
    <div className="flex items-center gap-2">
      {palettes.map(({ id, light, dark, label }) => {
        const color = isDark ? dark : light;
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => pick(id)}
            title={label}
            style={{
              width: 13,
              height: 13,
              borderRadius: "50%",
              background: color,
              outline: isActive ? `2px solid ${color}` : "2px solid transparent",
              outlineOffset: 2,
              transform: isActive ? "scale(1.25)" : "scale(1)",
              transition: "transform 0.15s ease, outline 0.15s ease",
              cursor: "pointer",
              border: "none",
              padding: 0,
            }}
            aria-label={label}
          />
        );
      })}
    </div>
  );
}
