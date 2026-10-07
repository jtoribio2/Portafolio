"use client";

import { useEffect, useSyncExternalStore } from "react";
import { themes, type ThemeName } from "@/config/themes";

const STORAGE_KEY = "portfolio-theme";

const SERVER_SNAPSHOT = "__server__";
const EMPTY_SNAPSHOT = "__empty__";

function getStoredTheme(): ThemeName | null {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (
    savedTheme &&
    savedTheme in themes
  ) {
    return savedTheme as ThemeName;
  }

  return null;
}

function getClientSnapshot(): string {
  const savedTheme = getStoredTheme();

  return savedTheme ?? EMPTY_SNAPSHOT;
}

function getServerSnapshot(): string {
  return SERVER_SNAPSHOT;
}

function subscribe(callback: () => void) {
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      callback();
    }
  };

  const handleThemeChange = () => {
    callback();
  };

  window.addEventListener(
    "storage",
    handleStorageChange
  );

  window.addEventListener(
    "portfolio-theme-change",
    handleThemeChange
  );

  return () => {
    window.removeEventListener(
      "storage",
      handleStorageChange
    );

    window.removeEventListener(
      "portfolio-theme-change",
      handleThemeChange
    );
  };
}

export function useTheme() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const theme: ThemeName =
    snapshot !== SERVER_SNAPSHOT &&
    snapshot !== EMPTY_SNAPSHOT
      ? (snapshot as ThemeName)
      : "obsidian";

  const isThemeReady =
    snapshot !== SERVER_SNAPSHOT;

  const hasChosenTheme =
    snapshot !== SERVER_SNAPSHOT &&
    snapshot !== EMPTY_SNAPSHOT;

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
    localStorage.setItem(
      STORAGE_KEY,
      newTheme
    );

    window.dispatchEvent(
      new Event("portfolio-theme-change")
    );
  };

  return {
    theme,
    setTheme,
    themes,
    hasChosenTheme,
    isThemeReady,
  };
}