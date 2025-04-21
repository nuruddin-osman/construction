import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ServicesImg from "../../../public/assets/images/construction2.jpg";

const OurServices = () => {
  return (
    <div className="our_services py-5">
      <div className="text-center">
        <h4 className="section_sub_title">our services</h4>
        <h2 className="">Our construction services</h2>
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
                <Card.Title>Civil Construction</Card.Title>
                <div className="service_content">
                  <Card.Text className="">
                    Civil construction is a core sector within the construction
                    industry that focuses on the design, development, and
                    maintenance of infrastructure that supports modern society.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
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
                <Card.Title>Civil Construction</Card.Title>
                <div className="service_content">
                  <Card.Text className="">
                    Civil construction is a core sector within the construction
                    industry that focuses on the design, development, and
                    maintenance of infrastructure that supports modern society.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
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
                <Card.Title>Civil Construction</Card.Title>
                <div className="service_content">
                  <Card.Text className="">
                    Civil construction is a core sector within the construction
                    industry that focuses on the design, development, and
                    maintenance of infrastructure that supports modern society.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
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
                <Card.Title>Civil Construction</Card.Title>
                <div className="service_content">
                  <Card.Text className="">
                    Civil construction is a core sector within the construction
                    industry that focuses on the design, development, and
                    maintenance of infrastructure that supports modern society.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
