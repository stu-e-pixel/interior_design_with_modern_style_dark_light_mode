import { PageHero } from "@/components/page-hero";
import { Eyebrow } from "@/components/ui/section-title";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="LET'S TALK"
        title={
          <>
            Have a project
            <br />
            <em>in mind?</em>
          </>
        }
        desc="Tell us a little about your space. We'd love to hear what you're dreaming up."
        image="/images/hero-slider-3.jpg"
      />
      <section className="section-pad contact-layout">
        <div>
          <Eyebrow>START A CONVERSATION</Eyebrow>
          <h2>
            Good things begin
            <br />
            with a <em>hello.</em>
          </h2>
          <p>
            Whether you have a clear brief or just an idea taking shape,
            we&apos;re here to help you explore what&apos;s possible.
          </p>
          <div className="contact-info">
            <div>
              <span>Email</span>
              <a href="mailto:hello@istudio.design">hello@istudio.design</a>
            </div>
            <div>
              <span>Phone</span>
              <a href="tel:+0123456789">+01 234 567 890</a>
            </div>
            <div>
              <span>Studio</span>
              <p>Malda, West Bengal, India</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
