'use client';

import { useMode } from '@/context/ModeContext';

export function ModeTransition() {
  const { mode, transitioning } = useMode();
  if (!transitioning) return null;
  return (
    <div className={`mode-transition mode-transition--${mode}`} aria-hidden="true">
      <div className="transition-grid" />
      {mode === 'artist' ? <div className="transition-studio"><div className="transition-studio__sun"/><div className="transition-studio__paper"><span>ARTXAR_ / STUDIO</span><svg viewBox="0 0 720 430" preserveAspectRatio="none"><path className="studio-stroke studio-stroke--one" d="M40 315 C120 120 260 80 360 220 S560 350 680 100"/><path className="studio-stroke studio-stroke--two" d="M85 110 C210 245 345 300 630 250"/><path className="studio-stroke studio-stroke--three" d="M170 360 C280 250 390 125 565 72"/></svg><i>CHARCOAL · ACRYLIC · LIGHT</i></div><div className="transition-studio__swatches"><b/><b/><b/><b/></div></div> : <div className="transition-terminal"><p><span>ayesha@portfolio:~$</span> boot --profile engineer</p><p>loading identity........... <b>AYESHA RAHMAN</b></p><p>mounting AI_ML / CYBERSEC / SYSTEMS</p><p className="transition-terminal__ready">ENGINEER PORTAL READY <i /></p></div>}
      <div className="transition-wash" />
    </div>
  );
}
