"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Minus, MoveUpRight, Plus } from "lucide-react";
import { useState } from "react";

const WebPage = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <div className="py-6 space-y-20 px-6">
      <div className="flex h-96 items-center flex-col justify-around">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <h1 className="text-3xl md:text-6xl font-cal-sans max-w-2xl">
            Web Application Development
          </h1>
          <p className="text-md md:text-lg">
            Custom web apps built for speed, scale, and usability.
          </p>
        </div>
        <Button
          as={Link}
          href="/contact"
          className="bg-primary text-primary-foreground"
          radius="sm"
          endContent={<MoveUpRight size={18} />}
        >
          Let&apos;s talk
        </Button>
      </div>
      <div className="space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          <Accordion
            variant="splitted"
            defaultExpandedKeys={["1"]}
            selectedKeys={[activeKey]}
            onSelectionChange={(keys) => {
              const newKey = Array.from(keys)[0];
              if (newKey) {
                setActiveKey(newKey as string);
              }
            }}
          >
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Design & User Experience"
              className="[&_[data-slot=title]]:text-lg [&_[data-slot=title]]:font-semibold "
              classNames={{ base: "bg-surface-container shadow-none" }}
              indicator={({ isOpen }) =>
                isOpen ? <Minus className="rotate-90" /> : <Plus />
              }
            >
              <div className="space-y-4 mb-4">
                <p>
                  We craft intuitive user interfaces that prioritize both form
                  and function. From responsive layouts, we ensure your web app
                  not only looks stunning but also works flawlessly across
                  devices
                </p>
                <p className="text-foreground-500">What’s included</p>
                <div className="flex flex-wrap gap-4">
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    UI/UX Design
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Responsive Design
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    User Journey Mapping & Flow
                  </Chip>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Development & Engineering"
              className="[&_[data-slot=title]]:text-lg [&_[data-slot=title]]:font-semibold"
              classNames={{ base: "bg-surface-container shadow-none" }}
              indicator={({ isOpen }) =>
                isOpen ? <Minus className="rotate-90" /> : <Plus />
              }
            >
              <div className="space-y-4 mb-4">
                <p>
                  Our team builds high-performance web applications using modern
                  frameworks and technologies. From frontend interactivity to
                  backend logic, real-time features, database design, and secure
                  authentication systems
                </p>
                <p className="text-foreground-500">What’s included</p>
                <div className="flex flex-wrap gap-4">
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Frontend Development
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Backend Development
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Database Design
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Real-time features
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    API Integration
                  </Chip>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Infrastructure & Deployment"
              className="[&_[data-slot=title]]:text-lg [&_[data-slot=title]]:font-semibold"
              classNames={{ base: "bg-surface-container shadow-none" }}
              indicator={({ isOpen }) =>
                isOpen ? <Minus className="rotate-90" /> : <Plus />
              }
            >
              <div className="space-y-4 mb-4">
                <p>
                  We implement solid deployment pipelines and cloud-based
                  infrastructures that keep your app running smoothly. With
                  CI/CD, scalable hosting, advanced caching, and strict security
                  best practices, we ensure your application is always fast,
                  safe, and ready to scale.
                </p>
                <p className="text-foreground-500">What’s included</p>
                <div className="flex flex-wrap gap-4 ">
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    CI/CD
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Hosting
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Domain
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Performance Optimization
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Scalability & High Availability
                  </Chip>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title="Control, Monitoring & Maintenance"
              className="[&_[data-slot=title]]:text-lg [&_[data-slot=title]]:font-semibold"
              classNames={{ base: "bg-surface-container shadow-none" }}
              indicator={({ isOpen }) =>
                isOpen ? <Minus className="rotate-90" /> : <Plus />
              }
            >
              <div className="space-y-4 mb-4">
                <p>
                  Manage your content, users, and data through custom admin
                  dashboards and CMS tools. With integrated analytics,
                  monitoring, and automated testing, you’ll gain full visibility
                  into your app’s performance while we ensure quality and
                  reliability with every release.
                </p>
                <p className="text-foreground-500">What’s included</p>
                <div className="flex flex-wrap gap-4 ">
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Admin Panel & Dashboard
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Content Management System (CMS)
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Analytics & Insights
                  </Chip>
                  <Chip
                    className="bg-surface-container-highest text-primary text-sm"
                    size="lg"
                  >
                    Testing & Quality Assurance
                  </Chip>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
          <div className="w-full h-full rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default WebPage;
