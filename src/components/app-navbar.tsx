"use client";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { ChevronDown, ChevronRight, MoveUpRight } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<
    Record<number, boolean>
  >({});

  const menuItems = [
    {
      title: "My Portfolio",
      url: "/",
    },

    // {
    //   title: "Service",
    //   url: "#",
    //   icon: ChevronDown,
    //   items: [
    //     {
    //       title: "AI-Powered Software",
    //       url: "/services/",
    //     },
    //     {
    //       title: "Web Application Development",
    //       url: "/services/web-application-development",
    //     },
    //     {
    //       title: "Cloud Migration & Architecture",
    //       url: "#",
    //     },
    //     {
    //       title: "Mobile App Development",
    //       url: "#",
    //     },
    //     {
    //       title: "Real-time Analytics Solutions",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "About",
    //   url: "/about",
    // },
  ];

  const toggleMobileSubmenu = (index: number) => {
    setExpandedMobileMenus((prev: any) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      classNames={{ wrapper: "px-2 lg:px-4 ", base: "bg-surface/50 backdrop-saturate-100 backdrop-blur-md data-[menu-open=true]:backdrop-blur-none" }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} className="">
            {item.items && item.items.length > 0 ? (
              <Dropdown shouldBlockScroll={false}>
                <DropdownTrigger>
                  <Link className="flex item-center gap-1 cursor-pointer text-foreground">
                    {item.title} {item.icon && <item.icon width={16} />}
                  </Link>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  {item.items.map((menu) => (
                    <DropdownItem key={menu.title}>
                      <Link href={menu.url}>{menu.title} </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link href={item.url} className="text-primary">
                {item.title}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/contact"
            className="text-background bg-primary"
            radius="sm"
            endContent={<MoveUpRight size={18} />}
          >
            Let&apos;s talk
          </Button>
        </NavbarItem>
        <ThemeToggle />
      </NavbarContent> */}
      <NavbarMenu>
      {menuItems.map((item, index) => (
          <div key={`${item}-${index}`} className="w-full">
            {item.items && item.items.length > 0 ? (
              <div className="mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer py-2"
                  onClick={() => toggleMobileSubmenu(index)}
                >
                  <span className="text-lg">{item.title}</span>
                  <ChevronRight
                    className={`transition-transform duration-200 ${
                      expandedMobileMenus[index] ? "rotate-90" : ""
                    }`}
                    size={20}
                  />
                </div>

                {expandedMobileMenus[index] && (
                  <div className="ml-4 border-l border-black pl-4 py-2">
                    {item.items.map((subItem, subIndex) => (
                      <NavbarMenuItem
                        key={`${subItem.title}-${subIndex}`}
                        className="py-2"
                      >
                        <Link href={subItem.url} className="block w-full">
                          {subItem.title}
                        </Link>
                      </NavbarMenuItem>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavbarMenuItem className="py-2">
                <Link className="block w-full text-lg" href={item.url}>
                  {item.title}
                </Link>
              </NavbarMenuItem>
            )}
          </div>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
