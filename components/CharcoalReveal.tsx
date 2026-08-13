'use client';

import Image from '@/components/BasePathImage';
import { useEffect, useRef, useState } from 'react';

interface CharcoalRevealProps { imageSrc: string; alt: string; className?: string; }
type Point = { x:number; y:number; px:number; py:number; velocity:number };

export function CharcoalReveal({ imageSrc, alt, className = '' }: CharcoalRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLCanvasElement>(null);
  const pigmentRef = useRef<HTMLCanvasElement>(null);
  const dustRef = useRef<HTMLCanvasElement>(null);
  const previous = useRef<{x:number;y:number;t:number}|null>(null);
  const queue = useRef<Point[]>([]);
  const frame = useRef<number>();
  const [full, setFull] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvases = [maskRef.current, pigmentRef.current, dustRef.current];
    if (!container || canvases.some(canvas => !canvas)) return;
    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvases.forEach(canvas => { if (!canvas) return; canvas.width = width*dpr; canvas.height = height*dpr; canvas.style.width=`${width}px`; canvas.style.height=`${height}px`; canvas.getContext('2d')?.setTransform(dpr,0,0,dpr,0,0); });
      const mask = maskRef.current!.getContext('2d')!;
      mask.globalCompositeOperation='source-over'; mask.fillStyle='#e7e0d3'; mask.fillRect(0,0,width,height);
      mask.globalAlpha=.11;
      for(let y=0;y<height;y+=4){ mask.fillStyle=Math.random()>.5?'#7f776c':'#f4efe7'; mask.fillRect(0,y,width,1); }
      mask.globalAlpha=1;
    };
    const observer = new ResizeObserver(resize); observer.observe(container); resize();
    return () => { observer.disconnect(); if(frame.current) cancelAnimationFrame(frame.current); };
  }, []);

  const render = () => {
    const points = queue.current.splice(0);
    const mask = maskRef.current?.getContext('2d');
    const pigment = pigmentRef.current?.getContext('2d');
    const dust = dustRef.current?.getContext('2d');
    if (!mask || !pigment || !dust) return;
    for (const point of points) {
      const dx=point.x-point.px, dy=point.y-point.py, distance=Math.max(1,Math.hypot(dx,dy));
      const fast=point.velocity>1.05, slow=point.velocity<.32;
      const radius=slow?30:fast?10:20, steps=Math.ceil(distance/5), angle=Math.atan2(dy,dx);
      for(let i=0;i<=steps;i++){
        const x=point.px+dx*i/steps, y=point.py+dy*i/steps;
        mask.save(); mask.globalCompositeOperation='destination-out'; mask.globalAlpha=slow?.32:fast?.1:.2;
        mask.translate(x,y); mask.rotate(angle); mask.scale(1.45,.72);
        for(let grain=0;grain<(fast?7:15);grain++){ const gx=(Math.random()-.5)*radius,gy=(Math.random()-.5)*radius; mask.fillStyle='#000'; mask.fillRect(gx,gy,Math.random()*3+1,Math.random()*2+1); }
        mask.restore();
        pigment.save(); pigment.translate(x,y); pigment.rotate(angle); pigment.globalAlpha=slow?.17:fast?.06:.11; pigment.fillStyle='#241f1b';
        pigment.fillRect(-radius*.7+(Math.random()*6),-1,radius*1.4,slow?3:1.5); pigment.restore();
      }
      if(fast){ dust.fillStyle='rgba(35,29,25,.25)'; for(let i=0;i<5;i++){ dust.beginPath(); dust.arc(point.x+(Math.random()-.5)*22,point.y+(Math.random()-.5)*18,Math.random()*1.5+.3,0,Math.PI*2); dust.fill(); } }
    }
    frame.current=undefined;
  };
  const move = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if(full) return;
    const rect=event.currentTarget.getBoundingClientRect(), now=performance.now(), x=event.clientX-rect.left,y=event.clientY-rect.top;
    if(previous.current){ const distance=Math.hypot(x-previous.current.x,y-previous.current.y); queue.current.push({x,y,px:previous.current.x,py:previous.current.y,velocity:distance/Math.max(1,now-previous.current.t)}); if(!frame.current) frame.current=requestAnimationFrame(render); }
    previous.current={x,y,t:now};
  };
  return (
    <div ref={containerRef} className={`relative h-[500px] overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] ${className}`}>
      <Image src={imageSrc} alt={alt} fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain" priority={false} />
      {!full && <><canvas ref={maskRef} className="absolute inset-0" aria-hidden="true"/><canvas ref={pigmentRef} className="pointer-events-none absolute inset-0 mix-blend-multiply" aria-hidden="true"/><canvas ref={dustRef} onPointerMove={move} onPointerDown={e=>{try{e.currentTarget.setPointerCapture(e.pointerId)}catch{/* capture unsupported */}move(e)}} onPointerUp={()=>{previous.current=null}} onPointerCancel={()=>{previous.current=null}} onPointerLeave={()=>{previous.current=null}} className="absolute inset-0 touch-none cursor-crosshair" aria-label="Move across the drawing to reveal the study"/></>}
      <div className="absolute bottom-4 left-4 flex items-center gap-4 bg-[var(--bg-surface)] px-4 py-3"><span className="font-serif text-sm">Reveal the study.</span><button type="button" className="text-link" aria-pressed={full} onClick={()=>setFull(!full)}>{full?'Return to interaction':'View full artwork'}</button></div>
    </div>
  );
}
