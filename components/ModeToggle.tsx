'use client';

import { useMode } from '@/context/ModeContext';

export function ModeToggle({ compact = false, className = '' }: { compact?: boolean; className?: string }) {
  const { mode, setMode } = useMode();
  return (
    <div className={`portal-switch ${compact ? 'portal-switch--compact' : ''} ${className}`} aria-label="Choose portfolio portal">
      <div className="portal-switch__status"><span>TWO PORTALS</span><b>VIEWING {mode.toUpperCase()}</b></div>
      <div className="portal-switch__options">
        <button type="button" aria-pressed={mode === 'engineer'} onClick={() => setMode('engineer')} aria-label="Open Engineer portal">
          <span>01</span><b>ENGINEER</b><small>{mode === 'engineer' ? 'YOU ARE HERE' : 'OPEN PORTAL ↗'}</small>
        </button>
        <button type="button" aria-pressed={mode === 'artist'} onClick={() => setMode('artist')} aria-label="Open Artist portal">
          <span>02</span><b>ARTIST</b><small>{mode === 'artist' ? 'YOU ARE HERE' : 'OPEN PORTAL ↗'}</small>
        </button>
      </div>
    </div>
  );
}
