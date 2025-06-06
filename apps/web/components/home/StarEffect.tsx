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

  React.useEffect(() => {
    setMounted(true);
    setStars(
      Array.from({ length: count }, () => ({
        ...randomPosition(),
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        duration: 24 + Math.random() * 12, // 24-36 seconds
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  React.useEffect(() => {
    if (!mounted) return;
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
              duration: 24 + Math.random() * 12, // 24-36 seconds
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
          animate={{ left: `${star.left}%`, top: `${star.top}%` }}
          transition={{ duration: star.duration, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          className="bg-white rounded-full"
        />
      ))}
    </div>
  );
}
