import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function ProjectHeader() {
  return (
    <header className="theme-nav fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-8">
        <Link
          href="/#experience"
          className="inline-flex items-center font-medium text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
        >
          <span aria-hidden="true" className="mr-2">
            ←
          </span>

          Portfolio
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
}
