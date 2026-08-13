'use client';

import { PointerEvent, useEffect, useRef, useState } from 'react';

const media = [
  { name: 'Portrait sketching', mark: 'GRAPHITE', color: '#332f2b', width: 2 },
  { name: 'Realism painting', mark: 'OIL / ACRYLIC', color: '#8b4b35', width: 12 },
  { name: 'Abstract painting', mark: 'GESTURE', color: '#c58b45', width: 24 },
  { name: 'Digital drawing', mark: 'DIGITAL', color: '#445f62', width: 5 },
] as const;

export function InteractiveArtCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const [medium, setMedium] = useState(0);

  const drawBackground = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const bounds = canvas.getBoundingClientRect();
    canvas.width = bounds.width * ratio;
    canvas.height = bounds.height * ratio;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(ratio, ratio);
    ctx.fillStyle = '#f5f0e7';
    ctx.fillRect(0, 0, bounds.width, bounds.height);
    ctx.strokeStyle = 'rgba(42,36,30,.08)';
    ctx.lineWidth = 1;
    for (let y = 18; y < bounds.height; y += 21) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(bounds.width, y + 2); ctx.stroke();
    }
  };

  useEffect(() => {
    drawBackground();
    window.addEventListener('resize', drawBackground);
    return () => window.removeEventListener('resize', drawBackground);
  }, []);

  const position = (event: PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };
  const start = (event: PointerEvent<HTMLCanvasElement>) => {
    drawing.current = true; last.current = position(event);
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const move = (event: PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const next = position(event); const tool = media[medium];
    ctx.beginPath(); ctx.moveTo(last.current.x, last.current.y); ctx.lineTo(next.x, next.y);
    ctx.strokeStyle = tool.color; ctx.lineWidth = tool.width * (.55 + event.pressure * .8);
    ctx.lineCap = medium === 2 ? 'square' : 'round'; ctx.lineJoin = 'round';
    ctx.globalAlpha = medium === 2 ? .55 : .78; ctx.stroke(); ctx.globalAlpha = 1;
    last.current = next;
  };
  const stop = () => { drawing.current = false; };

  return <section className="studio-canvas" aria-labelledby="studio-title">
    <div className="studio-canvas__copy"><p className="eyebrow">INTERACTIVE STUDIO / 01</p><h2 id="studio-title">Make a mark.</h2><p>Choose a medium, then draw across the canvas. This playful surface introduces a practice grounded in observation, realism and experimentation.</p></div>
    <div className="studio-canvas__frame">
      <div className="studio-canvas__bar"><span>UNTITLED STUDY</span><span>POINTER / TOUCH ENABLED</span></div>
      <canvas ref={canvasRef} onPointerDown={start} onPointerMove={move} onPointerUp={stop} onPointerCancel={stop} onPointerLeave={stop} aria-label="Interactive drawing canvas. Drag your pointer to draw." />
      <div className="studio-canvas__tools" role="group" aria-label="Drawing medium">
        {media.map((item, index) => <button key={item.name} type="button" aria-pressed={medium === index} onClick={() => setMedium(index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.name}</strong><small>{item.mark}</small></button>)}
        <button type="button" className="studio-canvas__clear" onClick={drawBackground}>CLEAR CANVAS</button>
      </div>
    </div>
  </section>;
}
