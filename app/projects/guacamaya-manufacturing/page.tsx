import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectHeader from "@/components/ProjectHeader";

export const metadata: Metadata = {
  title: "Guacamaya Manufacturing",
  description:
    "Fabrication, assembly, front-axle integration, troubleshooting, and competition experience for the Guacamaya human-powered vehicle.",
};

const quickFacts = [
  {
    label: "Competition",
    value: "ASME HPVC",
  },
  {
    label: "Contribution",
    value: "Fabrication & Assembly",
  },
  {
    label: "Processes",
    value: "Welding & Tube Bending",
  },
  {
    label: "Recognition",
    value: "Sportsmanship Award",
  },
];

const manufacturingStages = [
  {
    number: "01",
    title: "Prepare the frame",
    description:
      "The initial steel frame required cleaning, preparation, inspection, and modification before final subsystem installation could begin.",
  },
  {
    number: "02",
    title: "Form and fabricate components",
    description:
      "Tubes were measured, bent, cut, drilled, fitted, and welded to convert the CAD design into a functional competition frame.",
  },
  {
    number: "03",
    title: "Integrate the front axle",
    description:
      "The front region combined steering, braking, drivetrain, wheel, and structural components inside a highly constrained assembly.",
  },
  {
    number: "04",
    title: "Test and refine the vehicle",
    description:
      "The team conducted steering, braking, power-transmission, weight, and road tests before transporting the vehicle to competition.",
  },
];

const fabricationSkills = [
  {
    title: "Tube Bending",
    description:
      "Formed structural tubing while accounting for geometry, springback, alignment, and fit with surrounding frame components.",
  },
  {
    title: "Welding",
    description:
      "Developed practical welding skills while joining frame members, mounting brackets, and temporary drivetrain components.",
  },
  {
    title: "Cutting and Drilling",
    description:
      "Prepared tube lengths, holes, attachment points, and interfaces required for assembly and subsystem installation.",
  },
  {
    title: "Grinding and Finishing",
    description:
      "Cleaned welds, polished surfaces, prepared the frame for coating, and improved fit between fabricated components.",
  },
];

const jointResponse = [
  {
    number: "01",
    title: "Procurement shortfall",
    description:
      "The driven front axle required four custom universal joints, but only two were delivered before the vehicle needed to be completed.",
  },
  {
    number: "02",
    title: "Identify an available substitute",
    description:
      "The team investigated commercially available ratchet attachments that could provide limited angular articulation and transmit torque.",
  },
  {
    number: "03",
    title: "Adapt and weld the components",
    description:
      "The substitute components were modified, aligned, and welded into the front-axle assembly as a constrained temporary solution.",
  },
  {
    number: "04",
    title: "Validate basic operation",
    description:
      "Initial testing confirmed acceptable steering motion and power transmission, allowing the trike to become operational before competition.",
  },
];

const gallery = [
  {
    src: "/projects/guacamaya-manufacturing/images/initial-rusty-frame.jpg",
    alt: "Initial steel frame before restoration and manufacturing work",
    caption: "Initial frame condition",
    fit: "cover",
  },
  {
    src: "/projects/guacamaya-manufacturing/images/tube-bender.jpg",
    alt: "Tube-bending equipment used during Guacamaya fabrication",
    caption: "Tube-bending process",
    fit: "cover",
  },
  {
    src: "/projects/guacamaya-manufacturing/images/rusty-frame-side.jpg",
    alt: "Side view of the Guacamaya steel frame during fabrication",
    caption: "Frame fabrication and preparation",
    fit: "cover",
  },
  {
    src: "/projects/guacamaya-manufacturing/images/rusty-frame-back.jpg",
    alt: "Rear view of the Guacamaya frame during fabrication",
    caption: "Rear-frame structure",
    fit: "cover",
  },
  {
    src: "/projects/guacamaya-manufacturing/images/front-axle-manufacturing.jpg",
    alt: "Front-axle manufacturing and component integration",
    caption: "Front-axle manufacturing",
    fit: "cover",
  },
  {
    src: "/projects/guacamaya-manufacturing/images/hpvc-drivetrain-manufacturing.jpg",
    alt: "Guacamaya drivetrain during manufacturing",
    caption: "Drivetrain fabrication and assembly",
    fit: "cover",
  },
  {
    src: "/projects/guacamaya-manufacturing/images/hpvc-irl-assembly.jpg",
    alt: "Guacamaya human-powered vehicle during physical assembly",
    caption: "Vehicle assembly and integration",
    fit: "cover",
  },
  {
    src: "/projects/guacamaya-manufacturing/images/hpvc-team-photo.jpg",
    alt: "UPRM HPVC team with the Guacamaya vehicle",
    caption: "UPRM HPVC team",
    fit: "cover",
  },
];

const videos = [
  {
    src: "/projects/guacamaya-manufacturing/videos/frame-spray-painting.mp4",
    title: "Frame Preparation and Painting",
    description:
      "Surface preparation and coating of the fabricated steel frame.",
  },
  {
    src: "/projects/guacamaya-manufacturing/videos/rusty-weight-test.mp4",
    title: "Frame Weight Test",
    description:
      "Early physical evaluation of the frame before final vehicle integration.",
  },
  {
    src: "/projects/guacamaya-manufacturing/videos/pre-competition-braketest.mp4",
    title: "Pre-Competition Brake Test",
    description:
      "Testing the vehicle’s braking response before the competition events.",
  },
  {
    src: "/projects/guacamaya-manufacturing/videos/competition-speed-test.mp4",
    title: "Competition Speed Test",
    description:
      "Operation of the completed Guacamaya vehicle during competition testing.",
  },
  {
    src: "/projects/guacamaya-manufacturing/videos/final-hpvc-vehicle.mp4",
    title: "Completed HPVC Vehicle",
    description:
      "Final assembled vehicle after fabrication and subsystem integration.",
  },
  {
    src: "/projects/guacamaya-manufacturing/videos/competition-endurance-failure.mp4",
    title: "Endurance Event Failure",
    description:
      "Competition footage documenting the drivetrain failure during the endurance event.",
  },
];

const lessons = [
  {
    title: "Procurement risk must be managed early",
    description:
      "Critical custom components should have backup suppliers, earlier deadlines, or alternative designs prepared before manufacturing reaches its final stages.",
  },
  {
    title: "Temporary solutions require realistic validation",
    description:
      "The replacement joints operated during initial testing but were not fully validated under extended cyclic loading and competition-level forces.",
  },
  {
    title: "Manufacturing tolerances affect system performance",
    description:
      "Small alignment errors in the steering and drivetrain interfaces can increase resistance, reduce articulation, and create concentrated loads.",
  },
  {
    title: "Design and manufacturing must develop together",
    description:
      "A component that works in CAD may require additional clearance, fixturing, accessibility, and adjustment once it is physically assembled.",
  },
  {
    title: "Competition results are not the only measure of success",
    description:
      "Despite the drivetrain failure, the project developed practical fabrication, troubleshooting, teamwork, and engineering-integration experience.",
  },
  {
    title: "Professionalism continues after failure",
    description:
      "After our vehicle could no longer compete effectively, the team supported other universities and received the Sportsmanship Award.",
  },
];

export default function GuacamayaManufacturingPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <ProjectHeader />

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-32 md:px-8 md:pb-16 md:pt-40">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
          Human-Powered Vehicle Manufacturing
        </p>

        <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Guacamaya
              <br />
              Manufacturing
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              Converting a competition-vehicle design into a functional
              prototype through fabrication, mechanical integration, testing,
              and rapid problem-solving.
            </p>
          </div>

          <div className="inline-flex w-fit items-center rounded-full border border-emerald-500/50 bg-emerald-500/10 px-5 py-2 font-semibold text-emerald-500">
            Sportsmanship Award
          </div>
        </div>
      </section>

      {/* Hero media */}

      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm">
          <Image
            src="/projects/guacamaya-manufacturing/images/hpvc-irl-assembly.jpg"
            alt="Guacamaya human-powered vehicle during final assembly"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 pb-6 pt-20 text-white md:px-8">
            <p className="text-sm font-medium">
              Guacamaya vehicle assembly and subsystem integration
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

      {/* Challenge and contribution */}

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            The Challenge
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Build a Competition Vehicle Under Real Constraints
          </h2>

          <p className="case-study-copy mt-6">
            The manufacturing phase required converting the team’s CAD models
            and engineering analyses into a physical trike capable of steering,
            braking, transmitting power, and protecting its rider.
          </p>

          <p className="case-study-copy mt-5">
            The work was completed under schedule pressure while managing
            limited fabrication experience, subsystem interference,
            procurement delays, and unexpected component shortages.
          </p>
        </div>

        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 md:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            My Contribution
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Fabrication and Integration
          </h2>

          <ul className="mt-6 space-y-4 text-[color:var(--muted)]">
            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Assisted with tube bending, welding, drilling, cutting,
              grinding, polishing, and frame preparation.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Supported front-axle, steering, braking, and drivetrain
              integration.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Helped develop and install the temporary universal-joint
              replacement.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Participated in physical testing, repairs, competition
              preparation, and final assembly.
            </li>
          </ul>
        </div>
      </section>

      {/* Build process */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Manufacturing Process
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              From Steel Frame to Working Trike
            </h2>

            <p className="case-study-copy mt-5">
              Manufacturing progressed through frame preparation, component
              fabrication, subsystem assembly, and repeated physical testing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {manufacturingStages.map((stage) => (
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

      {/* Fabrication skills */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Hands-On Engineering
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Fabrication Methods
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {fabricationSkills.map((skill, index) => (
            <article
              key={skill.title}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 font-bold text-[color:var(--accent)]">
                {index + 1}
              </div>

              <h3 className="mt-5 text-xl font-bold">{skill.title}</h3>

              <p className="case-study-copy mt-3">{skill.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/projects/guacamaya-manufacturing/images/tube-bender.jpg"
                alt="Tube bending during Guacamaya fabrication"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <figcaption className="case-study-caption px-5 py-4 text-sm">
              Tube-bending equipment used during frame fabrication
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/projects/guacamaya-manufacturing/images/front-axle-manufacturing.jpg"
                alt="Manufacturing work around the Guacamaya front axle"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <figcaption className="case-study-caption px-5 py-4 text-sm">
              Front-axle manufacturing and subsystem integration
            </figcaption>
          </figure>
        </div>
      </section>

      {/* U-joint problem */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
              Primary Manufacturing Challenge
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Missing Front-Axle Universal Joints
            </h2>

            <p className="case-study-copy mt-5">
              The front-wheel-drive design required four custom universal
              joints to transmit torque while allowing the wheels to steer.
              Only two of the required four joints were delivered before the
              competition deadline.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/projects/guacamaya-manufacturing/images/u-joint.jpg"
                  alt="Original universal joint intended for the Guacamaya front axle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-5"
                />
              </div>

              <figcaption className="case-study-caption bg-[color:var(--background)] px-5 py-4 text-sm">
                Intended front-axle universal joint
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/projects/guacamaya-manufacturing/images/replacement-joint-welded.png"
                  alt="Temporary welded replacement joint installed on the Guacamaya vehicle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-5"
                />
              </div>

              <figcaption className="case-study-caption bg-[color:var(--background)] px-5 py-4 text-sm">
                Temporary replacement joint after modification and welding
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {jointResponse.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-7"
              >
                <p className="font-mono text-sm font-bold text-amber-500">
                  RESPONSE {step.number}
                </p>

                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

                <p className="case-study-copy mt-3">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-amber-500/40 bg-amber-500/10 p-8">
            <h3 className="text-2xl font-bold text-amber-500">
              A Constrained Temporary Adaptation
            </h3>

            <p className="case-study-copy mt-4">
              The substitute joint was not treated as an ideal permanent
              design. It was a time-constrained response intended to recover
              basic vehicle functionality after a critical procurement
              failure.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Manufacturing Gallery
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Fabrication and Assembly
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]"
            >
              <div className="relative aspect-[4/3] bg-[color:var(--surface-hover)]">
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

              <figcaption className="case-study-caption px-5 py-4 text-sm">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Videos */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Testing and Competition
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Physical Validation
            </h2>

            <p className="case-study-copy mt-5">
              The videos document manufacturing progress, subsystem testing,
              the completed vehicle, and the eventual endurance-event failure.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {videos.map((video) => (
              <article
                key={video.src}
                className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)]"
              >
                <div className="flex justify-center bg-black">
                  <video
                    controls
                    preload="auto"
                    playsInline
                    className="aspect-video w-full bg-black object-contain"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support embedded video.
                  </video>
                </div>

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

      {/* Competition result */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-emerald-500/40 bg-emerald-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
              Team Recognition
            </p>

            <h2 className="mt-5 text-4xl font-extrabold text-emerald-500">
              Sportsmanship Award
            </h2>

            <p className="case-study-copy mt-5">
              After our drivetrain failure, the team remained engaged and
              assisted other competitors throughout the event.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Competition Outcome
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Success, Failure, and Professional Growth
            </h2>

            <p className="case-study-copy mt-6">
              The adapted joints enabled the trike to steer and transmit power
              during initial testing, allowing the team to transport a
              functional vehicle to Virginia.
            </p>

            <p className="case-study-copy mt-5">
              During competition, the temporary drivetrain solution failed and
              the front axle lost its powered functionality. Although the
              performance result was disappointing, the experience exposed the
              importance of procurement planning, fatigue testing, alignment,
              and validating emergency design changes under realistic loads.
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
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Technical Documentation
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              HPVC Critical Design Review
            </h2>

            <p className="case-study-copy mt-4 max-w-2xl">
              View the complete team report for the vehicle design,
              engineering analyses, subsystem selection, testing procedures,
              and competition requirements.
            </p>
          </div>

          <a
            href="/projects/guacamaya-design/documents/hpvc-final-report.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex shrink-0 items-center rounded-xl bg-[color:var(--accent)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)] md:mt-0"
          >
            View HPVC Report
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
            href="/projects/guacamaya-design"
            className="text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
          >
            ← Previous: Guacamaya HPVC Design
          </Link>

          <Link
            href="/projects/ears-capstone"
            className="font-semibold text-[color:var(--accent)] transition hover:underline"
          >
            Next: EARS Capstone Project →
          </Link>
        </div>
      </section>
    </main>
  );
}