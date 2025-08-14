import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import React from "react";

import logo from "../../public/ian.svg";
import darkLogo from "../../public/trials_dark.svg";

const Logo = () => {
  const { theme } = useTheme();

  return theme === "dark" ? (
    <Image src={darkLogo} alt="logo" width={64}/>
  ) : (
    <Image src={logo} alt="logo" width={48}/>
  );
};

export default Logo;
