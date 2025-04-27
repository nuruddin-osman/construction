import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "../../components/common/Banner";
import Projects from "../home/Projects";
import Footer from "../../components/footer/Footer";

const Project = () => {
  return (
    <div>
      <Navbars />
      <Banner
        sub_heading="Quality. Integrity. Value."
        heading="Projects"
        para="We excel at transforming visions into reality <br/> through outstanding craftsmanship and precise."
      />
      <Projects />
      <Footer />
    </div>
  );
};

export default Project;
