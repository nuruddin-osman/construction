import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "./Banner";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Banner />
      <About />
    </div>
  );
};

export default Home;
