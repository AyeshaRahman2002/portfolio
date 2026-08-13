import fs from 'node:fs';
import path from 'node:path';
import { CERTIFICATIONS, EDUCATION, EXPERIENCE, FEATURED_ENGINEERING_PROJECTS, FULL_TECHNICAL_INDEX, PERSONAL_INFO, withBasePath } from '@/data/portfolioData';

export default function CVPage() {
  const hasPdf = fs.existsSync(path.join(process.cwd(), 'public/documents/Ayesha_Rahman_CV.pdf'));
  return (
    <article className="page max-w-5xl">
      <header className="section !pt-0 border-b border-[var(--border-strong)]"><p className="eyebrow">CURRICULUM VITAE</p><h1 className="section-title mt-8">{PERSONAL_INFO.name}</h1><p className="mt-5 font-mono text-xs">AI / MACHINE LEARNING ENGINEER · JEDDAH, SAUDI ARABIA</p>{hasPdf && <a href={withBasePath('/documents/Ayesha_Rahman_CV.pdf')} download className="text-link mt-8 inline-block">Download PDF ↧</a>}</header>
      <CVSection title="PROFILE"><p>AI and machine learning engineer with an MEng in Computer Science with Artificial Intelligence, specialising in secure and scalable AI systems across cybersecurity, cloud infrastructure, fintech and data-driven applications. Experienced in production machine learning pipelines, privacy-preserving learning, federated learning, anomaly detection, secure APIs and cloud platforms. Current work spans CyberSaR / KAUST research and AI and software engineering at Palmate Technology.</p></CVSection>
      <CVSection title="EXPERIENCE">{EXPERIENCE.map(e=><div key={e.id} className="border-t border-[var(--border-subtle)] py-6"><div className="flex flex-wrap justify-between gap-2"><h3 className="text-xl">{e.role} : {e.organization}</h3><span className="eyebrow">{e.period}</span></div><p className="eyebrow mt-2">{e.location}</p><ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">{e.focus.map(f=><li key={f}>: {f}</li>)}</ul></div>)}</CVSection>
      <CVSection title="EDUCATION">{EDUCATION.map(e=><div key={e.degree} className="border-t border-[var(--border-subtle)] py-6"><h3 className="text-xl">{e.degree}</h3><p className="mt-2 text-sm">{e.institution} · {e.period} · {e.grade}</p></div>)}</CVSection>
      <CVSection title="SELECTED PROJECTS">{FEATURED_ENGINEERING_PROJECTS.map(project=><div key={project.slug} className="border-t border-[var(--border-subtle)] py-5"><h3 className="text-lg">{project.title}</h3><p className="mt-2 text-sm text-[var(--text-muted)]">{project.purpose}</p></div>)}</CVSection>
      <CVSection title="TECHNICAL SKILLS">{FULL_TECHNICAL_INDEX.map(s=><p key={s.category} className="border-t border-[var(--border-subtle)] py-4"><strong>{s.category}:</strong> <span className="text-[var(--text-muted)]">{s.items.join(', ')}</span></p>)}</CVSection>
      <CVSection title="CERTIFICATIONS">{CERTIFICATIONS.map(c=><p key={c.title} className="border-t border-[var(--border-subtle)] py-4">{c.title} : <span className="text-[var(--text-muted)]">{c.issuer}</span></p>)}</CVSection>
    </article>
  );
}
function CVSection({title,children}:{title:string;children:React.ReactNode}) { return <section className="section grid gap-8 md:grid-cols-12"><h2 className="eyebrow md:col-span-3">{title}</h2><div className="md:col-span-9">{children}</div></section>; }
