'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export interface TerminalDiveStep {
  command: string;
  label: string;
  lines: string[];
}

export interface TerminalDiveLink {
  label: string;
  href: string;
}

export function ProjectTerminalDive({
  title,
  meta,
  summary,
  steps,
  links,
  backHref = '/archive',
}: {
  title: string;
  meta: string;
  summary: string;
  steps: TerminalDiveStep[];
  links: TerminalDiveLink[];
  backHref?: string;
}) {
  const [visible, setVisible] = useState(1);
  const nextPrompt = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (visible > 1) nextPrompt.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [visible]);

  const runNext = () => setVisible(count => Math.min(count + 1, steps.length));

  return (
    <div className="project-terminal" aria-label={`${title} interactive project deep dive`}>
      <div className="project-terminal__chrome">
        <span>PROJECT_SESSION.LOG</span>
        <span>{visible}/{steps.length} COMMANDS COMPLETE</span>
      </div>

      <div className="project-terminal__body">
        <p className="project-terminal__command"><span>ayesha@portfolio:~$</span> inspect project --deep</p>
        <div className="project-terminal__intro">
          <p>{meta}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
        </div>

        <div className="project-terminal__stream" aria-live="polite">
          {steps.slice(0, visible).map((step, index) => (
            <section className="project-terminal__entry" key={step.command}>
              <p className="project-terminal__command"><span>ayesha@portfolio:~$</span> {step.command}</p>
              <div className="project-terminal__result">
                <p className="project-terminal__status">✓ {step.label}</p>
                {step.lines.map((line, lineIndex) => (
                  <p key={`${line}-${lineIndex}`}><b>{String(lineIndex + 1).padStart(2, '0')}</b><span>{line}</span></p>
                ))}
              </div>
            </section>
          ))}

          {visible < steps.length ? (
            <button ref={nextPrompt} type="button" className="project-terminal__next" onClick={runNext}>
              <span>ayesha@portfolio:~$</span> {steps[visible].command}<i aria-hidden="true" />
              <small>CLICK OR PRESS ENTER TO RUN</small>
            </button>
          ) : (
            <div className="project-terminal__complete">
              <p><span>ayesha@portfolio:~$</span> session --complete</p>
              <p>✓ Deep dive complete. All project records loaded.</p>
            </div>
          )}
        </div>

        <footer className="project-terminal__footer">
          <div>
            {links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}
          </div>
          <Link href={backHref}>← RETURN TO PROJECT ARCHIVE</Link>
          {visible < steps.length && <button type="button" onClick={() => setVisible(steps.length)}>RUN ALL COMMANDS ↓</button>}
        </footer>
      </div>
    </div>
  );
}
