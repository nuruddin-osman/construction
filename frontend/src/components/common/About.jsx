import React from "react";
import AboutImg from "../../../public/assets/images/about-us.jpg";

const About = ({ sub_title, aboutImg, title, para_1, para_2 }) => {
  return (
    <div className="about">
      <div className="container">
        <h4 className="text-center section_sub_title">{sub_title}</h4>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="w-100">
              <img className="w-100" src={aboutImg} alt="About us images" />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="section_title">{title}</h2>
            <p>{para_1}</p>
            <p>{para_2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
