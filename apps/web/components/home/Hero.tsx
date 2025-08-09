import { motion } from "framer-motion";
import { BackgroundEffects } from "./BackgroundEffect";
import { HowItWorks } from "./HowItWorks";
import { Testimonials } from "./TestimonialsSection";
import { StatsSection } from "./StatsSection";
import { testimonials } from "@/data/testimonials";
import { TechStackIcons } from "./TechStackIcons";

export function Hero() {
  return (
    <div>
      <BackgroundEffects />
      <div className="relative z-10 text-center text-neutral-700 dark:text-zinc-400 mt-20">
        <h1 className=" md:text-6xl font-bold tracking-tight max-w-6xl mx-auto leading-tight text-4xl">
          Create Stunning, Professional Quality AI-Generated Images at
          lightning-fast speed
        </h1>
        <h2 className="mt-6 mx-auto max-w-4xl text-xl px-4">
          From selfies to surreal scenes, FotoAI turns your ideas into visuals
          in seconds. Easy to use, endlessly creative, and always a little bit
          magical.
        </h2>
        <div className="flex justify-center">
          <TechStackIcons />
        </div>
      </div>

      <div className="flex justify-between m-12">
        <button className="group relative rounded-full p-px text-lg text-zinc-300 duration-300 hover:text-zinc-100 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)] mx-auto ">
          <div className="relative z-10 rounded-full bg-zinc-950 px-5 py-4 ring-2 ring-white/10">
            Start Creating Images
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>

      <HowItWorks />
      <Testimonials testimonials={testimonials} />
      <StatsSection />
      {/* <GlowingBorderBox/> */}
    </div>
  );
}
