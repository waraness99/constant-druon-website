import React from "react";
import NextLink from "next/link";
import { Stack, Link, Text, Box, Tag, WrapItem, Wrap, Icon, useColorModeValue as mode } from "@chakra-ui/react";
import { ProjectPreviewTypes } from "utils/types";
import { IoArrowForward } from "react-icons/io5";

export const ProjectCard = ({ id, projectInfo }: { id: string; projectInfo: ProjectPreviewTypes }) => {
  const { name, primaryImage, shortDescription, technicalStack } = projectInfo;

  return (
    <NextLink key={id} href="/projects/[id]" as={`/projects/${id}`} passHref>
      <Link className="group">
        <Box position="relative">
          <Box
            h="64"
            w="full"
            rounded="lg"
            bg={mode("gray.100", "whiteAlpha.100")}
            backgroundImage={`url('${primaryImage}')`}
            _groupHover={{
              filter: "auto",
              brightness: "40%",
            }}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
          />
          <Box
            position="absolute"
            bg="whiteAlpha.600"
            boxSize="14"
            rounded="full"
            p="3"
            left="0"
            right="0"
            top="0"
            bottom="0"
            m="auto"
            display="none"
            _groupHover={{ display: "block" }}
            _hover={{ bg: "whiteAlpha.800" }}
          >
            <Icon as={IoArrowForward} boxSize="full" color="black" />
          </Box>
        </Box>

        <Stack spacing="4" py="4">
          <Box>
            <Text fontSize="xl" fontWeight="bold" color={mode("gray.700", "white")}>
              {name}
            </Text>
            <Text fontSize="base" noOfLines={2}>
              {shortDescription}
            </Text>
          </Box>

          <Wrap>
            {technicalStack &&
              technicalStack.map((oneLanguage: any) => (
                <WrapItem key={oneLanguage}>
                  <Tag size="sm">{oneLanguage}</Tag>
                </WrapItem>
              ))}
          </Wrap>
        </Stack>
      </Link>
    </NextLink>
  );
};
