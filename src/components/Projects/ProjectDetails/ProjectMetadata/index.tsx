import React from "react";
import { Text, Stack, Tag, Wrap, WrapItem, StackDivider } from "@chakra-ui/react";
import { IoGitBranch, IoLink } from "react-icons/io5";

import { ExternalLink } from "./ExternalLink";
import { MetadataSection } from "./MetadataSection";

import { formatDate } from "utils/date";
import { ProjectTypes } from "utils/types";

export const ProjectMetadata = ({ projectInfo }: { projectInfo: ProjectTypes }) => {
  const repositoryUrl = projectInfo?.repositoryUrl;
  const websiteUrl = projectInfo?.websiteUrl;

  return (
    <Stack spacing="8" divider={<StackDivider />}>
      <MetadataSection title="Project">
        <Text fontSize="md">{projectInfo?.projectType} project</Text>
        <Text fontSize="md">Created on {formatDate(projectInfo?.date)}</Text>
      </MetadataSection>

      {(repositoryUrl || websiteUrl) && (
        <MetadataSection title="Links">
          {repositoryUrl && <ExternalLink url={repositoryUrl} icon={IoGitBranch} />}
          {websiteUrl && <ExternalLink url={websiteUrl} icon={IoLink} />}
        </MetadataSection>
      )}

      <MetadataSection title="Technical Stack">
        <Wrap>
          {projectInfo?.technicalStack &&
            projectInfo?.technicalStack.map((oneLanguage: any) => (
              <WrapItem key={oneLanguage}>
                <Tag>{oneLanguage}</Tag>
              </WrapItem>
            ))}
        </Wrap>
      </MetadataSection>
    </Stack>
  );
};
