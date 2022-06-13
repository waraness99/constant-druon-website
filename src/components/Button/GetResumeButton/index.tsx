import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { ButtonWithArrow } from "../ButtonWithArrow";
import { saveAs } from "file-saver";

interface GetResumeButtonProps extends ButtonProps {
  hasArrow?: boolean;
}

export const GetResumeButton = ({ hasArrow = true, ...rest }: GetResumeButtonProps) => {
  if (hasArrow) {
    return (
      <ButtonWithArrow onClick={() => saveAs("/constant-druon-resume.pdf")} {...rest}>
        Get my resume
      </ButtonWithArrow>
    );
  } else {
    return (
      <Button onClick={() => saveAs("/constant-druon-resume.pdf")} {...rest}>
        Get my resume
      </Button>
    );
  }
};
