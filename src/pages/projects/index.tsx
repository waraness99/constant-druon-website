import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Stack, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import { Section } from "src/components/Section";
import { ProjectsGrid } from "src/components/Projects/ProjectsGrid";
import { EmptyProjectCard } from "src/components/Projects/ProjectsGrid/EmptyProjectCard";

import { useAirtable } from "src/hooks/useAirtable";
import { ProjectPreviewTypes } from "utils/types";

const Projects: NextPage = () => {
  const { data, isLoading } = useAirtable<Array<{ id: string; fields: ProjectPreviewTypes }>>("getProjects");

  return (
    <>
      <Head>
        <title>Projects | Constant Druon</title>
      </Head>

      <Section>
        <Stack spacing="4" shouldWrapChildren mb="12">
          <Heading as="h1" size="xl">
            My Projects
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {isLoading || data === undefined ? (
            [...Array(5).keys()].map((_, i) => <EmptyProjectCard key={i} />)
          ) : (
            <ProjectsGrid list={data} />
          )}
        </SimpleGrid>
      </Section>
    </>
  );
};

export default Projects;
