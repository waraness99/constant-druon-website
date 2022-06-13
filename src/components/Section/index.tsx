import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export const Section = ({ children, ...rest }: BoxProps) => (
  <Box as="section" py={{ base: "12", lg: "16" }} {...rest}>
    <Box maxW={{ base: "xl", md: "6xl" }} mx="auto" px={{ base: "6", md: "8" }}>
      {children}
    </Box>
  </Box>
);
