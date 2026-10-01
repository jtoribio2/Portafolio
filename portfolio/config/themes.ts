export const themes = {
  obsidian: {
    name: "Obsidian",
    background: "#09090b",
    foreground: "#fafafa",
    muted: "#a1a1aa",
    accent: "#ffffff",
    border: "rgba(255,255,255,0.10)",
  },

  ocean: {
    name: "Ocean",
    background: "#07111f",
    foreground: "#eff6ff",
    muted: "#94a3b8",
    accent: "#38bdf8",
    border: "rgba(56,189,248,0.18)",
  },

  violet: {
    name: "Violet",
    background: "#10091a",
    foreground: "#faf5ff",
    muted: "#a78bfa",
    accent: "#c084fc",
    border: "rgba(192,132,252,0.18)",
  },

  emerald: {
    name: "Emerald",
    background: "#07130f",
    foreground: "#ecfdf5",
    muted: "#6ee7b7",
    accent: "#34d399",
    border: "rgba(52,211,153,0.18)",
  },

  amber: {
    name: "Amber",
    background: "#171006",
    foreground: "#fffbeb",
    muted: "#fbbf24",
    accent: "#f59e0b",
    border: "rgba(245,158,11,0.18)",
  },

  graphite: {
    name: "Graphite",
    background: "#111315",
    foreground: "#f5f5f5",
    muted: "#9ca3af",
    accent: "#d1d5db",
    border: "rgba(255,255,255,0.12)",
  },

  crimson: {
    name: "Crimson",
    background: "#160809",
    foreground: "#fff1f2",
    muted: "#fda4af",
    accent: "#f43f5e",
    border: "rgba(244,63,94,0.18)",
  },

  rose: {
    name: "Rose",
    background: "#180b12",
    foreground: "#fff1f2",
    muted: "#f9a8d4",
    accent: "#f472b6",
    border: "rgba(244,114,182,0.18)",
  },

  cyber: {
    name: "Cyber",
    background: "#050510",
    foreground: "#f0f9ff",
    muted: "#67e8f9",
    accent: "#22d3ee",
    border: "rgba(34,211,238,0.20)",
  },

  midnight: {
    name: "Midnight",
    background: "#080d1a",
    foreground: "#f8fafc",
    muted: "#94a3b8",
    accent: "#818cf8",
    border: "rgba(129,140,248,0.18)",
  },

  teal: {
    name: "Teal",
    background: "#061413",
    foreground: "#f0fdfa",
    muted: "#5eead4",
    accent: "#14b8a6",
    border: "rgba(20,184,166,0.18)",
  },

  copper: {
    name: "Copper",
    background: "#140d09",
    foreground: "#fff7ed",
    muted: "#fdba74",
    accent: "#f97316",
    border: "rgba(249,115,22,0.18)",
  },

  slate: {
    name: "Slate",
    background: "#0f172a",
    foreground: "#f8fafc",
    muted: "#94a3b8",
    accent: "#64748b",
    border: "rgba(148,163,184,0.18)",
  },

  lime: {
    name: "Lime",
    background: "#0b1205",
    foreground: "#f7fee7",
    muted: "#bef264",
    accent: "#84cc16",
    border: "rgba(132,204,22,0.18)",
  },

  sky: {
    name: "Sky",
    background: "#07131c",
    foreground: "#f0f9ff",
    muted: "#7dd3fc",
    accent: "#0ea5e9",
    border: "rgba(14,165,233,0.18)",
  },

  mono: {
    name: "Mono",
    background: "#171717",
    foreground: "#fafafa",
    muted: "#a3a3a3",
    accent: "#e5e5e5",
    border: "rgba(255,255,255,0.14)",
  },
} as const;

export type ThemeName = keyof typeof themes;
