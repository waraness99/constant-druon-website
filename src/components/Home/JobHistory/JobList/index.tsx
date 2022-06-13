import React from "react";
import { JobCard } from "../JobCard";
import { JobTypes } from "utils/types";

export const JobList = ({ list }: { list: Array<{ id: string; fields: JobTypes }> }) => {
  const sortedEmploymentHistory = [...list].sort(
    (a, b) => new Date(b.fields.startDate).getTime() - new Date(a.fields.startDate).getTime(),
  );

  return (
    <>
      {sortedEmploymentHistory.map((oneEmployment) => (
        <JobCard key={oneEmployment.id} job={oneEmployment.fields} />
      ))}
    </>
  );
};
