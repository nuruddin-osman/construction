import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";

const OurServices = () => {
  const [services, setServices] = useState();
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "limit-services?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
      setServices(result.data);
    }
  };
  console.log(services);

  useEffect(() => {
    fetchApi();
  }, []);
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
          {services &&
            services.map((item) => (
              <div className="col-md-3">
                <Card className="card_head">
                  <Card.Img
                    variant="top"
                    className="card_image"
                    src={
                      item.image &&
                      `${imageUrl}uploads/services/small/${item.image}`
                    }
                    alt="Services image"
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

export default OurServices;
