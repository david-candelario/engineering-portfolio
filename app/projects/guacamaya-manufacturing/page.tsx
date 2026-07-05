import Link from "next/link";

export default function GuacamayaManufacturingPage() {
  return (
    <main className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#experience"
          className="text-[color:var(--accent)] hover:underline"
        >
          ← Back to portfolio
        </Link>

        <h1 className="mt-12 text-4xl font-bold text-[color:var(--foreground)] md:text-6xl">
          Guacamaya Manufacturing
        </h1>

        <p className="mt-6 text-lg text-[color:var(--muted)]">
          Full project case study coming soon.
        </p>
      </div>
    </main>
  );
}