'use client';

import { useMode } from '@/context/ModeContext';

export function ModeTransition() {
  const { mode, transitioning } = useMode();
  if (!transitioning) return null;
  return (
    <div className={`mode-transition mode-transition--${mode}`} aria-hidden="true">
      <div className="transition-grid" />
      {mode === 'artist' ? <svg className="transition-mark" viewBox="0 0 1000 120" preserveAspectRatio="none"><path d="M-20 75 C160 38 280 96 445 55 S730 40 1020 68" /></svg> : <div className="transition-terminal"><p><span>ayesha@portfolio:~$</span> boot --profile engineer</p><p>loading identity........... <b>AYESHA RAHMAN</b></p><p>mounting AI_ML / CYBERSEC / SYSTEMS</p><p className="transition-terminal__ready">ENGINEER PORTAL READY <i /></p></div>}
      <div className="transition-wash" />
    </div>
  );
}
