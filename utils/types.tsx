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
  shortDescription: string;
  primaryImage: string;
  technicalStack: string[];
  rating: number;
};

export type ProjectIMediaTypes = {
  name: string;
  url: string;
};

export type ProjectDetailTypes = {
  longDescription: string;
  images: Array<ProjectIMediaTypes>;
  websiteUrl: string;
  repositoryUrl: string;
  projectType: string;
  date: string;
};

export type ProjectTypes = ProjectPreviewTypes & ProjectDetailTypes;
