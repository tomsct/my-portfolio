import React from "react";
import HeroSection from "../../HeroSection";
import Projects  from "../../Projects";
import { myProfile, contactInfo } from "./Data";

function Home() {
  return (
    <>
      <HeroSection id="hero" {...myProfile} />
      <Projects id="projects"/>
      <HeroSection id="contact" {...contactInfo} />
    </>
  );
}

export default Home;