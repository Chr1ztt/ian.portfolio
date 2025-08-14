import { Theme } from "@/interfaces/theme.interface";
import { createContext } from "react";

export interface ThemeContextState{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeContextState = {
  theme: "light",
  setTheme: () => null 
}

export const ThemeProviderContext = createContext<ThemeContextState>(initialState)