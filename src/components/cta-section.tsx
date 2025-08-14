"use client";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { MoveUpRight } from "lucide-react";

export default function CtaSection() {
  return (
    <div className='w-full flex flex-col justify-center gap-5 items-center text-primary py-24 px-6 bg-surface-container mx-auto '>
      <div className='max-w-2xl text-center space-y-2'>
        <h1 className='text-2xl md:text-6xl font-cal-sans'>
          Let’s Build Something Great Together.
        </h1>
        <p className='text-md md:text-xl'>
          I&apos;d like to hear from you. Here&apos;s how you can reach me.
        </p>
      </div>
      <Button
        as={Link}
        href='/https://wa.me/6282241252353'
        className='bg-primary text-primary-foreground mt-8'
        radius='sm'
        endContent={<MoveUpRight size={18} />}
      >
        Let&apos;s talk
      </Button>
    </div>
  );
}
