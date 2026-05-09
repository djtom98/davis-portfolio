"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Home, Briefcase, FolderOpen, User, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "../data";

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

export function MobileBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-4 sticky top-0 z-40 border-b"
        style={{ background: "var(--sidebar)", borderColor: "var(--border)" }}
      >
        <Link href="/" className="flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold"
            style={{ background: "var(--border)", color: "var(--text)" }}
          >
            DJ
          </span>
          <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
            Davis
            <span className="cursor-blink ml-0.5" style={{ color: "var(--muted)" }}>|</span>
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

      {/* Full-screen overlay menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ background: "var(--sidebar)" }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm font-medium" style={{ color: "var(--text)" }}>Menu</span>
            <button onClick={() => setOpen(false)} className="p-1.5 cursor-pointer" style={{ color: "var(--text)" }}>
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col px-5 py-6 space-y-1">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md text-base border px-4 py-3"
                  style={
                    active
                      ? { background: "var(--nav-active-bg)", color: "var(--nav-active-fg)", borderColor: "var(--nav-active-bg)" }
                      : { background: "transparent", color: "var(--text)", borderColor: "transparent" }
                  }
                >
                  <Icon size={16} />
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="px-5 py-4 border-t space-y-3" style={{ borderColor: "var(--border)" }}>
            <span className="text-sm" style={{ color: "var(--text)" }}>Connect</span>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm py-2"
                  style={{ color: "var(--muted)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
