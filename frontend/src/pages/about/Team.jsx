import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ServicesImg from "../../../public/assets/images/pexels-sindre-fs-1040880.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="team py-5">
      <div className="text-center">
        <h4 className="section_sub_title">Team</h4>
        <h2 className="">Our Team</h2>
        <p>
          We specialize in a wide range of construction services, including
          residential, commercial, and industrial projects.
        </p>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <Card className="card_head shadow">
              <Card.Img
                variant="top"
                className="card_image"
                src={ServicesImg}
              />
              <Card.Body className="card_body">
                <div className="card-title">
                  <Card.Title>Mark Doe</Card.Title>
                  <Card.Title>Senior Developer</Card.Title>
                </div>
                <Link to="#" className="team_linkedin">
                  <FaLinkedin />
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="card_head shadow">
              <Card.Img
                variant="top"
                className="card_image"
                src={ServicesImg}
              />
              <Card.Body className="card_body">
                <div className="card-title">
                  <Card.Title>Mark Doe</Card.Title>
                  <Card.Title>Senior Developer</Card.Title>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="card_head shadow">
              <Card.Img
                variant="top"
                className="card_image"
                src={ServicesImg}
              />
              <Card.Body className="card_body">
                <div className="card-title">
                  <Card.Title>Mark Doe</Card.Title>
                  <Card.Title>Senior Developer</Card.Title>
                </div>
                <Link to="#" className="team_linkedin">
                  <FaLinkedin />
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card className="card_head shadow">
              <Card.Img
                variant="top"
                className="card_image"
                src={ServicesImg}
              />
              <Card.Body className="card_body">
                <div className="card-title">
                  <Card.Title>Mark Doe</Card.Title>
                  <Card.Title>Senior Developer</Card.Title>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
