import { IconType } from "react-icons";

export type JobTypes = {
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  place: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type FunFactTypes = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
};

export type ProjectPreviewTypes = {
  name: string;
  date: string;
  shortDescription: string;
  primaryImage: string;
  technicalStack: string[];
};
