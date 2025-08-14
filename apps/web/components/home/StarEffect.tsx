import React from "react";
import { motion } from "framer-motion";

function randomPosition() {
  return {
    left: Math.random() * 100,
    top: Math.random() * 100,
  };
}

interface Star {
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
}

export function StarEffect({ count = 40 }: { count?: number }) {
  const [stars, setStars] = React.useState<Star[]>([]);
  const [mounted, setMounted] = React.useState(false);

  // Generate initial random positions on mount
  React.useEffect(() => {
    setMounted(true);
    setStars(
      Array.from({ length: count }, () => ({
        ...randomPosition(),
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        duration: 16 + Math.random() * 4, // 8-12 seconds
      }))
    );
  }, [count]);

  // Immediately trigger first movement, then set up intervals for further movement
  React.useEffect(() => {
    if (!mounted) return;
    // Move all stars once immediately
    setStars((prev) =>
      prev.map((star) => ({
        ...randomPosition(),
        size: star.size,
        opacity: star.opacity,
        duration: 24 + Math.random() * 12,
      }))
    );
    // Then set up intervals for further movement
    const intervals = stars.map((_, i) =>
      setInterval(
        () => {
          setStars((prev) => {
            const updated = [...prev];
            if (!updated[i]) return updated;
            const { size, opacity } = updated[i]!;
            updated[i] = {
              ...randomPosition(),
              size,
              opacity,
              duration: 8 + Math.random() * 4,
            };
            return updated;
          });
        },
        (24 + Math.random() * 12) * 1000
      )
    );
    return () => intervals.forEach(clearInterval);
  }, [mounted, stars.length]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{ left: `${star.left}%`, top: `${star.top}%` }}
          transition={{
            duration: star.duration,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: star.size,
            height: star.size,
            backgroundColor: `rgba(255,255,255,${star.opacity})`,
          }}
          className="rounded-full"
        />
      ))}
    </div>
  );
}
