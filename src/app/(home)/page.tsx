"use client";


import CtaSection from "@/components/cta-section";
import ServiceSection from "@/components/service-section";
import MainTitle from "@/features/profile/title";
import React from "react";

const HomePage = () => {
  return (
    <div className="pb-6">
      <MainTitle/>
      {/* <div className="space-y-20">
        <div className="space-y-8"> */}
          <ServiceSection />
        {/* </div> */}
        {/* <div className="space-y-8">
          <ProjectSection />
        </div> */}
        <CtaSection />
      {/* </div> */}
    </div>
  );
};

export default HomePage;
