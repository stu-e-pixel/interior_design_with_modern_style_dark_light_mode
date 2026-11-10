"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Our team", "/team"], ["Contact", "/contact"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return <header className="site-header">
    <div className="nav-wrap">
      <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">i.</span><span>STUDIO<small>INTERIOR DESIGN</small></span></Link>
      <nav className={open ? "nav-links open" : "nav-links"}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
        {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        <span>{theme === "dark" ? "Light" : "Dark"}</span>
      </button>
      <Button asChild className="nav-cta"><Link href="/contact">Let&apos;s talk <ArrowUpRight size={16}/></Link></Button>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}
