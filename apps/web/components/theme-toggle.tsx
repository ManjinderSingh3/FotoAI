// components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme === "dark";
  const onChange = (checked: boolean) => setTheme(checked ? "dark" : "light");

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-5 w-5 ${mounted && !isDark ? "text-cyan-700" : ""}`} />

      {!mounted ? (
        <Switch
          defaultChecked // matches defaultTheme="dark"; remove if default is light
          onCheckedChange={onChange}
          className="data-[state=checked]:bg-cyan-700 data-[state=unchecked]:bg-input"
        />
      ) : (
        <Switch
          checked={isDark}
          onCheckedChange={onChange}
          className="data-[state=checked]:bg-cyan-700 data-[state=unchecked]:bg-input"
        />
      )}

      <Moon className={`h-5 w-5 ${mounted && isDark ? "text-cyan-700" : ""}`} />
    </div>
  );
}
