import Link from "next/link";

export default function ArduinoRaceCar() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300"
        >
          ← Back to Portfolio
        </Link>

        <p className="uppercase tracking-[0.3em] text-blue-400 mt-12">
          Embedded Systems Project
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mt-6">
          Autonomous
          <br />
          Arduino Race Car
        </h1>

        <div className="mt-8 inline-block bg-green-600 px-5 py-2 rounded-full font-semibold">
          🏆 Second Place
        </div>

      </section>

      {/* Hero Image */}

      <section className="max-w-7xl mx-auto px-8">

        <div className="h-[450px] rounded-3xl border border-gray-700 bg-[#111827] flex items-center justify-center">

          <p className="text-gray-500 text-xl">
            Hero Project Image
          </p>

        </div>

      </section>

      {/* Quick Facts */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-[#111827] rounded-2xl p-6">

            <h3 className="text-blue-400 mb-3">
              Duration
            </h3>

            <p>4 Weeks</p>

          </div>

          <div className="bg-[#111827] rounded-2xl p-6">

            <h3 className="text-blue-400 mb-3">
              Competition
            </h3>

            <p>University Race</p>

          </div>

          <div className="bg-[#111827] rounded-2xl p-6">

            <h3 className="text-blue-400 mb-3">
              Role
            </h3>

            <p>Programming & Electronics</p>

          </div>

          <div className="bg-[#111827] rounded-2xl p-6">

            <h3 className="text-blue-400 mb-3">
              Result
            </h3>

            <p>🥈 Second Place</p>

          </div>

        </div>

      </section>

      {/* Engineering Challenge */}

      <section className="max-w-5xl mx-auto px-8 py-10">

        <h2 className="text-4xl font-bold mb-8">

          Engineering Challenge

        </h2>

        <p className="text-gray-300 leading-8 text-lg">

          Design and program an autonomous vehicle capable of navigating an
          obstacle course at competitive speed while avoiding collisions
          through sensor feedback and real-time steering corrections.

        </p>

      </section>

    </main>
  );
}