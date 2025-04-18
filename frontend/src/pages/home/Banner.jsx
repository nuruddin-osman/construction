import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container-fluid text-center">
        <h5>Welcome Amazing Constructions</h5>
        <h1>
          Crafting dreams with <br />
          precision and excellence.
        </h1>
        <p>
          We excel at transforming visions into reality through outstanding
          craftsmanship and precise <br />
          attention to detail. With years of experience and a dedication to
          quality.
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
