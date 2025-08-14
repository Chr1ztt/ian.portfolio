import CustomInput from "@/components/ui/input";
import CustomNumberInput from "@/components/ui/number-input";
import CustomTextarea from "@/components/ui/textarea";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Checkbox } from "@heroui/checkbox";
import { MoveUpRight, Phone } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 py-6 md:p-6">
      <Card
        shadow="none"
        className="bg-primary dark:bg-primary-container  rounded-none md:rounded-md text-background dark:text-foreground p-6 "
      >
        <CardBody className="flex justify-center gap-20">
          <div className="max-w-[580px] space-y-6">
            <h1 className="text-4xl font-cal-sans">
              Let’s Build the Future Together with Comprehensive IT Solutions
            </h1>
            <p>
              Partner with us to craft smart, scalable, and future-ready digital
              solutions tailored to your business needs.
            </p>
          </div>
          <div className="font-bold">
            <p>Contact us via the form or call at</p>
            <p className="flex items-center gap-2">
              <Phone width={16} /> +62 8123 4567 1234
            </p>
          </div>
        </CardBody>
      </Card>
      <div className="p-6">
        <h1 className="text-4xl flex items-center font-semibold mb-6">
          Let&apos;s talk <MoveUpRight size={32} strokeWidth={3} />
        </h1>
        <div className="grid grid-cols-2 w-full gap-4">
          <CustomInput
            label="Name"
            placeholder="Enter your name"
            type="text"
            isRequired
            
          />
          <CustomInput
            label="Business Email"
            placeholder="Enter your email"
            type="email"
            isRequired
          />
          <CustomNumberInput
            label="Phone Number"
            placeholder="Enter your phone number"
            isRequired
          />
          <CustomInput
            label="Company Name"
            placeholder="Enter your company name"
            type="text"
          />
        </div>
        <div className="w-full space-y-4 py-4">
          <CustomInput
            label="Subject"
            placeholder="Enter subject email"
            type="text"
          />
          <CustomTextarea
            label="Message"
            placeholder="Enter your messages"
            type="text"
          />
          <Checkbox>
            I agree to receive emails and/or phone calls from trials.id
          </Checkbox>
          <Button className="bg-foreground text-background block">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
