import React from "react";
import { Box, Heading, List, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Section } from "src/components/Section";
import { JobList } from "./JobList";

import { useAirtable } from "src/hooks/useAirtable";
import { JobTypes } from "utils/types";
import { EmptyCard } from "./EmptyCard";

export const JobHistory = () => {
  const employmentHistory = useAirtable<Array<{ id: string; fields: JobTypes }>>("getEmploymentHistory");

  return (
    <Section>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing="6" shouldWrapChildren>
          <Heading as="h2" size="xl">
            Employment history
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Text>
        </Stack>

        <Box>
          <List spacing="8">
            {employmentHistory.data === undefined ? (
              [...Array(3).keys()].map((_, i) => <EmptyCard key={i} />)
            ) : (
              <JobList list={employmentHistory.data} />
            )}
          </List>
        </Box>
      </SimpleGrid>
    </Section>
  );
};
