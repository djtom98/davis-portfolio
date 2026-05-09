"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { profile, skills } from "../data";
import { Tag } from "./Tag";
import Link from "next/link";
import { experience } from "../data";

export function TypewriterHero() {
  const current = experience[0];

  const [text] = useTypewriter({
    words: [
      "machine_learning_engineer.py",
      "LLM systems builder",
      "AI platform architect",
      "knowledge_graph.neo4j",
      "MLOps practitioner",
      "data_scientist.py",
    ],
    loop: true,
    delaySpeed: 2200,
    typeSpeed: 60,
    deleteSpeed: 35,
  });

  return (
    <div className="space-y-12">
      {/* Hero typewriter */}
      <section>
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-4"
          style={{ color: "var(--muted)" }}
        >
          Machine Learning Engineer · Barcelona
        </p>

        <h1 className="text-3xl font-bold mb-1">
          Hey, I&apos;m Davis
        </h1>

        <div className="flex items-center min-h-[2.5rem] mt-2">
          <span className="text-2xl font-semibold" style={{ color: "var(--muted)" }}>
            {text}
          </span>
          <Cursor cursorStyle="|" cursorColor="var(--foreground)" />
        </div>
      </section>

      {/* Skill tags */}
      <section>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Tag key={s} label={s} />
          ))}
        </div>
      </section>

      {/* Summary */}
      <section>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
          {profile.summary}
        </p>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Currently{" "}
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "var(--foreground)" }}
          >
            {current.title} at {current.company}
          </a>
          . Based in {profile.location}.
        </p>
      </section>

      {/* Quick links */}
      <section className="grid grid-cols-2 gap-3">
        {[
          { href: "/experience", label: "Experience", sub: `${experience.length} roles` },
          { href: "/projects", label: "Projects", sub: "ML · AI · Data" },
          { href: "/about", label: "About", sub: "Who I am" },
          { href: "/contact", label: "Contact", sub: "Get in touch" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group p-4 rounded-lg border transition-colors"
            style={{ borderColor: "var(--border)" }}
          >
            <p className="text-sm font-semibold group-hover:underline">
              {item.label}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
              {item.sub}
            </p>
          </Link>
        ))}
      </section>

      {/* Current role card */}
      <section>
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-4"
          style={{ color: "var(--muted)" }}
        >
          Currently
        </p>
        <div
          className="border rounded-lg p-5"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <p className="text-sm font-semibold">{current.title}</p>
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
                style={{ color: "var(--muted)" }}
              >
                {current.company}
              </a>
            </div>
            <span className="text-xs shrink-0" style={{ color: "var(--muted)" }}>
              {current.duration}
            </span>
          </div>
          <ul className="space-y-1.5 mb-4">
            {current.bullets.slice(0, 3).map((b, i) => (
              <li key={i} className="text-xs flex gap-2" style={{ color: "var(--muted)" }}>
                <span className="shrink-0 mt-0.5">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {current.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
