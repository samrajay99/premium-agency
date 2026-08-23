"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("hed-theme");
    return stored === "light" || stored === "dark" ? stored : "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", theme === "light");
    window.localStorage.setItem("hed-theme", theme);
  }, [theme]);

  useEffect(() => {
    const stored = window.localStorage.getItem("hed-theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.classList.toggle("theme-light", stored === "light");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("theme-light", next === "light");
    window.localStorage.setItem("hed-theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border border-line p-2 text-muted hover:text-foreground"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
