"use client";

import { useEffect, useRef, useState } from "react";

const palettes = [
  { id: "indigo", light: "#6366f1", dark: "#818cf8", label: "Indigo" },
  { id: "rose",   light: "#f43f5e", dark: "#fb7185", label: "Rose"   },
  { id: "sky",    light: "#0284c7", dark: "#38bdf8", label: "Sky"    },
  { id: "amber",  light: "#f59e0b", dark: "#fbbf24", label: "Amber"  },
  { id: "orange", light: "#ea580c", dark: "#fb923c", label: "Orange" },
  { id: "lime",   light: "#65a30d", dark: "#a3e635", label: "Lime"   },
  { id: "forest", light: "#15803d", dark: "#4ade80", label: "Forest" },
];

function PaletteIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="8.5"  cy="7.5"  r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="6.5"  cy="12.5" r="1.5" fill="currentColor" stroke="none"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
}

export function AccentCycler() {
  const [activeId, setActiveId] = useState("indigo");
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("accent") || "indigo";
    setActiveId(saved);
    document.documentElement.dataset.accent = saved;

    setIsDark(document.documentElement.classList.contains("dark"));
    const obs = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    obs.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  // Close popover on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const apply = (id: string) => {
    setActiveId(id);
    document.documentElement.dataset.accent = id;
    localStorage.setItem("accent", id);
    setOpen(false);
  };

  const active = palettes.find((p) => p.id === activeId) ?? palettes[0];
  const dotColor = isDark ? active.dark : active.light;

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        title="Accent colour"
        aria-label="Choose accent colour"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "3px 5px",
          borderRadius: 6,
          border: "1px solid var(--border)",
          background: "transparent",
          cursor: "pointer",
          color: dotColor,
          transition: "background 0.15s, color 0.25s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "var(--nav-hover-bg)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
        }}
      >
        <PaletteIcon size={15} />
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            zIndex: 100,
            background: "var(--sidebar-glass)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid var(--sidebar-glass-border)",
            borderRadius: 10,
            padding: "10px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            width: 148,
          }}
        >
          {palettes.map((p) => {
            const color = isDark ? p.dark : p.light;
            const isActive = p.id === activeId;
            return (
              <button
                key={p.id}
                onClick={() => apply(p.id)}
                title={p.label}
                aria-label={p.label}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: color,
                  border: isActive
                    ? `2px solid var(--text)`
                    : "2px solid transparent",
                  cursor: "pointer",
                  padding: 0,
                  outline: isActive ? `2px solid ${color}` : "none",
                  outlineOffset: 1,
                  transition: "transform 0.12s, outline 0.12s",
                  boxShadow: isActive ? `0 0 0 3px ${color}33` : "none",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.2)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
