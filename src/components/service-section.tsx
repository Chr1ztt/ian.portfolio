import React, { useRef } from "react";
import { CodeXml, Cloudy} from "lucide-react";
import { Card, CardBody } from "@heroui/card";
import Image from "next/image";
import serviceImg from "@/assets/service_bg.jpg";
import { Link } from "@heroui/link";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "motion/react";

export default function ServiceSection() {
  const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end -500px"],
  // });
  const { scrollYProgress: scrollYProgressForHorizontalScroll } = useScroll({
    target: container,
  });

  const parentX = useTransform(
    scrollYProgressForHorizontalScroll,
    [0, 1],
    ["0%", "-40%"]
  );
  const titleX = useTransform(
    scrollYProgressForHorizontalScroll,
    [0, 1],
    ["0", "780px"]
  );

  // const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  // const innerY = useTransform(scrollYProgress, [0, 1], [-200, 300]);

  return (
    <section
      ref={container}
      className=" relative   text-primary-foreground h-[200vh] "
      // style={{ z: 10 }}
    >
      <div className="sticky top-0 h-screen flex bg-primary overflow-hidden">
        <motion.div
          style={{ x: parentX }}
          className="flex items-center flex-col justify-evenly gap-4"
        >
          <motion.div
            style={{ x: titleX }}
            className="absolute inset-0 w-screen h-screen"
          >
            <Image
              src={serviceImg}
              className="w-full h-full opacity-20 object-cover"
              alt="service_section_background"
            />
          </motion.div>
          {/* <div className="relative w-full  "> */}
          <motion.div
            style={{ x: titleX }}
            className="flex flex-col self-start w-screen overflow-hidden  justify-center  items-center gap-6 text-primary-foreground"
          >
            <p className="text-center text-lg md:text-4xl  ">Showcase</p>
            <h1 className="text-center text-2xl md:text-4xl font-cal-sans">
              Projects I Have Participated in
            </h1>
          </motion.div>
          {/* </div> */}
          <div className="flex flex-row flex-nowrap justify-around gap-4 pl-96">
            <Card
              shadow="none"
              className="p-6 ring-1 ring-primary bg-surface rouded-md min-w-[32rem] h-72"
            >
              <Link
                href="https://edupedia.uksw.edu"
                target="_blank"
                className="cursor-pointer"
              >
                <CardBody className="gap-10 text-primary">
                  <div className="w-16 h-16 bg-primary-foreground rounded-2xl flex items-center justify-center">
                    <CodeXml width={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium">
                      Edupedia UKSW
                    </h3>
                    <p className="text-lg opacity-50">
                      Campus Course Order Management System
                    </p>
                  </div>
                </CardBody>
              </Link>
            </Card>
            <Card
              shadow="none"
              className="p-6 ring-1 ring-primary bg-surface rouded-md min-w-[32rem] h-72"
            >
              <Link href="https://informasi.s1ti.com/" target="blank" className="cursor-pointer">
                <CardBody className=" gap-10 text-primary">
                  <div className="w-16 h-16 bg-primary-foreground rounded-2xl flex items-center justify-center">
                    <Cloudy width={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium">
                      Informasi S1 TI
                    </h3>
                    <p className="text-lg opacity-50">
                      Portal Web for S1 Teknik Informatika Students
                    </p>
                  </div>
                </CardBody>
              </Link>
            </Card>
            <Card
              shadow="none"
              className="p-6 ring-1 ring-primary bg-surface rouded-md min-w-[32rem] h-72"
            >
              <Link href="#" className="cursor-pointer">
                <CardBody className=" gap-10 text-primary">
                  <div className="w-16 h-16 bg-primary-foreground rounded-2xl flex items-center justify-center">
                    <Cloudy width={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium">
                      Coming Soon!
                    </h3>
                    <p className="text-lg opacity-50">
                      Lets make project with me
                    </p>
                  </div>
                </CardBody>
              </Link>
            </Card>
            {/* <Card
              shadow="none"
              className="p-6 ring-1 ring-primary bg-surface rouded-md min-w-[30rem] h-72"
            >
              <Link href="#" className="cursor-pointer">
                <CardBody className="gap-10 text-primary">
                  <div className="w-16 h-16 bg-primary-foreground rounded-2xl flex items-center justify-center">
                    <TabletSmartphone width={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium">
                      Mobile App Development
                    </h3>
                    <p className="text-lg opacity-50">
                      Powerful mobile apps for Android and iOS users.
                    </p>
                  </div>
                </CardBody>
              </Link>
            </Card>
            <Card
              shadow="none"
              className="p-6 ring-1 ring-primary bg-surface rouded-md min-w-[30rem] h-72"
            >
              <Link href="#" className="cursor-pointer">
                <CardBody className="g gap-10 text-primary">
                  <div className="w-16 h-16 bg-primary-foreground rounded-2xl flex items-center justify-center">
                    <ChartPie width={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium">
                      Real-time Analytics Solutions
                    </h3>
                    <p className="text-lg opacity-50">
                      Stay ahead with real-time business intelligence.
                    </p>
                  </div>
                </CardBody>
              </Link>
            </Card> */}
          </div>
        </motion.div>
        {/* <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 ">
        </div> */}
      </div>
      <div className="h-screen"></div>
    </section>
  );
}
