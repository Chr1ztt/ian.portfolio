import { Card, CardFooter, CardHeader } from "@heroui/card";
import svg2 from "@/assets/2.svg";
import svg3 from "@/assets/3.svg";
import edupedia from "@/assets/logo_edupedia.webp";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { MoveUpRight } from "lucide-react";

export default function ProjectSection() {
  return (
    <div className="container mx-auto p-6 mt-[100rem]">
      <div className="text-center">
        <p className=" text-lg md:text-xl">Projects</p>
        <h1 className=" text-2xl md:text-4xl font-cal-sans max-w-xl mx-auto">
          From Ideas to Execution — Explore Our Work.
        </h1>
      </div>
      <div className="gap-4 grid grid-cols-12 ">
        <Card
          className="w-full h-[498px] col-span-12 sm:col-span-5  relative bg-surface"
          shadow="none"
        >
          <CardHeader className="absolute text-primary z-10 p-6 md:p-8 flex-col items-start">
            <p className="font-bold ">New</p>
            <h4 className="font-bold text-3xl max-w-xl">
              UKSW end-to-end solution for modern payroll.
            </h4>
          </CardHeader>
          <Image
            alt="Card example background"
            className="absolute bottom-0 right-0 z-0 object-cover"
            src={svg3}
          />
          <CardFooter className="absolute bottom-0 z-10 p-6">
            <Button
              as={Link}
              href="/contact"
              className="bg-primary text-primary-foreground"
              radius="sm"
              endContent={<MoveUpRight size={18} />}
            >
              View Case Study
            </Button>
          </CardFooter>
        </Card>
        <Card
          className="w-full h-[498px] col-span-12 sm:col-span-7 bg-surface relative "
          shadow="none"
        >
          <CardHeader className="absolute z-10 p-6 md:p-8 flex-col items-start space-y-4 text-primary">
            <Image
              src={edupedia}
              alt="edupedia"
              width={156}
              height={55}
            ></Image>
            <h4 className="font-bold text-3xl max-w-xl">
              Simplify, track, and manage every order with ease.
            </h4>
          </CardHeader>
          <Image
            alt="Relaxing app background"
            className="absolute bottom-0 right-0 z-0 object-cover"
            src={svg2}
          />
          <CardFooter className="absolute bottom-0 z-10 p-6">
            <Button
              as={Link}
              href="/contact"
              className="bg-primary text-primary-foreground"
              radius="sm"
              endContent={<MoveUpRight size={18} />}
            >
              View Case Study
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
