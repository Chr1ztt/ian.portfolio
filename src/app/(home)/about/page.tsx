import { Card, CardBody, CardHeader } from "@heroui/card";
import map from "@/assets/map.svg";
import React from "react";
import Image from "next/image";
import CtaSection from "@/components/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

const Page = () => {
  return (
    <div className="py-6 space-y-8 md:space-y-16">
      <div className="max-w-5xl space-y-2 px-6">
        <h4 className="text-2xl font-semibold">About us</h4>
        <h1 className="text-4xl md:text-6xl font-cal-sans">
          Empowering Digital Transformation Through IT Excellence
        </h1>
        <p className="max-w-lg">
          Founded by three technology professionals with a shared passion for
          innovation, our company is built on the belief that purposeful
          technology can create real, lasting impact. We specialize in
          delivering smart, scalable, and custom-built systems that help
          businesses streamline operations, adapt to change, and lead in the
          digital era.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <Card className="p-6 bg-surface-container" shadow="none">
          <CardBody>
            <h4 className="text-2xl font-semibold">Mission</h4>
            <p>
              To design and deliver intelligent, tailored IT solutions that help
              businesses overcome challenges, optimize operations, and achieve
              sustainable growth through technology.
            </p>
          </CardBody>
        </Card>
        <Card className="p-6 bg-surface-container" shadow="none">
          <CardBody>
            <h4 className="text-2xl font-semibold">Vission</h4>
            <p>
              To empower businesses through smart technology that transforms
              challenges into solutions.
            </p>
          </CardBody>
        </Card>
      </div>

      <Card
        className="w-full h-96 bg-primary rounded-none dark:bg-surface-container-lowest text-primary-foreground dark:text-primary relative px-6"
        shadow="none"
      >
        <CardHeader className="absolute z-10 p-6 md:p-12 flex-col items-start max-w-5xl space-y-4">
          <h4 className="text-4xl md:text-6xl font-cal-sans">
            Supporting Businesses Across Indonesia
          </h4>
          <p className="max-w-3xl text-xl md:text-2xl">
            From Salatiga to the Archipelago, we deliver reliable IT solutions
            across Indonesia — combining local insight with cutting-edge
            technology to support your digital journey.
          </p>
        </CardHeader>
        <div className="relative w-full h-full my-6">
          <Image
            alt="Card example background"
            className="absolute bottom-0 right-0 z-0 object-fit"
            src={map}
          />
        </div>
      </Card>

      <CtaSection />
    </div>
  );
};

export default Page;
