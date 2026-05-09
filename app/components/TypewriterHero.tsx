"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { profile, skills, experience } from "../data";
import { Tag } from "./Tag";
import Link from "next/link";

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
    <div className="space-y-6 md:space-y-10">
      {/* Hero heading */}
      <div className="space-y-2">
        <h1
          className="text-2xl md:text-5xl font-medium"
          style={{ color: "var(--text-primary)" }}
        >
          Hey, I&apos;m Davis
        </h1>
        <h2
          className="text-xl md:text-4xl font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          ML Engineer
        </h2>
      </div>

      {/* Typewriter */}
      <div
        className="text-lg md:text-2xl tracking-wider font-light"
        style={{ color: "var(--text-primary)" }}
      >
        <span>{text}</span>
        <Cursor cursorStyle="|" />
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <Tag key={s} label={s} />
        ))}
      </div>

      {/* Body */}
      <div
        className="text-sm sm:text-base tracking-wider font-light space-y-3"
        style={{ color: "var(--text-secondary)" }}
      >
        <p>
          ML Engineer with 6 years of experience designing and operating production-grade
          ML platforms, MLOps pipelines, and LLM/agentic systems.
        </p>
        <p>
          Author and maintainer of multiple internal Python libraries spanning ML
          utilities, GenAI, Knowledge Graphs, and data access —{" "}
          open-source best practices throughout.
        </p>
        <div>
          <span>Currently </span>
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-pill underline"
            style={{ color: "var(--text-primary)" }}
          >
            ML Engineer at {current.company}
          </a>
          <span>, based in {profile.location}.</span>
        </div>
        <div>
          <span>You can talk to me about </span>
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
            ML systems, LLMs, agentic AI, or anything else.
          </span>
        </div>
      </div>

      {/* Quick nav cards */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        {[
          { href: "/experience", label: "Experience", sub: `${experience.length} roles` },
          { href: "/projects", label: "Projects", sub: "ML · AI · Data" },
          { href: "/about", label: "About", sub: "Who I am" },
          { href: "/contact", label: "Contact", sub: "Get in touch" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="card-hover p-4 rounded-lg border"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              {item.label}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              {item.sub}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
