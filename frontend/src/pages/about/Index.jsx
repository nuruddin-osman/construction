import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "./Banner";
import { default as AboutCommon } from "../home/About";
import Team from "./Team";

const About = () => {
  return (
    <>
      <Navbars />
      <Banner />
      <AboutCommon />
      <Team />
    </>
  );
};

export default About;
