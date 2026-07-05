"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

const themes: { label: Theme; icon: LucideIcon }[] = [
  { label: "light", icon: Sun },
  { label: "dark", icon: Moon },
  { label: "system", icon: Monitor }
];

export function PixelThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as Theme | null;
    setTheme(stored ?? "system");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") {
      root.removeAttribute("data-theme");
      window.localStorage.removeItem("theme");
    } else {
      root.dataset.theme = theme;
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className="theme-toggle" aria-label="Theme">
      {themes.map(({ label, icon: Icon }) => (
        <button key={label} type="button" aria-pressed={theme === label} aria-label={`${label} theme`} onClick={() => setTheme(label)}>
          <Icon aria-hidden="true" size={15} />
        </button>
      ))}
    </div>
  );
}
