export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
     <div className="max-w-5xl text-center pt-24">

        <p className="uppercase tracking-[0.35em] text-blue-400 text-sm mb-4">
          University of Puerto Rico – Mayagüez
        </p>

        <h1 className="text-7xl md:text-8xl font-extrabold mb-4">
          David Candelario
        </h1>

        <h2 className="text-2xl text-white font-semibold mb-2">
          Mechanical Engineer
        </h2>

        <p className="text-xl text-gray-300 mb-8">
          Design • Simulation • Manufacturing • Embedded Systems
        </p>

        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Passionate about transforming engineering concepts into reliable,
          functional systems through simulation, embedded programming,
          and hands-on fabrication.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#experience"
            className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-xl font-semibold"
          >
            Explore My Work
          </a>

          <a
            href="/resume.pdf"
            className="border border-gray-600 hover:border-white transition px-8 py-4 rounded-xl"
          >
            Download Resume
          </a>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20">

          <div>
            <h3 className="text-4xl font-bold text-blue-400">4+</h3>
            <p className="text-gray-400 mt-2">Engineering Projects</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-400">2</h3>
            <p className="text-gray-400 mt-2">Competitions</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-400">20+</h3>
            <p className="text-gray-400 mt-2">CAD Models</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-400">10+</h3>
            <p className="text-gray-400 mt-2">Engineering Reports</p>
          </div>
<div className="mt-24 flex justify-center animate-bounce">

    <a
        href="#experience"
        className="text-gray-500 hover:text-blue-400 transition text-6xl"
    >
        ⌄
    </a>

</div>
        </div>

      </div>
    </section>
  );
}