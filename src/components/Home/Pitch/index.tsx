import React from "react";
import Link from "next/link";
import { Center, Heading, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { Section } from "src/components/Section";
import { ButtonWithArrow } from "src/components/Button/ButtonWithArrow";

export const Pitch = () => (
  <Section>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
      <Center flex="1" overflow="hidden" rounded="xl" bg="yellow.100">
        <Img
          objectFit="contain"
          w="full"
          h="full"
          src="/constant-druon-pitch.webp"
          alt="Constant druon pitching his startup Yoko"
        />
      </Center>

      <Stack spacing="8" shouldWrapChildren>
        <Heading as="h2">{`I had the privilege to do a lot of cool presentations for the startups I co-founded!`}</Heading>

        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</Text>

        <Link href="/projects" as={`/projects`} passHref>
          <ButtonWithArrow>Check my previous projects</ButtonWithArrow>
        </Link>
      </Stack>
    </SimpleGrid>
  </Section>
);
