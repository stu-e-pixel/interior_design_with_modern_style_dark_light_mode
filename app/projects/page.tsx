import { PageHero } from "@/components/page-hero";
import { ProjectsGallery } from "@/components/projects-gallery";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="OUR PORTFOLIO"
        title={
          <>
            Spaces that tell
            <br />
            <em>their own story.</em>
          </>
        }
        desc="A collection of homes and spaces, each shaped by the people who live, work and gather in them."
        image="/images/project-1.jpg"
      />
      <section className="section-pad">
        <ProjectsGallery />
      </section>
    </>
  );
}
