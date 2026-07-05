"use client";

import Link from "next/link";
import { useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  link: string;
  result: string;
  objective: string;
  role: string;
  technologies: string[];
  challenges: string[];
  outcome: string;
};

const projects: Project[] = [
  {
    title: "Autonomous Arduino Race Car",
    subtitle: "Embedded Systems • Arduino • Controls",
    link: "/projects/arduino-race-car",
    result: "Second Place",

    objective:
      "Develop a speed-focused autonomous vehicle capable of navigating an obstacle course using ultrasonic and infrared sensor feedback.",

    role:
      "Programming, electronics integration, sensor testing, and system debugging.",

    technologies: [
      "Arduino UNO",
      "C++",
      "Ultrasonic Sensors",
      "Infrared Sensor",
      "Servo Steering",
      "H-Bridge",
    ],

    challenges: [
      "Inconsistent ultrasonic readings initially caused unreliable steering decisions.",
      "Testing was required to distinguish software errors from faulty sensor hardware.",
      "The steering logic had to balance fast obstacle response with vehicle stability.",
    ],

    outcome:
      "After testing sensors individually, replacing inconsistent components, and refining the control logic, the vehicle completed the autonomous race and earned Second Place.",
  },

  {
    title: "Guacamaya HPVC Design",
    subtitle: "Aerodynamics • ANSYS • Product Design",
    link: "/projects/guacamaya-design",
    result: "Aerodynamics Lead",

    objective:
      "Determine whether an aerodynamic fairing would provide enough performance improvement to justify its added weight, complexity, and manufacturing effort.",

    role:
      "Aerodynamics Lead, with additional support for steering, braking, and front-axle power-system integration.",

    technologies: [
      "ANSYS CFD",
      "SolidWorks",
      "Aerodynamic Analysis",
      "Design Evaluation",
    ],

    challenges: [
      "Establishing a repeatable workflow for evaluating aerodynamic concepts.",
      "Comparing potential drag reduction against added manufacturing and integration demands.",
      "Supporting the packaging of several mechanical systems on the front axle.",
    ],

    outcome:
      "The analysis indicated that the expected aerodynamic improvement did not justify the added complexity. The team therefore redirected limited resources toward higher-impact vehicle systems.",
  },

  {
    title: "Guacamaya Manufacturing",
    subtitle: "Fabrication • Welding • Mechanical Integration",
    link: "/projects/guacamaya-manufacturing",
    result: "Sportsmanship Award",

    objective:
      "Manufacture and assemble a functional human-powered trike for the national Human Powered Vehicle Competition.",

    role:
      "Hands-on fabrication and assembly, including tube bending, welding, drilling, cutting, polishing, and subsystem integration.",

    technologies: [
      "Welding",
      "Tube Bending",
      "Drilling",
      "Machining",
      "Frame Assembly",
    ],

    challenges: [
      "Developing practical welding and fabrication skills during the build.",
      "Receiving only two of the four custom U-joints required for the driven front axles.",
      "Adapting commercially available ratchet joints to provide temporary steering articulation and torque transmission.",
    ],

    outcome:
      "The adapted system allowed the trike to become operational and reach the competition. Although the temporary drivetrain solution failed during the event, the experience demonstrated rapid problem solving, adaptability, and the importance of realistic validation. The team also received the Sportsmanship Award for supporting other competitors.",
  },

  {
    title: "EARS Capstone Project",
    subtitle: "Product Development • Embedded Systems • Validation",
    link: "/projects/ears-capstone",
    result: "Senior Capstone",

    objective:
      "Develop a compact in-vehicle system that detects emergency sirens and horns and provides visual alerts for deaf or hard-of-hearing drivers.",

    role:
      "Capstone team member supporting mechanical design, enclosure development, thermal analysis, prototyping, testing, and technical documentation.",

    technologies: [
      "ESP32",
      "INMP441 Microphone",
      "SolidWorks",
      "ANSYS",
      "ASA 3D Printing",
      "Prototype Testing",
    ],

    challenges: [
      "Packaging the electronics inside a compact automotive enclosure.",
      "Managing elevated internal temperatures under parked-vehicle conditions.",
      "Balancing detection, usability, manufacturability, cost, and installation requirements.",
    ],

    outcome:
      "The project produced a functional prototype and complete engineering documentation. Thermal analysis informed the addition of ventilation features and recommendations for safer vehicle placement and storage.",
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  function toggleProject(index: number) {
    setOpenProject((current) => (current === index ? null : index));
  }

  return (
    <section
      id="experience"
      className="scroll-mt-24 px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-4xl font-bold text-[color:var(--foreground)] md:text-5xl">
          Engineering Experience
        </h2>

        <p className="mb-14 text-base text-[color:var(--muted)] md:mb-16 md:text-lg">
          Explore the engineering decisions, challenges, and results behind
          each project.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const isOpen = openProject === index;
            const panelId = `project-panel-${index}`;
            const buttonId = `project-button-${index}`;

            return (
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] transition duration-200 hover:border-[color:var(--accent)]"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleProject(index)}
                  className="w-full px-6 py-7 text-left transition duration-200 hover:bg-[color:var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[color:var(--accent)] md:px-8 md:py-8"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-[color:var(--foreground)] md:text-3xl">
                          {project.title}
                        </h3>

                        <span className="rounded-full border border-[color:var(--accent)] bg-blue-500/10 px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
                          {project.result}
                        </span>
                      </div>

                      <p className="text-[color:var(--accent)]">
                        {project.subtitle}
                      </p>
                    </div>

                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`h-7 w-7 shrink-0 text-[color:var(--accent)] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-[color:var(--border)] px-6 pb-8 pt-8 md:px-8"
                  >
                    <div className="grid gap-10 lg:grid-cols-2">
                      <div className="space-y-8">
                        <div>
                          <h4 className="mb-2 text-xl font-bold text-[color:var(--foreground)]">
                            Objective
                          </h4>

                          <p className="leading-relaxed text-[color:var(--muted)]">
                            {project.objective}
                          </p>
                        </div>

                        <div>
                          <h4 className="mb-3 text-xl font-bold text-[color:var(--foreground)]">
                            Primary Challenges
                          </h4>

                          <ul className="space-y-3 pl-5 text-[color:var(--muted)]">
                            {project.challenges.map((challenge) => (
                              <li
                                key={challenge}
                                className="list-disc leading-relaxed"
                              >
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="mb-2 text-xl font-bold text-[color:var(--foreground)]">
                            My Contribution
                          </h4>

                          <p className="leading-relaxed text-[color:var(--muted)]">
                            {project.role}
                          </p>
                        </div>

                        <div>
                          <h4 className="mb-4 text-xl font-bold text-[color:var(--foreground)]">
                            Tools and Technologies
                          </h4>

                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="rounded-full border border-[color:var(--accent)] bg-blue-500/10 px-4 py-2 text-sm text-[color:var(--accent)]"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="mb-2 text-xl font-bold text-[color:var(--foreground)]">
                            Outcome
                          </h4>

                          <p className="leading-relaxed text-[color:var(--muted)]">
                            {project.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <Link
                        href={project.link}
                        className="inline-flex items-center rounded-xl bg-[color:var(--accent)] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)]"
                      >
                        View Full Case Study
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}