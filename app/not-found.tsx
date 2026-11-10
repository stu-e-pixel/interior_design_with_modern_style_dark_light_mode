import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <section className="not-found"><p className="eyebrow">404 — PAGE NOT FOUND</p><h1>This space is<br/><em>still taking shape.</em></h1><Button asChild><Link href="/">Back to home</Link></Button></section>;
}
