import Image from "next/image";

const profileDetails = [
  {
    label: "Education",
    value: "B.S. Mechanical Engineering",
    detail: "Cum Laude · UPRM · July 2026",
  },
  {
    label: "Location",
    value: "Canóvanas, Puerto Rico",
    detail: "Open to engineering opportunities",
  },
  {
    label: "Languages",
    value: "English & Spanish",
    detail: "Fully bilingual",
  },
  {
    label: "Primary Interests",
    value: "Hands-On Engineering",
    detail: "Design · Manufacturing · Testing · Field Work",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[color:var(--background)] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
              Mechanical Engineer Focused on Real Systems
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-[color:var(--muted)]">
              <p>
                I graduated cum laude from the University of Puerto Rico at
                Mayagüez in July 2026 with a bachelor&apos;s degree in
                Mechanical Engineering.
              </p>

              <p>
                My experience combines CAD, engineering simulation,
                manufacturing, electronics integration, and physical testing.
                I enjoy projects where I can understand the complete system,
                help build it, and use testing or analysis to improve it.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="rounded-xl bg-[color:var(--accent)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)]"
              >
                Explore My Projects
              </a>

              <a
                href="/documents/david-candelario-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 font-semibold text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
              >
                View Resume
              </a>
            </div>
          </div>

          <figure className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/about/hpvc-team-pic.jpg"
                alt="UPRM Human Powered Vehicle Challenge team at competition"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <figcaption className="border-t border-[color:var(--border)] px-5 py-4 text-sm text-[color:var(--muted)]">
              UPRM Human Powered Vehicle Challenge team at the national
              competition in Virginia
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profileDetails.map((detail) => (
            <article
              key={detail.label}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                {detail.label}
              </p>

              <h3 className="mt-3 text-lg font-bold text-[color:var(--foreground)]">
                {detail.value}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                {detail.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Additional Experience
            </p>

            <h3 className="mt-4 text-2xl font-bold text-[color:var(--foreground)]">
              GIS and Municipal Planning
            </h3>

            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              As an Assistant GIS and Planning Technician for the Municipality
              of Canóvanas, I used ArcGIS, Google Earth, and OpenStreetMap to
              support mapping, spatial-data analysis, and urban-planning work.
            </p>
          </article>

          <article className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
              Current Focus
            </p>

            <h3 className="mt-4 text-2xl font-bold text-[color:var(--foreground)]">
              Ready to Contribute and Keep Learning
            </h3>

            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              I am seeking an entry-level opportunity involving mechanical
              design, manufacturing, testing, field engineering, system
              integration, or continuous improvement.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center font-semibold text-emerald-500 transition hover:underline"
            >
              Contact Me
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}