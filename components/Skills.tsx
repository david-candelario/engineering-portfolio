const skillGroups = [
  {
    number: "01",
    title: "CAD & Mechanical Design",
    description:
      "Mechanical components, assemblies, enclosures, system layouts, and manufacturing-ready documentation.",
    skills: [
      "SolidWorks",
      "AutoCAD",
      "Part Modeling",
      "Assembly Modeling",
      "Mechanical Drawings",
      "Design for Manufacturing",
    ],
  },
  {
    number: "02",
    title: "Analysis & Simulation",
    description:
      "Evaluating structural performance, airflow, thermal behavior, safety, and design tradeoffs.",
    skills: [
      "ANSYS Workbench",
      "Structural FEA",
      "CFD",
      "Steady-State Thermal",
      "Explicit Dynamics",
      "Engineering Calculations",
    ],
  },
  {
    number: "03",
    title: "Manufacturing & Prototyping",
    description:
      "Turning engineering designs into physical parts, assemblies, and functional prototypes.",
    skills: [
      "CNC Machining",
      "Welding",
      "Tube Bending",
      "Drilling & Cutting",
      "3D Printing",
      "Soldering",
      "Mechanical Assembly",
    ],
  },
  {
    number: "04",
    title: "Embedded Systems & Controls",
    description:
      "Integrating sensors, controllers, motors, visual indicators, and mechanical systems.",
    skills: [
      "Arduino",
      "ESP32",
      "PLC Fundamentals",
      "Ultrasonic Sensors",
      "IR Sensors",
      "Servo Control",
      "H-Bridge Control",
      "PWM",
    ],
  },
  {
    number: "05",
    title: "Programming, Testing & Documentation",
    description:
      "Supporting calculations, controls, prototype validation, technical communication, and engineering decisions.",
    skills: [
      "Python",
      "MATLAB",
      "Arduino C/C++",
      "Test Planning",
      "Failure Analysis",
      "Decision Matrices",
      "Technical Reports",
      "Manufacturing Manuals",
      "Git & GitHub",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
            Engineering Tools and Capabilities
          </h2>

          <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
            Experience spanning mechanical design, simulation, manufacturing,
            embedded systems, and prototype validation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--background)] p-7"
            >
              <p className="font-mono text-sm font-bold text-[color:var(--accent)]">
                {group.number}
              </p>

              <h3 className="mt-4 text-2xl font-bold text-[color:var(--foreground)]">
                {group.title}
              </h3>

              <p className="mt-3 leading-7 text-[color:var(--muted)]">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-sm font-medium text-[color:var(--foreground)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}