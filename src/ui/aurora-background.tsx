import { cn } from "../lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  className?: string;
  customAuroraGradient?: string;
  style?: React.CSSProperties;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  customAuroraGradient,
  style,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main className="w-full h-full">
      <div
        className={cn(
          "relative w-full min-h-screen bg-zinc-950 text-white transition-colors duration-500 overflow-hidden aurora-bg-container",
          className
        )}
        style={style}
        {...props}
      >
        {/* Aceternity Chemical Burn & Aurora Light Engine */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* 1. Cinematic Anamorphic Optical Prism Beam (Matches Aceternity reference screenshot) */}
          <div
            className="absolute -top-[20%] -right-[10%] w-[850px] h-[1200px] pointer-events-none animate-prism-streak mix-blend-screen opacity-75 will-change-transform"
            style={{
              background:
                "linear-gradient(135deg, rgba(29, 78, 216, 0.45) 15%, rgba(6, 182, 212, 0.35) 30%, rgba(245, 158, 11, 0.25) 45%, rgba(255, 255, 255, 0.4) 52%, rgba(221, 214, 254, 0.35) 60%, rgba(99, 102, 241, 0.25) 75%, transparent 90%)",
              filter: "blur(65px)",
              transform: "rotate(-12deg)",
            }}
          />

          {/* 2. Secondary soft ambient glow filling the upper quadrant */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 mix-blend-screen"
            style={{
              background: "radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.4), rgba(245, 158, 11, 0.15) 50%, transparent 80%)",
              filter: "blur(70px)",
            }}
          />

          {/* 3. Official Aceternity Repeating Linear Gradient with Difference Blend */}
          <div
            className="aurora-layer-base"
            style={{
              ...(customAuroraGradient ? { backgroundImage: customAuroraGradient } : {}),
              ...(showRadialGradient
                ? {
                    maskImage: "radial-gradient(ellipse at 100% 0%, black 15%, transparent 72%)",
                    WebkitMaskImage: "radial-gradient(ellipse at 100% 0%, black 15%, transparent 72%)",
                  }
                : {}),
            }}
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </main>
  );
};
