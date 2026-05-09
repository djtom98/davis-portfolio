"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { profile } from "../data";
import {
  Home,
  Briefcase,
  FolderOpen,
  User,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

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

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-1.5 rounded-md transition-colors cursor-pointer"
      style={{ color: "var(--text-muted)" }}
      title="Toggle theme"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

function NavItem({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-md text-sm border px-3 py-2 transition-colors"
      style={
        active
          ? {
              background: "var(--nav-active-bg)",
              color: "var(--nav-active-text)",
              borderColor: "var(--nav-active-bg)",
            }
          : {
              background: "transparent",
              color: "var(--text-primary)",
              borderColor: "transparent",
            }
      }
      onMouseEnter={(e) => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.background = "var(--nav-hover-bg)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.currentTarget as HTMLElement).style.background = "transparent";
        }
      }}
    >
      <Icon size={15} />
      <span>{label}</span>
    </Link>
  );
}

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full px-4 py-10 space-y-4 overflow-y-auto">
      {/* Avatar + name */}
      <div className="flex items-center justify-between px-2 mb-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={onClose}
          style={{ textDecoration: "none" }}
        >
          <span
            className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full items-center justify-center text-sm font-semibold"
            style={{
              background: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            DJ
          </span>
          <div className="flex flex-col">
            <span className="text-md" style={{ color: "var(--text-primary)" }}>
              Davis
            </span>
            <span>
              <span className="cursor-blink" style={{ color: "var(--text-muted)" }}>
                |
              </span>
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          {onClose && (
            <button onClick={onClose} className="p-1.5 cursor-pointer" style={{ color: "var(--text-muted)" }}>
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Nav */}
      <div className="space-y-1">
        {navLinks.map((link) => (
          <NavItem
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            active={pathname === link.href}
          />
        ))}
      </div>

      {/* Connect */}
      <div className="space-y-3 py-4">
        <span className="text-sm block" style={{ color: "var(--text-primary)" }}>
          Connect
        </span>
        <div className="space-y-2">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm transition-colors"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div
        className="lg:hidden flex items-center justify-between px-5 py-4 sticky top-0 z-50 border-b"
        style={{
          background: "var(--sidebar-bg)",
          borderColor: "var(--border)",
        }}
      >
        <Link href="/" className="flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold"
            style={{ background: "var(--border)", color: "var(--text-primary)" }}
          >
            DJ
          </span>
          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            Davis
            <span className="cursor-blink" style={{ color: "var(--text-muted)" }}>|</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(true)}
            className="p-1.5 cursor-pointer"
            style={{ color: "var(--text-primary)" }}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-50"
          style={{ background: "var(--sidebar-bg)" }}
        >
          <SidebarContent onClose={() => setOpen(false)} />
        </div>
      )}

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-60"
        style={{ background: "var(--sidebar-bg)" }}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
