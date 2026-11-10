import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

const people = [
  ["/images/team-1.jpg", "Boris Johnson", "Principal architect"],
  ["/images/team-2.jpg", "Donald Pakura", "Senior designer"],
  ["/images/team-3.jpg", "Bradley Gordon", "Interior architect"],
  ["/images/team-4.jpg", "Alexander Bell", "Project lead"],
];

export default function TeamPage() {
  return <><PageHero label="THE PEOPLE BEHIND THE PLACES" title={<>Good people make<br/><em>great spaces.</em></>} desc="A close-knit team of curious minds, creative thinkers and detail lovers." image="/images/team-1.jpg"/><section className="section-pad"><SectionTitle eyebrow="MEET THE TEAM" title="A little talent. A lot of heart." description="We bring different perspectives to the table, united by a shared love of considered design."/><div className="team-grid">{people.map(([image, name, role])=><article className="team-card" key={name}><img src={image} alt={name}/><h3>{name}</h3><p>{role}</p></article>)}</div></section></>;
}
