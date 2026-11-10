"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";

const projects = [
  ["/images/project-1.jpg", "The Calm Residence", "Living room"],
  ["/images/project-2.jpg", "Earth & Ember", "Kitchen"],
  ["/images/project-3.jpg", "The Sunday Home", "Bedroom"],
  ["/images/project-4.jpg", "A Quiet Corner", "Living room"],
  ["/images/project-5.jpg", "The Modern Edit", "Commercial"],
  ["/images/project-6.jpg", "Natural Rhythm", "Dining room"],
];

const categories = ["All", "Living room", "Kitchen", "Bedroom", "Commercial"];

export function ProjectsGallery() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(() => projects.filter((project) => filter === "All" || project[2] === filter), [filter]);
  return <>
    <div className="filter-row" role="group" aria-label="Filter projects">{categories.map((category) => <button type="button" className={filter === category ? "filter active" : "filter"} onClick={() => setFilter(category)} key={category} aria-pressed={filter === category}>{category}</button>)}</div>
    <div className="projects-grid portfolio-grid">{filteredProjects.map((project, index) => <ProjectCard key={project[1]} image={project[0]} title={project[1]} category={project[2]} number={`0${index+1}`}/>)}</div>
  </>;
}
