import React from "react";
import type { NextPage } from "next";

import { SimplePage } from "src/components/Layout/SimplePage";
import { Hero } from "src/components/Home/Hero";
import { JobHistory } from "src/components/Home/JobHistory";
import { Pitch } from "src/components/Home/Pitch";

const Home: NextPage = () => {
  return (
    <SimplePage>
      <Hero />
      <JobHistory />
      <Pitch />
    </SimplePage>
  );
};
export default Home;
