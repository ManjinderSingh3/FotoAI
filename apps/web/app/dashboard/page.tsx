"use client";

import React from "react";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard({ children }: { children?: React.ReactNode }) {
  const { user } = useAuth();

  return (
    <div className="relative isolate bg-[#0b0b0b] text-white">
      {/* ✅ Top/upper shadow (glow) only */}
      <div className="pointer-events-none absolute inset-0 -z-10 glow-layer" />

      {/* Header */}
      <div className="relative mx-auto max-w-6xl px-6 pt-24 dark:text-zinc-400">
        <h1 className="mb-2 text-6xl font-bold">
          Welcome, {user?.firstName || user?.username || "User"}
        </h1>
        <p className="text-xl">No images generated yet. 
        Ready to create? Let's start building.</p>
      </div>

      {/* Page content */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        {children}
      </div>
    </div>
  );
}