import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectHeader from "@/components/ProjectHeader";

export const metadata: Metadata = {
  title: "Guacamaya HPVC Design",
  description:
    "Aerodynamic evaluation, fairing development, structural analysis, and subsystem integration for the Guacamaya human-powered vehicle.",
};

const quickFacts = [
  {
    label: "Project",
    value: "ASME HPVC",
  },
  {
    label: "Vehicle",
    value: "Guacamaya",
  },
  {
    label: "Primary Role",
    value: "Aerodynamics Lead",
  },
  {
    label: "Main Tool",
    value: "ANSYS Workbench",
  },
];

const analysisSteps = [
  {
    number: "01",
    title: "Define the performance target",
    description:
      "Evaluate whether an aerodynamic fairing could reduce drag enough to justify its additional weight, manufacturing effort, cost, and vehicle-integration requirements.",
  },
  {
    number: "02",
    title: "Develop the fairing geometry",
    description:
      "Create a streamlined fairing concept inspired by a teardrop profile while reducing frontal area and maintaining coverage of the rider and vehicle.",
  },
  {
    number: "03",
    title: "Validate the CFD method",
    description:
      "Analyze a sphere with a known drag-coefficient range before applying the same CFD workflow to the fairing geometry.",
  },
  {
    number: "04",
    title: "Evaluate the full tradeoff",
    description:
      "Compare the predicted aerodynamic performance against manufacturing complexity, material requirements, development time, and integration risk.",
  },
];

const analysisMetrics = [
  {
    label: "Simulation Velocity",
    value: "11.18 m/s",
    detail: "Equivalent to 25 mph",
  },
  {
    label: "Target Drag Coefficient",
    value: "< 0.44",
    detail: "Team design specification",
  },
  {
    label: "Predicted Fairing Cd",
    value: "0.35",
    detail: "Reported CFD result",
  },
  {
    label: "Validation Error",
    value: "6.41%",
    detail: "Sphere validation case",
  },
];

const integrationChallenges = [
  {
    title: "Front-Wheel-Drive Packaging",
    description:
      "The front axle needed to accommodate steering, braking, drivetrain, and wheel components within the same constrained region.",
  },
  {
    title: "Steering-System Revision",
    description:
      "Front-wheel-drive integration led the team to reconsider the original steering layout and adopt a more compact under-seat mechanism.",
  },
  {
    title: "Fairing Clearance",
    description:
      "The aerodynamic body needed to avoid interference with steering movement, rider visibility, wheel travel, and subsystem maintenance.",
  },
];

const structuralResults = [
  {
    title: "RPS Top Load",
    value: "0.58 cm",
    detail: "Maximum deformation",
    safetyFactor: "1.7",
  },
  {
    title: "RPS Side Load",
    value: "0.0054 cm",
    detail: "Maximum deformation",
    safetyFactor: "11.6",
  },
  {
    title: "Weight Distribution",
    value: "0.083 cm",
    detail: "Maximum deformation",
    safetyFactor: "2.3",
  },
];

const gallery = [
  {
    src: "/projects/guacamaya-design/images/hpvc-cad-assembly.png",
    alt: "CAD assembly of the Guacamaya human-powered vehicle",
    caption: "Guacamaya vehicle CAD assembly",
    fit: "contain",
  },
  {
    src: "/projects/guacamaya-design/images/fairing-cad-design.png",
    alt: "CAD model of the proposed Guacamaya aerodynamic fairing",
    caption: "Proposed aerodynamic fairing geometry",
    fit: "contain",
  },
  {
    src: "/projects/guacamaya-design/images/fairing-aero-analysis.png",
    alt: "ANSYS aerodynamic analysis of the Guacamaya fairing",
    caption: "Aerodynamic analysis and flow evaluation",
    fit: "contain",
  },
  {
    src: "/projects/guacamaya-design/images/hpvc-steering-mechanism.png",
    alt: "CAD model of the Guacamaya steering mechanism",
    caption: "Front-axle steering-system integration",
    fit: "contain",
  },
];

const lessons = [
  {
    title: "Engineering value is broader than performance",
    description:
      "A component can produce a measurable performance improvement and still not justify its added weight, cost, manufacturing effort, or development risk.",
  },
  {
    title: "Validate the analysis workflow",
    description:
      "Comparing the CFD method against a body with a known drag-coefficient range increased confidence before evaluating the custom geometry.",
  },
  {
    title: "Subsystems cannot be designed independently",
    description:
      "The fairing, steering, drivetrain, brakes, wheels, and frame competed for the same space and required continuous cross-team coordination.",
  },
  {
    title: "Not building a feature can be the correct result",
    description:
      "The purpose of analysis is to guide decisions. Eliminating a feature that does not provide sufficient total-system value is a successful engineering outcome.",
  },
];

export default function GuacamayaDesignPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <ProjectHeader />

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-32 md:px-8 md:pb-16 md:pt-40">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
          Human-Powered Vehicle Design
        </p>

        <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Guacamaya
              <br />
              HPVC Design
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              Aerodynamic evaluation and vehicle-level design integration for
              a front-wheel-drive human-powered competition trike.
            </p>
          </div>

          <div className="inline-flex w-fit items-center rounded-full border border-[color:var(--accent)] bg-blue-500/10 px-5 py-2 font-semibold text-[color:var(--accent)]">
            Aerodynamics Lead
          </div>
        </div>
      </section>

      {/* Hero image */}

      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
          <Image
            src="/projects/guacamaya-design/images/hpvc-cad-assembly.png"
            alt="CAD assembly of the Guacamaya human-powered vehicle"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-contain p-5 md:p-10"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-20 text-white">
            <p className="text-sm font-medium">
              Guacamaya human-powered vehicle design
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

      {/* Objective and role */}

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            The Objective
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Was the Fairing Worth Building?
          </h2>

          <p className="case-study-copy mt-6">
            My primary responsibility was to determine whether an aerodynamic
            fairing would provide enough total vehicle benefit to justify its
            development.
          </p>

          <p className="case-study-copy mt-5">
            The evaluation considered more than drag reduction. The fairing
            would also introduce additional weight, tooling, material cost,
            manufacturing lead time, visibility constraints, and integration
            requirements.
          </p>
        </div>

        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 md:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            My Contribution
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Aerodynamics and Integration
          </h2>

          <ul className="mt-6 space-y-4 text-[color:var(--muted)]">
            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Evaluated fairing geometry and aerodynamic performance using
              ANSYS CFD.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Compared aerodynamic improvement against manufacturing and
              system-integration demands.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Supported steering, braking, and drivetrain packaging around the
              front axle.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Communicated the design tradeoff and recommendation to the larger
              HPVC team.
            </li>
          </ul>
        </div>
      </section>

      {/* Analysis method */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Engineering Method
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              From Concept to Design Decision
            </h2>

            <p className="case-study-copy mt-5">
              The analysis followed a staged process that connected geometry,
              CFD validation, aerodynamic performance, and practical
              manufacturability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {analysisSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-7"
              >
                <p className="font-mono text-sm font-bold text-[color:var(--accent)]">
                  STEP {step.number}
                </p>

                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

                <p className="case-study-copy mt-3">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CFD metrics */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            CFD Evaluation
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Aerodynamic Analysis
          </h2>

          <p className="case-study-copy mt-5">
            The ANSYS workflow used a k-ε turbulence model, a no-slip boundary
            condition, and a 25 mph inlet velocity. A sphere with a known drag
            range was analyzed first to validate the methodology.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {analysisMetrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <p className="text-sm font-medium text-[color:var(--accent)]">
                {metric.label}
              </p>

              <p className="mt-4 text-3xl font-extrabold">{metric.value}</p>

              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {metric.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src="/projects/guacamaya-design/images/fairing-aero-analysis.png"
                alt="ANSYS aerodynamic analysis of the fairing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-5"
              />
            </div>

            <figcaption className="case-study-caption bg-[color:var(--surface)] px-5 py-4 text-sm">
              ANSYS aerodynamic analysis
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src="/projects/guacamaya-design/images/fairing-cad-design.png"
                alt="CAD model of the proposed fairing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-5"
              />
            </div>

            <figcaption className="case-study-caption bg-[color:var(--surface)] px-5 py-4 text-sm">
              Proposed fairing geometry
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Decision */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-amber-500/40 bg-amber-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
              Design Decision
            </p>

            <p className="mt-6 text-4xl font-extrabold text-amber-500">
              Do Not Proceed
            </p>

            <p className="mt-5 leading-7 text-[color:var(--muted)]">
              The proposed fairing was not advanced into manufacturing for the
              final competition vehicle.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Engineering Tradeoff
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Performance Was Only One Part of the Decision
            </h2>

            <p className="case-study-copy mt-6">
              The CFD result indicated that the fairing could meet the
              aerodynamic target. However, an engineering decision must
              consider the entire system rather than one performance metric.
            </p>

            <p className="case-study-copy mt-5">
              The expected benefit was weighed against added mass,
              manufacturing uncertainty, material and tooling requirements,
              schedule limitations, subsystem clearance, and limited team
              resources. The team therefore redirected effort toward systems
              with greater immediate impact on vehicle reliability and
              competition readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Front axle integration */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Cross-Functional Design
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Front-Axle System Integration
          </h2>

          <p className="case-study-copy mt-5">
            After the aerodynamic evaluation, I supported the integration of
            steering, braking, and power-transmission systems located around
            the front axle.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <figure className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src="/projects/guacamaya-design/images/hpvc-steering-mechanism.png"
                alt="Guacamaya front steering mechanism"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-5"
              />
            </div>

            <figcaption className="case-study-caption bg-[color:var(--surface)] px-5 py-4 text-sm">
              Steering and front-axle packaging
            </figcaption>
          </figure>

          <div className="space-y-5">
            {integrationChallenges.map((challenge) => (
              <article
                key={challenge.title}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
              >
                <h3 className="text-xl font-bold">{challenge.title}</h3>

                <p className="case-study-copy mt-3">
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Structural design context */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Team Design Validation
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Rollover-Protection and Structural Analysis
            </h2>

            <p className="case-study-copy mt-5">
              The structural analyses below were completed as part of the
              overall HPVC team effort. My primary role was aerodynamics, but
              these results provide important context for the complete vehicle
              design and its competition requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {structuralResults.map((result) => (
              <article
                key={result.title}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-6"
              >
                <p className="text-sm font-medium text-[color:var(--accent)]">
                  {result.title}
                </p>

                <p className="mt-4 text-3xl font-extrabold">{result.value}</p>

                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {result.detail}
                </p>

                <p className="mt-5 border-t border-[color:var(--border)] pt-4 text-sm">
                  Safety factor:{" "}
                  <span className="font-bold text-[color:var(--accent)]">
                    {result.safetyFactor}
                  </span>
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                src: "/projects/guacamaya-design/images/rps-top-deformation.png",
                alt: "RPS top-load deformation analysis",
                caption: "RPS top-load deformation",
              },
              {
                src: "/projects/guacamaya-design/images/rps-top-stress.png",
                alt: "RPS top-load stress analysis",
                caption: "RPS top-load equivalent stress",
              },
              {
                src: "/projects/guacamaya-design/images/rps-side-deformation.png",
                alt: "RPS side-load deformation analysis",
                caption: "RPS side-load deformation",
              },
              {
                src: "/projects/guacamaya-design/images/rps-side-stress.png",
                alt: "RPS side-load stress analysis",
                caption: "RPS side-load equivalent stress",
              },
            ].map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-5"
                  />
                </div>

                <figcaption className="case-study-caption bg-[color:var(--background)] px-5 py-4 text-sm">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Design Gallery
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Vehicle and Subsystem Development
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={
                    item.fit === "contain"
                      ? "object-contain p-5"
                      : "object-cover"
                  }
                />
              </div>

              <figcaption className="case-study-caption bg-[color:var(--surface)] px-5 py-4 text-sm">
                {item.caption}
              </figcaption>
            </figure>
          ))}
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
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Technical Documentation
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              HPVC Critical Design Review
            </h2>

            <p className="case-study-copy mt-4 max-w-2xl">
              View the complete team report for detailed design selection,
              structural analysis, aerodynamic methodology, subsystem
              calculations, testing plans, and competition requirements.
            </p>
          </div>

          <a
            href="/projects/guacamaya-design/documents/hpvc-final-report.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex shrink-0 items-center rounded-xl bg-[color:var(--accent)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)] md:mt-0"
          >
            View Design Report
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
        </div>
      </section>

      {/* Navigation */}

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <Link
            href="/projects/arduino-race-car"
            className="text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
          >
            ← Previous: Arduino Race Car
          </Link>

          <Link
            href="/projects/guacamaya-manufacturing"
            className="font-semibold text-[color:var(--accent)] transition hover:underline"
          >
            Next: Guacamaya Manufacturing →
          </Link>
        </div>
      </section>
    </main>
  );
}