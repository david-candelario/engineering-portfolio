import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectHeader from "@/components/ProjectHeader";

export const metadata: Metadata = {
  title: "Autonomous Arduino Race Car | David Candelario",
  description:
    "Autonomous obstacle-avoiding Arduino race car developed for a university speed competition.",
};

const quickFacts = [
  {
    label: "Duration",
    value: "4 Weeks",
  },
  {
    label: "Competition",
    value: "University Race",
  },
  {
    label: "Contribution",
    value: "Programming & Electronics",
  },
  {
    label: "Result",
    value: "Second Place",
  },
];

const systemComponents = [
  {
    title: "Three Ultrasonic Sensors",
    description:
      "Measured forward and lateral obstacle distances to support real-time steering decisions.",
  },
  {
    title: "Servo Steering",
    description:
      "Actuated the front steering mechanism based on sensor feedback from the Arduino.",
  },
  {
    title: "H-Bridge Motor Control",
    description:
      "Allowed the rear drive motors to move forward or reverse during navigation and recovery.",
  },
  {
    title: "Infrared Sensor",
    description:
      "Supported reverse behavior when the vehicle encountered an obstacle or became trapped.",
  },
];

const debuggingSteps = [
  {
    number: "01",
    title: "Identify inconsistent behavior",
    description:
      "Initial testing produced unreliable ultrasonic readings, causing incorrect steering decisions and unstable navigation.",
  },
  {
    number: "02",
    title: "Separate software and hardware causes",
    description:
      "We reviewed the control logic, checked wiring, and tested each sensor individually rather than assuming the code was the only issue.",
  },
  {
    number: "03",
    title: "Replace unreliable components",
    description:
      "Multiple ultrasonic sensors were replaced and retested until the hardware produced dependable distance measurements.",
  },
  {
    number: "04",
    title: "Tune and validate the complete system",
    description:
      "The steering and reverse logic were refined through repeated course testing until the vehicle could navigate consistently at competition speed.",
  },
];

const gallery = [
  {
    src: "/projects/arduino-race-car/images/arduino-car-basic-assembly.jpg",
    alt: "Early assembly stage of the Arduino race car",
    caption: "Initial mechanical and electronic assembly",
    fit: "cover",
  },
  {
    src: "/projects/arduino-race-car/images/arduino-car-final-assembly.jpg",
    alt: "Completed Arduino race car assembly",
    caption: "Completed vehicle assembly",
    fit: "cover",
  },
  {
    src: "/projects/arduino-race-car/images/arduino-car-irl-fully-built-front.jpg",
    alt: "Front view of the completed autonomous race car",
    caption: "Front sensor arrangement",
    fit: "cover",
  },
  {
    src: "/projects/arduino-race-car/images/arduino-car-irl-fully-built-side.jpg",
    alt: "Side view of the completed autonomous race car",
    caption: "Completed vehicle side view",
    fit: "cover",
  },
  {
    src: "/projects/arduino-race-car/images/arduino-car-ultrasonic-sensor-assembly.jpg",
    alt: "Ultrasonic sensor assembly used on the Arduino race car",
    caption: "Ultrasonic sensor integration",
    fit: "cover",
  },
  {
    src: "/projects/arduino-race-car/images/arduino-car-steering-system.png",
    alt: "CAD or engineering view of the race car steering system",
    caption: "Servo-actuated steering system",
    fit: "contain",
  },
];

const lessons = [
  {
    title: "Troubleshoot systematically",
    description:
      "Testing components individually made it possible to separate faulty hardware from errors in the control logic.",
  },
  {
  title: "Component quality affects development time",
  description:
    "Inconsistent low-cost sensors increased debugging time and made it more difficult to separate hardware failures from software problems. More reliable components would improve repeatability and reduce unnecessary troubleshooting.",
},
  {
  title: "Wheel selection must match the operating surface",
  description:
    "The wheels provided limited traction on the smooth competition floor, reducing acceleration, steering accuracy, and stability. A future design should validate wheel material, tread, and grip on the actual operating surface.",
},
{
  title: "Reliable power delivery is essential",
  description:
    "The AA battery configuration did not provide sufficiently consistent power for the combined motor, sensor, and control-system demands. A rechargeable battery pack selected for the required voltage, current capacity, runtime, and weight would improve reliability.",
},
  {
    title: "Integration determines performance",
    description:
      "Functional sensors, motors, and code were not enough individually. The complete system required repeated testing and tuning under realistic operating conditions.",
  },
  {
    title: "Reliability matters as much as speed",
    description:
      "Consistently completing the course was more valuable than maximizing speed with unstable sensing, poor traction, or unreliable power delivery.",
  },
];

export default function ArduinoRaceCarPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* Hero heading */}
<ProjectHeader />
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-32 md:px-8 md:pb-16 md:pt-30">
      
        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
          Embedded Systems Project
        </p>

        <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Autonomous
              <br />
              Arduino Race Car
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--muted)]">
              A speed-focused autonomous vehicle developed to navigate an
              obstacle course using sensor feedback, servo steering, and
              bidirectional motor control.
            </p>
          </div>

          <div className="inline-flex w-fit items-center rounded-full border border-emerald-500/50 bg-emerald-500/10 px-5 py-2 font-semibold text-emerald-500">
            <span aria-hidden="true" className="mr-2">
              🥈
            </span>
            Second Place
          </div>
        </div>
      </section>

      {/* Hero image */}

      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm">
          <Image
            src="/projects/arduino-race-car/images/arduino-car-irl-fully-built-front.jpg"
            alt="Completed autonomous Arduino race car viewed from the front"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16 text-white md:px-8">
            <p className="text-sm font-medium">
              Final autonomous race-car configuration
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <p className="text-sm font-medium text-[color:var(--accent)]">
                {fact.label}
              </p>

              <p className="mt-3 font-semibold text-[color:var(--foreground)]">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge and contribution */}

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            The Objective
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Engineering Challenge
          </h2>

          <p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
            Design and program an autonomous vehicle capable of navigating an
            obstacle course at competitive speed while avoiding collisions
            through sensor feedback and real-time steering corrections.
          </p>

          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            The design needed to combine obstacle detection, steering,
            propulsion, and reverse recovery into one reliable control system.
          </p>
        </div>

        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 md:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            My Contribution
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Programming and Integration
          </h2>

          <ul className="mt-6 space-y-4 text-[color:var(--muted)]">
            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Developed and refined the autonomous steering and recovery logic.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Integrated ultrasonic and infrared sensors with the Arduino
              control system.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Tested sensor behavior and helped isolate unreliable hardware.
            </li>

            <li className="flex gap-3">
              <span className="mt-1 text-[color:var(--accent)]">●</span>
              Tuned steering response and motor behavior through repeated
              course testing.
            </li>
          </ul>
        </div>
      </section>

      {/* System architecture */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            System Design
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Control Architecture
          </h2>

          <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
            Environmental data was collected by the sensors, interpreted by the
            Arduino, and converted into steering and motor-control commands.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {systemComponents.map((component, index) => (
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
          <span>Sensors</span>
          <span className="text-[color:var(--accent)]">→</span>
          <span>Arduino Control Logic</span>
          <span className="text-[color:var(--accent)]">→</span>
          <span>Servo Steering</span>
          <span className="text-[color:var(--accent)]">+</span>
          <span>Motor Control</span>
        </div>
      </section>

      {/* Debugging process */}

      <section className="border-y border-[color:var(--border)] bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Primary Technical Challenge
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Resolving Unreliable Sensor Readings
            </h2>

            <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
              The ultrasonic sensors initially produced inconsistent
              measurements. Because the symptoms could have originated from
              the wiring, hardware, timing, or control logic, the problem
              required an iterative troubleshooting process.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {debuggingSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-7"
              >
                <p className="font-mono text-sm font-bold text-[color:var(--accent)]">
                  STEP {step.number}
                </p>

                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

                <p className="case-study-copy mt-3">
  {step.description}
</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
            Development Gallery
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            From Assembly to Competition
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
              Demonstration
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Testing and Competition
            </h2>

            <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">
              These videos document obstacle-avoidance testing and the
              vehicle’s successful competition finish.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
  <article className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)]">
    <div className="flex justify-center bg-black/95 p-4">
      <video
        controls
        preload="metadata"
        playsInline
        className="aspect-[9/16] w-full max-w-[320px] rounded-xl bg-black object-contain"
      >
        <source
          src="/projects/arduino-race-car/videos/arduino-car-obstacle-test.mp4"
          type="video/mp4"
        />

        Your browser does not support embedded video.
      </video>
    </div>

    <div className="p-5">
      <h3 className="text-lg font-bold">
        Obstacle-Avoidance Test
      </h3>

      <p className="case-study-copy mt-2">
        Validation of autonomous steering, obstacle detection, and sensor
        response under realistic course conditions.
      </p>
    </div>
  </article>

  <article className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)]">
    <div className="flex justify-center bg-black/95 p-4">
      <video
        controls
        preload="metadata"
        playsInline
        className="aspect-[9/16] w-full max-w-[320px] rounded-xl bg-black object-contain"
      >
        <source
          src="/projects/arduino-race-car/videos/arduino-car-competition-finish.mp4"
          type="video/mp4"
        />

        Your browser does not support embedded video.
      </video>
    </div>

    <div className="p-5">
      <h3 className="text-lg font-bold">
        Competition Finish
      </h3>

      <p className="case-study-copy mt-2">
        The completed vehicle successfully finished the autonomous race and
        earned second place.
      </p>
    </div>
  </article>
</div>
        </div>
      </section>

      {/* Result and lessons */}

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-emerald-500/40 bg-emerald-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">
              Final Result
            </p>

            <div className="mt-5 flex items-baseline gap-3 text-emerald-500">
  <span className="text-6xl font-extrabold">
    2nd
  </span>

  <span className="text-2xl font-bold">
    Place
  </span>
</div>

<h2 className="mt-4 text-2xl font-bold">
  Autonomous Speed Competition
</h2>

            <h2 className="mt-4 text-2xl font-bold">
              Competition Placement
            </h2>

            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              The vehicle successfully completed the autonomous course after
              resolving its sensor and integration issues.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Reflection
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Lessons Learned
            </h2>

            <div className="mt-8 space-y-5">
              {lessons.map((lesson) => (
                <article
                  key={lesson.title}
                  className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
                >
                  <h3 className="text-xl font-bold">{lesson.title}</h3>

                  <p className="case-study-copy mt-3">
  {lesson.description}
</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              Technical Documentation
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Arduino Race Car Report
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[color:var(--muted)]">
              View the complete project report for additional information on
              the vehicle, control system, testing, and final results.
            </p>
          </div>

          <a
            href="/projects/arduino-race-car/documents/arduino-car-report.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex shrink-0 items-center rounded-xl bg-[color:var(--accent)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)] md:mt-0"
          >
            View Project Report
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
        </div>
      </section>

      {/* Next project */}

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <Link
            href="/#experience"
            className="text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
          >
            ← All engineering projects
          </Link>

          <Link
            href="/projects/guacamaya-design"
            className="font-semibold text-[color:var(--accent)] transition hover:underline"
          >
            Next: Guacamaya HPVC Design →
          </Link>
        </div>
      </section>
    </main>
  );
}