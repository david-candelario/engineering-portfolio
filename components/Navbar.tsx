import ThemeToggle from "@/components/ThemeToggle";

const navigationLinks = [
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

export default function Navbar() {
  return (
    <nav className="theme-nav fixed left-0 top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#"
          aria-label="Go to the top of the page"
          className="flex items-center gap-3"
        >
          <div className="theme-accent flex h-10 w-10 items-center justify-center rounded-lg border border-current font-bold">
            DC
          </div>

          <span className="hidden font-semibold tracking-wide text-[color:var(--foreground)] sm:inline">
            David Candelario
          </span>
        </a>

        <div className="flex items-center gap-3">
          <div className="theme-muted hidden items-center gap-7 lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition hover:text-[color:var(--accent)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/documents/david-candelario-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-[color:var(--foreground)] transition hover:bg-[color:var(--accent)] hover:text-white sm:inline-flex"
          >
            Resume
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}