import React from "react";
import { Heading, Text, Stack, SimpleGrid, useColorModeValue as mode } from "@chakra-ui/react";
import { IoPlayOutline, IoBookOutline, IoLockClosedOutline, IoBicycle } from "react-icons/io5";

import { Section } from "src/components/Section";
import { FunFactCard } from "./FunFactCard";

import { FunFactProps } from "utils/types";

const funFacts: FunFactProps[] = [
  {
    id: "lock-picking",
    title: "I can pick a lock",
    description: `I love brainteasers, padlocks included! After hours of practice, I am now able to open nearly any lock. Even with paper clips!`,
    icon: IoLockClosedOutline,
  },
  {
    id: "cycling",
    title: "I have cycled +25,000 miles",
    description: `I've been cycling in clubs and competitions since I was 9 years old. And on top of that, it's my daily means of transport.`,
    icon: IoBicycle,
  },
  {
    id: "writing",
    title: "I've written a comic book",
    description: `In 2017, I participated in a contest organized by France in memory of the deportees of the WWII. My comic book has been published by a publishing house!`,
    icon: IoPlayOutline,
  },
  {
    id: "listening",
    title: "I listen to books and podcasts at 3x",
    description: `I've worked my way up to 3x listening so I could listen to more. So far I've saved ~100 days of listening by doing this.`,
    icon: IoBookOutline,
  },
];

export const FunFacts = () => (
  <Section>
    <Stack shouldWrapChildren>
      <Heading as="h2">{`Here are some random fun facts.`}</Heading>
      <Heading color={mode("gray.500", "gray.400")}>{`Some unique things about me.`}</Heading>
    </Stack>

    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt="12">
      {funFacts.map((funFact) => (
        <FunFactCard key={funFact.id} funFactData={funFact} />
      ))}
    </SimpleGrid>
  </Section>
);
