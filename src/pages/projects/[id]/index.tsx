import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Stack, Button, Heading, Grid, Text } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";

import { Section } from "src/components/Section";
import { MarkdownRenderer } from "src/components/MarkdownRenderer";
import { ProjectCarousel } from "src/components/Projects/ProjectDetails/ProjectCarousel";
import { ProjectMetadata } from "src/components/Projects/ProjectDetails/ProjectMetadata";

import { useAirtable } from "src/hooks/useAirtable";
import { ProjectTypes } from "utils/types";

const Loading = () => (<p>Loading...</p>)

const ProjectContainer = ({ id }: { id: string | string[] | undefined }) => {
  const { isLoading, data } = useAirtable<{ fields: ProjectTypes }>(`getProjects/${id}`);
  const projectInfo = data?.fields;

  return (
    <>
      {isLoading || projectInfo === undefined ? (
        <Loading />
      ) : (
        <Section>
          <Box>
            <Stack mb="8" shouldWrapChildren>
              <Link href="/projects" as={`/projects`} passHref>
                <Button variant="link" leftIcon={<IoArrowBack />}>
                  Other projects
                </Button>
              </Link>
              <Heading as="h1" size="xl">
                {projectInfo?.name}
              </Heading>
              <Text>{projectInfo?.shortDescription}</Text>
            </Stack>

            <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" mb="12">
              <Grid templateColumns={{ base: "1fr", md: "1fr 360px" }} gap="48px">
                <ProjectCarousel medias={projectInfo?.images} />
                <ProjectMetadata projectInfo={projectInfo} />
              </Grid>
            </Box>

            <MarkdownRenderer content={projectInfo?.longDescription} />
          </Box>
        </Section>
      )}
    </>
  )
}


const Project: NextPage = () => {
  const router = useRouter();
  const { id } = router?.query;

  return (
    <>
      {id === undefined ? (
        <Loading />
      ) : (
        <ProjectContainer id={id} />
      )}
    </>
  );
};

export default Project;
