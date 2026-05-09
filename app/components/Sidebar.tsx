"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { profile } from "../data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Resume", href: profile.resume },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-xs font-mono px-2 py-1 rounded border cursor-pointer transition-colors"
      style={{
        borderColor: "var(--border)",
        color: "var(--muted)",
      }}
      title="Toggle theme"
    >
      {theme === "dark" ? "LT" : "DK"}
    </button>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div
        className="lg:hidden flex items-center justify-between px-6 py-4 border-b sticky top-0 z-50"
        style={{ borderColor: "var(--border)", background: "var(--background)" }}
      >
        <Link href="/" className="font-mono text-lg font-semibold tracking-tight">
          {profile.logo}
          <span className="cursor-blink">|</span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-px transition-transform"
              style={{ background: "var(--foreground)" }}
            />
            <span
              className="block w-5 h-px transition-transform"
              style={{ background: "var(--foreground)" }}
            />
            <span
              className="block w-3 h-px"
              style={{ background: "var(--foreground)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 pt-16"
          style={{ background: "var(--background)" }}
        >
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-medium"
                style={{
                  color:
                    pathname === link.href ? "var(--foreground)" : "var(--muted)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="border-t pt-6 flex flex-col gap-3"
              style={{ borderColor: "var(--border)" }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-64 px-8 py-10 border-r"
        style={{ borderColor: "var(--border)", background: "var(--background)" }}
      >
        {/* Logo */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xl font-semibold tracking-tight"
          >
            {profile.logo}
            <span className="cursor-blink">|</span>
          </Link>
          <ThemeToggle />
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-1.5 text-sm transition-colors"
              style={{
                color:
                  pathname === link.href ? "var(--foreground)" : "var(--muted)",
                fontWeight: pathname === link.href ? "600" : "400",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Connect */}
        <div className="mt-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--muted)" }}
          >
            Connect
          </p>
          <div className="flex flex-col gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:opacity-100"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
