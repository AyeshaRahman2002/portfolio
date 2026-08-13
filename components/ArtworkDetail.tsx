'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { Artwork } from '@/types/portfolio';
import { ArtworkProcessScrubber } from './ArtworkProcessScrubber';

const CharcoalReveal = dynamic(() => import('./CharcoalReveal').then(module=>module.CharcoalReveal), { ssr:false });
const AcrylicCanvas3D = dynamic(() => import('./AcrylicCanvas3D').then(module=>module.AcrylicCanvas3D), { ssr:false });

export function ArtworkDetail({ artwork }: { artwork: Artwork }) {
  if (!artwork.image) return null;
  const alt=artwork.title||`${artwork.medium} artwork by Ayesha Rahman`;
  const charcoal=artwork.medium.toLowerCase().includes('charcoal');
  const acrylic3D=artwork.medium.toLowerCase().includes('acrylic')&&artwork.threeDEnabled;
  const collection = artwork.category?.startsWith('India Through a Window') ? 'India Through a Window' : 'Independent studio work';
  return <div className="artwork-detail">
    <div className="artwork-detail__view"><span className="artwork-detail__label">ORIGINAL ARTWORK / ARTXAR_</span>{charcoal ? <CharcoalReveal imageSrc={artwork.image} alt={alt}/> : acrylic3D ? <AcrylicCanvas3D imageSrc={artwork.image} alt={alt} normalMap={artwork.normalMap} roughnessMap={artwork.roughnessMap} displacementMap={artwork.displacementMap}/> : <div className="artwork-detail-frame"><i className="frame-ornament frame-ornament--tl"/><i className="frame-ornament frame-ornament--tr"/><i className="frame-ornament frame-ornament--bl"/><i className="frame-ornament frame-ornament--br"/><div className="relative aspect-[2/3]"><Image src={artwork.image} alt={alt} fill sizes="(max-width:768px) 82vw, 560px" className="object-cover"/></div></div>}</div>
    <section className="artwork-detail__story" aria-label="About this painting"><div><p className="eyebrow">ABOUT THE WORK</p><h2>A closer look.</h2>{artwork.description&&<p>{artwork.description}</p>}</div><dl><div><dt>Collection</dt><dd>{collection}</dd></div><div><dt>Medium</dt><dd>{artwork.medium}</dd></div><div><dt>Subject</dt><dd>{artwork.category?.split('/').at(-1)?.trim() || 'Original artwork'}</dd></div><div><dt>Studio</dt><dd>artxar_</dd></div></dl></section>
    {artwork.detailImages&&artwork.detailImages.length>0&&<section className="grid gap-8 md:grid-cols-2" aria-label="Artwork details">{artwork.detailImages.map((src,index)=><div key={src} className="relative aspect-square"><Image src={src} alt={`${alt}, detail ${index+1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/></div>)}</section>}
    {artwork.processImages&&artwork.processImages.length>0&&<ArtworkProcessScrubber stages={artwork.processImages} title={artwork.title ? `${artwork.title} process` : 'Artwork process'}/>}
  </div>;
}
