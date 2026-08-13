import Link from 'next/link';
import Image from '@/components/BasePathImage';
import { notFound } from 'next/navigation';
import { FEATURED_ENGINEERING_PROJECTS } from '@/data/portfolioData';
import type { ProjectVisual, VisualAspect } from '@/types/portfolio';
import { InteractivePipeline } from '@/components/InteractivePipeline';
import { ProjectLead } from '@/components/projects/ProjectLead';

export function generateStaticParams() { return FEATURED_ENGINEERING_PROJECTS.map(({ slug }) => ({ slug })); }

const ASPECT_CLASS: Record<VisualAspect, string> = {
  wide: 'aspect-[16/9]',
  landscape: 'aspect-[16/10]',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
};

type StudySection =
  | { kind: 'text'; title: string; body: string }
  | { kind: 'list'; title: string; items: string[] }
  | { kind: 'architecture' };

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = FEATURED_ENGINEERING_PROJECTS.find(p => p.slug === params.slug);
  if (!project) notFound();

  // Displayed sections are numbered dynamically, so an absent optional section
  // never leaves a gap in the sequence (e.g. 05 → 07).
  const sections: StudySection[] = [
    { kind: 'text', title: 'OVERVIEW', body: project.overview },
    { kind: 'text', title: 'PROBLEM', body: project.problem },
    { kind: 'text', title: 'APPROACH', body: project.approach },
    { kind: 'architecture' },
    { kind: 'list', title: 'IMPLEMENTATION', items: project.implementation },
    ...(project.results?.length ? [{ kind: 'list', title: 'RESULTS', items: project.results } as const] : []),
    ...(project.limitations?.length ? [{ kind: 'list', title: 'LIMITATIONS', items: project.limitations } as const] : []),
    ...(project.futureWork?.length ? [{ kind: 'list', title: 'FUTURE WORK', items: project.futureWork } as const] : []),
  ];

  const links = [
    project.github && { label: 'GITHUB', href: project.github },
    project.publication && { label: 'PAPER', href: project.publication },
    project.demo && { label: 'DEMO', href: project.demo },
  ].filter(Boolean) as { label: string; href: string }[];

  const indexGroups = [
    { label: 'METHODS', values: project.methods },
    { label: 'MODELS', values: project.models },
    { label: 'DATA', values: project.datasets },
    { label: 'TECHNOLOGIES', values: project.technologies },
  ].filter(group => group.values.length > 0);

  return (
    <article className="page">
      <Link href="/archive" className="text-link">← Technical archive</Link>
      <header className="section">
        <p className="eyebrow">{['PROJECT ' + project.number, project.year, project.category].filter(Boolean).join(' / ')}</p><h1 className="section-title mt-10 max-w-5xl">{project.title}</h1><p className="lede mt-10">{project.purpose}</p>
      </header>
      <ProjectLead project={project} />
      {project.visuals && project.visuals.length > 0 && (
        <section className="project-visuals" aria-label="Project visual evidence">
          {project.visuals.map((visual, index) => <ProjectFigure key={`${visual.alt}-${index}`} visual={visual} index={index} />)}
        </section>
      )}
      {project.metrics && <section className="grid border-y border-[var(--border-subtle)] sm:grid-cols-2 lg:grid-cols-4">{project.metrics.map(m => <div key={m.label} className="border-b border-[var(--border-subtle)] p-6 sm:border-r"><p className="eyebrow">{m.label}</p><p className="mt-3 text-3xl">{m.value}</p></div>)}</section>}
      {sections.map((section, index) => {
        const number = String(index + 1).padStart(2, '0');
        if (section.kind === 'architecture') {
          return <section key="architecture" className="section rule"><p className="eyebrow">{number} / ARCHITECTURE</p><InteractivePipeline stages={project.architecture} title={`${project.title} PIPELINE`} /></section>;
        }
        return (
          <StudySection key={section.title} number={number} title={section.title}>
            {section.kind === 'text'
              ? <p>{section.body}</p>
              : <ul>{section.items.map(item => <li key={item} className="border-t border-[var(--border-subtle)] py-3">: {item}</li>)}</ul>}
          </StudySection>
        );
      })}
      <section className="section rule grid gap-8 md:grid-cols-12">
        <p className="eyebrow md:col-span-3">TECHNICAL INDEX</p>
        <div className="md:col-span-9 space-y-5">
          {indexGroups.map(group => (
            <div key={group.label} className="grid gap-2 border-t border-[var(--border-subtle)] pt-4 sm:grid-cols-[8rem_1fr]">
              <p className="eyebrow">{group.label}</p>
              <p className={group.label === 'TECHNOLOGIES' ? 'font-mono text-xs' : ''}>{group.values.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>
      {links.length > 0 && (
        <section className="section rule grid gap-8 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">LINKS</p>
          <div className="md:col-span-9 flex flex-wrap gap-8">{links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="text-link">{link.label} ↗</a>)}</div>
        </section>
      )}
    </article>
  );
}

function ProjectFigure({ visual, index }: { visual: ProjectVisual; index: number }) {
  const aspect = ASPECT_CLASS[visual.aspect ?? 'landscape'];
  const caption = visual.caption || (visual.type === 'chart' || visual.type === 'diagram' ? `Figure ${String(index + 1).padStart(2, '0')}` : undefined);
  return (
    <figure>
      {visual.src ? (
        <div className={`relative ${aspect} bg-[var(--bg-card)]`}><Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 768px) 100vw, 1100px" className="object-contain" /></div>
      ) : process.env.NODE_ENV === 'development' ? (
        <div className={`grid ${aspect} place-items-center border border-dashed border-[var(--border-strong)]`}><span className="eyebrow">{visual.type} evidence slot</span></div>
      ) : null}
      {visual.src && caption && <figcaption className="eyebrow mt-4">{caption}</figcaption>}
    </figure>
  );
}

function StudySection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="section rule grid gap-8 md:grid-cols-12"><p className="eyebrow md:col-span-3">{number} / {title}</p><div className="lede md:col-span-9">{children}</div></section>;
}
