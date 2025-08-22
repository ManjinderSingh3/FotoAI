"use client";

import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { Sparkles, KeyRound } from "lucide-react";
import Link from "next/link";

export default function Dashboard({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { user } = useAuth();

  return (
    <div>
      {/* Top shadow/glow effect*/}
      <div className="pointer-events-none absolute inset-0 -z-10 glow-layer" />

      <div className="flex items-center justify-center gap-4 mt-12">
        <span className="px-4 py-2 rounded-full dark:bg-pink-500/10 dark:text-pink-300 text-sm font-medium flex items-center gap-2 border dark:border-pink-600/20 bg-pink-600/10 text-pink-500 border-pink-700/20">
          <Sparkles className="w-4 h-4" />
          Next-Gen AI Portrait Generation
        </span>
      </div>

      {/* Header */}
      <div className="relative mx-auto max-w-6xl px-6 pt-18 dark:text-zinc-400 text-center">
        <h1 className="mb-2 text-6xl font-bold">
          Welcome, {user?.firstName || user?.username || "User"}
        </h1>
        <p className="text-xl mt-8">
          Your creative journey starts here. Train your first AI model or
          explore our pre-made packs to generate stunning, personalized images.
        </p>
      </div>

      <div className="mt-8 flex">
        <div
          className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-white p-4  md:p-8 dark:bg-black
    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col justify-center items-center"
          >
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              Gallery
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 text-center">
              Upload your photos and train personalized AI models to generate
              professional images
            </p>
          </motion.div>
        </div>

        <Link href="/train">
          <div
            className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-white p-4  md:p-8 dark:bg-black
    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col justify-center items-center"
            >
              <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                Train Custom Models
              </h2>
              <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 text-center">
                Upload your photos and train personalized AI models to generate
                professional images
              </p>
            </motion.div>
          </div>
        </Link>
      </div>

      <div className="mt-8 flex">
        <div
          className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-white p-4  md:p-8 dark:bg-black
    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col justify-center items-center"
          >
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              Train Custom Models
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 text-center">
              Upload your photos and train personalized AI models to generate
              professional images
            </p>
          </motion.div>
        </div>

        <div
          className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-white p-4  md:p-8 dark:bg-black
    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col justify-center items-center"
          >
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              Ready-to-use Packs
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 text-center">
              Upload your photos and train personalized AI models to generate
              professional images
            </p>
          </motion.div>
        </div>
      </div>

      {/* Page content */}
      {/* <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        {children}
      </div> */}
    </div>
  );
}
