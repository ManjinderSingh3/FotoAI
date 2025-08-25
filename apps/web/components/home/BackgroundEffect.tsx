"use client";

import React from "react";
import { useTheme } from "next-themes";
import { StarEffect } from "@/components/home/StarEffect";

export function BackgroundEffects() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // Render a neutral container on SSR to avoid mismatch,
  // actual themed layers only after mount.
  if (!mounted) return <div className="absolute inset-0 z-0" />;

  const isDark = resolvedTheme === "dark";

  const darkVars = {
    ["--tint" as any]: "#0b1724",
    ["--base1" as any]: "#090e14",
    ["--base2" as any]: "#070a0d",
    ["--topAlpha" as any]: "0.18",
    ["--vignette" as any]: "0.30",
  } as React.CSSProperties;

  const lightVars = {
    ["--ltTopAlpha" as any]: "0.20",
    ["--ltVignette" as any]: "0.12",
  } as React.CSSProperties;

  const darkBase =
    "bg-[linear-gradient(180deg,var(--tint)_0%,var(--base1)_22%,var(--base2)_58%,var(--background)_100%)] " +
    "after:content-[''] after:absolute after:inset-0 " +
    "after:bg-[radial-gradient(80%_55%_at_50%_0%,rgba(56,189,248,var(--topAlpha))_0%,rgba(2,6,23,0)_70%)] " +
    "shadow-[inset_0_0_240px_rgba(0,0,0,var(--vignette))]";

  const lightBase =
    "bg-[linear-gradient(180deg,#e9f4ff_0%,#f5faff_55%,var(--background)_100%)] " +
    "after:content-[''] after:absolute after:inset-0 " +
    "after:bg-[radial-gradient(85%_50%_at_50%_0%,rgba(56,189,248,var(--ltTopAlpha))_0%,rgba(255,255,255,0)_65%)] " +
    "shadow-[inset_0_0_140px_rgba(0,0,0,var(--ltVignette))]";

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Base gradient */}
      <div
        className={`absolute inset-0 ${isDark ? darkBase : lightBase}`}
        style={isDark ? darkVars : lightVars}
      />

      {/* Bottom fade blends to page bg; UNDER stars */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 60%, var(--background) 90%, var(--background) 100%)",
        }}
      />

      {/* Stars across the section */}
      <StarEffect count={40} />

      {/* Grid only in upper arc, on top */}
      <div
        className={`absolute inset-0 z-10 bg-grid mask-arc-top pointer-events-none ${
          isDark ? "opacity-65" : "opacity-45 mix-blend-multiply"
        }`}
      />
    </div>
  );
}
