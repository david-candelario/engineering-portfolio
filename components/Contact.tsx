const contactLinks = [
  {
    label: "View Resume",
    description:
      "Review my education, technical experience, projects, and engineering qualifications.",
    href: "/documents/david-candelario-resume.pdf",
    external: true,
  },
  {
    label: "GitHub",
    description:
      "Explore the source code and development history for this engineering portfolio.",
    href: "https://github.com/david-candelario",
    external: true,
  },
  {
    label: "Download Resume",
    description:
      "Download a PDF copy of my resume for future reference.",
    href: "/documents/david-candelario-resume.pdf",
    download: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
            Let&apos;s Build Something That Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
            I am currently exploring entry-level mechanical engineering
            opportunities involving field engineering, manufacturing, product
            development, testing, system integration, and technical
            problem-solving.
          </p>

          <p className="mt-4 leading-7 text-[color:var(--muted)]">
            My email address, phone number, and additional contact information
            are available on my resume.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              download={link.download}
              className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-[color:var(--foreground)]">
                  {link.label}
                </h3>

                <span
                  aria-hidden="true"
                  className="text-xl text-[color:var(--accent)] transition group-hover:translate-x-1"
                >
                  {link.download ? "↓" : "↗"}
                </span>
              </div>

              <p className="mt-4 leading-7 text-[color:var(--muted)]">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-8 sm:flex sm:items-center sm:justify-between sm:gap-8 md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Available for Opportunities
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[color:var(--foreground)]">
              Mechanical Engineering Graduate
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-[color:var(--muted)]">
              Based in Puerto Rico and interested in opportunities where I can
              contribute through hands-on engineering, analysis, manufacturing,
              testing, and continuous improvement.
            </p>
          </div>

          <a
            href="/documents/david-candelario-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex shrink-0 items-center justify-center rounded-xl bg-[color:var(--accent)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)] sm:mt-0"
          >
            Open Resume
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}