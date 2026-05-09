import { profile, techStack } from "../data";
import { Tag } from "../components/Tag";

export const metadata = { title: "About · Davis Jacob Thomas" };

const linkClass = "link-pill underline";

export default function About() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl md:text-4xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          About
        </h1>
        <p className="text-sm tracking-wider font-light" style={{ color: "var(--text-muted)" }}>
          {profile.title} · {profile.location}
        </p>
      </section>

      <section
        className="text-sm sm:text-base tracking-wider font-light space-y-4"
        style={{ color: "var(--text-secondary)" }}
      >
        <div className="space-y-2">
          <h2 className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--text-muted)" }}>
            Who I Am
          </h2>
          <p>
            Hey, I&apos;m Davis — a Senior ML Engineer based in Barcelona. I spend most of my time
            designing and operating production-grade ML platforms, MLOps pipelines, and
            LLM/agentic systems.
          </p>
          <p>
            I&apos;m the author and maintainer of multiple internal Python libraries spanning ML
            utilities, GenAI, Knowledge Graphs, and data access — all developed with open-source
            best practices: semantic versioning, CI/CD, conventional commits, and solid test coverage.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--text-muted)" }}>
            What I Do
          </h2>
          <p>
            Currently a Senior ML Engineer at{" "}
            <a href="https://ailylabs.com" target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "var(--text-primary)" }}>
              AILY Labs
            </a>
            , maintaining the org&apos;s shared AI platform on Kubernetes — model serving,
            MLOps infrastructure, Knowledge Graph pipelines, and LLM/agent systems.
          </p>
          <p>
            I focus on building things that actually run in production: standardised frameworks,
            observable systems, and libraries that multiple teams can rely on.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--text-muted)" }}>
            Beyond Work
          </h2>
          <p>
            In a past life I organised{" "}
            <a href="https://www.ted.com/tedx/events/45792" target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "var(--text-primary)" }}>
              TEDxMACE 2021
            </a>{" "}
            — a national conference with speakers across India — and edited the university newsletter.
          </p>
          <p>
            MSc in Data Science from Barcelona School of Economics (GPA 8.62) and a B.Tech in
            Mechanical Engineering (CGPA 9.13). National-level winner at the SAE Six Sigma
            Convention and Autonomous Vehicle Challenge.
          </p>
          <p>
            Passionate about leveraging AI for public good. Open to conversations about ML research,
            platform engineering, or anything in between.
          </p>
        </div>
      </section>

      <section>
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          Stack
        </p>
        <div className="space-y-5">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                {category}
              </p>
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
