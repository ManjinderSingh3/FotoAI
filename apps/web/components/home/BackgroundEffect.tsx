import { StarEffect } from "@/components/home/StarEffect";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900 to-black w-full h-full" />
      {/* Grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      {/* Stars */}
      <StarEffect count={40} />
    </div>
  );
}
