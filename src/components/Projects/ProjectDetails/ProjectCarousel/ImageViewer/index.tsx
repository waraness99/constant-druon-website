import React, { useState } from "react";
import { Image, Center, Flex, Skeleton, useColorModeValue as mode } from "@chakra-ui/react";
import { ProjectIMediaTypes } from "utils/types";

export const ImageViewer = ({ image }: { image: ProjectIMediaTypes }) => {
  const { url, name } = image;

  const [isLoaded, setIsLoaded] = useState(false);
  const onComplete = () => setIsLoaded(true);

  return (
    <Skeleton isLoaded={isLoaded} fadeDuration={1} rounded="lg">
      <Center
        position="relative"
        minH={{ base: "320px", lg: "480px" }}
        maxH="525px"
        rounded="lg"
        overflowY="auto"
        bg="black"
        shadow={mode("lg", undefined)}
      >
        <Flex
          boxSize="full"
          position="absolute"
          backgroundImage={`url('${url}')`}
          onLoad={onComplete}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          filter="auto"
          brightness="40%"
          blur="4px"
        />

        <Image h="full" position="absolute" src={url} onLoad={onComplete} alt={name} />
      </Center>
    </Skeleton>
  );
};
