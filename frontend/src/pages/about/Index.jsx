import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "./Banner";
import { default as AboutCommon } from "../home/About";

const About = () => {
  return (
    <>
      <Navbars />
      <Banner />
      <AboutCommon />
    </>
  );
};

export default About;
