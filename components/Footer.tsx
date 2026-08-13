import { SITE_CONFIG } from '@/data/portfolioData';

export function Footer() {
  return <footer className="rule"><div className="page grid gap-10 md:grid-cols-2"><div><p className="text-2xl">AYESHA RAHMAN</p><p className="eyebrow mt-3">JEDDAH, SAUDI ARABIA</p></div><div className="flex flex-wrap gap-7 font-mono text-xs md:justify-end"><a href={`mailto:${SITE_CONFIG.email}`}>EMAIL ↗</a><a href={SITE_CONFIG.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href={SITE_CONFIG.instagram} target="_blank" rel="noreferrer">INSTAGRAM @ARTXAR_ ↗</a></div></div></footer>;
}
