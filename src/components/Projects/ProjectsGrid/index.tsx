import React from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectPreviewTypes } from "utils/types";

export const ProjectsGrid = ({ list }: { list: Array<{ id: string; fields: ProjectPreviewTypes }> }) => {
  const sortedPortfolio = [...list].sort((a, b) => b.fields.rating - a.fields.rating);

  return (
    <>
      {sortedPortfolio.map((oneProject) => (
        <ProjectCard key={oneProject.id} id={oneProject.id} projectInfo={oneProject.fields} />
      ))}
    </>
  );
};
