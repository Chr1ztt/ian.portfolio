import { cn } from "@/lib/utils";
import { Link as HeroUILink, LinkProps } from "@heroui/link";
import Link from "next/link";
import React from "react";

export interface ComponentProps extends Omit<LinkProps, "ref"> {
  children?: React.ReactNode;
  className?: string;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <HeroUILink as={Link} {...props} ref={ref} className={cn(className, "")}>
        {children}
      </HeroUILink>
    );
  }
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
