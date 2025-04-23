import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ServicesImg from "../../../public/assets/images/construction2.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog py-5">
      <div className="text-center">
        <h4 className="blog_sub_title">our services</h4>
        <h2 className="">Our construction services</h2>
        <p>
          We offer a diverse array of construction services, spanning
          residential, commercial, and industrial projects.
        </p>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <Card className="blog_card shadow">
              <Card.Img className="blog_img" variant="top" src={ServicesImg} />
              <Card.Body className="blog_body">
                <Link className="blog_link" to="#">
                  <Card.Title className="py-3">
                    One of the defining characteristics of civil construction
                  </Card.Title>
                </Link>
                <Button variant="primary">read more</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="blog_card shadow">
              <Card.Img className="blog_img" variant="top" src={ServicesImg} />
              <Card.Body className="blog_body">
                <Link className="blog_link" to="#">
                  <Card.Title className="py-3">
                    One of the defining characteristics of civil construction
                  </Card.Title>
                </Link>
                <Button variant="primary">read more</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="blog_card shadow">
              <Card.Img className="blog_img" variant="top" src={ServicesImg} />
              <Card.Body className="blog_body">
                <Link className="blog_link" to="#">
                  <Card.Title className="py-3">
                    One of the defining characteristics of civil construction
                  </Card.Title>
                </Link>
                <Button variant="primary">read more</Button>
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

export default Blog;
