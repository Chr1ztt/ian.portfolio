"use client";

import {
  ThemeContextState,
  ThemeProviderContext,
} from "@/contexts/theme.context";
import { Theme } from "@/interfaces/theme.interface";
import { useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    defaultTheme
  );

  // useEffect(() => {
  //   const root = window.document.documentElement;

  //   root.classList.remove("light", "dark");

  //   if (theme === "system") {
  //     const systemTheme: Theme = window.matchMedia(
  //       "(prefers-color-scheme: dark)"
  //     ).matches
  //       ? "dark"
  //       : "light";

  //     root.classList.add(systemTheme);
  //     return;
  //   }

  //   root.classList.add(theme);
  // }, [theme]);

  const value: ThemeContextState = {
    theme,
    setTheme: (theme: Theme) => {
      // localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
