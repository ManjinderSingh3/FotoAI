import { motion } from "framer-motion";
import { BackgroundEffects } from "./BackgroundEffect";
export function Hero() {
  return (
    <div>
      <BackgroundEffects />

      <h1 className="relative z-10 text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-tight text-zinc-300">
        Create Stunning AI Images in Seconds
        {/* <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          AI Magic
        </span> */}
      </h1>
      <h3 className="relative z-10 mx-auto max-w-4xl text-xl">
        From selfies to surreal scenes, FotoAI turns your ideas into visuals in
        seconds. Easy to use, endlessly creative, and always a little bit
        magical.
      </h3>

      <div className="flex justify-between">
        <button className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)] mx-auto ">
          <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1 ring-1 ring-white/10">
            Start Creating Images
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>
    </div>
  );
}
