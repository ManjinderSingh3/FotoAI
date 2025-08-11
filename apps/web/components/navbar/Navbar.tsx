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
import { useRouter } from "next/navigation";

export function Navbar() {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div className="relative z-10 container mx-auto py-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-90"
            >
              <LogoIcon className="h-8 w-8 text-black dark:text-white" />
              <span className="hidden font-bold font-mono text-xl sm:inline-block mt-1.5">
                FotoAI
              </span>
            </Link>
          </motion.div>
        </div>
        {user ? (
          <div className="flex space-x-3">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-center rounded-md bg-gray-100 px-3 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
              type="submit"
              onClick={() => router.push("/train")}
            >
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Train Model
              </span>
              <BottomGradient />
            </button>

            <Button className="dark:bg-white">Generate Images1</Button>
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

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
