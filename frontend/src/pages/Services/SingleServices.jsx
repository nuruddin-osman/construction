import React, { useEffect, useState } from "react";
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/common/Banner";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";
import { Link, useParams } from "react-router-dom";

const SingleServices = () => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState([]);
  const params = useParams();
  const fetchServices = async () => {
    const res = await fetch(`${apiUrl}get-services`, {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
      setServices(result.data);
    }
  };
  const fetchService = async () => {
    const res = await fetch(`${apiUrl}latest-one-services/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
      setService(result.data);
    }
  };
  useEffect(() => {
    fetchServices();
    fetchService();
  }, [params.id]);
  return (
    <>
      <Navbars />
      <Banner
        sub_heading="Quality. Integrity. Value."
        heading={service.title}
        para={service.short_desc}
      />
      <section class="section-10">
        <div class="container py-5">
          <div class="row">
            <div class="col-md-3">
              <div class="card shadow border-0 sidebar">
                <div class="card-body px-4 py-4">
                  <h3 class="mt-2 mb-3">Our Services</h3>
                  <ul>
                    {services &&
                      services.map((item) => (
                        <li key={item.id}>
                          <Link to={`/services/${item.id}`}>{item.title}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div className="w-100">
                {service.image && (
                  <img
                    className="w-100"
                    src={`${imageUrl}uploads/services/large/${service.image}`}
                    alt="asdfasdf"
                  />
                )}
              </div>
              <h3 class="py-3">{service.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: service.description }} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleServices;
