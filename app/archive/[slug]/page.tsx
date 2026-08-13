import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SECONDARY_PROJECT_ARCHIVE } from '@/data/portfolioData';
import { withBasePath } from '@/data/portfolioData';
import { projectSlug } from '@/lib/projectSlug';
import { projectImage } from '@/lib/projectImages';
import Image from '@/components/BasePathImage';

export function generateStaticParams() {
  return SECONDARY_PROJECT_ARCHIVE.map(project => ({ slug: projectSlug(project.title) }));
}

export default function ArchiveProjectPage({ params }: { params: { slug: string } }) {
  const project = SECONDARY_PROJECT_ARCHIVE.find(item => projectSlug(item.title) === params.slug);
  if (!project) notFound();
  const evidence = [
    project.github && { label: 'SOURCE CODE', href: project.github },
    project.report && { label: project.report.label.toUpperCase(), href: project.report.url },
    project.video && { label: 'WATCH DEMO', href: project.video },
  ].filter(Boolean) as { label: string; href: string }[];

  return <article className="page project-case-study archive-case-study">
    <Link href="/archive" className="text-link">← Technical archive</Link>
    <header className="project-case-study__header"><p className="eyebrow">PROJECT DEEP DIVE / {project.year || 'ARCHIVE'} / {project.domain}</p><h1>{project.title}</h1><p>{project.summary}</p></header>
    <section className="project-visuals" aria-label="Project visual evidence"><figure><div className="project-figure__media relative aspect-[16/10] bg-[var(--bg-card)]"><Image src={projectImage(project.title)} alt={`Project visual for ${project.title}`} fill sizes="(max-width:768px) 100vw,720px" className="object-contain" /></div><figcaption className="eyebrow mt-4">PROJECT RECORD / VISUAL OVERVIEW</figcaption></figure></section>
    <StudySection number="01" title="OVERVIEW"><p>{project.summary}</p></StudySection>
    <StudySection number="02" title="IMPLEMENTATION"><ul>{project.implementation.map(item=><li key={item}>: {item}</li>)}</ul></StudySection>
    <section className="project-study-section rule"><p className="eyebrow">03 / TECHNICAL INDEX</p><div className="archive-case-study__index"><p><span>DOMAIN</span>{project.domain}</p><p><span>TECHNOLOGIES</span>{project.technologies.join(' · ')}</p></div></section>
    <section className="project-study-section rule"><p className="eyebrow">04 / EVIDENCE</p><div>{evidence.length ? <div className="archive-case-study__links">{evidence.map(item=><a key={item.href} href={withBasePath(item.href)} target="_blank" rel="noreferrer">{item.label} ↗</a>)}</div> : <p>Supporting material is private or being prepared for publication. The implementation record documents the available technical scope.</p>}</div></section>
    <footer className="archive-case-study__footer"><Link href="/archive">← RETURN TO ALL PROJECTS</Link></footer>
  </article>;
}

function StudySection({number,title,children}:{number:string;title:string;children:React.ReactNode}) {
  return <section className="project-study-section rule"><p className="eyebrow">{number} / {title}</p><div>{children}</div></section>;
}
