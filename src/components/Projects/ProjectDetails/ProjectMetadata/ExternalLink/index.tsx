import React from "react";
import { Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

export const ExternalLink = ({ url, icon }: { url: string; icon: IconType }) => (
  <Link href={url} isExternal noOfLines={1}>
    <Icon as={icon} mr="2" />
    {url}
  </Link>
);
