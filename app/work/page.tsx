'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useMode } from '@/context/ModeContext';
import { ADDITIONAL_EXPERIENCE, ARTWORKS, EDUCATION, EXPERIENCE } from '@/data/portfolioData';
import { ArtworkGallery } from '@/components/ArtworkGallery';
import { ArtistServices } from '@/components/ArtistServices';

export default function WorkPage() {
  const { mode, setMode } = useMode();
  const [activeRole, setActiveRole] = useState(0);
  if (mode === 'artist') {
    return (
      <div className="page">
        <header className="artist-work-header section !pt-0"><div><p className="eyebrow">STUDIO INVENTORY / ORIGINAL ART</p><h1 className="display mt-8">Works from<br/><em className="font-normal">the studio.</em></h1></div><aside><b>ORIGINAL ARTWORKS</b><p>Paintings shown here are part of my studio collection. Purchase availability and commissions can be discussed directly.</p><Link href="/contact">PURCHASE ENQUIRY ↗</Link></aside></header>
        {ARTWORKS.length === 0 ? (
          <section className="artist-spread section min-h-[55vh] border-y border-[var(--border-subtle)]"><p className="eyebrow">CHARCOAL / ACRYLIC · PORTRAITURE / REALISM</p><h2 className="section-title mt-10">Selected works coming soon.</h2></section>
        ) : <ArtworkGallery artworks={ARTWORKS} />}
        <ArtistServices compact />
      </div>
    );
  }
  const roles = [...EXPERIENCE, ...ADDITIONAL_EXPERIENCE];
  const active = roles[activeRole];
  return (
    <div className="page experience-page">
      <header className="section !pt-0"><p className="eyebrow">ENGINEERING / EXPERIENCE</p><h1 className="display mt-10">Research meets<br/>delivery.</h1><p className="lede mt-8">Experience across trustworthy AI research, enterprise implementation, applied software development and financial analysis.</p></header>
      <section className="experience-console">
        <nav aria-label="Professional roles">{roles.map((role,index)=><button key={role.id} type="button" className={role.primary ? 'is-current' : ''} aria-pressed={activeRole===index} onClick={()=>setActiveRole(index)}><span>{String(index+1).padStart(2,'0')}</span><b>{role.role}</b><small>{role.organization}</small><em>{role.primary ? '● CURRENT' : role.period}</em></button>)}</nav>
        <article key={active.id}><header><p className="eyebrow">ROLE / {String(activeRole+1).padStart(2,'0')}</p><div>{active.primary && <b>● CURRENT POSITION</b>}<span>{active.period}</span></div></header><h2>{active.role}</h2><h3>{active.organization}</h3><p>{active.location}</p>{active.summary && <p className="experience-role-summary">{active.summary}</p>}<div>{active.focus.map((item,index)=><section key={item}><span>{String(index+1).padStart(2,'0')}</span><p>{item}</p></section>)}</div>{active.id === 'freelance-artist' && <button type="button" className="experience-art-link" onClick={()=>setMode('artist')}>ENTER ARTIST PORTFOLIO ↗</button>}</article>
      </section>
      <section className="experience-summary"><div><p className="eyebrow">CAPABILITY THREAD</p><h2>Research.<br/>Engineering.<br/>Operations.</h2></div><div>{['Investigate and evaluate learning systems','Translate technical work into operational requirements','Build privacy and security into system architecture','Communicate findings through evidence and documentation'].map((item,index)=><p key={item}><span>0{index+1}</span>{item}</p>)}</div></section>
      <section className="experience-education"><header><p className="eyebrow">EDUCATION FOUNDATION</p><Link href="/cv">FULL CV ↗</Link></header><div className="education-table-wrap"><table><thead><tr><th>Period</th><th>Qualification</th><th>Institution</th><th>Result</th></tr></thead><tbody>{EDUCATION.map(item=><tr key={item.degree}><td data-label="Period">{item.period}</td><th scope="row" data-label="Qualification">{item.degree}</th><td data-label="Institution">{item.institution}</td><td data-label="Result">{item.grade}</td></tr>)}</tbody></table></div></section>
      <section className="engineer-cta"><p>Looking for technical projects and research evidence?</p><Link href="/archive">OPEN TECHNICAL ARCHIVE ↗</Link></section>
    </div>
  );
}
