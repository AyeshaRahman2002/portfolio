'use client';

import React, { useState, useRef } from 'react';
import { ProcessStage } from '../types/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

interface ArtworkProcessScrubberProps {
  stages: ProcessStage[];
  title?: string;
}

export const ArtworkProcessScrubber: React.FC<ArtworkProcessScrubberProps> = ({
  stages,
  title = 'DRAWING DEVELOPMENT PROCESS',
}) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(stages.length - 1);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  const activeStage = stages[currentStageIndex] || stages[stages.length - 1];

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    const threshold = 40; // px shift per step

    if (Math.abs(dx) > threshold) {
      if (dx > 0 && currentStageIndex < stages.length - 1) {
        setCurrentStageIndex((prev) => prev + 1);
        startXRef.current = e.clientX;
      } else if (dx < 0 && currentStageIndex > 0) {
        setCurrentStageIndex((prev) => prev - 1);
        startXRef.current = e.clientX;
      }
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="my-10 p-6 md:p-8 bg-art-surface border border-art-border transition-colors duration-1000">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-art-border space-y-2 sm:space-y-0">
        <h4 className="font-mono text-xs tracking-widest text-art-muted uppercase">
          PROCESS SCRUBBER / {title}
        </h4>
        <div className="font-mono text-xs text-art-accent font-semibold tracking-widest uppercase">
          STAGE 0{activeStage.stageNumber} OF 0{stages.length}: {activeStage.label}
        </div>
      </div>

      {/* Main Artwork Stage Display Surface */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-full h-[400px] md:h-[500px] bg-art-card border border-art-border overflow-hidden select-none cursor-ew-resize flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.stageNumber}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full relative"
          >
            {/* Stage Placeholder/Image */}
            <div className="absolute inset-0 bg-art-card flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-24 h-24 rounded-full border border-art-accent/40 flex items-center justify-center font-serif text-3xl italic text-art-accent">
                0{activeStage.stageNumber}
              </div>
              <h5 className="font-serif text-2xl text-art-text">{activeStage.label}</h5>
              <p className="text-xs max-w-md text-art-muted font-sans leading-relaxed">
                {activeStage.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Drag Hint Overlay */}
        <div className="absolute bottom-4 right-4 z-10 px-3 py-1 bg-art-bg/90 border border-art-border pointer-events-none">
          <span className="font-mono text-[10px] tracking-widest text-art-muted uppercase">
            DRAG HORIZONTALLY TO SCRUB STAGES
          </span>
        </div>
      </div>

      {/* Horizontal Scrubber Track Controls */}
      <div className="mt-6 space-y-3">
        <input
          type="range"
          min={0}
          max={stages.length - 1}
          value={currentStageIndex}
          onChange={(e) => setCurrentStageIndex(Number(e.target.value))}
          className="w-full accent-art-accent cursor-pointer bg-art-border h-1.5 rounded-none"
        />

        <div className="flex justify-between items-center font-mono text-[11px] text-art-muted">
          <span>01. CONSTRUCTION</span>
          <span>03. VALUES</span>
          <span>06. COMPLETED</span>
        </div>
      </div>
    </div>
  );
};
