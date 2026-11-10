"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
  return <form className="contact-form" onSubmit={handleSubmit}>
    {submitted ? <div className="form-success"><CheckCircle2 size={30}/><h3>Thanks for reaching out!</h3><p>This demo form is frontend-only. Connect your API to receive enquiries.</p><Button type="button" variant="outline" onClick={() => setSubmitted(false)}>Send another enquiry</Button></div> : <>
      <div className="form-row"><label>Your name<Input required placeholder="e.g. Alex Morgan"/></label><label>Email address<Input required type="email" placeholder="you@example.com"/></label></div>
      <label>I&apos;m interested in<Select required defaultValue=""><option value="" disabled>Select a service</option><option>Interior design</option><option>Space planning</option><option>Renovation</option><option>Commercial interiors</option></Select></label>
      <label>Tell us about your project<Textarea required rows={5} placeholder="A little about your space, ideas and timeline..."/></label>
      <Button type="submit" className="w-full">Send enquiry <ArrowUpRight size={17}/></Button>
      <small>This demo form is front-end only. Connect an API to receive enquiries.</small>
    </>}
  </form>;
}
