export function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-block text-xs px-2 py-0.5 rounded-full font-mono"
      style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
    >
      {label}
    </span>
  );
}
