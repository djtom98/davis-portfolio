import { techStack, profile } from "../data";
import { Tag } from "../components/Tag";

export const metadata = { title: "About · Davis Jacob Thomas" };

const linkClass = "link-pill underline";

export default function About() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl md:text-4xl font-medium mb-1" style={{ color: "var(--text)" }}>
          About
        </h1>
        <p className="text-sm tracking-wider font-light" style={{ color: "var(--muted)" }}>
          ML Engineer · Barcelona
        </p>
      </section>

      <section className="text-sm sm:text-base tracking-wider font-light space-y-6" style={{ color: "var(--subtle)" }}>

        <div className="space-y-2">
          <h2 className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--muted)" }}>
            What I&apos;m working on
          </h2>
          <p>
            At{" "}
            <a href="https://ailylabs.com" target="_blank" rel="noopener noreferrer" className={linkClass} style={{ color: "var(--text)" }}>
              AILY Labs
            </a>
            {" "}I own the shared ML/AI platform, the layer that sits between raw models
            and the product teams building on top of them. That means model serving frameworks,
            Knowledge Graph infrastructure, LLM pipelines, and the shared libraries that
            let teams move fast without reinventing the wheel every sprint.
          </p>
          <p>
            Lately I&apos;m most absorbed by agentic systems, specifically the gap between
            a demo that looks impressive and a system you&apos;d actually trust to take actions
            in production. Getting that right is still an open problem and I find it genuinely
            interesting.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--muted)" }}>
            Outside work
          </h2>
          <p>
            I have a habit of putting myself in situations where I&apos;m the least comfortable
            person in the room. Moved from Kerala to Barcelona for a master&apos;s degree, stayed.
            Currently learning Spanish, slowly but stubbornly.
          </p>
          <p>
            On weekends you&apos;ll usually find me on a padel court, on a hiking trail, or
            halfway down a ski slope. I travel as much as I can and I&apos;ll strike up a
            conversation with almost anyone. 
          </p>
        </div>

      </section>

      <section>
        <p className="text-xs uppercase tracking-widest font-semibold mb-6" style={{ color: "var(--muted)" }}>
          Stack
        </p>
        <div className="space-y-5">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-semibold mb-2" style={{ color: "var(--text)" }}>
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

      <section>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover inline-flex flex-col p-4 rounded-lg border"
          style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
        >
          <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
            Résumé ↗
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
            Google Docs
          </p>
        </a>
      </section>
    </div>
  );
}
