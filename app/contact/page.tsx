import { profile } from "../data";

export const metadata = {
  title: "Contact · Davis Jacob Thomas",
};

const links = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    sub: "linkedin.com/in/davis-jacob-thomas",
  },
  {
    label: "GitHub",
    href: profile.github,
    sub: "github.com/djtom98",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    sub: profile.email,
  },
  {
    label: "Resume",
    href: profile.resume,
    sub: "Google Drive",
  },
];

export default function Contact() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-bold mb-2">Contact</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          {profile.location}
        </p>
      </section>

      <section>
        <h2
          className="text-sm leading-relaxed mb-8"
          style={{ color: "var(--muted)" }}
        >
          Open to conversations about ML platforms, AI research, data engineering, or new opportunities.
          Drop me a line on LinkedIn or via email.
        </h2>

        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg border group transition-colors"
              style={{ borderColor: "var(--border)" }}
            >
              <div>
                <p className="text-sm font-semibold group-hover:underline">
                  {link.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                  {link.sub}
                </p>
              </div>
              <span className="text-lg" style={{ color: "var(--muted)" }}>
                →
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
