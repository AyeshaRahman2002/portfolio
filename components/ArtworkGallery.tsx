'use client';

import dynamic from 'next/dynamic';
import Image from '@/components/BasePathImage';
import Link from 'next/link';
import { useRef } from 'react';
import type { Artwork } from '@/types/portfolio';

const AcrylicCanvas3D = dynamic(
  () => import('./AcrylicCanvas3D').then(module => module.AcrylicCanvas3D),
  {
    ssr: false,
    loading: () => <div className="aspect-[4/3] animate-pulse bg-[var(--bg-card)]" aria-label="Loading canvas view" />,
  },
);

export function ArtworkGallery({ artworks }: { artworks: Artwork[] }) {
  if (!artworks.length) return null;
  const indiaWorks = artworks.filter(artwork => artwork.category?.includes('India Through a Window'));
  const independentWorks = artworks.filter(artwork => !artwork.category?.includes('India Through a Window'));

  return (
    <section className="art-gallery section" aria-label="Artwork collection">
      {indiaWorks.length > 0 && <div className="art-collection-block">
        <header className="art-series-intro">
          <div><p className="eyebrow">SERIES 01 / REALISM IN ACRYLIC</p><h2>India Through<br/><em>a Window.</em></h2></div>
          <div><p>A four-part series looking at India through framed viewpoints: from vehicles and architectural openings to domestic interiors. Each painting holds an intimate foreground against a wider landscape, exploring how place is remembered through travel, objects, colour and distance.</p><span>04 WORKS / ACRYLIC / REALISM</span></div>
        </header>
        <ArtworkRail artworks={indiaWorks} label="THE COMPLETE SERIES" />
      </div>}

      {independentWorks.length > 0 && <div className="art-collection-block art-collection-block--independent">
        <header className="art-collection-header">
          <div><p className="eyebrow">COLLECTION 02 / INDEPENDENT WORKS</p><h2>Rooms, memory<br/><em>and spectacle.</em></h2></div>
          <p>Two narrative interiors exploring different kinds of atmosphere: the tactile nostalgia of recorded sound and the theatrical energy of a period ballroom.</p>
        </header>
        <ArtworkRail artworks={independentWorks} label="INDEPENDENT PAINTINGS" />
      </div>}
    </section>
  );
}

function ArtworkRail({ artworks, label }: { artworks: Artwork[]; label: string }) {
  const railRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => railRef.current?.scrollBy({ left: direction * railRef.current.clientWidth * .72, behavior: 'smooth' });
  return <>
    <div className="art-carousel__controls"><p className="eyebrow">{label} / SWIPE OR USE CONTROLS</p><div><button type="button" onClick={()=>move(-1)} aria-label="Previous paintings">← PREVIOUS</button><button type="button" onClick={()=>move(1)} aria-label="Next paintings">NEXT →</button></div></div>
    <div className="art-carousel" ref={railRef}>
      {artworks.map((artwork, index) => <ArtworkFigure key={artwork.id} artwork={artwork} index={index} total={artworks.length} />)}
    </div>
  </>;
}

function ArtworkFigure({ artwork, index, total }: { artwork: Artwork; index: number; total: number }) {
  if (!artwork.image) return null;
  const alt = artwork.title || `${artwork.medium} artwork by Ayesha Rahman`;
  const use3D = artwork.medium.toLowerCase().includes('acrylic') && artwork.threeDEnabled;
  return (
    <figure className="art-carousel__card">
      {use3D ? (
        <AcrylicCanvas3D imageSrc={artwork.image} alt={alt} normalMap={artwork.normalMap} roughnessMap={artwork.roughnessMap} displacementMap={artwork.displacementMap} />
      ) : (
        <div className="victorian-frame"><i className="frame-ornament frame-ornament--tl"/><i className="frame-ornament frame-ornament--tr"/><i className="frame-ornament frame-ornament--bl"/><i className="frame-ornament frame-ornament--br"/>
          <Link href={`/artwork/${artwork.slug}`} className="artwork-frame relative block aspect-[2/3] bg-[var(--bg-card)]" aria-label={`View ${alt}`}>
            <Image src={artwork.image} alt={alt} fill sizes="(max-width: 768px) 72vw, 25vw" className="object-cover" />
            <span className="artwork-frame__view">ENTER WORK ↗</span>
          </Link>
        </div>
      )}
      <figcaption className="mt-5 grid gap-2 sm:grid-cols-2">
        <div>
          <Link href={`/artwork/${artwork.slug}`} className="group/link inline-block" aria-label={`View ${alt}`}>
            <p className="eyebrow mb-2">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</p>
            {artwork.title && <h2 className="text-xl">{artwork.title}</h2>}
            <p className={`${artwork.title ? 'mt-1' : ''} text-sm text-[var(--text-muted)]`}>{artwork.category}<br/>{artwork.medium}</p>
            {/* The WebGL surface is not the only way in: 3D items always get an explicit link. */}
            {use3D && <span className="eyebrow mt-2 inline-block">View work ↗</span>}
          </Link>
        </div>
        <div className="artwork-sale sm:text-right"><p className="eyebrow">{[artwork.year, artwork.dimensions].filter(Boolean).join(' · ')}</p><Link href="/contact">PURCHASE ENQUIRY ↗</Link></div>
      </figcaption>
    </figure>
  );
}
