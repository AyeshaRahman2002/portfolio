'use client';

import Image from '@/components/BasePathImage';
import Link from 'next/link';
import { useState } from 'react';
import { EXPERIENCE, FEATURED_ENGINEERING_PROJECTS, SITE_CONFIG } from '@/data/portfolioData';

const routes = [
  { key: 'work', label: 'Experience', href: '/work', command: 'cat ./experience', note: 'Research + industry roles' },
  { key: 'archive', label: 'Technical archive', href: '/archive', command: 'ls ./archive', note: 'Case studies + 19 builds' },
  { key: 'about', label: 'Profile', href: '/about', command: 'cat ./about', note: 'Experience + education' },
  { key: 'cv', label: 'CV', href: '/cv', command: 'view ./cv', note: 'Credentials + capabilities' },
] as const;

export function EngineerIndex() {
  const [selected, setSelected] = useState(0);
  const projects = FEATURED_ENGINEERING_PROJECTS;
  const project = projects[selected];
  const current = EXPERIENCE.filter(item => item.primary);
  const visual = project.visuals?.[0]?.src ?? '/projects/archive/multimodal_project.jpg';

  return <div className="engineer-index">
    <section className="engineer-index__now">
      <div><p className="eyebrow">01 / ACTIVE CONTEXT</p><h2>Research.<br/>Build. Verify.</h2></div>
      <div className="now-grid">{current.map(item => <article key={item.id}><span>{item.period}</span><h3>{item.organization}</h3><p>{item.role}</p><small>{item.summary}</small></article>)}</div>
    </section>

    <section className="project-switcher">
      <header><p className="eyebrow">02 / SELECTED SYSTEMS</p><span>{String(selected + 1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}</span></header>
      <div className="project-switcher__body">
        <nav aria-label="Select a featured project">{projects.map((item,index) => <button key={item.id} type="button" aria-pressed={selected === index} data-active-research={item.id === 'zero-trust-ai' || undefined} onClick={() => setSelected(index)}><span>{item.number}</span><b>{item.title}</b></button>)}</nav>
        <article key={project.id} className={project.id === 'zero-trust-ai' ? 'project-switcher__active-research' : undefined}>
          <div className="project-switcher__visual"><Image src={visual} alt="" fill sizes="(max-width: 760px) 100vw, 55vw" /></div>
          <div className="project-switcher__copy"><p className="eyebrow">{project.category}</p><h2>{project.title}</h2><p>{project.purpose}</p><div>{project.technologies.slice(0,5).map(item => <span key={item}>{item}</span>)}</div><Link href={`/work/${project.slug}`}>OPEN CASE STUDY <b>↗</b></Link></div>
        </article>
      </div>
    </section>

    <section className="route-panel"><p className="eyebrow">03 / NAVIGATE</p><div>{routes.map(route => <Link href={route.href} key={route.key}><span>{route.command}</span><h3>{route.label}</h3><p>{route.note}</p><b>↗</b></Link>)}</div></section>
    <section className="engineer-cta"><p>Interested in behavioural modelling, continuous behaviour monitoring, trustworthy AI or production ML?</p><a href={`mailto:${SITE_CONFIG.email}`}>START A CONVERSATION ↗</a></section>
  </div>;
}
