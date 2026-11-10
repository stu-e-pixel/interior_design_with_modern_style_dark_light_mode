import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="THE STUDIO"
        title={
          <>
            Spaces with soul.
            <br />
            <em>Designed to last.</em>
          </>
        }
        desc="A design studio built around a simple idea: the best spaces make everyday life feel a little more extraordinary."
        image="/images/about-1.jpg"
      />
      <section className="section-pad inner-story">
        <img src="/images/about-2.jpg" alt="Studio interior" />
        <div>
          <Eyebrow>OUR STORY</Eyebrow>
          <h2>
            Designing a better
            <br />
            <em>everyday since 1990.</em>
          </h2>
          <p>
            For over three decades, iStudio has helped people turn houses into
            homes and empty spaces into meaningful places. Our work is guided by
            curiosity, craftsmanship and a belief that good design should feel
            effortless.
          </p>
          <p>
            We listen closely, think carefully and create with intention —
            bringing together the right people, materials and ideas for every
            brief.
          </p>
          <Button asChild>
            <Link href="/contact">
              Meet your design partner <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
      <section className="about-approach section-pad">
        <div>
          <Eyebrow>HOW WE THINK</Eyebrow>
          <h2>
            Good interiors balance
            <br />
            <em>beauty and belonging.</em>
          </h2>
        </div>
        <div className="approach-copy">
          <p>
            We start with people, not Pinterest boards. How do you move through
            the morning? Where do friends gather? What needs to be hidden,
            displayed, softened or brought into the light? These everyday
            observations become the foundation for a design that feels natural
            to use.
          </p>
          <p>
            Our work brings together architecture, interior architecture,
            material research and styling. We pay attention to the big moves —
            proportion, planning and light — and the small ones too: a handle
            that feels right in the hand, a shadow line, the grain of a timber
            veneer.
          </p>
        </div>
      </section>
      <section className="values-strip">
        {[
          ["01", "People first"],
          ["02", "Timeless over trends"],
          ["03", "Honest materials"],
          ["04", "Thoughtful details"],
        ].map(([number, value]) => (
          <div key={number}>
            <span>{number}</span>
            <h3>{value}</h3>
          </div>
        ))}
      </section>
    </>
  );
}
