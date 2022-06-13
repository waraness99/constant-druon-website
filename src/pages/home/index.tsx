import React from "react";
import type { NextPage } from "next";

import { SimplePage } from "src/components/Layout/SimplePage";
import { HomeHero } from "src/components/Home/HomeHero";
import { JobHistory } from "src/components/Home/JobHistory";
import { HomePitch } from "src/components/Home/HomePitch";

const Home: NextPage = () => {
  return (
    <SimplePage>
      <HomeHero />
      <JobHistory />
      <HomePitch />
    </SimplePage>
  );
};
export default Home;
