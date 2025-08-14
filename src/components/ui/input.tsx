import { cn } from "@/lib/utils";
import { Input, InputProps } from "@heroui/input";
import React from "react";

export interface ComponentProps extends Omit<InputProps, "ref"> {
  children?: React.ReactNode;
  className?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Input
        {...props}
        ref={ref}
        className={cn(className, "")}
        classNames={{
          inputWrapper:
            "bg-surface-container data-[hover=true]:bg-surface-container-highest group-data-[focus=true]:bg-surface-container-high",
        }}
      >
        {children}
      </Input>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
