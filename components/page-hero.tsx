import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/section-title";

export function PageHero({ label, title, desc, image = "/images/hero-bg.jpg" }: { label: string; title: ReactNode; desc: string; image?: string }) {
  return <section className="page-hero"><div><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{desc}</p></div><img src={image} alt="Interior design"/></section>;
}
