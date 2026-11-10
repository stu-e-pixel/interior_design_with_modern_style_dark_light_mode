import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/ui/section-title";

const services = [
  ["Interior design", "A cohesive vision for your home, from concept and material palettes to furniture, lighting and final styling.", "/images/service-1.jpg"],
  ["Space planning", "A considered layout that improves flow, maximises natural light and makes the most of every corner.", "/images/service-2.jpg"],
  ["Renovation & implementation", "We coordinate the details and trusted craftspeople to bring the design to life with care.", "/images/service-3.jpg"],
  ["Commercial interiors", "Welcoming, functional spaces that express your brand and make a lasting impression.", "/images/service-4.jpg"],
];

export default function ServicesPage() {
  return <>
    <PageHero label="OUR SERVICES" title={<>A thoughtful approach<br/>to every <em>detail.</em></>} desc="A complete range of interior design services, tailored to your space, your style and your life." image="/images/service-2.jpg"/>
    <section className="section-pad"><SectionTitle eyebrow="HOW WE CAN HELP" title="From first thought to final touch." description="Choose the support you need. We&apos;ll take care of the details along the way."/><div className="service-detail-list">{services.map(([title, description, image], index)=><div className="service-detail" key={title}><img src={image} alt={title}/><span>0{index+1}</span><div><h3>{title}</h3><p>{description}</p><Link href="/contact">Discuss this service <ArrowUpRight size={15}/></Link></div></div>)}</div></section>
    <section className="service-includes section-pad">
      <SectionTitle eyebrow="WHAT GOOD DESIGN COVERS" title={<>The thinking behind<br/><em>the finished room.</em></>} description="A beautiful interior is the result of many connected decisions. We bring the whole picture together, so each element supports the next."/>
      <div className="includes-grid">
        <article><span>01</span><h3>Layout & circulation</h3><p>Furniture plans, clear pathways, zoning and practical storage that make rooms feel intuitive and balanced.</p></article>
        <article><span>02</span><h3>Colour & materials</h3><p>Layered palettes, flooring, wall finishes, joinery and tactile surfaces selected to work beautifully together.</p></article>
        <article><span>03</span><h3>Lighting design</h3><p>Ambient, task and accent lighting that supports different activities and creates atmosphere after dark.</p></article>
        <article><span>04</span><h3>Furniture & styling</h3><p>Furniture scale, upholstery, window treatments, art and finishing details that make a space feel complete.</p></article>
      </div>
    </section>
    <section className="service-cta"><div><span className="eyebrow"><span/> NOT SURE WHERE TO START?</span><h2>Let's shape a brief<br/><em>around your space.</em></h2></div><Link href="/contact">Talk through your project <ArrowUpRight size={16}/></Link></section>
  </>;
}
