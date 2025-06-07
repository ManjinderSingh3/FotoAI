import { StarEffect } from "@/components/home/StarEffect";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Gradient: cyan-900 blends to black sooner */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, #083344 0%, #083344 20%, #000 60%, #000 100%)",
        }}
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
