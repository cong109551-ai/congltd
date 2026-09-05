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

        {/* 2. 中文长句：苹方优先原生字体栈，400字重饱满清晰，文本平衡换行，恢复原版细腻文案 */}
        <p
          className="font-chinese"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Noto Sans SC", "Microsoft YaHei", sans-serif',
            fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
            color: "#e4e4e7",
            lineHeight: 1.8,
            marginBottom: "40px",
            maxWidth: "780px",
            fontWeight: 400,
            letterSpacing: "0.03em",
            textWrap: "balance",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          我们用诚信写下开头，在高效里雕刻时光，而所有的故事，终究都要归于那份懂得冷暖、不忍让人失望的同理心。
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
