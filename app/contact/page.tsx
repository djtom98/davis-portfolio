"use client";

import { useState } from "react";
import { profile } from "../data";
import { Mail, FileText, Check } from "lucide-react";

function GitHubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const externalLinks = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    sub: "linkedin.com/in/davis-jacob-thomas",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: profile.github,
    sub: "github.com/djtom98",
    icon: GitHubIcon,
  },
  {
    label: "Resume",
    href: profile.resume,
    sub: "Google Doc · always up to date",
    icon: FileText,
  },
];

const cardStyle = {
  background: "var(--card-bg)",
  borderColor: "var(--card-border)",
};

const iconStyle = {
  background: "var(--tag-bg)",
  color: "var(--text)",
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    // On touch devices mailto: is the right UX; on desktop copy to clipboard
    if (window.matchMedia("(hover: none)").matches) {
      window.location.href = `mailto:${profile.email}`;
      return;
    }
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl md:text-4xl font-medium mb-1" style={{ color: "var(--text)" }}>
          Contact
        </h1>
        <p className="text-sm tracking-wider font-light" style={{ color: "var(--muted)" }}>
          {profile.location}
        </p>
      </section>

      <section>
        <p
          className="text-sm sm:text-base tracking-wider font-light leading-relaxed mb-8"
          style={{ color: "var(--subtle)" }}
        >
          Open to conversations about ML platforms, AI research, data engineering, or new opportunities.
          Drop me a line on LinkedIn or via email.
        </p>

        <div className="space-y-3">
          {/* External links */}
          {externalLinks.map(({ label, href, sub, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-center gap-4 p-4 rounded-xl border"
              style={cardStyle}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={iconStyle}>
                <Icon size={17} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{label}</p>
                <p className="text-xs mt-0.5 font-light truncate" style={{ color: "var(--muted)" }}>{sub}</p>
              </div>
              <span className="text-lg shrink-0" style={{ color: "var(--muted)" }}>→</span>
            </a>
          ))}

          {/* Email — copies to clipboard instead of opening mail app */}
          <button
            onClick={copyEmail}
            className="card-hover w-full flex items-center gap-4 p-4 rounded-xl border text-left"
            style={cardStyle}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={iconStyle}>
              {copied ? <Check size={17} /> : <Mail size={17} />}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>Email</p>
              <p className="text-xs mt-0.5 font-light truncate" style={{ color: "var(--muted)" }}>
                {copied ? "Copied to clipboard!" : profile.email}
              </p>
            </div>
            <span className="text-lg shrink-0" style={{ color: "var(--muted)" }}>
              {copied ? "✓" : "→"}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
