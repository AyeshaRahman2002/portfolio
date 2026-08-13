'use client';

import Image from '@/components/BasePathImage';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { SECONDARY_PROJECT_ARCHIVE, withBasePath } from '@/data/portfolioData';
import { projectSlug } from '@/lib/projectSlug';

const imageByTitle: Record<string, string> = {
  'Digital Health AI for Autism Spectrum Disorder': 'digital_health_project.jpg',
  'Multi-Modal CNN-RNN Visual Recognition & Captioning': 'multimodal_project.jpg',
  'Autonomous Navigation & Detection for Spacecraft': 'space_nav_project.jpg',
  'Bio-Inspired Optimisation for Neural Network Training': 'bio_opt_project.jpg',
  'xv6 Memory Management (malloc, free, rqstMem)': 'xv6_project.jpg',
  'Interactive 3D Rendering Application': 'rendering_project.jpg',
  '2D Rendering Application': '2d_render_project.jpg',
  'Sentiment-to-Stock Movement Classification': 'sentiment_stock_project.jpg',
  'Olympic Medal Data Visualisation': 'medals_project.jpg',
  'GreenMyCloud: Carbon Footprint Monitoring': 'greenmycloud_project.jpg',
  'Video Editing Application': 'video_editing_project.jpg',
  'Sports Management Web Application': 'sports_mgmt_project.jpg',
  'Assessment To-Do Application': 'assessment_todo_project.jpg',
  'Aarogya Setu vs. COVIDSafe: Comparative Analysis': 'covid_apps_project.jpg',
  'Use of AI in Psychological Treatments': 'psych_ai_project.jpg',
  'Lyft Back-End Engineering (Forage)': 'lyft_project.jpg',
  'Smart Poultry Farm Management': 'bio_opt_project.jpg',
  'Hotel Price Data Scraping Tool': 'hotel_project.jpg',
  'Flights Price Data Scraping Tool': 'flights_project.jpg',
};

const groups = ['All', 'Research', 'AI / ML', 'Security', 'Systems', 'Graphics', 'HCI', 'Finance'] as const;
const researchTitles = new Set([
  'Digital Health AI for Autism Spectrum Disorder',
  'Multi-Modal CNN-RNN Visual Recognition & Captioning',
  'Autonomous Navigation & Detection for Spacecraft',
  'Bio-Inspired Optimisation for Neural Network Training',
  'Sentiment-to-Stock Movement Classification',
  'Use of AI in Psychological Treatments',
]);
const belongsTo = (title: string, domain: string, group: typeof groups[number]) => {
  if (group === 'All') return true;
  if (group === 'Research') return researchTitles.has(title);
  const value = domain.toLowerCase();
  if (group === 'AI / ML') return /ai|machine|multimodal|health|nlp|robotics/.test(value);
  if (group === 'Security') return /privacy|security|operating/.test(value);
  if (group === 'Systems') return /systems|web|operating|software/.test(value);
  if (group === 'Graphics') return /graphics|visual/.test(value);
  if (group === 'HCI') return /hci|visual|ux/.test(value);
  return value.includes('finance');
};

export function ProjectArchive({ label = 'PROJECT ARCHIVE' }: { label?: string }) {
  const [group, setGroup] = useState<typeof groups[number]>('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const projects = useMemo(() => SECONDARY_PROJECT_ARCHIVE.filter(project => belongsTo(project.title, project.domain, group) && `${project.title} ${project.domain} ${project.technologies.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [group, query]);
  const active = projects[Math.min(selected, Math.max(0, projects.length - 1))];

  return <section className="project-console section rule">
    <div className="project-console__heading"><div><p className="eyebrow">{label} / {SECONDARY_PROJECT_ARCHIVE.length} VERIFIED BUILDS</p><h2 className="section-title mt-4">Technical archive.</h2></div><label><span className="sr-only">Search projects</span><input value={query} onChange={event => { setQuery(event.target.value); setSelected(0); }} placeholder="search projects or tools…" /></label></div>
    <div className="project-console__filters" role="group" aria-label="Project domain">{groups.map(item => <button key={item} type="button" aria-pressed={group === item} onClick={() => { setGroup(item); setSelected(0); }}>{item}</button>)}</div>
    {active ? <div className="project-console__body">
      <div className="project-console__list" role="listbox" aria-label="Projects">{projects.map((project,index) => <button key={project.title} type="button" role="option" aria-selected={active.title === project.title} onClick={() => setSelected(index)}><span>{String(index + 1).padStart(2,'0')}</span><strong>{project.title}</strong><small>{project.domain}</small><b>↗</b></button>)}</div>
      <article className="project-console__preview">
        <div className="project-console__image"><Image key={active.title} src={`/projects/archive/${imageByTitle[active.title] ?? 'mlloopoptselector.jpg'}`} alt={`Project visual for ${active.title}`} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="project-console__meta"><p className="eyebrow">SELECTED OUTPUT / {active.domain}</p><h3>{active.title}</h3><div>{active.technologies.map(technology => <span key={technology}>{technology}</span>)}</div><p>Designed and developed across research, university, professional or independent practice. Open the available evidence below for implementation and evaluation detail.</p><footer><Link href={`/archive/${projectSlug(active.title)}`}>OPEN PROJECT DEEP DIVE ↗</Link>{active.github && <a href={active.github} target="_blank" rel="noreferrer">SOURCE CODE ↗</a>}{active.report && <a href={withBasePath(active.report.url)}>READ {active.report.label.toUpperCase()} ↗</a>}{active.video && <a href={active.video} target="_blank" rel="noreferrer">WATCH DEMO ↗</a>}</footer></div>
      </article>
    </div> : <p className="project-console__empty">No projects match this command.</p>}
  </section>;
}
