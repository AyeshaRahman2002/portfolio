'use client';

import React from 'react';
import { ModeProvider } from '../context/ModeContext';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ModeTransition } from './ModeTransition';
import { PageNavigator } from './PageNavigator';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <ModeProvider>
      <div className="relative min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-1000">
        <div className="paper-overlay" aria-hidden="true" />
        <div className="term-backdrop" aria-hidden="true" />
        <ModeTransition />
        <Navigation />
        <main id="main-content" className="flex-grow">{children}</main>
        <PageNavigator />
        <Footer />
      </div>
    </ModeProvider>
  );
};
