"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(
      document.documentElement.classList.contains("dark") || media.matches
    );
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = root.classList.toggle("dark");
    setIsDark(next);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggle}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
