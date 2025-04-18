import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "./Banner";
import About from "./About";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Banner />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
