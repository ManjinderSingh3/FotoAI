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
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Theme-aware gradient background */}
      <div
        className={`absolute inset-0 w-full h-full ${
          theme === "dark"
            ? "bg-gradient-to-b from-cyan-900/50 via-cyan-900/50 to-black"
            : "bg-gradient-to-b from-cyan-100/30 via-cyan-50/20 to-white"
        }`}
      />
      
      {/* Grid: covers 40% and fades out at the bottom */}
      <div
        className="absolute w-full bg-grid pointer-events-none" 
        style={{
          height: "40%",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />
      
      {/* Stars: visible color */}
      <StarEffect count={40} />
    </div>
  );
}

