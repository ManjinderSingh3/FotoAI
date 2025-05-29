"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  return (
    <>
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href="/"
          className="flex items-center space-x-1 transition-opacity hover:opacity-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span className="hidden font-bold font-mono text-xl sm:inline-block">
            Foto<span className="text-pink-500">AI</span>
          </span>
        </Link>
      </motion.div>
    </>
  );
}
