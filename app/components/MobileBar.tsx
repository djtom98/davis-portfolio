"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home, Briefcase, FolderOpen, User, Mail, NotebookPen } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { AccentCycler } from "./AccentCycler";
import { profile } from "../data";

const navLinks = [
  { href: "/",           label: "Home",       icon: Home },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects",   label: "Projects",   icon: FolderOpen },
  { href: "/about",      label: "About",      icon: User },
  { href: "/blog",       label: "Blog",       icon: NotebookPen },
  { href: "/contact",    label: "Contact",    icon: Mail },
];

function GitHubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SidebarDrawer({ onClose }: { onClose: () => void }) {
  const rawPathname = usePathname();
  const pathname = rawPathname.endsWith("/") && rawPathname !== "/" ? rawPathname.slice(0, -1) : rawPathname;

  const [role] = useTypewriter({
    words: ["ML Engineer", "Data Scientist", "AI Engineer", "Tech Enthusiast"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 55,
    deleteSpeed: 30,
  });

  return (
    <div
      className="fixed inset-0 z-50 flex"
      style={{ background: "rgba(0,0,0,0.4)" }}
      onClick={onClose}
    >
      {/* Sidebar panel — mirrors desktop glass */}
      <div
        className="flex flex-col h-full w-72 max-w-[85vw] px-4 py-8"
        style={{
          background: "var(--sidebar-glass)",
          border: "1.5px solid var(--sidebar-glass-border)",
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          boxShadow: "var(--sidebar-glass-shadow)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-2 mb-6">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <Image
              src="/avatar.jpg"
              alt="Davis Jacob Thomas"
              width={40}
              height={40}
              className="rounded-full object-cover shrink-0"
              style={{ width: 40, height: 40 }}
            />
            <div className="flex flex-col leading-tight gap-0.5">
              <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
                {profile.name}
              </span>
              <span className="text-xs font-light" style={{ color: "var(--muted)" }}>
                {role}<Cursor cursorStyle="|" />
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <AccentCycler />
            <button onClick={onClose} className="p-1.5" style={{ color: "var(--muted)" }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav className="space-y-1 mb-6">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className="flex items-center gap-2 rounded-md text-sm border px-3 py-2 transition-colors"
                style={
                  active
                    ? { background: "var(--nav-active-bg)", color: "var(--nav-active-fg)", borderColor: "var(--nav-active-bg)", borderLeftColor: "var(--accent)", borderLeftWidth: "3px" }
                    : { background: "transparent", color: "var(--text)", borderColor: "transparent", borderLeftWidth: "3px", borderLeftColor: "transparent" }
                }
              >
                <Icon size={14} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Currently exploring */}
        <div
          className="terminal-card rounded-r-lg px-3 py-2.5 mb-6 space-y-1"
          style={{ background: "var(--accent-muted)" }}
        >
          <p className="text-xs font-mono" style={{ color: "var(--accent)" }}>$ exploring:</p>
          <a
            href="https://github.com/djtom98/llm-d-experiments"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono leading-snug hover:underline block"
            style={{ color: "var(--text)" }}
          >
            disaggregated inference / llm-d
          </a>
          <p className="text-xs font-mono" style={{ color: "var(--muted)" }}>EPP plugins · P/D split</p>
        </div>

        <div className="flex-1" />

        {/* Status + socials */}
        <div className="px-2 space-y-3">
          <div className="flex items-center gap-2">
            <span className="status-dot" />
            <span className="text-xs font-light" style={{ color: "var(--muted)" }}>
              Barcelona · Open to chat
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: "var(--muted)" }}>
              <GitHubIcon size={15} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: "var(--muted)" }}>
              <LinkedInIcon size={15} />
            </a>
            <a href={`mailto:${profile.email}`} className="social-link" style={{ color: "var(--muted)" }}>
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
          <p className="text-xs" style={{ color: "var(--muted)", opacity: 0.5 }}>Updated May 2026</p>
        </div>
      </div>
    </div>
  );
}

export function MobileBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-4 sticky top-0 z-40 border-b"
        style={{
          background: "var(--sidebar-glass)",
          borderColor: "var(--sidebar-glass-border)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/avatar.jpg"
            alt="Davis Jacob Thomas"
            width={30}
            height={30}
            className="rounded-full object-cover"
            style={{ width: 30, height: 30 }}
          />
          <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
            Davis Jacob Thomas
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setOpen(true)}
            className="p-1.5 cursor-pointer"
            style={{ color: "var(--text)" }}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {open && <SidebarDrawer onClose={() => setOpen(false)} />}
    </div>
  );
}
