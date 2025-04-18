import React from "react";
import AboutImg from "../../../public/assets/images/about-us.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h4 className="text-center">About us</h4>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="w-100">
              <img className="w-100" src={AboutImg} alt="About us images" />
            </div>
          </div>
          <div className="col-md-6">
            <h2>Crafting structures that last a lifetime</h2>
            <p>
              Designing structures that stand the test of time involves a
              seamless blend of cutting-edge materials, durable design, ongoing
              upkeep, and eco-friendly practices. By combining lessons from the
              past with the power of modern technology.
            </p>
            <p>
              Building enduring structures requires a comprehensive approach
              that combines advanced materials, resilient design, routine
              maintenance, and sustainable practices. By drawing on historical
              insights and utilizing modern technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
