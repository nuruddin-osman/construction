import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "./Banner";
import Footer from "../../components/footer/Footer";
import OurServices from "./OurServices";
import ChooseUs from "./ChooseUs";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import About from "../../components/common/About";
import AboutImg from "../../../public/assets/images/about-us.jpg";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Banner />
      <div className="">
        <About
          sub_title="About us"
          aboutImg={AboutImg}
          title="Crafting structures that last a lifetime"
          para_1=" structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing  upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology."
          para_2="Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology."
        />
      </div>
      <OurServices />
      <ChooseUs />
      <Projects />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
