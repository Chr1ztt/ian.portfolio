import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import localFont from "next/font/local";
import { ReactLenis } from "@/components/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calSans = localFont({
  variable: "--font-cal-sans",
  src: "./CalSans-SemiBold.woff2",
});

export const metadata: Metadata = {
  title: {
    default: "Trials.ID - Smart & Scalable IT Solutions",
    template: "%s - Trials.ID",
  },
  description:
    "Discover tailored IT solutions crafted by experts — from custom web & mobile apps to AI-powered systems. Based in Salatiga, serving clients across Indonesia. Let's build your digital future together.",
  keywords: [
    "IT solutions Indonesia",
    "custom software development",
    "AI software",
    "web app development",
    "mobile app Indonesia",
    "order management system",
    "ePayroll",
    "cloud migration",
    "real-time analytics",
    "digital transformation",
    "scalable IT",
    "api integration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${inter.variable} ${calSans.variable} antialiased bg-surface`}>
          <Providers>{children}</Providers>
        </body>
      </ReactLenis>
    </html>
  );
}
