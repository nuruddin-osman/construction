import React, { useEffect, useState } from "react";
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/common/Banner";
import { apiUrl } from "../../backend/dashboard/common/Http";
import { Link } from "react-router-dom";

const SingleServices = () => {
  const [services, setServices] = useState([]);
  const fetchApi = async () => {
    const res = await fetch(`${apiUrl}get-services`, {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
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
                <img className="w-100" src="" alt="asdfasdf" />
              </div>
              <h3 class="py-3">Specialty Construction</h3>
              <div>
                <p>
                  Specialty construction is precision. This sector covers a wide
                  range of construction activities, including historic
                  preservation, seismic retrofitting, custom-designed
                  structures, and the installation of specialized systems in
                  buildings.
                </p>
                <h3></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleServices;
