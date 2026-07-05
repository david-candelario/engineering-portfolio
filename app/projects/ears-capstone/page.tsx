import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectHeader from "@/components/ProjectHeader";

export const metadata: Metadata = {
  title: "EARS Capstone Project",
  description:
    "Emergency Alert Recognition System developed to provide visual siren and horn alerts for deaf and hard-of-hearing drivers.",
};


const quickFacts = [
  {
    label: "Project Type",
    value: "Senior Capstone",
  },
  {
    label: "Final Controller",
    value: "ESP32",
  },
  {
    label: "My Focus",
    value: "Mechanical Design & Validation",
  },
  {
    label: "Outcome",
    value: "Functional Prototype",
  },
];

const developmentStages = [
  {
    number: "01",
    title: "Define the user need",
    description:
      "Identify the difficulties deaf and hard-of-hearing drivers may experience when emergency sirens or vehicle horns are not visually apparent.",
  },
  {
    number: "02",
    title: "Establish design requirements",
    description:
      "Develop measurable requirements covering detection behavior, response time, visibility, size, cost, thermal conditions, installation, and durability.",
  },
  {
    number: "03",
    title: "Evaluate system concepts",
    description:
      "Compare microphone, processing, alert, power, enclosure, and mounting concepts before selecting the most practical complete system.",
  },
  {
    number: "04",
    title: "Prototype and validate",
    description:
      "Integrate the microphone, controller, visual indicators, enclosure, and software before conducting thermal, drop, mounting, and demonstration tests.",
  },
];

const architecture = [
  {
    title: "INMP441 Microphone",
    description:
      "Captures environmental audio and provides a digital signal for emergency-sound classification.",
  },
  {
    title: "ESP32 Controller",
    description:
      "Processes the incoming audio signal and activates the appropriate visual alert when a target sound is detected.",
  },
  {
    title: "LED Pictograms",
    description:
      "Communicate detected sirens or horns through recognizable visual symbols positioned within the driver’s field of view.",
  },
  {
    title: "ASA Enclosure",
    description:
      "Protects the electronics while supporting automotive temperature resistance, ventilation, mounting, and manufacturability.",
  },
];

const thermalMetrics = [
  {
    label: "Worst-Case Condition",
    value: "Parked Vehicle",
    detail: "High-temperature cabin exposure",
  },
  {
    label: "Predicted ESP32 Surface",
    value: "≈ 88°C",
    detail: "Initial worst-case thermal result",
  },
  {
    label: "Design Response",
    value: "Ventilation",
    detail: "Airflow openings added to enclosure",
  },
  {
    label: "Storage Guidance",
    value: "Glove Compartment",
    detail: "Recommended when the vehicle is parked",
  },
];

const validationTests = [
  {
    title: "Drop Resistance",
    result: "Passed",
    description:
      "The enclosure was evaluated through a three-foot drop scenario without permanent deformation affecting the intended function.",
  },
  {
    title: "Thermal Performance",
    result: "Design Revised",
    description:
      "Thermal analysis identified elevated internal temperatures, leading to ventilation features and safer placement recommendations.",
  },
  {
    title: "Driver Visibility",
    result: "Mounting Evaluated",
    description:
      "Several mounting locations were compared, with placement above the steering wheel providing strong visibility and response potential.",
  },
  {
    title: "Emergency-Sound Demonstration",
    result: "Functional",
    description:
      "The prototype demonstrated visual responses to ambulance, police, fire-truck, horn, and alternative sound inputs.",
  },
];

const evolution = [
  {
    src: "/projects/ears-capstone/images/arduino-ears-assembly.png",
    alt: "Arduino-based EARS concept assembly",
    title: "Arduino Concept",
    description:
      "Early architecture used to evaluate basic electronics packaging and visual-alert placement.",
  },
  {
    src: "/projects/ears-capstone/images/raspberrypi-ears-assembly.png",
    alt: "Raspberry Pi based EARS concept assembly",
    title: "Raspberry Pi Concept",
    description:
      "A higher-processing-power alternative evaluated during system architecture development.",
  },
  {
    src: "/projects/ears-capstone/images/ears-final-esp-assembly.png",
    alt: "Final ESP32 EARS assembly",
    title: "Final ESP32 Architecture",
    description:
      "Compact final direction selected for embedded processing, packaging, and prototype integration.",
  },
];

const thermalGallery = [
  {
    src: "/projects/ears-capstone/images/esp-and-caseinitial-temp.png",
    alt: "Initial temperature conditions used for the EARS thermal analysis",
    caption: "Initial temperatures for the ESP32 and enclosure",
  },
  {
    src: "/projects/ears-capstone/images/esp-heat-generation-values.png",
    alt: "ESP32 heat-generation inputs",
    caption: "ESP32 heat-generation inputs",
  },
  {
    src: "/projects/ears-capstone/images/case-inner-convection-values.png",
    alt: "Inner enclosure convection boundary conditions",
    caption: "Internal enclosure convection conditions",
  },
  {
    src: "/projects/ears-capstone/images/case-outside-convection-values.png",
    alt: "Outer enclosure convection boundary conditions",
    caption: "External enclosure convection conditions",
  },
  {
    src: "/projects/ears-capstone/images/esp-heat-distribution.png",
    alt: "ESP32 temperature distribution from thermal simulation",
    caption: "ESP32 temperature distribution",
  },
  {
    src: "/projects/ears-capstone/images/case-heat-distribution.png",
    alt: "EARS enclosure temperature distribution",
    caption: "Enclosure temperature distribution",
  },
];

const demoVideos = [
  {
    src: "/projects/ears-capstone/videos/ears-demo-ambulance.mp4",
    title: "Ambulance Siren",
    description:
      "Prototype response when presented with an ambulance siren input.",
  },
  {
    src: "/projects/ears-capstone/videos/ears-demo-police-firetruck.mp4",
    title: "Police and Fire-Truck Sirens",
    description:
      "Visual-alert response to additional emergency-vehicle siren patterns.",
  },
  {
    src: "/projects/ears-capstone/videos/ears-demo-horn.mp4",
    title: "Vehicle Horn",
    description:
      "Demonstration of the horn-detection alert behavior.",
  },
  {
    src: "/projects/ears-capstone/videos/ears-demo-alt-node.mp4",
    title: "Alternative Sound Input",
    description:
      "Additional prototype test used to evaluate system response under another audio condition.",
  },
];

const lessons = [
  {
    title: "Requirements improve engineering decisions",
    description:
      "Establishing measurable requirements made it easier to compare concepts and justify decisions related to size, cost, temperature, mounting, and usability.",
  },
  {
    title: "Architecture should match the real product",
    description:
      "The final controller needed enough processing capability for the application without introducing unnecessary size, power consumption, or packaging complexity.",
  },
  {
    title: "Automotive environments create harsh thermal conditions",
    description:
      "An enclosure that performs well indoors may experience significantly higher temperatures inside a parked vehicle and must be evaluated accordingly.",
  },
  {
    title: "Mechanical design influences electronics reliability",
    description:
      "Ventilation, component spacing, mounting, material selection, and access for assembly all affected the performance of the embedded system.",
  },
  {
    title: "Usability is part of engineering performance",
    description:
      "A technically functional alert is not sufficient unless it is visible, understandable, and positioned where the driver can respond quickly.",
  },
  {
    title: "Documentation completes the product",
    description:
      "The final report, manufacturing manual, and user manual provide the information required to reproduce, assemble, operate, and improve the design.",
  },
];

const documents = [
  {
    title: "Final Capstone Report",
    description:
      "Complete engineering process, requirements, analysis, design, testing, and conclusions.",
    href: "/projects/ears-capstone/documents/ears-final-report.pdf",
    label: "View Final Report",
  },
  {
    title: "Manufacturing Manual",
    description:
      "Fabrication, assembly, component, and manufacturing information for the prototype.",
    href: "/projects/ears-capstone/documents/ears-manufacturing-manual.pdf",
    label: "View Manufacturing Manual",
  },
  {
    title: "User Manual",
    description:
      "Installation, operation, handling, and user-facing guidance for the EARS prototype.",
    href: "/projects/ears-capstone/documents/ears-user-manual.pdf",
    label: "View User Manual",
  },
];

const engineeringFiles = [
  {
    title: "ESP32 Case STL",
    href: "/projects/ears-capstone/documents/case-esp.STL",
  },
  {
    title: "ESP32 Lid STL",
    href: "/projects/ears-capstone/documents/lid-esp-final.STL",
  },
  {
    title: "ANSYS Thermal Archive",
    href: "/projects/ears-capstone/documents/thermal-analysis-esp-case.wbpz",
  },
];

export default function EarsCapstonePage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <ProjectHeader />

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-32 md:px-8 md:pb-16 md:pt-40">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
          Mechanical Engineering Senior Capstone
        </p>

        <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Emergency Alert
              <br />
              Recognition System
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              A compact automotive system that recognizes emergency sirens and
              vehicle horns and communicates them through visual alerts for
              deaf and hard-of-hearing drivers.
            </p>
          </div>

          <div className="inline-flex w-fit items-center rounded-full border border-emerald-500/50 bg-emerald-500/10 px-5 py-2 font-semibold text-emerald-500">
            Functional Prototype
          </div>
        </div>
      </section>

      {/* Hero image */}

      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
          <Image
            src="/projects/ears-capstone/images/final-ears-prototype.png"
            alt="Final Emergency Alert Recognition System prototype"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-contain p-6 md:p-12"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-6 pt-20 text-white md:px-8">
            <p className="text-sm font-medium">
              Final EARS prototype and visual-alert interface
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact) => (
            <article
              key={fact.label}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <p className="text-sm font-medium text-[color:var(--accent)]">
                {fact.label}
              </p>

              <p className="mt-3 font-semibold">{fact.value}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Problem and role */}

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            The Problem
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Making Audible Warnings Visually Accessible
          </h2>

          <p className="case-study-copy mt-6">
            Emergency sirens and vehicle horns provide critical information to
            drivers, but those warnings may not be accessible to someone who
            cannot reliably hear them.
          </p>

          <p className="case-study-copy mt-5">
            The project required a compact system capable of detecting target
            sounds, processing them quickly, and presenting a clear visual
            alert without distracting or obstructing the driver.
          </p>
        </div>

        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 md:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            My Contribution
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Mechanical Design and Validation
          </h2>

          <ul className="mt-6 space-y-4 text-[color:var(--muted)]">
            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Supported product requirements, concept development, and
              engineering documentation.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Developed and refined compact electronics-enclosure concepts.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Conducted thermal analysis of the ESP32 and enclosure.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Supported 3D printing, assembly, drop testing, placement
              evaluation, and prototype validation.
            </li>
          </ul>
        </div>
      </section>

      {/* Development process */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Product-Development Process
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              From User Need to Tested Prototype
            </h2>

            <p className="case-study-copy mt-5">
              The project followed a complete engineering process rather than
              beginning directly with a final enclosure or circuit layout.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {developmentStages.map((stage) => (
              <article
                key={stage.number}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-7"
              >
                <p className="font-mono text-sm font-bold text-[color:var(--accent)]">
                  STAGE {stage.number}
                </p>

                <h3 className="mt-4 text-xl font-bold">{stage.title}</h3>

                <p className="case-study-copy mt-3">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Embedded-System Architecture
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Detect, Process, and Communicate
          </h2>

          <p className="case-study-copy mt-5">
            The final architecture connects audio sensing, embedded processing,
            visual communication, and protective mechanical packaging.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {architecture.map((component, index) => (
            <article
              key={component.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 font-bold text-[color:var(--accent)]">
                {index + 1}
              </div>

              <h3 className="mt-5 text-xl font-bold">{component.title}</h3>

              <p className="case-study-copy mt-3">
                {component.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-6 text-center font-medium">
          <span>Environmental Audio</span>
          <span className="text-[color:var(--accent)]">→</span>
          <span>INMP441 Microphone</span>
          <span className="text-[color:var(--accent)]">→</span>
          <span>ESP32 Processing</span>
          <span className="text-[color:var(--accent)]">→</span>
          <span>Visual Alert</span>
        </div>
      </section>

      {/* Architecture evolution */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Concept Evolution
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Comparing Processing Architectures
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {evolution.map((concept) => (
              <article
                key={concept.title}
                className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)]"
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={concept.src}
                    alt={concept.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-5"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{concept.title}</h3>

                  <p className="case-study-copy mt-3">
                    {concept.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enclosure evolution */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Mechanical Design
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Enclosure Development
          </h2>

          <p className="case-study-copy mt-5">
            The enclosure evolved as the internal electronics changed and
            requirements related to assembly, airflow, size, visibility, and
            manufacturability became clearer.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src="/projects/ears-capstone/images/ears-case-evolution.png"
                alt="Evolution of the EARS enclosure concepts"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-5"
              />
            </div>

            <figcaption className="case-study-caption bg-[color:var(--surface)] px-5 py-4 text-sm">
              Enclosure concept evolution
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src="/projects/ears-capstone/images/final-esp-case-and-lid.png"
                alt="Final ESP32 enclosure and lid"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-5"
              />
            </div>

            <figcaption className="case-study-caption bg-[color:var(--surface)] px-5 py-4 text-sm">
              Final ESP32 case and lid design
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Thermal analysis */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
              Primary Mechanical Challenge
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Thermal Performance Inside a Parked Vehicle
            </h2>

            <p className="case-study-copy mt-5">
              Electronics inside a parked vehicle may experience temperatures
              far above normal room conditions. The enclosure therefore needed
              to be evaluated as part of the thermal system rather than merely
              treated as protective packaging.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {thermalMetrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-6"
              >
                <p className="text-sm font-medium text-amber-500">
                  {metric.label}
                </p>

                <p className="mt-4 text-2xl font-extrabold">{metric.value}</p>

                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {metric.detail}
                </p>
              </article>
            ))}
          </div>

          {/* Raw image tags are used here to avoid image-optimizer issues. */}

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {thermalGallery.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)]"
              >
                <div className="aspect-[4/3] bg-slate-200 p-4 dark:bg-slate-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="block h-full w-full object-contain"
                  />
                </div>

                <figcaption className="case-study-caption px-5 py-4 text-sm">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-amber-500/40 bg-amber-500/10 p-8">
            <h3 className="text-2xl font-bold text-amber-500">
              Design Response
            </h3>

            <p className="case-study-copy mt-4">
              Ventilation openings were incorporated into the enclosure, and
              storage guidance was added to reduce prolonged thermal exposure
              when the vehicle is parked.
            </p>
          </div>
        </div>
      </section>

      {/* Validation */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Prototype Validation
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Mechanical, Thermal, and User Testing
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {validationTests.map((test) => (
            <article
              key={test.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold">{test.title}</h3>

                <span className="rounded-full border border-[color:var(--accent)] bg-blue-500/10 px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">
                  {test.result}
                </span>
              </div>

              <p className="case-study-copy mt-4">{test.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Video demonstrations */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Functional Demonstration
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Emergency-Sound Testing
            </h2>

            <p className="case-study-copy mt-5">
              The following demonstrations show the prototype responding to
              several emergency and roadway sound inputs.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
  {demoVideos.map((video) => (
    <article
      key={video.src}
      className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)]"
    >
      <video
        controls
        preload="metadata"
        playsInline
        className="aspect-video w-full bg-black object-contain"
      >
        <source src={video.src} type="video/mp4" />

        Your browser does not support embedded video.
      </video>

      <div className="p-5">
        <h3 className="text-lg font-bold">{video.title}</h3>

        <p className="case-study-copy mt-2">
          {video.description}
        </p>
      </div>
    </article>
  ))}
</div>
        </div>
      </section>

      {/* Final prototype */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <figure className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src="/projects/ears-capstone/images/final-ears-prototype.png"
                alt="Final assembled EARS prototype"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-6"
              />
            </div>

            <figcaption className="case-study-caption bg-[color:var(--surface)] px-5 py-4 text-sm">
              Final assembled prototype
            </figcaption>
          </figure>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
              Project Outcome
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              A Complete Engineering Prototype
            </h2>

            <p className="case-study-copy mt-6">
              The project produced a functional physical prototype supported by
              product requirements, CAD development, embedded electronics,
              thermal analysis, testing, manufacturing documentation, and user
              instructions.
            </p>

            <p className="case-study-copy mt-5">
              The result demonstrated the feasibility of converting emergency
              audio cues into visual information while identifying clear areas
              for future improvement in classification performance,
              environmental validation, and automotive integration.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Reflection
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Lessons Learned
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {lessons.map((lesson) => (
              <article
                key={lesson.title}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-6"
              >
                <h3 className="text-xl font-bold">{lesson.title}</h3>

                <p className="case-study-copy mt-3">
                  {lesson.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Technical Documentation
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Reports and Manuals
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {documents.map((document) => (
            <article
              key={document.title}
              className="flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7"
            >
              <h3 className="text-xl font-bold">{document.title}</h3>

              <p className="case-study-copy mt-4 flex-1">
                {document.description}
              </p>

              <a
                href={document.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center rounded-xl bg-[color:var(--accent)] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)]"
              >
                {document.label}

                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Engineering files */}

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Engineering Files
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Downloadable Design Resources
          </h2>

          <div className="mt-7 flex flex-wrap gap-4">
            {engineeringFiles.map((file) => (
              <a
                key={file.title}
                href={file.href}
                download
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--background)] px-5 py-3 font-semibold transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                {file.title} ↓
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <Link
            href="/projects/guacamaya-manufacturing"
            className="text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
          >
            ← Previous: Guacamaya Manufacturing
          </Link>

          <Link
            href="/#experience"
            className="font-semibold text-[color:var(--accent)] transition hover:underline"
          >
            View All Engineering Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}