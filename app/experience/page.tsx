import { experience, education } from "../data";
import { Tag } from "../components/Tag";

export const metadata = {
  title: "Experience · Davis Jacob Thomas",
};

export default function Experience() {
  return (
    <div className="space-y-14">
      <section>
        <h1 className="text-2xl font-bold mb-2">Experience</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Changelog from my journey
        </p>
      </section>

      {/* Timeline */}
      <section className="space-y-10">
        {experience.map((role, i) => (
          <div key={i} className="relative">
            {/* Timeline line */}
            {i < experience.length - 1 && (
              <div
                className="absolute left-0 top-6 bottom-0 w-px -mb-10"
                style={{ background: "var(--border)", marginLeft: "-1px" }}
              />
            )}

            <div className="flex gap-5">
              {/* Dot */}
              <div className="relative mt-1.5 shrink-0">
                <div
                  className="w-2 h-2 rounded-full border-2 z-10 relative"
                  style={{
                    borderColor: i === 0 ? "var(--foreground)" : "var(--muted)",
                    background: i === 0 ? "var(--foreground)" : "var(--background)",
                  }}
                />
              </div>

              <div className="flex-1 pb-2">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <div>
                    <p className="text-sm font-semibold">{role.title}</p>
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm"
                      style={{ color: "var(--muted)" }}
                    >
                      {role.company}
                    </a>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs" style={{ color: "var(--muted)" }}>
                      {role.duration}
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>
                      {role.location}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-3 space-y-2">
                  {role.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-xs flex gap-2"
                      style={{ color: "var(--muted)" }}
                    >
                      <span className="shrink-0 mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {role.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2
          className="text-xs uppercase tracking-widest font-semibold mb-6"
          style={{ color: "var(--muted)" }}
        >
          Education
        </h2>
        <div className="space-y-6">
          {education.map((ed, i) => (
            <div key={i}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <p className="text-sm font-semibold">{ed.degree}</p>
                  <a
                    href={ed.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    {ed.institution}
                  </a>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {ed.duration}
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {ed.grade}
                  </p>
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
