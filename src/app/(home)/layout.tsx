import AppFooter from "@/components/app-footer";
import AppNavbar from "@/components/app-navbar";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

interface ComponentProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ComponentProps) => {
  return (
    <ThemeProvider>
      <div className="bg-surface min-h-screen">
        <AppNavbar />
        {/* <div className="max-w-[1440px] mx-auto"> */}
        <div className="mx-auto">
          <div className="">{children}</div>
          <AppFooter />
        </div>
      </div>
    </ThemeProvider>
  );
};

Layout.displayName = "HomeLayout";
export default Layout;
