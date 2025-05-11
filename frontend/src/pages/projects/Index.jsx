import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbars from "../../components/navbar/Navbar";
import Banner from "../../components/common/Banner";
import Footer from "../../components/footer/Footer";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";

const Project = () => {
  const [projects, setProjects] = useState();
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "get-projects", {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
      setProjects(result.data);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <Navbars />
      <Banner
        sub_heading="Quality. Integrity. Value."
        heading="Projects"
        para="We excel at transforming visions into reality <br/> through outstanding craftsmanship and precise."
      />
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
            {projects &&
              projects.map((item) => (
                <div className="col-md-3">
                  <Card className="card_head">
                    <Card.Img
                      variant="top"
                      className="card_image"
                      src={
                        item.image &&
                        `${imageUrl}uploads/projects/small/${item.image}`
                      }
                    />
                    <Card.Body className="card_body">
                      <Card.Title>{item.title}</Card.Title>
                      <div className="service_content">
                        <Card.Text className="">{item.short_desc}</Card.Text>
                        <Button variant="primary">Read more</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        </div>
        <div className="text-center">
          <Button variant="primary">View more</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
