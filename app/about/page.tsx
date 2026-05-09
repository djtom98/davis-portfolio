import { profile, techStack } from "../data";
import { Tag } from "../components/Tag";

export const metadata = {
  title: "About · Davis Jacob Thomas",
};

export default function About() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-bold mb-2">About</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          {profile.title} · {profile.location}
        </p>
      </section>

      {/* Who I am */}
      <section>
        <h2 className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--muted)" }}>
          Who I Am
        </h2>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            Hey, I&apos;m Davis — an ML Engineer based in Barcelona, Spain. I spend most of my time
            designing and operating production-grade ML platforms, MLOps pipelines, and LLM/agentic
            systems.
          </p>
          <p>
            I&apos;m the author and maintainer of multiple internal Python libraries spanning ML
            utilities, GenAI, Knowledge Graphs, and data access — all developed with open-source
            best practices: semantic versioning, CI/CD, conventional commits, and solid test coverage.
          </p>
        </div>
      </section>

      {/* What I do */}
      <section>
        <h2 className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--muted)" }}>
          What I Do
        </h2>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            Currently an ML Engineer at{" "}
            <a href="https://ailylabs.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>
              AILY Labs
            </a>
            , maintaining the org&apos;s shared AI platform on Kubernetes — from model serving and
            MLOps infrastructure to Knowledge Graph pipelines and LLM/agent systems.
          </p>
          <p>
            I focus on building things that actually run in production: standardised frameworks,
            observable systems, and libraries that multiple teams can rely on.
          </p>
        </div>
      </section>

      {/* Beyond work */}
      <section>
        <h2 className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--muted)" }}>
          Beyond Work
        </h2>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            In a past life I organised{" "}
            <a href="https://www.ted.com/tedx/events/45792" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>
              TEDxMACE 2021
            </a>{" "}
            — a national conference with speakers across India — and edited the university newsletter.
          </p>
          <p>
            I hold a B.Tech in Mechanical Engineering (CGPA 9.13) and an MSc in Data Science from BSE (GPA 8.62).
            National-level winner at the SAE Six Sigma Convention and Autonomous Vehicle Challenge.
          </p>
          <p>
            Passionate about leveraging AI for public good. Open to conversations about ML research,
            platform engineering, or anything in between.
          </p>
        </div>
      </section>

      {/* Tech stack */}
      <section>
        <h2 className="text-xs uppercase tracking-widest font-semibold mb-6" style={{ color: "var(--muted)" }}>
          Stack
        </h2>
        <div className="space-y-5">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-semibold mb-2">{category}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
