import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = { image: string; title: string; category: string; number: string };

export function ProjectCard({ image, title, category, number }: ProjectCardProps) {
  return <Card className="project-card overflow-hidden border-0 bg-white shadow-soft">
    <div className="project-image"><img src={image} alt={title}/><Badge className="project-number">{number}</Badge><Link href="/contact" className="project-arrow" aria-label={`Enquire about ${title}`}><ArrowUpRight/></Link></div>
    <div className="project-meta"><div><h3>{title}</h3><p>{category}</p></div><span>2024 — 2026</span></div>
  </Card>;
}
