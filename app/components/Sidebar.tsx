"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../data";
import { Home, Briefcase, FolderOpen, User, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

const socialLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Resume", href: profile.resume },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full px-4 py-10 space-y-6">
      {/* Avatar + name */}
      <div className="flex items-center justify-between px-2">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
            style={{ background: "var(--border)", color: "var(--text)" }}
          >
            DJ
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-base" style={{ color: "var(--text)" }}>
              Davis
            </span>
            <span
              className="text-sm cursor-blink"
              style={{ color: "var(--muted)" }}
            >
              |
            </span>
          </div>
        </Link>
        <ThemeToggle />
      </div>

      {/* Nav */}
      <nav className="space-y-1">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 rounded-md text-sm border px-3 py-2 transition-colors"
              style={
                active
                  ? {
                      background: "var(--nav-active-bg)",
                      color: "var(--nav-active-fg)",
                      borderColor: "var(--nav-active-bg)",
                    }
                  : {
                      background: "transparent",
                      color: "var(--text)",
                      borderColor: "transparent",
                    }
              }
              onMouseEnter={(e) => {
                if (!active)
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--nav-hover-bg)";
              }}
              onMouseLeave={(e) => {
                if (!active)
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
              }}
            >
              <Icon size={14} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Connect */}
      <div className="space-y-3 pt-2">
        <span className="text-sm" style={{ color: "var(--text)" }}>
          Connect
        </span>
        <div className="space-y-2">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link block text-sm"
              style={{ color: "var(--muted)" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
