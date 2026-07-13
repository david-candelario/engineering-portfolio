const stats = [
  {
    value: "4",
    label: "Featured Projects",
  },
  {
    value: "2",
    label: "Competitions",
  },
  {
    value: "20+",
    label: "CAD Models",
  },
  {
    value: "10+",
    label: "Engineering Reports",
  },
];

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-6xl pt-28 text-center">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]">
          University of Puerto Rico – Mayagüez
        </p>

        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-[color:var(--foreground)] sm:text-6xl md:text-7xl lg:text-8xl">
          David Candelario
        </h1>

        <h2 className="mb-2 text-xl font-semibold text-[color:var(--foreground)] sm:text-2xl">
          Mechanical Engineer
        </h2>

        <p className="mb-8 text-lg text-[color:var(--muted)] sm:text-xl">
          Design • Simulation • Manufacturing • Embedded Systems
        </p>

        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">
          I develop practical engineering solutions from initial analysis
          through fabrication, system integration, and testing.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#experience"
            className="rounded-xl bg-[color:var(--accent)] px-8 py-4 font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)]"
          >
            Explore My Work
          </a>

          <a
            href="/documents/david-candelario-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-8 py-4 font-semibold text-[color:var(--foreground)] transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--surface-hover)]"
          >
            View Resume
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold text-[color:var(--accent)]">
                {stat.value}
              </h3>

              <p className="mt-2 text-[color:var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center pb-8">
          <a
            href="#experience"
            aria-label="Scroll to engineering projects"
            className="animate-bounce rounded-full p-3 text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-9 w-9"
            >
              <path
                d="m6 9 6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}