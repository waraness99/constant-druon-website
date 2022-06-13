import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { IoSunny, IoMoon } from "react-icons/io5";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      aria-label="switch color mode"
      size="md"
      icon={isDark ? <IoSunny /> : <IoMoon />}
      onClick={toggleColorMode}
    />
  );
};
