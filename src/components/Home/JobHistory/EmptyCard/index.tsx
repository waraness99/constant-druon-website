import React from "react";
import { Flex, FlexProps, useColorModeValue as mode } from "@chakra-ui/react";

export const EmptyCard = ({ children }: FlexProps) => (
  <Flex bg={mode("gray.50", "whiteAlpha.100")} rounded="lg" p={{ base: "4", md: "6", lg: "8" }} minH="128px">
    {children}
  </Flex>
);
