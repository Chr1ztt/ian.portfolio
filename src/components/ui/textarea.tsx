import { cn } from "@/lib/utils";
import { Textarea, TextAreaProps } from "@heroui/input";
import React from "react";

export interface ComponentProps extends Omit<TextAreaProps, "ref"> {
  children?: React.ReactNode;
  className?: string;
}

const CustomTextarea = React.forwardRef<HTMLTextAreaElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Textarea
        {...props}
        ref={ref}
        className={cn(className, "")}
        classNames={{
          inputWrapper:
            "bg-surface-container data-[hover=true]:bg-surface-container-highest group-data-[focus=true]:bg-surface-container-high",
        }}
      >
        {children}
      </Textarea>
    );
  }
);

CustomTextarea.displayName = "CustomNumberInput";

export default CustomTextarea;
