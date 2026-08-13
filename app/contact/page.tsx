'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { SITE_CONFIG } from '@/data/portfolioData';
import { useMode } from '@/context/ModeContext';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const { mode } = useMode();
  const [status, setStatus] = useState<Status>('idle');
  const statusRef = useRef<HTMLDivElement>(null);

  // On a resolved submission, move focus to the announced status so keyboard and
  // screen-reader users are taken straight to the outcome.
  useEffect(() => { if (status === 'success' || status === 'error') statusRef.current?.focus(); }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus('sending');
    const data = new FormData(form);
    const subject = String(data.get('type') || 'Portfolio enquiry');
    const name = String(data.get('name') || 'Portfolio visitor');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('success');
  }
  // Same form and information in both modes : Artist mode simply breathes more:
  // wider gutters and an offset correspondence column.
  const artist = mode === 'artist';
  return (
    <div className={`page contact contact--${mode}`}>
      <header className="contact__header"><div><p className="eyebrow">{artist ? 'STUDIO / ENQUIRIES' : 'CONTACT / CORRESPONDENCE'}</p><h1>{artist ? <>Start a <em>commission.</em></> : 'Let’s talk.'}</h1></div><p>{artist ? 'Enquire about an original artwork or commission a traditional portrait, charcoal portrait, abstract acrylic, realism acrylic, digital or illustrative artwork.' : 'Engineering, research and art commission enquiries are welcome. Share the context, scope and what you would like to build or explore.'}</p></header>
      <div className="contact__desk">
        <aside className="contact__direct"><p className="eyebrow">DIRECT / STUDIO DETAILS</p><a className="break-all" href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a><p>{SITE_CONFIG.location}</p>{artist && <a className="text-link" href={SITE_CONFIG.instagram} target="_blank" rel="noreferrer">Instagram @artxar_ ↗</a>}<a className="text-link" href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="text-link" href={SITE_CONFIG.github} target="_blank" rel="noreferrer">GitHub ↗</a>{artist && <div className="contact__note"><span>COMMISSION NOTE</span><p>Please include your preferred medium, approximate size, deadline and reference photographs where relevant.</p></div>}</aside>
        <form name="contact" onSubmit={submit} className="contact__form" noValidate>
          <Field label="Name" name="name" type="text" autoComplete="name" />
          <Field label="Email" name="email" type="email" autoComplete="email" />
          <label className="block"><span className="eyebrow">Subject / enquiry type</span><select name="type" required defaultValue="" className="mt-3 min-h-12 w-full border-b border-[var(--border-strong)] bg-transparent py-2"><option value="" disabled>Select an enquiry type</option>{artist && <><option>Purchase an original artwork</option><option>Traditional portrait sketch</option><option>Charcoal portrait sketch</option><option>Abstract acrylic commission</option><option>Realism acrylic commission</option><option>Digital art commission</option><option>Illustrative art commission</option></>}<option>Engineering</option><option>Research</option><option>Art / Commission</option><option>Other</option></select></label>
          <label className="block"><span className="eyebrow">Message</span><textarea name="message" required minLength={20} rows={7} className="mt-3 w-full border border-[var(--border-strong)] bg-transparent p-4" aria-describedby="message-hint" /><span id="message-hint" className="mt-2 block text-xs text-[var(--text-muted)]">Please include at least 20 characters.</span></label>
          <button type="submit" disabled={status === 'sending'} className="min-h-12 border border-[var(--text-main)] px-7 font-mono text-xs tracking-widest disabled:opacity-50">{status === 'sending' ? 'SENDING…' : 'SEND ENQUIRY ↗'}</button>
          <div ref={statusRef} tabIndex={-1} aria-live="polite" role="status" className="text-sm outline-none">{status === 'success' && 'Your email app has been opened with the enquiry ready to send.'}{status === 'error' && <>The email app could not be opened. Please email <a className="underline" href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.</>}</div>
        </form>
      </div>
    </div>
  );
}
function Field({label,name,type,autoComplete}:{label:string;name:string;type:string;autoComplete:string}) { return <label className="block"><span className="eyebrow">{label}</span><input name={name} type={type} autoComplete={autoComplete} required className="mt-3 min-h-12 w-full border-b border-[var(--border-strong)] bg-transparent py-2" /></label>; }
