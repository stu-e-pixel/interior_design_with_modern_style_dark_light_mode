import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>;
}

export function SectionTitle({ eyebrow, title, description, center = false }: { eyebrow: string; title: ReactNode; description?: string; center?: boolean }) {
  return <div className={center ? "section-title text-center" : "section-title"}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}
