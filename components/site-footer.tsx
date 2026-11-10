import Link from "next/link";
import { ArrowUpRight, Instagram, Facebook, Linkedin } from "lucide-react";

export function SiteFooter() {
  return <footer id="contact" className="footer">
    <div className="footer-top">
      <div><Link href="/" className="brand footer-brand"><span className="brand-mark">i.</span><span>STUDIO<small>INTERIOR DESIGN</small></span></Link><p>Spaces that feel like you. Thoughtful interiors, made to live in.</p></div>
      <div><h4>Explore</h4><Link href="/about">Our studio</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link></div>
      <div><h4>Get in touch</h4><a href="mailto:hello@istudio.design">hello@istudio.design</a><a href="tel:+0123456789">+01 234 567 890</a><span>Malda, West Bengal, India</span></div>
      <div><h4>Follow along</h4><div className="socials"><a href="#instagram" aria-label="Instagram"><Instagram/></a><a href="#facebook" aria-label="Facebook"><Facebook/></a><a href="#linkedin" aria-label="LinkedIn"><Linkedin/></a></div></div>
    </div>
    <div className="footer-bottom"><span>© 2026 iStudio. All rights reserved.</span><span>Designed for considered living <ArrowUpRight size={14}/></span></div>
  </footer>;
}
