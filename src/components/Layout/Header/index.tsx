import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, HStack, useColorModeValue as mode } from "@chakra-ui/react";

import { Logo } from "src/components/Logo";
import { DarkModeSwitch } from "src/components/DarkModeSwitch";
import { GetResumeButton } from "src/components/Button/GetResumeButton";
import { MobileNav } from "./components/MobileNav";
import { NavLink } from "./components/NavLink";

import { navbar } from "utils/links";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <Box
      as="header"
      position={{ base: "static", lg: "sticky" }}
      zIndex="10"
      top="0"
      w="100%"
      borderBottomWidth="1px"
      bg={mode("white", "gray.800")}
    >
      <Box maxW="6xl" mx="auto" py="4" px={{ base: "6", md: "8" }}>
        <Flex as="nav" justify="space-between">
          <HStack flex="1" justify="space-between">
            <NextLink href="/" passHref>
              <Box as="a" rel="home">
                <Logo />
              </Box>
            </NextLink>

            <HStack display={{ base: "none", lg: "flex" }} spacing="8">
              {navbar.map((page) => (
                <NavLink.Desktop key={page.id} active={pathname === page.path} href={page.path}>
                  {page.id}
                </NavLink.Desktop>
              ))}
            </HStack>

            <HStack>
              <DarkModeSwitch />
              <GetResumeButton display={{ base: "none", lg: "flex" }} hasArrow={false} />
              <MobileNav />
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};
