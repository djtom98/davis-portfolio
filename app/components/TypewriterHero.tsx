"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { profile, skills, experience } from "../data";
import { Tag } from "./Tag";
import Link from "next/link";

export function TypewriterHero() {
  const current = experience[0];

  const [text] = useTypewriter({
    words: [
      "Hey, the name's Davis.",
      "☕  Purveyor of cafes and good coffee.",
      "🏂  I work to afford my skiing trips.",
      "🥾  I think about hiking more than I actually do.",
      "🎾  Getting a bit hooked on padel.",
      "🍷  Always looking for a good glass of wine.",
      "🍫  I'm a bit of a chocolate addict.",
    ],
    loop: true,
    delaySpeed: 2400,
    typeSpeed: 65,
    deleteSpeed: 35,
  });

  return (
    <div className="space-y-6 md:space-y-10">
      {/* Single typewriter field — fixed height to prevent layout shift */}
      <h1
        className="text-2xl md:text-5xl font-medium"
        style={{
          color: "var(--text)",
          minHeight: "calc(2 * 2rem)",       /* 2 lines at text-2xl (mobile) */
          lineHeight: "1.3",
        }}
      >
        {text}<Cursor cursorStyle="|" />
      </h1>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <Tag key={s} label={s} />
        ))}
      </div>

      {/* Body */}
      <div
        className="text-sm sm:text-base tracking-wider font-light space-y-3"
        style={{ color: "var(--subtle)" }}
      >
        <p>
          I turn research-grade ML into things engineering teams can actually ship and trust.
        </p>
        <p>
          Currently{" "}
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-pill underline"
            style={{ color: "var(--text)" }}
          >
            {current.title} at {current.company}
          </a>
          , based in {profile.location}.
        </p>
        <p>
          I care most about two things right now: making MLOps less chaotic for the
          teams building on it, and making agentic systems reliable enough to trust in production.
        </p>
      </div>

      {/* Quick nav cards */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        {[
          { href: "/experience", label: "Experience", sub: `${experience.length} roles` },
          { href: "/projects",   label: "Projects",   sub: "ML · AI · Data" },
          { href: "/about",      label: "About",      sub: "Who I am" },
          { href: "/blog",       label: "Blog",       sub: "Notes & ideas" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="card-hover p-4 rounded-lg border"
            style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
          >
            <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
              {item.label}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
              {item.sub}
            </p>
          </Link>
        ))}
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover p-4 rounded-lg border"
          style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
        >
          <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
            Resume ↗
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
            Google Docs
          </p>
        </a>
      </div>
    </div>
  );
}
