import React, { useEffect, useState } from "react";
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/common/Banner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState();
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "get-services", {
      method: "GET",
    });
    const result = await res.json();
    if ((result.status = true)) {
      setServices(result.data);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <Navbars />
      <Banner
        sub_heading="Quality. Integrity. Value."
        heading="Services"
        para="We excel at transforming visions into reality <br/> through outstanding craftsmanship and precise."
      />
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
                        <Link
                          to={`/services/${item.id}`}
                          className="btn-small"
                          variant="primary"
                        >
                          Read more
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        </div>
        <div className="text-center">
          <Link className="btn-primary" variant="primary">
            View more
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
