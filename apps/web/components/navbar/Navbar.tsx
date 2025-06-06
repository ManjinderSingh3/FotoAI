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
import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";

export function Navbar() {
  const { user } = useAuth();
  return (
    <div className="relative z-10">
      <div className="flex items-center justify-between p-6">
        {/* Logo */}
        <div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-90"
            >
              <LogoIcon className="h-8 w-8 text-black dark:text-white" />
              <span className="hidden font-bold font-mono text-xl sm:inline-block mt-1.5">
                Foto<span className="text-black">AI</span>
              </span>
            </Link>
          </motion.div>
        </div>
        {user ? (
          <div className="flex space-x-3">
            <Button className="dark:bg-white">Train Model</Button>
            <Button className="dark:bg-white">Generate Images</Button>
            <Button className="dark:bg-white">Pack</Button>
            <Button className="dark:bg-white">Billing</Button>
            {/* Train Model*/}
            {/* Generate Images*/}
            {/* Generate Pack*/}
            {/* Credits / Pricing*/}
            {/* My Purchases*/}
          </div>
        ) : (
          <></>
        )}
        {/* Pricing and Authentication */}
        <div>
          <SignedIn>
            <div className="flex space-x-3">
              <ThemeToggle />
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex space-x-4">
              <ThemeToggle />
              <button className="group relative rounded-full p-px text-sm/6 text-zinc-900 hover:text-zinc-400 dark:text-zinc-400 duration-300 dark:hover:text-zinc-100 border hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                <div className="relative z-10 rounded-full px-4 py-1 ring-1 ring-white/10">
                  Pricing
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
              <SignInButton>
                <button className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                  <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1 ring-1 ring-white/10">
                    Sign In
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
