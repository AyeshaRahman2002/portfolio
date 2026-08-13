import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARTWORKS } from '@/data/portfolioData';
import { ArtworkDetail } from '@/components/ArtworkDetail';

export function generateStaticParams() {
  return ARTWORKS.map(({ slug }) => ({ slug }));
}

export default function ArtworkPage({ params }: { params: { slug: string } }) {
  const artwork = ARTWORKS.find(item => item.slug === params.slug && item.image);
  if (!artwork) notFound();

  const index = ARTWORKS.findIndex(item => item.id === artwork.id);
  const previous = ARTWORKS[(index + ARTWORKS.length - 1) % ARTWORKS.length];
  const next = ARTWORKS[(index + 1) % ARTWORKS.length];

  return <article className="page artwork-page">
    <Link href="/work" className="text-link artwork-page__back">← Studio collection</Link>
    <header className="artwork-page__header">
      <div><p className="eyebrow">{[artwork.category, artwork.medium, artwork.year, artwork.dimensions].filter(Boolean).join(' / ')}</p><h1 className="section-title mt-10">{artwork.title}</h1></div>
      <aside><p>Interested in this original or a commissioned artwork?</p><Link href="/contact">PURCHASE ENQUIRY ↗</Link></aside>
    </header>
    <ArtworkDetail artwork={artwork} />
    <nav className="artwork-pagination" aria-label="Browse artwork">
      <Link href={`/artwork/${previous.slug}`}><span>PREVIOUS</span>{previous.title}</Link>
      <Link href={`/artwork/${next.slug}`}><span>NEXT</span>{next.title}</Link>
    </nav>
  </article>;
}
