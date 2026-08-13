'use client';

import Link from 'next/link';
import { useMode } from '@/context/ModeContext';
import { SITE_CONFIG } from '@/data/portfolioData';
import { ModeToggle } from './ModeToggle';
import { EngineerCommandCenter } from './EngineerCommandCenter';

export function Hero() {
  const { mode } = useMode();

  return <section className={`page hero hero--${mode}`}>
    {mode === 'engineer' ? <>
      <EngineerCommandCenter />
    </> : <>
      <div className="artist-intro">
        <p className="eyebrow">ARTXAR_ / WORKING STUDIO</p>
        <div><h1>Portraits,<br/><em>paint &amp; process.</em></h1><p>A working studio for portraiture, acrylic painting, digital art and illustration. Original artworks are available to purchase and commissions are open by enquiry.</p><div className="artist-intro__links"><Link href="/work">VIEW AVAILABLE ART ↗</Link><Link href="/contact">COMMISSION A WORK ↗</Link><a href={SITE_CONFIG.instagram} target="_blank" rel="noreferrer">@ARTXAR_ ↗</a></div></div>
      </div>
    </>}
    <div className="hero-footer"><ModeToggle /><span>{mode === 'artist' ? <><Link href="/work">ARTWORK</Link><Link href="/contact">COMMISSIONS ↗</Link><a href={SITE_CONFIG.instagram} target="_blank" rel="noreferrer">@ARTXAR_ ↗</a></> : <><Link href="/cv">CV</Link><a href={SITE_CONFIG.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a></>}</span></div>
  </section>;
}
