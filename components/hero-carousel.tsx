"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  { src: "/images/hero-slider-1.jpg", label: "01 / 03", title: "Spaces made for", accent: "the everyday moments." },
  { src: "/images/hero-slider-2.jpg", label: "02 / 03", title: "A softer kind of", accent: "statement living." },
  { src: "/images/hero-slider-3.jpg", label: "03 / 03", title: "Thoughtful details,", accent: "lasting feeling." },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);
  const slide = slides[active];

  return (
    <div className="hero-visual" aria-roledescription="carousel" aria-label="Featured interior design spaces">
      {slides.map((item, index) => (
        <img key={item.src} className={`hero-slide ${index === active ? "is-active" : ""}`} src={item.src}
          alt={`Featured interior design — ${item.title} ${item.accent}`} aria-hidden={index !== active} />
      ))}
      <div className="hero-image-shade" />
      <div className="hero-image-note"><span>{slide.label} <i /> FEATURED SPACE</span><p>{slide.title}<br /><em>{slide.accent}</em></p></div>
      <div className="hero-carousel-controls">
        <div className="hero-dots" aria-label="Choose slide">
          {slides.map((item, index) => <button key={item.src} type="button" aria-label={`Go to slide ${index + 1}`} aria-pressed={active === index} className={active === index ? "active" : ""} onClick={() => setActive(index)} />)}
        </div>
        <div className="hero-arrows">
          <button type="button" aria-label="Previous slide" onClick={() => setActive((active + slides.length - 1) % slides.length)}><ArrowLeft size={17} /></button>
          <button type="button" aria-label="Next slide" onClick={() => setActive((active + 1) % slides.length)}><ArrowRight size={17} /></button>
        </div>
      </div>
      <div className="vertical-label">THE ART OF LIVING WELL — EST. 1990</div>
    </div>
  );
}
