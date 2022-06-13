import React from "react";
import Link from "next/link";
import { Center, Heading, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { Section } from "src/components/Section";
import { ButtonWithArrow } from "src/components/Button/ButtonWithArrow";

export const Pitch = () => {
  return (
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
          <Heading as="h1">{`I had the privilege to do a lot of cool presentations for the startups I cofounded!`}</Heading>

          <Text as="h2">
            I try to make the world a better place by creating quality software that improve the lives of those around
            me.
          </Text>

          <Link href="/projects" as={`/projects`} passHref>
            <ButtonWithArrow>Check my previous projects</ButtonWithArrow>
          </Link>
        </Stack>
      </SimpleGrid>
    </Section>
  );
};
