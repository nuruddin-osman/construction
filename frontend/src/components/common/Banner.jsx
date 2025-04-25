import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ heading, sub_heading, para }) => {
  return (
    <div className="about_banner">
      <div className="container">
        <h5>{sub_heading}</h5>
        <h1>{heading}</h1>
        <p dangerouslySetInnerHTML={{ __html: para }}></p>
      </div>
    </div>
  );
};

export default Banner;
