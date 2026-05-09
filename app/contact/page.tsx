import { profile } from "../data";

export const metadata = { title: "Contact · Davis Jacob Thomas" };

const links = [
  { label: "LinkedIn", href: profile.linkedin, sub: "linkedin.com/in/davis-jacob-thomas" },
  { label: "GitHub", href: profile.github, sub: "github.com/djtom98" },
  { label: "Email", href: `mailto:${profile.email}`, sub: profile.email },
  { label: "Resume", href: profile.resume, sub: "Google Drive · PDF" },
];

export default function Contact() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl md:text-4xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          Contact
        </h1>
        <p className="text-sm tracking-wider font-light" style={{ color: "var(--text-muted)" }}>
          {profile.location}
        </p>
      </section>

      <section>
        <p
          className="text-sm sm:text-base tracking-wider font-light leading-relaxed mb-8"
          style={{ color: "var(--text-secondary)" }}
        >
          Open to conversations about ML platforms, AI research, data engineering, or new opportunities.
          Drop me a line on LinkedIn or via email.
        </p>

        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-center justify-between p-4 rounded-xl border"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  {link.label}
                </p>
                <p className="text-xs mt-0.5 font-light" style={{ color: "var(--text-muted)" }}>
                  {link.sub}
                </p>
              </div>
              <span className="text-lg" style={{ color: "var(--text-muted)" }}>→</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
