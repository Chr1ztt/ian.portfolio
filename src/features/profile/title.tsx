"use client";
import CustomLink from "@/components/ui/link";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import { MoveUpRight } from "lucide-react";
import { HTMLMotionProps, motion, useScroll, useTransform } from "motion/react";

import React, { useRef } from "react";

const MotionButton = motion.create(Button, { forwardMotionProps: false });

const MainTitle = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className,  ...props }) => {
  const generateLine = (delay?: number) => {
    const offset = (Math.random() * 21 + 10) * 9;
    const direction = Math.floor(Math.random() * 2);
    const vw = typeof window !== "undefined" ? window.innerWidth : 1920; // fallback

    return {
      id: Math.random().toString(36).slice(2),
      top: Math.floor(Math.random() * 21) * 5,
      duration: Math.random() * 4 + 3,
      offset: offset,
      start: direction * -offset - (direction - 1) * (vw + offset),
      target: direction * (vw + offset) - (direction - 1) * -offset,
      delay: delay ?? 0,
    };
  };
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["-500px end", "end -500px"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 500])

  const [lines, setLines] = React.useState(() => {
    const count = Math.floor(Math.random() * 10) + 15;
    return Array.from({ length: count }).map(() =>
      generateLine(Math.random() * 3)
    );
  });

  const resetLine = React.useCallback((idx: number) => {
    setLines((prev) =>
      prev.map((line, i) => (i === idx ? generateLine() : line))
    );
  }, []);

  return (
    <motion.div
      ref={container}
      {...props}
      // className="flex h-[calc(100vh+20rem)] relative items-center flex-col "
      className={cn( "flex  h-[140vh] relative items-center flex-col justify-center", className)}
      style={{y}}
    >
      <div className="absolute  overflow-hidden top-0 bottom-0 right-0 left-0">
        {lines.map((line, index) => (
          <motion.div
            key={line.id}
            initial={{ x: line.start }}
            animate={{ x: line.target }}
            transition={{
              delay: line.delay,
              repeat: 0,
              ease: "linear",
              duration: line.duration,
            }}
            style={{
              top: `${line.top}%`,
              width: `${line.offset}px`,
            }}
            className={` h-[0.30rem] absolute overflow-hidden rounded-full bg-primary`}
            onAnimationComplete={() => resetLine(index)}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.2 }}
        transition={{ type: "spring", stiffness: 18, damping: 8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="max-w-4xl mx-auto text-center space-y-4 px-6 md:px-10 lg:px-6 "
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-cal-sans">
          Christian Adi ananta
        </h1>
        <p className="text-md md:text-lg lg:text-4xl">
          Web & Mobile Developer
        </p>
      </motion.div>
      {/* todo: extract button to server component */}
      <MotionButton
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 2,
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 1,
        }}
        as={CustomLink}
        href="https://wa.me/6282241252353"
        className="text-primary-foreground bg-primary mt-12 text-xl p-6 mb-[40vh]"
        radius="sm"
        endContent={<MoveUpRight size={18} />}
      >
        Contact Me
      </MotionButton>
    </motion.div>
  );
});

MainTitle.displayName = "MainTitle";

export default MainTitle;
