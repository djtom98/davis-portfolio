import { projects, achievements } from "../data";
import { Tag } from "../components/Tag";

export const metadata = { title: "Projects · Davis Jacob Thomas" };

export default function Projects() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl md:text-4xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          Projects
        </h1>
        <p className="text-sm tracking-wider font-light" style={{ color: "var(--text-muted)" }}>
          Production systems and research work
        </p>
      </section>

      <section className="space-y-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="card-hover rounded-xl border p-5"
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            <h2 className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              {project.name}
            </h2>
            <p
              className="text-xs sm:text-sm leading-relaxed tracking-wide font-light mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          Achievements
        </p>
        <div className="space-y-5">
          {achievements.map((a, i) => (
            <div key={i}>
              <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                {a.title}
              </p>
              <p
                className="text-xs sm:text-sm font-light tracking-wide leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
