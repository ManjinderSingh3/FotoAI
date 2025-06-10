import React, { useState, useRef, useEffect } from "react";

export function StatsSection() {
  const [hovered, setHovered] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const activeIdxRef = useRef(0); // Internal index for setInterval
  const [displayActiveIdx, setDisplayActiveIdx] = useState(0); // For rendering the blue box

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>; // To manage the pause before clearing

    if (hovered) {
      // Reset all on hover start
      setOtp(["", "", "", "", "", ""]);
      activeIdxRef.current = 0;
      setDisplayActiveIdx(0);

      interval = setInterval(() => {
        const currentFillIdx = activeIdxRef.current;

        setOtp((prevOtp) => {
          let newOtp = [...prevOtp];

          // If we are at the last box and it's already filled, it means we just completed a cycle.
          // Schedule a reset after a short pause.
          if (currentFillIdx === 5 && newOtp[5] !== "") {
            timeout = setTimeout(() => {
              setOtp(["", "", "", "", "", ""]); // Clear numbers
              activeIdxRef.current = 0; // Reset internal index to start
              setDisplayActiveIdx(0); // Move blue box to first position
            }, 500); // Pause for 500ms before clearing and resetting
            return newOtp; // Return the fully filled OTP array for this tick
          }

          // Normal filling progression
          if (newOtp[currentFillIdx] === "") {
            newOtp[currentFillIdx] = Math.floor(Math.random() * 10).toString();
          }
          return newOtp;
        });

        // Advance the internal index and display index only if not at the last box
        // (The last box handling is done by the timeout above)
        if (currentFillIdx < 5) {
          activeIdxRef.current = (currentFillIdx + 1) % 6;
          setDisplayActiveIdx(activeIdxRef.current);
        }

      }, 500); // Interval duration for each step

    } else {
      // Clear all on hover end
      setOtp(["", "", "", "", "", ""]);
      activeIdxRef.current = 0;
      setDisplayActiveIdx(0);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout); // Clean up the timeout as well
    };
  }, [hovered]); // Only hovered is a dependency

  return (
    <div className="flex justify-center items-center min-h-[350px]">
      <div
        className={`w-[420px] bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-10 flex flex-col items-center transition-all duration-300 border-2 ${hovered ? "border-cyan-500" : "border-zinc-800"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex gap-4 mb-8 mt-2">
          {otp.map((digit, idx) => {
            // displayActiveIdx controls the highlighting
            const isActive = hovered && idx === displayActiveIdx;
            return (
              <div
                key={idx}
                className={`w-12 aspect-square rounded-lg flex items-center justify-center text-xl font-mono transition-all duration-200 bg-zinc-950/60 relative ${
                  isActive
                    ? "border-2 border-cyan-400 text-cyan-200 bg-zinc-900/80 shadow-[inset_0_0_10px_0_rgba(34,212,255,0.4)]"
                    : "border border-zinc-800 text-zinc-100 shadow-inner"
                }`}
              >
                {digit}
              </div>
            );
          })}
        </div>
        <div className="text-left w-full mt-2">
          <h3 className="text-xl font-semibold text-white mb-2">Multifactor Authentication</h3>
          <p className="text-zinc-400 text-base">
            Each user's self-serve multifactor settings are enforced automatically during sign-in.
          </p>
        </div>
      </div>
    </div>
  );
}
