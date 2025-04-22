import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ChooseIcon_1 from "../../../public/assets/images/icon-1.svg";

const ChooseUs = () => {
  return (
    <div className="choose_us py-5">
      <div className="text-center">
        <h4 className="section_sub_title">Why Choose Us</h4>
        <h2 className="">Discover our wide variety of projects.</h2>
        <p>
          Created in close partnership with our clients and collaborators, this
          approach merges industry expertise, decades of experience, innovation,
          and flexibility to consistently deliver excellence.
        </p>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <Card className="card_head shadow">
              <div className="card_icon">
                <img src={ChooseIcon_1} alt="" />
              </div>
              <Card.Body className="card_body">
                <Card.Title className="pb-3">Cutting-Edge Solutions</Card.Title>
                <div className="service_content">
                  <Card.Text className="mb-2">
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            {" "}
            <Card className="card_head shadow">
              <div className="card_icon">
                <img src={ChooseIcon_1} alt="" />
              </div>
              <Card.Body className="card_body">
                <Card.Title className="pb-3">Cutting-Edge Solutions</Card.Title>
                <div className="service_content">
                  <Card.Text className="mb-2">
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            {" "}
            <Card className="card_head shadow">
              <div className="card_icon">
                <img src={ChooseIcon_1} alt="" />
              </div>
              <Card.Body className="card_body">
                <Card.Title className="pb-3">Cutting-Edge Solutions</Card.Title>
                <div className="service_content">
                  <Card.Text className="mb-2">
                    Small actions create big impacts. It all begins and ends
                    with each employee committing to safer work practices daily,
                    ensuring they return home safely.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
