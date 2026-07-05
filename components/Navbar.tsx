export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#0B1120]/70 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 border border-blue-500 rounded-lg flex items-center justify-center font-bold text-blue-400">
            DC
          </div>

          <span className="font-semibold tracking-wide">
            David Candelario
          </span>

        </div>

        <div className="hidden md:flex items-center gap-10 text-gray-300">

  <a href="#about" className="hover:text-blue-400 transition">
    About
  </a>

  <a href="#experience" className="hover:text-blue-400 transition">
    Experience
  </a>

  <a href="#skills" className="hover:text-blue-400 transition">
    Skills
  </a>

  <a href="#contact" className="hover:text-blue-400 transition">
    Contact
  </a>

  <a
    href="/resume.pdf"
    className="border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
  >
    Resume
  </a>

</div>

      </div>
    </nav>
  );
}