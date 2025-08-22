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
import { ThemeToggle } from "@/components/theme-toggle";
//import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
// import { useRouter } from "next/navigation";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import dynamic from "next/dynamic";

export function Navbar() {
  return (
    <div className="relative z-10">
      <div className="flex flex-row  items-center justify-between py-8 max-w-[85rem] mx-auto px-8 w-full relative z-[60]">
        {/* Logo */}
        <div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-90"
            >
              <LogoIcon className="h-8 w-8  dark:text-zinc-400" />
              <span className="hidden font-bold font-mono text-xl sm:inline-block mt-1.5 text-neutral-80 dark:text-zinc-400">
                FotoAI
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Center buttons - only show when signed in */}
        <SignedIn>
          <div className="min-w-[460px] flex justify-end">
            {/* Keep width stable while Clerk hydrates */}
            <ClerkLoading>
              <div className="h-10 w-[460px]" />
            </ClerkLoading>

            <ClerkLoaded>
              <div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-8 lg:space-x-14 text-sm text-zinc-500 font-medium  transition duration-200">
                <a className="hover:text-zinc-400" href="/dashboard">
                  <span>Dashboard</span>
                </a>
                <a className="hover:text-zinc-400" href="/purchases">
                  <span>My Purchases</span>
                </a>
                <a className="hover:text-zinc-400" href="/pricing">
                  <span>Buy Credits</span>
                </a>
              </div>
            </ClerkLoaded>
          </div>
        </SignedIn>


        {/* Authentication */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* 1) Instant SSR fallback (always visible immediately) */}
          <ClerkLoading>
            <button className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]">
              <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1 ring-1 ring-white/10">
                Sign In
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </ClerkLoading>

          {/* 2) Real buttons once Clerk is hydrated */}
          <ClerkLoaded>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                  <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1 ring-1 ring-white/10">
                    Sign In
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
