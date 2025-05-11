import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";

const Projects = () => {
  const [latestProjects, setLatestProjects] = useState();
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "get-latest-projects?limit=4", {
      method: "GET",
    });
    const resutl = await res.json();
    if (resutl.status == true) {
      setLatestProjects(resutl.data);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
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
          {latestProjects &&
            latestProjects.map((item) => (
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
  );
};

export default Projects;
