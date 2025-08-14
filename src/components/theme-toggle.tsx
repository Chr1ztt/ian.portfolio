import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Moon, Sun, SunMoon } from "lucide-react";
import React from "react";

interface ComponentProps {
  className?: string;
}

const ThemeToggle = ({ className }: ComponentProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Dropdown placement="bottom-end" classNames={{ content: "min-w-3" }}>
      <DropdownTrigger className={cn("", className)}>
        <Button variant="flat" className="min-w-2 px-0 w-10 h-10 rounded-md">
          {theme === "light" ? (
            <Sun className="size-4" />
          ) : theme === "dark" ? (
            <Moon className="size-4" />
          ) : (
            <SunMoon className="size-4" />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="light" onPress={() => setTheme("light")}>
          <div className="flex flex-row justify-end items-center gap-2 ">
            Light
            <Sun className="size-4" />
          </div>
        </DropdownItem>
        <DropdownItem key="dark" onPress={() => setTheme("dark")}>
          <div className="flex flex-row justify-end items-center gap-2">
            Dark
            <Moon className="size-4" />
          </div>
        </DropdownItem>
        {/* //*Theme system is still buggy for logo, so we disabled it */}
        {/* <DropdownItem key="system" onPress={() => setTheme("system")}>
          <div className="flex flex-row justify-end items-center gap-2">
            System
            <SunMoon className="size-4" />
          </div>
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeToggle;
