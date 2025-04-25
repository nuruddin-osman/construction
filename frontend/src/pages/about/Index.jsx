import React from "react";
import Navbars from "../../components/navbar/Navbar";
import { default as AboutCommon } from "../../components/common/About";
import Team from "./Team";
import Testimonials from "../home/Testimonials";
import Footer from "../../components/footer/Footer";
import AboutImg from "../../../public/assets/images/about-us.jpg";
import Banner from "../../components/common/Banner";

const About = () => {
  return (
    <>
      <Navbars />
      <Banner
        sub_heading="Quality. Integrity. Value."
        heading="About Us"
        para="We excel at transforming visions into reality through outstanding craftsmanship and precise."
      />
      <div className="">
        <AboutCommon
          sub_title="About us"
          aboutImg={AboutImg}
          title="Crafting structures that last a lifetime"
          para_1=" structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing  upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology."
          para_2="Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology."
        />
      </div>
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
};

export default About;
