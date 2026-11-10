import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, SectionTitle } from "@/components/ui/section-title";
import { ProjectCard } from "@/components/project-card";
import { HeroCarousel } from "@/components/hero-carousel";

const projects = [
  ["/images/project-1.jpg", "The Calm Residence", "Residential · Living room"],
  ["/images/project-2.jpg", "Earth & Ember", "Residential · Kitchen"],
  ["/images/project-3.jpg", "The Sunday Home", "Residential · Bedroom"],
];
const services = [
  [
    "01",
    "Interior design",
    "A complete design journey, from the first sketch to the final finishing touch.",
  ],
  [
    "02",
    "Space planning",
    "Layouts that make every square foot feel purposeful, open and effortless.",
  ],
  [
    "03",
    "Renovation",
    "A fresh perspective on existing spaces, with craft and detail at the heart.",
  ],
  [
    "04",
    "Commercial spaces",
    "Distinctive environments that bring your brand and people together.",
  ],
];

export function HomeContent() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>INTERIORS WITH INTENTION</Eyebrow>
          <h1>
            Make room for
            <br />
            <em>beautiful living.</em>
          </h1>
          <p>
            We create thoughtful spaces that balance timeless design, everyday
            comfort and the way you really live.
          </p>
          <div className="hero-actions">
            <Button asChild>
              <Link href="/projects">
                Explore our work <ArrowUpRight size={17} />
              </Link>
            </Button>
            <Link className="text-link" href="/about">
              <span className="play-icon">
                <Play size={13} fill="currentColor" />
              </span>{" "}
              Get to know us
            </Link>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <img src="/images/team-1.jpg" alt="Designer" />
              <img src="/images/team-2.jpg" alt="Designer" />
              <img src="/images/team-3.jpg" alt="Designer" />
            </div>
            <div>
              <strong>25+ years</strong>
              <small>of shaping spaces</small>
            </div>
            <span className="proof-divider" />
            <div>
              <strong>120+</strong>
              <small>projects delivered</small>
            </div>
          </div>
        </div>
        <HeroCarousel />
        <a className="scroll-cue" href="#story">
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </a>
      </section>

      <section className="story section-pad" id="story">
        <div className="story-images">
          <img
            className="story-main"
            src="/images/about-1.jpg"
            alt="iStudio interior design detail"
          />
          <img
            className="story-small"
            src="/images/about-2.jpg"
            alt="Natural material interior detail"
          />
          <div className="since-stamp">
            <strong>35</strong>
            <span>
              YEARS OF
              <br />
              DESIGNING
            </span>
          </div>
        </div>
        <div className="story-copy">
          <Eyebrow>A LITTLE ABOUT US</Eyebrow>
          <h2>
            Good design is
            <br />
            felt, not just <em>seen.</em>
          </h2>
          <p className="lead">
            We believe a home should tell your story. Our studio brings together
            thoughtful planning, honest materials and a deep appreciation for
            the details that make a space yours.
          </p>
          <p>
            From the first conversation to the finishing touches, we make the
            process personal, collaborative and refreshingly simple.
          </p>
          <div className="check-list">
            <span>
              <Check /> Considered, personal design
            </span>
            <span>
              <Check /> Sustainable material choices
            </span>
            <span>
              <Check /> Clear process, thoughtful budgets
            </span>
          </div>
          <Button asChild variant="outline">
            <Link href="/about">
              More about our studio <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="WHAT WE DO"
            title={
              <>
                Design that works
                <br />
                beautifully for <em>you.</em>
              </>
            }
            description="From a single room refresh to a complete transformation, we bring clarity and creativity to every project."
          />
          <Button asChild variant="outline">
            <Link href="/services">
              All services <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
        <div className="service-grid">
          {services.map(([n, title, desc]) => (
            <Link href="/services" className="service-item" key={n}>
              <span className="service-num">{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <ArrowUpRight className="service-arrow" />
            </Link>
          ))}
        </div>
      </section>

      <section className="projects-section section-pad">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="SELECTED WORK"
            title={
              <>
                A few spaces we&apos;re
                <br />
                <em>proud of.</em>
              </>
            }
            description="Every project starts with a conversation and ends with a space that feels just right."
          />
          <Button asChild variant="outline">
            <Link href="/projects">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p[1]}
              image={p[0]}
              title={p[1]}
              category={p[2]}
              number={`0${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-inner">
          <Eyebrow>OUR DESIGN PHILOSOPHY</Eyebrow>
          <h2>
            “A room should never
            <br />
            be put together. It should
            <br />
            <em>be lived in.</em>”
          </h2>
          <p>— ALBERT HADLEY</p>
        </div>
        <img src="/images/hero-slider-2.jpg" alt="Warm neutral interior" />
      </section>

      <section className="why-section section-pad">
        <div className="why-image">
          <img src="/images/service-1.jpg" alt="Carefully designed interior" />
          <div className="why-image-caption">
            DETAILS MAKE
            <br />
            <em>THE DIFFERENCE.</em>
          </div>
        </div>
        <div className="why-copy">
          <Eyebrow>WHY iSTUDIO</Eyebrow>
          <h2>
            Good spaces.
            <br />
            <em>Good feelings.</em>
          </h2>
          <p>
            We pair creative thinking with practical expertise, so the result
            looks beautiful and works beautifully too.
          </p>
          <div className="why-points">
            <div>
              <strong>25+</strong>
              <span>Years of experience</span>
            </div>
            <div>
              <strong>120+</strong>
              <span>Projects completed</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Personal attention</span>
            </div>
          </div>
          <Button asChild>
            <Link href="/contact">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>
      </section>

      <section className="design-journal section-pad">
        <div className="journal-intro">
          <span className="eyebrow">
            <span /> THE DESIGN JOURNAL
          </span>
          <h2>
            Spaces are shaped
            <br />
            by <em>the details.</em>
          </h2>
          <p>
            Interior design is more than choosing a colour or a sofa. It is the
            considered relationship between light, proportion, texture, movement
            and the rituals of everyday life.
          </p>
        </div>
        <div className="journal-grid">
          <article className="journal-card journal-feature">
            <img
              src="/images/about-2.jpg"
              alt="Natural wood and tactile finishes in a considered interior"
            />
            <div>
              <span>01 / MATERIALITY</span>
              <h3>Let materials tell their own story.</h3>
              <p>
                Natural timber, tactile stone, linen and hand-finished surfaces
                bring warmth, depth and a sense of permanence to a room.
              </p>
            </div>
          </article>
          <article className="journal-card">
            <img
              src="/images/service-2.jpg"
              alt="Sunlight entering a thoughtfully planned room"
            />
            <div>
              <span>02 / LIGHT</span>
              <h3>Design with the daylight.</h3>
              <p>
                We study the way sunlight moves through a space, then layer
                ambient, task and accent lighting for comfort throughout the
                day.
              </p>
            </div>
          </article>
          <article className="journal-card">
            <img
              src="/images/service-3.jpg"
              alt="Carefully arranged furniture and interior details"
            />
            <div>
              <span>03 / FUNCTION</span>
              <h3>Make every square foot count.</h3>
              <p>
                Clear circulation, useful storage and furniture scaled to the
                room make beautiful spaces genuinely easy to live in.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="material-section section-pad">
        <div className="material-heading">
          <span className="eyebrow">
            <span /> OUR MATERIAL PALETTE
          </span>
          <h2>
            Honest materials.
            <br />
            <em>Lasting character.</em>
          </h2>
          <p>
            We build palettes around the way a space should feel: grounded,
            calm, tactile and personal. Every finish is selected for its visual
            character as well as its durability and upkeep.
          </p>
        </div>
        <div className="material-swatches">
          <div className="swatch swatch-oak">
            <span>01</span>
            <strong>Natural oak</strong>
            <small>Warmth · Grain · Longevity</small>
          </div>
          <div className="swatch swatch-stone">
            <span>02</span>
            <strong>Quiet stone</strong>
            <small>Texture · Patina · Permanence</small>
          </div>
          <div className="swatch swatch-linen">
            <span>03</span>
            <strong>Soft linen</strong>
            <small>Comfort · Breathability · Ease</small>
          </div>
          <div className="swatch swatch-metal">
            <span>04</span>
            <strong>Brushed metal</strong>
            <small>Contrast · Detail · Precision</small>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="process-heading">
          <span className="eyebrow">
            <span /> A CLEAR, COLLABORATIVE PROCESS
          </span>
          <h2>
            From first sketch
            <br />
            to <em>final styling.</em>
          </h2>
          <p>
            Good projects are built on clear communication. We guide each
            decision, keep the details organised and make sure the finished
            space feels like you.
          </p>
        </div>
        <div className="process-steps">
          <div>
            <b>01</b>
            <h3>Discover</h3>
            <p>
              We learn about your lifestyle, priorities, budget, timeline and
              the feeling you want your space to have.
            </p>
          </div>
          <div>
            <b>02</b>
            <h3>Concept</h3>
            <p>
              We develop layouts, moodboards, colour stories and material
              directions into one coherent design vision.
            </p>
          </div>
          <div>
            <b>03</b>
            <h3>Develop</h3>
            <p>
              Drawings, specifications, lighting plans and finish selections
              turn the concept into a buildable plan.
            </p>
          </div>
          <div>
            <b>04</b>
            <h3>Deliver</h3>
            <p>
              We coordinate implementation, review the details and style the
              space so it is ready to be lived in.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <Eyebrow>HAVE A SPACE IN MIND?</Eyebrow>
          <h2>
            Let&apos;s make it
            <br />
            <em>mean something.</em>
          </h2>
        </div>
        <Button asChild>
          <Link href="/contact">
            Tell us about your project <ArrowUpRight size={17} />
          </Link>
        </Button>
        <span className="cta-orbit">i.</span>
      </section>
    </>
  );
}
