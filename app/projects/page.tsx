import { projects, achievements } from "../data";
import { Tag } from "../components/Tag";

export const metadata = {
  title: "Projects · Davis Jacob Thomas",
};

export default function Projects() {
  return (
    <div className="space-y-14">
      <section>
        <h1 className="text-2xl font-bold mb-2">Projects</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Production systems and research work
        </p>
      </section>

      {/* Project cards */}
      <section className="space-y-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border rounded-lg p-5"
            style={{ borderColor: "var(--border)" }}
          >
            <h2 className="text-sm font-semibold mb-2">{project.name}</h2>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
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

      {/* Achievements */}
      <section>
        <h2
          className="text-xs uppercase tracking-widest font-semibold mb-6"
          style={{ color: "var(--muted)" }}
        >
          Achievements
        </h2>
        <div className="space-y-5">
          {achievements.map((a, i) => (
            <div key={i}>
              <p className="text-sm font-semibold mb-1">{a.title}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
