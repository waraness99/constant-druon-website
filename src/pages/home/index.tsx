import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "src/components/Home/Hero";
import { JobHistory } from "src/components/Home/JobHistory";
import { Pitch } from "src/components/Home/Pitch";
import { FunFacts } from "src/components/Home/FunFacts";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Constant Druon - Software Engineer Student</title>
    </Head>

    <Hero />
    <JobHistory />
    <Pitch />
    <FunFacts />
  </>
);

export default Home;
