import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import OurServices from "../home/OurServices";
import Banner from "../../components/common/Banner";

const Services = () => {
  return (
    <>
      <Navbars />
      <Banner
        sub_heading="Quality. Integrity. Value."
        heading="Services"
        para="We excel at transforming visions into reality <br/> through outstanding craftsmanship and precise."
      />
      <OurServices />
      <Footer />
    </>
  );
};

export default Services;
