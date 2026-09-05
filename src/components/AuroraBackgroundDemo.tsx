"use client";

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
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        {/* 1. 英文大标题：原有 IBM Plex Sans 纯正西文字体，下方留白 48px */}
        <h1
          className="font-ibm-plex"
          style={{
            fontSize: "clamp(2rem, 3.8vw, 3.4rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#ffffff",
            marginBottom: "48px",
            maxWidth: "960px",
            letterSpacing: "-0.015em",
          }}
        >
          “Integrity in action, speed in delivery, and empathy at heart.”
        </h1>

        {/* 2. 中文长句：苹方优先原生字体栈，字体放大与英文呼应，保持首句不折行 */}
        <p
          className="font-chinese"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Noto Sans SC", "Microsoft YaHei", sans-serif',
            fontSize: "clamp(1.15rem, 1.9vw, 1.7rem)",
            color: "#f4f4f5",
            lineHeight: 1.75,
            marginBottom: "40px",
            maxWidth: "1020px",
            fontWeight: 400,
            letterSpacing: "0.02em",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          <span className="inline-block whitespace-nowrap">我们用诚信写下开头，在高效里镌刻时光，而所有的故事，</span>
          <br className="hidden sm:inline" />
          <span className="inline-block">终究都要归于那份懂得冷暖、不忍让人失望的同理心。</span>
        </p>

        <div style={{ marginBottom: "24px" }}>
          <button
            id="intro-get-lost-in-btn"
            onClick={onEnter}
            className="hover:scale-105 active:scale-95 transition-all duration-200"
            style={{
              background: "#ffffff",
              color: "#000000",
              padding: "13px 36px",
              borderRadius: "9999px",
              fontWeight: 500,
              fontSize: "0.95rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.22)",
            }}
          >
            Get lost in
          </button>
        </div>

        <div
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro SC', 'SF Pro Text', 'Helvetica Neue', Helvetica, sans-serif",
            fontSize: "0.85rem",
            color: "rgba(255, 255, 255, 0.52)",
            letterSpacing: "0.5px",
          }}
        >
          按 Enter 或点击开启旅程
        </div>
      </div>
    </AuroraBackground>
  );
}
