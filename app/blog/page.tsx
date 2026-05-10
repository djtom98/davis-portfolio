export const metadata = { title: "Blog · Davis Jacob Thomas" };

export default function Blog() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl md:text-4xl font-medium mb-1" style={{ color: "var(--text)" }}>
          Blog
        </h1>
        <p className="text-sm tracking-wider font-light" style={{ color: "var(--muted)" }}>
          Thinking out loud
        </p>
      </section>

      <section
        className="text-sm sm:text-base tracking-wider font-light space-y-4"
        style={{ color: "var(--subtle)" }}
      >
        <p>
          Notes on ML systems, things I&apos;m building, and ideas I keep coming back to.
          Published when they&apos;re ready — not on a schedule.
        </p>
        <p style={{ color: "var(--muted)" }}>
          Nothing here yet. Check back soon.
        </p>
      </section>
    </div>
  );
}
