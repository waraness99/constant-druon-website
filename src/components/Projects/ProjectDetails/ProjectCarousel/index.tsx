import React, { useState } from "react";
import { Stack, Image, HStack, useColorModeValue as mode } from "@chakra-ui/react";

import { isVideo } from "utils/video";
import { ProjectIMediaTypes } from "utils/types";
import { ImageViewer } from "./ImageViewer";
import { VideoPlayer } from "./VideoPlayer";

export const ProjectCarousel = ({ medias }: { medias?: Array<ProjectIMediaTypes> }) => {
  const [currentMediaIndex, setCurrentShowcasedIndex] = useState(0);
  const handleImageClick = (index: number) => setCurrentShowcasedIndex(index);

  return (
    <Stack>
      {medias &&
        (isVideo(medias[currentMediaIndex].url) ? (
          <VideoPlayer video={medias[currentMediaIndex]} />
        ) : (
          <ImageViewer image={medias[currentMediaIndex]} />
        ))}

      {medias && medias.length > 1 && (
        <HStack spacing="4" overflowX="auto" py="4">
          {medias.map((media, index) => (
            <Image
              key={media.name}
              src={media.url}
              alt={media.name}
              onClick={() => handleImageClick(index)}
              width="auto"
              height="16"
              rounded="md"
              border={`2px solid ${index === currentMediaIndex ? mode("black", "white") : "transparent"}`}
            />
          ))}
        </HStack>
      )}
    </Stack>
  );
};
