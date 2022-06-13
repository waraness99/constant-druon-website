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

export type FunFactProps = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
};
