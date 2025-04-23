import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "./Banner";
import About from "./About";
import Footer from "../../components/footer/Footer";
import OurServices from "./OurServices";
import ChooseUs from "./ChooseUs";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Banner />
      <About />
      <OurServices />
      <ChooseUs />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
