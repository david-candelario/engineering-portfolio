const footerLinks = [
  {
    label: "Projects",
    href: "#experience",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)] px-6 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a
            href="#"
            className="text-lg font-bold text-[color:var(--foreground)] transition hover:text-[color:var(--accent)]"
          >
            David Candelario
          </a>

          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Mechanical Engineer • Puerto Rico
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[color:var(--muted)]">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-[color:var(--accent)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/documents/david-candelario-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[color:var(--accent)]"
          >
            Resume
          </a>

          <a
            href="https://github.com/david-candelario"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[color:var(--accent)]"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm text-[color:var(--muted)]">
          © {new Date().getFullYear()} David Candelario
        </p>
      </div>
    </footer>
  );
}