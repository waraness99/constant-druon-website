import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { SimplePage } from "src/components/Layout/SimplePage";
import { Hero } from "src/components/Home/Hero";
import { JobHistory } from "src/components/Home/JobHistory";
import { Pitch } from "src/components/Home/Pitch";
import { FunFacts } from "src/components/Home/FunFacts";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Constant Druon - Software Engineer Student</title>
      <meta
        name="description"
        content="Hi, I'm Constant Druon! I try to make the world a better place by creating quality software that improve the lives of those around me."
      />
    </Head>
    <SimplePage>
      <Hero />
      <JobHistory />
      <Pitch />
      <FunFacts />
    </SimplePage>
  </>
);

export default Home;
