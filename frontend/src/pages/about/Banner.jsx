import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="about_banner">
      <div className="container">
        <h5>Quality. Integrity. Value.</h5>
        <h1>About Us</h1>
        <p>
          We excel at transforming visions into reality <br /> through
          outstanding craftsmanship and precise.
        </p>
        <div className="">
          <Link to="#" className="btn btn-primary">
            contact now
          </Link>
          <Link to="#" className="btn btn-secondary ms-3">
            view projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
