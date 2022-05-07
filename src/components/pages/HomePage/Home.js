import React from "react";
import HeroSection from "../../HeroSection";
import Projects  from "../../Projects";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <HeroSection id="hero" {...homeObjOne} />
      <Projects id="projects"/>
    </>
  );
}

export default Home;