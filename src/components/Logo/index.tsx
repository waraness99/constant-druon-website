import React from "react";
import NextLink from "next/link";
import { Text, TextProps } from "@chakra-ui/react";

export const Logo = ({ ...rest }: TextProps) => {
  return (
    <NextLink href="/" passHref>
      <Text fontSize="2xl" fontWeight="bold" color="undefined" {...rest}>
        Constant Druon
      </Text>
    </NextLink>
  );
};
