/*
import { StarEffect } from "@/components/home/StarEffect";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, #083344 0%, #083344 20%, #000 60%, #000 100%)",
        }}
      />

      <div
        className="absolute w-full bg-grid pointer-events-none"
        style={{
          height: "40%",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      <StarEffect count={40} />
    </div>
  );
}
*/
"use client";

import { StarEffect } from "@/components/home/StarEffect";
import { useTheme } from "next-themes";

export function BackgroundEffects() {
  const { theme } = useTheme();

  // --- DARK THEME ------------------------------------------------------------
  const varsDark =
    "--tint:#0b1724;" + // subtle navy top tone
    "--base1:#090e14;" + // neutral near-black
    "--base2:#070a0d;" +
    "--topAlpha:0.18;" + // top blue spread
    "--vignette:0.30;"; // edge darkening

  const darkBase =
    "bg-[linear-gradient(180deg,#0b1724_0%,#090e14_22%,#070a0d_58%,var(--background)_100%)] " +
    "after:content-[''] after:absolute after:inset-0 " +
    "after:bg-[radial-gradient(80%_55%_at_50%_0%,rgba(56,189,248,0.18)_0%,rgba(2,6,23,0)_70%)] " +
    "shadow-[inset_0_0_240px_rgba(0,0,0,0.30)]";

  // --- LIGHT THEME -----------------------------------------------------------
  const lightVars = "--ltTopAlpha:0.20;" + "--ltVignette:0.12;";

  const lightBase =
    "bg-[linear-gradient(180deg,#e9f4ff_0%,#f5faff_55%,var(--background)_100%)] " +
    "after:content-[''] after:absolute after:inset-0 " +
    "after:bg-[radial-gradient(85%_50%_at_50%_0%,rgba(56,189,248,0.20)_0%,rgba(255,255,255,0)_65%)] " +
    "shadow-[inset_0_0_140px_rgba(0,0,0,0.12)]";

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Base gradient (no bottom blue) */}
      <div
        className={`absolute inset-0 ${theme === "dark" ? darkBase : lightBase}`}
        style={
          theme === "dark"
            ? ({ cssText: varsDark } as any)
            : ({ cssText: lightVars } as any)
        }
      />

      {/* Bottom black fade UNDER stars so merge with next section is seamless */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 60%, var(--background) 90%, var(--background) 100%)",
        }}
      />

      {/* Stars (full area) */}
      <StarEffect count={40} />

      {/* Grid on upper arc ONLY (above stars) */}
      <div
        className={`absolute inset-0 bg-grid bg-grid-sm pointer-events-none mask-arc-top ${
          theme === "dark" ? "opacity-85" : "opacity-90 mix-blend-multiply"
        }`}
      />
    </div>
  );
}
