import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="theme-nav fixed left-0 top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="theme-accent flex h-10 w-10 items-center justify-center rounded-lg border border-current font-bold">
            DC
          </div>

          <span className="font-semibold tracking-wide text-[color:var(--foreground)]">
            David Candelario
          </span>
        </a>

        <div className="flex items-center gap-3">
          <div className="theme-muted hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="transition hover:text-[color:var(--accent)]"
            >
              About
            </a>

            <a
              href="#experience"
              className="transition hover:text-[color:var(--accent)]"
            >
              Experience
            </a>

            <a
              href="#skills"
              className="transition hover:text-[color:var(--accent)]"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="transition hover:text-[color:var(--accent)]"
            >
              Contact
            </a>
          </div>

          <a
            href="/resume.pdf"
            className="hidden rounded-lg border border-[color:var(--accent)] px-4 py-2 text-[color:var(--foreground)] transition hover:bg-[color:var(--accent)] hover:text-white sm:inline-flex"
          >
            Resume
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}