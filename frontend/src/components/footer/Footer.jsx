import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer py-4">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-3">
            <h3>UrbanEdge Constructions</h3>
            <p>
              Our post-construction services gives you peace of mind knowing
              that we are still here for you even after.
            </p>
          </div>
          <div className="col-md-3">
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link to="#">Specialty Construction</Link>
              </li>
              <li>
                <Link to="#">Specialty Construction</Link>
              </li>
              <li>
                <Link to="#">Specialty Construction</Link>
              </li>
              <li>
                <Link to="#">Specialty Construction</Link>
              </li>
              <li>
                <Link to="#">Specialty Construction</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Projects</Link>
              </li>
              <li>
                <Link to="#">Blogs</Link>
              </li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <Link to="#">(888-000-0000)</Link>
              </li>
              <li>
                <Link to="#">info@example.com</Link>
              </li>
              <li>
                <Link to="#">
                  B-18X, Rajaji Puram Lucknow, Uttar Pradesh, 226017 0522400XXXX
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center mt-5">
          Copyright © 2024 UrbanEdge Construtions. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
