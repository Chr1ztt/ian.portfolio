import ChooseSection from "@/components/choose-section";
import CtaSection from "@/components/cta-section";
import React from "react";

interface ComponentProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ComponentProps) => {
  return (
    <div className="space-y-24">
      <div>{children}</div>
      <ChooseSection />
      <CtaSection />
    </div>
  );
};

Layout.displayName = "ProjectsLayout";
export default Layout;
