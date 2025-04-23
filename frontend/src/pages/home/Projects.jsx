import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ServicesImg from "../../../public/assets/images/construction2.jpg";

const Projects = () => {
  return (
    <div className="our_services py-5">
      <div className="text-center">
        <h4 className="section_sub_title">our projects</h4>
        <h2 className="">Discover our diverse range of projects</h2>
        <p>
          We offer a diverse array of construction services, spanning
          residential, commercial, and industrial projects.
        </p>
      </div>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-3">
            <Card className="card_head">
              <Card.Img
                variant="top"
                className="card_image"
                src={ServicesImg}
              />
              <Card.Body className="card_body">
                <Card.Title>Kanpur Project 2025</Card.Title>
                <div className="service_content">
                  <Card.Text className="">
                    Civil construction is a core sector within the construction
                    industry that focuses on the design, development, and
                    maintenance of infrastructure that supports modern society.
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            {" "}
            <Card className="card_head">
              <Card.Img
                variant="top"
                className="card_image"
                src={ServicesImg}
              />
              <Card.Body className="card_body">
                <Card.Title>Delhi Project 2025</Card.Title>
                <div className="service_content">
                  <Card.Text className="">
                    Civil construction is a core sector within the construction
                    industry that focuses on the design, development, and
                    maintenance of infrastructure that supports modern society.
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            {" "}
            <Card className="card_head">
              <Card.Img
                variant="top"
                className="card_image"
                src={ServicesImg}
              />
              <Card.Body className="card_body">
                <Card.Title>Goa Project 2025</Card.Title>
                <div className="service_content">
                  <Card.Text className="">
                    Civil construction is a core sector within the construction
                    industry that focuses on the design, development, and
                    maintenance of infrastructure that supports modern society.
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            {" "}
            <Card className="card_head">
              <Card.Img
                variant="top"
                className="card_image"
                src={ServicesImg}
              />
              <Card.Body className="card_body">
                <Card.Title>Lucknow Project 2025</Card.Title>
                <div className="service_content">
                  <Card.Text className="">
                    Civil construction is a core sector within the construction
                    industry that focuses on the design, development, and
                    maintenance of infrastructure that supports modern society.
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button variant="primary">View more</Button>
      </div>
    </div>
  );
};

export default Projects;
