import React from "react";
import {
  Badge,
  Box,
  Center,
  chakra,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { Section } from "../../Section";
import { GetResumeButton } from "src/components/Button/GetResumeButton";

export const Hero = () => (
  <Section>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
      <Stack spacing="6" shouldWrapChildren>
        <Heading as="h1" fontWeight="extrabold" size="2xl">
          Hi, I'm Constant Druon, I'm a{" "}
          <chakra.span bgGradient="linear(to-r, #f06844, #ee4c54, #d45e95, #9c6ca6, #6583c1)" bgClip="text">
            Software Engineer
          </chakra.span>{" "}
          Student.
        </Heading>
        <Text>
          I try to make the world a better place by creating quality software that improve the lives of those around me.
        </Text>
        <GetResumeButton />
      </Stack>

      <Center flex="1" position="relative">
        <Img boxSize="full" objectFit="contain" src="/constant-druon-metaverse.png" alt="3D Avatar of Constant Druon" />
        <Box
          w="100%"
          h="40%"
          position="absolute"
          bottom="0"
          bgGradient={`linear(to-b, #ffffff00,  ${mode("white", "gray.800")})`}
        />
      </Center>
    </SimpleGrid>
  </Section>
);
