import { experience, education } from "../data";
import { Tag } from "../components/Tag";

export const metadata = { title: "Experience · Davis Jacob Thomas" };

export default function Experience() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl md:text-4xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          Experience
        </h1>
        <p className="text-sm tracking-wider font-light" style={{ color: "var(--text-muted)" }}>
          Changelog from my journey
        </p>
      </section>

      {/* Timeline */}
      <section className="space-y-10">
        {experience.map((role, i) => (
          <div key={i} className="flex gap-5">
            {/* Dot + line */}
            <div className="flex flex-col items-center pt-1.5">
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: i === 0 ? "var(--text-primary)" : "var(--border)",
                  border: `2px solid ${i === 0 ? "var(--text-primary)" : "var(--text-muted)"}`,
                }}
              />
              {i < experience.length - 1 && (
                <div
                  className="w-px flex-1 mt-2"
                  style={{ background: "var(--border)", minHeight: "2rem" }}
                />
              )}
            </div>

            <div className="flex-1 pb-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-3">
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {role.title}
                  </p>
                  <a
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {role.company}
                  </a>
                </div>
                <div className="shrink-0 text-xs sm:text-right" style={{ color: "var(--text-muted)" }}>
                  <p>{role.duration}</p>
                  <p>{role.location}</p>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-4">
                {role.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-xs sm:text-sm flex gap-2 tracking-wide font-light leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="shrink-0 mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {role.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="pt-4">
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          Education
        </p>
        <div className="space-y-6">
          {education.map((ed, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {ed.degree}
                  </p>
                  <a
                    href={ed.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {ed.institution}
                  </a>
                </div>
                <div className="shrink-0 text-xs sm:text-right" style={{ color: "var(--text-muted)" }}>
                  <p>{ed.duration}</p>
                  <p>{ed.grade}</p>
                </div>
              </div>
              {ed.topics.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {ed.topics.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
