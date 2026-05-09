import { projects, researchProjects, achievements } from "../data";
import { Tag } from "../components/Tag";

export const metadata = { title: "Projects · Davis Jacob Thomas" };

function ProjectCard({
  name,
  description,
  tags,
  github,
  report,
  date,
}: {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  report?: string;
  date?: string;
}) {
  const href = github || report;

  const inner = (
    <div className="card-hover rounded-xl border p-5" style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="text-sm font-semibold leading-snug" style={{ color: "var(--text)" }}>
          {name}
        </h2>
        {date && (
          <span className="text-xs shrink-0 font-light" style={{ color: "var(--muted)" }}>
            {date}
          </span>
        )}
      </div>

      <p className="text-xs sm:text-sm leading-relaxed tracking-wide font-light mb-4" style={{ color: "var(--subtle)" }}>
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((t) => <Tag key={t} label={t} />)}
      </div>

      {/* Link row */}
      {(github || report) && (
        <div className="flex gap-3 flex-wrap">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium flex items-center gap-1 transition-opacity hover:opacity-70"
              style={{ color: "var(--text)" }}
            >
              <svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          )}
          {report && (
            <a
              href={report}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium flex items-center gap-1 transition-opacity hover:opacity-70"
              style={{ color: "var(--muted)" }}
            >
              <svg height="13" width="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Report
            </a>
          )}
        </div>
      )}
    </div>
  );

  return <div>{inner}</div>;
}

export default function Projects() {
  return (
    <div className="space-y-14">

      {/* ── Research projects ───────────────────────────────── */}
      <section>
        <h1 className="text-2xl md:text-4xl font-medium mb-1" style={{ color: "var(--text)" }}>
          Research
        </h1>
        <p className="text-sm tracking-wider font-light mb-8" style={{ color: "var(--muted)" }}>
          Academic projects · BSE MSc Data Science 2022–23
        </p>
        <div className="space-y-4">
          {researchProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* ── Production / ML engineering projects ────────────── */}
      <section>
        <h2 className="text-lg font-medium mb-1" style={{ color: "var(--text)" }}>
          Engineering Projects
        </h2>
        <p className="text-sm tracking-wider font-light mb-6" style={{ color: "var(--muted)" }}>
          Production systems built at AILY Labs
        </p>
        <div className="space-y-4">
          {projects.map((p, i) => (
            <ProjectCard key={i} name={p.name} description={p.description} tags={p.tags} />
          ))}
        </div>
      </section>

      {/* ── Achievements ────────────────────────────────────── */}
      <section>
        <p className="text-xs uppercase tracking-widest font-semibold mb-6" style={{ color: "var(--muted)" }}>
          Achievements
        </p>
        <div className="space-y-5">
          {achievements.map((a, i) => (
            <div key={i}>
              <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>{a.title}</p>
              <p className="text-xs sm:text-sm font-light tracking-wide leading-relaxed" style={{ color: "var(--subtle)" }}>
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
