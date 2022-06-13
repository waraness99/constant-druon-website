import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import { Header } from "../Header";

interface SimplePageProps extends FlexProps {
  hasTabNavigation?: boolean;
}

export const SimplePage = ({ hasTabNavigation = true, children, ...rest }: SimplePageProps) => (
  <Flex minHeight="100vh" flexDirection="column" {...rest}>
    <Header hasTabNavigation={hasTabNavigation} />
    {children}
  </Flex>
);
