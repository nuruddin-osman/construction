import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "./Banner";
import About from "./About";
import Footer from "../../components/footer/Footer";
import OurServices from "./OurServices";
import ChooseUs from "./ChooseUs";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Banner />
      <About />
      <OurServices />
      <ChooseUs />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
