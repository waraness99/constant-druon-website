import React from "react";
import { Stack, Box, SkeletonText, Skeleton } from "@chakra-ui/react";

export const EmptyProjectCard = () => (
  <Box>
    <Skeleton height="64" rounded="lg" />

    <Stack spacing="4" py="4">
      <Box>
        <Skeleton height="20px" />
        <SkeletonText noOfLines={3} spacing="2" />
      </Box>
    </Stack>
  </Box>
);
