import { cn } from "@/lib/utils";
import { NumberInput, NumberInputProps } from "@heroui/number-input";
import React from "react";

export interface ComponentProps extends Omit<NumberInputProps, "ref"> {
  children?: React.ReactNode;
  className?: string;
}

const CustomNumberInput = React.forwardRef<HTMLInputElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <NumberInput
        {...props}
        ref={ref}
        className={cn(className, "")}
        classNames={{
          inputWrapper:
            "bg-surface-container data-[hover=true]:bg-surface-container-highest group-data-[focus=true]:bg-surface-container-high",
        }}
      >
        {children}
      </NumberInput>
    );
  }
);

CustomNumberInput.displayName = "CustomNumberInput";

export default CustomNumberInput;
