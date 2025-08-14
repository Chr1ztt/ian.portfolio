import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|card|checkbox|chip|dropdown|image|input|link|navbar|number-input|divider|ripple|spinner|form|menu|popover).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cal-sans": ["var(--font-cal-sans)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [
    heroui({
      layout: {
        radius: {
          small: "0.375rem",
          medium: "0.375rem",
          large: "0.375rem",
        },
      },
      themes: {
        light: {
          colors: {
            // foreground: "#0A192F",
            // background: "#FFFFFF",
            tone: {
              DEFAULT: "#FFFFFF",
              foreground: "#000000",
            },
            // tone level
            // 1: "5%",
            // 2: "8%",
            // 3: "11%",
            // 4: "12%",
            // 5: "14%",
            primary: {
              DEFAULT: "#121212",
              foreground: "#F5F5F5",
              container: "#D0D7DF",
              "container-foreground": "#0A192F",
            },
            secondary: {
              DEFAULT: "#1E2A39",
              foreground: "#FFFFFF",
              container: "#D0D7DF"
            },
            tertiary: {
              DEFAULT: "#4B5563",
              foreground: "#FFFFFF"
            },
            surface: {
              DEFAULT: "#F9FAFB",
              foreground : "#0A192F",
              container: {
                DEFAULT: "#E5E7EB",
                foreground: "#0A192F",
                low: "#EEEFF2",
                lowest: "#F7F8F9",
                high: "#D9DCE1",
                highest: "#CDD1D6",
              }
            },
            error: {
              DEFAULT: "#B91C1C",
              foreground: "#FFFFFF"
            },
            // default: {
            //   100: "#f4f4f5",
            //   200: "#e4e4e7",
            // //   // DEFAULT: "#f4f4f5"
            // },
            // focus: "#0A192F",
          },
        },
        dark: {
          colors: {
            tone: {
              DEFAULT: "#000000",
              foreground: "#FFFFFF",
            },
            primary: {
              DEFAULT: "#E2E8F0",
              foreground: "#0A192F",
              container: "#1E293B",
              "container-foreground": "#E2E8F0",
            },
            secondary: {
              DEFAULT: "#CBD5E1",
              foreground: "#0A192F",
              container: "#D0D7DF"
            },
            tertiary: {
              DEFAULT: "#9CA3AF",
              foreground: "#0A192F"
            },
            surface: {
              DEFAULT: "#0F172A",
              foreground : "#F8FAFC",
              container: {
                DEFAULT: "#1E293B",
                foreground: "#F8FAFC",
                low: "#172436",
                lowest: "#101D33",
                high: "#293445",
                highest: "#374051",
              }
            },
            error: {
              DEFAULT: "#B91C1C",
              foreground: "#FFFFFF"
            },
            // content1: { DEFAULT: "#000000" },
            // foreground: "#FFFFFF",
            // background: "#0A192F",
            // primary: {
            //   DEFAULT: "#FFFFFF",
            //   foreground: "#0A192F",
            // },
            // default: {
            //   100: "#152134",
            //   200: "#1c2a40",
            //   // DEFAULT: "#152134"
            // },
            // focus: "#0A192F",
          },
        },
        // cream: {
        //   colors: {
        //     foreground: "#0A192F",
        //     background: "#FFFFFF",

        //     // primary: {
        //     //   DEFAULT: "#0A192F",
        //     //   foreground: "#000000",
        //     // },
        //     focus: "#0A192F",
        //   },
        // },
      },
    }),
  ],
  darkMode: "class",
};
