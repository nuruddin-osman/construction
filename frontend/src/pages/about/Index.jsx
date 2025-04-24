import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "./Banner";
import { default as AboutCommon } from "../home/About";
import Team from "./Team";
import Testimonials from "../home/Testimonials";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <>
      <Navbars />
      <Banner />
      <AboutCommon />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
};

export default About;
