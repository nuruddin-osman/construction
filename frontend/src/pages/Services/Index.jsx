import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Banner from "../about/Banner";
import OurServices from "../home/OurServices";

const Services = () => {
  return (
    <>
      <Navbars />
      <Banner />
      <OurServices />
      <Footer />
    </>
  );
};

export default Services;
