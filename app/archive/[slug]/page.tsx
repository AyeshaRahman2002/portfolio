import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SECONDARY_PROJECT_ARCHIVE } from '@/data/portfolioData';
import { projectSlug } from '@/lib/projectSlug';
import { ArchiveDeepDive } from '@/components/ArchiveDeepDive';

export function generateStaticParams() {
  return SECONDARY_PROJECT_ARCHIVE.map(project => ({ slug: projectSlug(project.title) }));
}

export default function ArchiveProjectPage({ params }: { params: { slug: string } }) {
  const project = SECONDARY_PROJECT_ARCHIVE.find(item => projectSlug(item.title) === params.slug);
  if (!project) notFound();
  return <article className="page archive-detail">
    <Link href="/archive" className="text-link">← All projects</Link>
    <header><p className="eyebrow">PROJECT DEEP DIVE / {project.domain}</p><h1>{project.title}</h1><p>{project.summary}</p></header>
    <ArchiveDeepDive project={project} />
  </article>;
}
