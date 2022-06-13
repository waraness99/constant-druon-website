import React from "react";
import { Box, Button, ButtonProps } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export const ButtonWithArrow = ({ ...rest }: ButtonProps) => {
  return (
    <Button
      size="md"
      className="group"
      iconSpacing="3"
      rightIcon={
        <Box
          as={FaArrowRight}
          fontSize="sm"
          transition="transform 0.2s"
          _groupHover={{ transform: "translateX(2px)" }}
        />
      }
      {...rest}
    />
  );
};
