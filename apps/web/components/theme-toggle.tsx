"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-5 w-5 ${!isDark ? "text-cyan-700" : ""}`} />
      <Switch
        className="data-[state=checked]:bg-cyan-700 data-[state=unchecked]:bg-input"
        checked={isDark}
        onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
      />
      <Moon className={`h-5 w-5 ${isDark ? "text-cyan-700" : ""}`} />
    </div>
  );
}
