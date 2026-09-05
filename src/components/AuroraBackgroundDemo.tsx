"use client";

import { motion } from "motion/react";
import React, { useEffect } from "react";
import { AuroraBackground } from "../ui/aurora-background";

interface AuroraBackgroundDemoProps {
  onEnter?: () => void;
}

export function AuroraBackgroundDemo({ onEnter }: AuroraBackgroundDemoProps) {
  // Support keyboard Enter key for seamless instant entry
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onEnter?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEnter]);

  return (
    <AuroraBackground>
      {/* Minimalist, Clean Presentation exactly matching Aceternity UI reference */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-5 items-center justify-center px-4 w-full max-w-6xl mx-auto text-center"
      >
        {/* Main Slogan: streamlined responsive scale and whitespace control so it stays on 1 line (desktop) or max 2 lines (mobile), never 3 lines */}
        <div className="font-ibm-plex text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white text-center tracking-tight leading-snug w-full max-w-6xl md:whitespace-nowrap">
          “Integrity in action, speed in delivery, and empathy at heart.”
        </div>

        {/* Subtitle in elegant light neutral font (Noto Sans SC) */}
        <div className="font-noto-sc font-light text-sm sm:text-lg md:text-xl lg:text-2xl text-neutral-200 py-3 text-center tracking-wide leading-relaxed max-w-3xl">
          我们用诚信写下开头，在高效里雕刻时光，而所有的故事，终究都要归于那份懂得冷暖、不忍让人失望的同理心。
        </div>

        {/* Pure, tactile Get lost in button */}
        <button
          id="intro-get-lost-in-btn"
          onClick={onEnter}
          className="font-ibm-plex bg-white rounded-full w-fit text-black px-6 py-2.5 sm:px-7 sm:py-3 font-medium text-sm sm:text-base hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.25)] mt-3"
        >
          Get lost in
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
