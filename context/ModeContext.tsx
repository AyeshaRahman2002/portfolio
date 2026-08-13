'use client';

import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Mode } from '../types/portfolio';

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  transitioning: boolean;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

// Keep in sync with the `mode-cover` animation duration in globals.css.
const TRANSITION_MS = 2100;

// Runs before paint on the client, but degrades to useEffect during SSR so it
// never emits the "useLayoutEffect does nothing on the server" warning.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always initialise to the SSR default so the first client render matches the
  // server HTML (no hydration mismatch). The inline theme script in the layout
  // has already set data-theme for correct colours before paint; we adopt the
  // persisted mode below in a layout effect, before the browser paints : so
  // returning Artist visitors see no engineer flash.
  const [mode, setModeState] = useState<Mode>('engineer');
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useIsomorphicLayoutEffect(() => {
    const persisted = document.documentElement.dataset.theme === 'artist' ? 'artist' : 'engineer';
    setModeState(prev => (prev === persisted ? prev : persisted));
  }, []);

  const setMode = useCallback((newMode: Mode) => {
    setModeState(prev => {
      // Ignore redundant switches (same mode) and rapid re-clicks that would
      // otherwise stack overlay timers.
      if (newMode === prev) return prev;

      document.documentElement.dataset.theme = newMode;
      try {
        localStorage.setItem('ayesha_portfolio_mode', newMode);
      } catch {
        // Persistence is best-effort; theme switching must still work when
        // storage is blocked (private mode, restricted environments).
      }

      // A single, resilient overlay timer: clear any in-flight one first so
      // rapid switching can never leave a stuck transition overlay.
      setTransitioning(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setTransitioning(false), TRANSITION_MS);

      return newMode;
    });
  }, []);

  const toggleMode = useCallback(
    () => setMode(document.documentElement.dataset.theme === 'artist' ? 'engineer' : 'artist'),
    [setMode],
  );

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode, transitioning }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
