import { motion } from "framer-motion";
import { BackgroundEffects } from "./BackgroundEffect";
export function Hero() {
  return (
    <div>
      <BackgroundEffects/>
      <button className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]">
        <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1 ring-1 ring-white/10">
          Start Creating Images
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </div>
  );
}
