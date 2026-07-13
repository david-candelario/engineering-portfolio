"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Autonomous Arduino Race Car",
    subtitle: "Embedded Systems • Controls • Competition",
    link: "/projects/arduino-race-car",
    image:
      "/projects/arduino-race-car/images/arduino-car-irl-fully-built-front.jpg",
    imageAlt: "Completed autonomous Arduino race car",
    imageClass: "object-cover",
    result: "2nd Place",
    overview:
      "An autonomous vehicle designed to navigate a competitive course using ultrasonic and infrared sensor feedback.",
    contribution:
      "Programming, electronics integration, steering control, debugging, and physical testing.",
    challenge:
      "Inconsistent ultrasonic readings required systematic troubleshooting, sensor replacement, and repeated software tuning.",
    technologies: [
      "Arduino",
      "C++",
      "Ultrasonic Sensors",
      "IR Sensor",
      "Servo",
      "H-Bridge",
    ],
    outcome:
      "The vehicle completed the competition and earned second place after multiple hardware and software integration problems were resolved.",
  },
  {
    title: "Guacamaya HPVC Design",
    subtitle: "ANSYS CFD • SolidWorks • Design Decisions",
    link: "/projects/guacamaya-design",
    image: "/projects/guacamaya-design/images/hpvc-cad-assembly.png",
    imageAlt: "Guacamaya human-powered vehicle CAD assembly",
    imageClass: "object-contain p-3",
    result: "Aerodynamics Lead",
    overview:
      "A vehicle-level design project for a front-wheel-drive human-powered competition trike.",
    contribution:
      "Led the aerodynamic fairing evaluation and supported steering, braking, and front-axle system integration.",
    challenge:
      "Determine whether the fairing’s predicted drag reduction justified its weight, manufacturing effort, cost, and integration risk.",
    technologies: [
      "ANSYS Fluent",
      "SolidWorks",
      "CFD",
      "Decision Analysis",
    ],
    outcome:
      "The analysis supported not advancing the fairing into manufacturing and redirecting limited resources toward higher-impact vehicle systems.",
  },
  {
    title: "Guacamaya Manufacturing",
    subtitle: "Fabrication • Welding • Vehicle Integration",
    link: "/projects/guacamaya-manufacturing",
    image:
      "/projects/guacamaya-manufacturing/images/hpvc-irl-assembly.jpg",
    imageAlt: "Guacamaya human-powered vehicle during assembly",
    imageClass: "object-cover",
    result: "Sportsmanship Award",
    overview:
      "The fabrication, assembly, testing, and competition phase of the Guacamaya human-powered vehicle.",
    contribution:
      "Supported tube bending, welding, drilling, cutting, finishing, drivetrain assembly, and front-axle integration.",
    challenge:
      "Only two of four required custom universal joints arrived, forcing the team to develop a constrained temporary replacement.",
    technologies: [
      "Welding",
      "Tube Bending",
      "Machining",
      "Assembly",
      "Testing",
    ],
    outcome:
      "The temporary drivetrain operated during initial testing but failed during competition. The team continued assisting other universities and received the Sportsmanship Award.",
  },
  {
    title: "EARS Capstone Project",
    subtitle: "Product Development • Embedded Systems • Validation",
    link: "/projects/ears-capstone",
    image: "/projects/ears-capstone/images/final-ears-prototype.png",
    imageAlt: "Final Emergency Alert Recognition System prototype",
    imageClass: "object-contain p-3",
    result: "Functional Prototype",
    overview:
      "A compact automotive device that converts emergency sirens and vehicle horns into accessible visual alerts.",
    contribution:
      "Supported requirements development, enclosure design, thermal analysis, prototyping, assembly, testing, and technical documentation.",
    challenge:
      "Package embedded electronics inside a compact enclosure while addressing driver visibility, durability, manufacturing, and parked-vehicle temperatures.",
    technologies: [
      "ESP32",
      "INMP441",
      "ANSYS",
      "SolidWorks",
      "3D Printing",
      "Soldering",
    ],
    outcome:
      "The team produced a functional prototype supported by engineering requirements, simulation, physical testing, manufacturing documentation, and a user manual.",
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(3);

  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-[color:var(--background)] px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
            Engineering Experience
          </h2>

          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            Four projects covering embedded controls, simulation, fabrication,
            product development, and physical testing.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {projects.map((project, index) => {
            const isOpen = openProject === index;
            const panelId = `project-panel-${index}`;

            return (
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenProject(isOpen ? null : index)
                  }
                  className="w-full p-4 text-left transition hover:bg-[color:var(--surface-hover)] sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl border border-[color:var(--border)] bg-white sm:h-28 sm:w-44">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 176px"
                        className={project.imageClass}
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 items-start justify-between gap-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-bold text-[color:var(--foreground)] sm:text-2xl">
                            {project.title}
                          </h3>

                          <span className="rounded-full border border-[color:var(--accent)] bg-blue-500/10 px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
                            {project.result}
                          </span>
                        </div>

                        <p className="mt-2 text-sm font-medium text-[color:var(--accent)] sm:text-base">
                          {project.subtitle}
                        </p>
                      </div>

                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`mt-1 h-5 w-5 shrink-0 text-[color:var(--accent)] transition-transform duration-200 ${
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
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    className="border-t border-[color:var(--border)] px-5 py-7 sm:px-7"
                  >
                    <div className="grid gap-8 lg:grid-cols-2">
                      <div className="space-y-7">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                            Project Overview
                          </p>

                          <p className="mt-3 leading-7 text-[color:var(--muted)]">
                            {project.overview}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                            My Contribution
                          </p>

                          <p className="mt-3 leading-7 text-[color:var(--muted)]">
                            {project.contribution}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                            Key Challenge
                          </p>

                          <p className="mt-3 leading-7 text-[color:var(--muted)]">
                            {project.challenge}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                            Tools and Technologies
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1.5 text-sm text-[color:var(--foreground)]"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-7 rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                            Outcome
                          </p>

                          <p className="mt-3 leading-7 text-[color:var(--muted)]">
                            {project.outcome}
                          </p>
                        </div>

                        <Link
                          href={project.link}
                          className="mt-7 inline-flex w-fit items-center rounded-xl bg-[color:var(--accent)] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)]"
                        >
                          View Full Case Study
                          <span aria-hidden="true" className="ml-2">
                            →
                          </span>
                        </Link>
                      </div>
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