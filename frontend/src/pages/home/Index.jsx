import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "./Banner";
import About from "./About";
import Footer from "../../components/footer/Footer";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Banner />
      <About />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Home;
