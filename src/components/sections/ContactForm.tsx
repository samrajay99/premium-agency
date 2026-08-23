"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div className="surface p-8" role="status"><p className="eyebrow">Demo complete</p><h2 className="mt-2 font-serif text-3xl">Your message stayed in this browser.</h2><p className="mt-3 text-muted">No form data was sent or stored. Reset the form to try again.</p><button className="button-secondary mt-6" type="button" onClick={() => setSent(false)}>Reset form</button></div>;
  return <form className="surface grid gap-5 p-6 sm:p-8" onSubmit={submit}><div><label htmlFor="name">Name</label><input id="name" name="name" required className="field" /></div><div><label htmlFor="email">Email</label><input id="email" name="email" type="email" required className="field" /></div><div><label htmlFor="message">Message</label><textarea id="message" name="message" required rows={6} className="field resize-y" /></div><button className="button-primary" type="submit">Show demo success</button></form>;
}