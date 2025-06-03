"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { LogoIcon } from "./LogoIcon";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between p-6">
        {/* Logo */}
        <div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-90"
            >
              <LogoIcon className="h-8 w-8 text-black" />
              <span className="hidden font-bold font-mono text-xl sm:inline-block mt-1.5">
                Foto<span className="text-cyan-500">AI</span>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Pricing and Authentication */}
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex space-x-4">
              <button className="group relative rounded-full p-px text-sm/6 text-zinc-900 hover:text-zinc-400 dark:text-zinc-400 duration-300 dark:hover:text-zinc-100 border hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                <div className="relative z-10 rounded-full  px-4 py-1 ring-1 ring-white/10">
                  Pricing
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>

              <button className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1 ring-1 ring-white/10">
                  Sign In
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
            </div>
          </SignedOut>
        </div>
      </div>
    </>
  );
}
