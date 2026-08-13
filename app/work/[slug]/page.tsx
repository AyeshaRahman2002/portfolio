import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FEATURED_ENGINEERING_PROJECTS, withBasePath } from '@/data/portfolioData';
import { InteractivePipeline } from '@/components/InteractivePipeline';
import { ProjectLead } from '@/components/projects/ProjectLead';

export function generateStaticParams() { return FEATURED_ENGINEERING_PROJECTS.map(({ slug }) => ({ slug })); }

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
    project.video && { label: 'VIDEO', href: project.video },
    ...(project.reports?.map(report => ({ label: report.label.toUpperCase(), href: report.url })) ?? []),
  ].filter(Boolean) as { label: string; href: string }[];

  const indexGroups = [
    { label: 'METHODS', values: project.methods },
    { label: 'MODELS', values: project.models },
    { label: 'DATA', values: project.datasets },
    { label: 'TECHNOLOGIES', values: project.technologies },
  ].filter(group => group.values.length > 0);

  return (
    <article className="page project-case-study">
      <Link href="/archive" className="text-link">← Technical archive</Link>
      <header className="project-case-study__header">
        <p className="eyebrow">{['PROJECT ' + project.number, project.year, project.category].filter(Boolean).join(' / ')}</p><h1>{project.title}</h1><p>{project.purpose}</p>
      </header>
      <ProjectLead project={project} />
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
          <div className="md:col-span-9 flex flex-wrap gap-8">{links.map(link => <a key={link.href} href={withBasePath(link.href)} target="_blank" rel="noreferrer" className="text-link">{link.label} ↗</a>)}</div>
        </section>
      )}
    </article>
  );
}

function StudySection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <section className="project-study-section rule"><p className="eyebrow">{number} / {title}</p><div>{children}</div></section>;
}
