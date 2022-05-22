import React from "react";
import HeroSection from "../../HeroSection";
import Projects from "../../Projects";

function Home(props) {
  return (
    <>
      <HeroSection id="hero" {...props.myProfile} />
      <Projects id="projects" {...props.projects} />
      <HeroSection id="contact" {...props.contactInfo} />
    </>
  );
}

export default Home;