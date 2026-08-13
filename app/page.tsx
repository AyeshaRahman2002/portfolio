'use client';

import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ARTWORKS, SITE_CONFIG } from '@/data/portfolioData';
import { useMode } from '@/context/ModeContext';
import { EngineerIndex } from '@/components/EngineerIndex';
import { ArtistStudioIndex } from '@/components/ArtistStudioIndex';

export default function Home() {
  const { mode } = useMode();
  return (
    <>
      <Hero />
      {mode === 'engineer' ? (
        <div className="page !pt-0"><EngineerIndex /></div>
      ) : (
        <div className="page !pt-0">
          {ARTWORKS.length > 0 ? <ArtistStudioIndex artworks={ARTWORKS} /> : <section className="section rule grid min-h-[60vh] content-center gap-10 md:grid-cols-12">
            <p className="eyebrow md:col-span-3">STUDIO</p>
            <div className="md:col-span-8 md:col-start-5"><p className="eyebrow">CHARCOAL / ACRYLIC · PORTRAITURE / REALISM</p><h2 className="section-title mt-8">A quiet, observational practice in charcoal and acrylic.</h2><Link href="/sketchbook" className="text-link mt-10 inline-block">Sketchbook ↗</Link></div>
          </section>}
        </div>
      )}
      {mode === 'artist' ? <section className="page artist-index-contact"><div><p className="eyebrow">STUDIO ENQUIRIES / ARTXAR_</p><h2>Bring an idea<br/><em>into the studio.</em></h2></div><p>Purchase an original or commission portrait, acrylic, digital or illustrative artwork.</p><div><Link href="/contact">START AN ENQUIRY ↗</Link><a href={SITE_CONFIG.instagram} target="_blank" rel="noreferrer">INSTAGRAM @ARTXAR_ ↗</a></div></section> : <section className="page rule grid gap-10 md:grid-cols-2"><p className="eyebrow">06 / CONTACT</p><div><h2 className="section-title">Start a conversation.</h2><a className="text-link mt-8 inline-block" href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email} ↗</a></div></section>}
    </>
  );
}
