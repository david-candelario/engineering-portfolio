"use client";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  const projects = [
    {
      title: "Autonomous Arduino Race Car",
      subtitle: "Embedded Systems • Arduino • C++",
      link: "/projects/arduino-race-car",

      objective:
        "Develop an autonomous vehicle capable of navigating a race course using ultrasonic and infrared sensors while maximizing speed and reliability.",

      role:
        "Embedded Systems Programming • Electronics Integration • Testing",

      technologies: [
        "Arduino UNO",
        "C++",
        "HC-SR04 Ultrasonic Sensors",
        "IR Sensor",
        "Servo Motor",
        "H-Bridge",
      ],

      challenges: [
        "Ultrasonic sensors produced inconsistent readings.",
        "Extensive debugging was required to isolate faulty hardware.",
        "Sensor replacement and software tuning were necessary.",
      ],

      outcome:
        "Successfully completed the competition and earned Second Place after resolving multiple hardware and software integration issues.",
    },

    {
      title: "Guacamaya HPVC Design",
      subtitle: "ANSYS • Aerodynamics • Product Design",
      link: "/projects/guacamaya-design",

      objective:
        "Evaluate whether an aerodynamic fairing would provide enough performance benefit to justify manufacturing.",

      role: "Aerodynamics Lead",

      technologies: [
        "ANSYS Fluent",
        "SolidWorks",
        "CFD",
        "Design Analysis",
      ],

      challenges: [
        "Learning CFD workflows.",
        "Analyzing airflow around multiple concepts.",
        "Supporting steering and drivetrain integration.",
      ],

      outcome:
        "Analysis showed the fairing provided insufficient benefit, allowing the team to redirect resources toward more impactful improvements.",
    },

    {
      title: "Guacamaya Manufacturing",
      subtitle: "Manufacturing • Welding • Machining",
      link: "/projects/guacamaya-manufacturing",

      objective:
        "Manufacture and assemble the Human Powered Vehicle Competition trike for national competition.",

      role: "Frame Fabrication & Assembly",

      technologies: [
        "MIG Welding",
        "Tube Bending",
        "Machining",
        "Assembly",
      ],

      challenges: [
        "Learning welding techniques.",
        "Missing custom U-joints before competition.",
        "Designing a temporary drivetrain solution.",
      ],

      outcome:
        "Successfully completed manufacturing and competed nationally. Although the drivetrain failed during competition, the experience highlighted adaptability, rapid problem solving, and teamwork.",
    },

    {
      title: "EARS Capstone Project",
      subtitle: "Systems Engineering • Product Development",
      link: "/projects/ears-capstone",

      objective:
        "Develop a complete engineering solution from concept through design, manufacturing, testing, and validation as part of the Mechanical Engineering senior capstone.",

      role: "Mechanical Engineering Capstone Team Member",

      technologies: [
        "CAD",
        "Engineering Analysis",
        "Prototyping",
        "Testing",
      ],

      challenges: [
        "Balancing design constraints.",
        "Meeting project deadlines.",
        "Testing and validating the final prototype.",
      ],

      outcome:
        "Successfully completed the senior capstone project while applying engineering methodology, teamwork, and product development principles.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-32 px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">
          Engineering Experience
        </h2>

        <p className="text-gray-400 mb-16 text-lg">
          Click on any project to explore the engineering process behind it.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-700 bg-[#111827] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full px-8 py-8 text-left hover:bg-[#1A2436] transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-3xl font-bold">
                      {project.title}
                    </h3>

                    <p className="text-blue-400 mt-2">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="text-5xl text-blue-400">
                    {open === index ? "−" : "+"}
                  </div>
                </div>
              </button>

              {open === index && (
                <div className="px-8 pb-8 space-y-8">
                  <div>
                    <h4 className="font-bold text-xl mb-2">
                      Objective
                    </h4>

                    <p className="text-gray-300">
                      {project.objective}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-2">
                      My Role
                    </h4>

                    <p className="text-gray-300">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-4">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500 text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-4">
                      Challenges
                    </h4>

                    <ul className="space-y-2 text-gray-300 list-disc pl-6">
                      {project.challenges.map((challenge) => (
                        <li key={challenge}>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-2">
                      Outcome
                    </h4>

                    <p className="text-gray-300">
                      {project.outcome}
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link
    href={project.link}
    className="inline-block bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl font-semibold"
>
    View Full Case Study →
</Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}