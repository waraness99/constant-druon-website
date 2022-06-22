import React from "react";
import { Center, useColorModeValue as mode } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { ProjectIMediaTypes } from "utils/types";

export const VideoPlayer = ({ video }: { video: ProjectIMediaTypes }) => {
  const { url } = video;

  return (
    <Center
      minH={{ base: "320px", lg: "480px" }}
      maxH="525px"
      rounded="lg"
      overflowY="auto"
      bg="black"
      shadow={mode("lg", undefined)}
    >
      <ReactPlayer url={url} width="100%" height="100%" controls />
    </Center>
  );
};
