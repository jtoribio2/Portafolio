"use client";

import { useEffect, useState } from "react";
import { themes, type ThemeName } from "@/config/themes";

const STORAGE_KEY = "portfolio-theme";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeName>("obsidian");

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme && savedTheme in themes) {
      document.documentElement.dataset.theme =
        savedTheme;
    }
  }, []);

  useEffect(() => {
    const selectedTheme = themes[theme];
    const root = document.documentElement;

    root.style.setProperty(
      "--background",
      selectedTheme.background
    );

    root.style.setProperty(
      "--foreground",
      selectedTheme.foreground
    );

    root.style.setProperty(
      "--muted",
      selectedTheme.muted
    );

    root.style.setProperty(
      "--accent",
      selectedTheme.accent
    );

    root.style.setProperty(
      "--border",
      selectedTheme.border
    );

    root.dataset.theme = theme;
  }, [theme]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  };

  return {
    theme,
    setTheme,
    themes,
  };
}