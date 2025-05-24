import React, { useEffect, useState } from "react";
import Testimonials from "../home/Testimonials";
import Footer from "../../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import Banner from "../../components/common/Banner";
import Navbars from "../../components/navbar/Navbar";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";

const ProjectDetails = () => {
  const [project, setProject] = useState([]);
  const params = useParams();
  const fetchProject = async () => {
    const res = await fetch(`${apiUrl}latest-one-projects/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
      setProject(result.data);
    }
  };
  useEffect(() => {
    fetchProject();
  }, []);
  return (
    <>
      <Navbars />
      <Banner
        sub_heading="Quality. Integrity. Value."
        heading={project.title}
        para={project.short_desc}
      />
      <section class="section-10">
        <div class="container py-5">
          <div class="row">
            <div class="col-md-3">
              <div class="card shadow border-0 sidebar">
                <div class="card-body px-4 py-4">
                  <h3 class="mt-2 mb-3">Insights</h3>
                  <ul>
                    <li>
                      <span>Location</span>
                      <h6>{project.location}</h6>
                    </li>
                    <li>
                      <span>Construction type</span>
                      <h6>{project.construction_type}</h6>
                    </li>
                    <li>
                      <span>Sector</span>
                      <h6>{project.sector}</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div className="w-100">
                {project.image && (
                  <img
                    className="w-100"
                    src={`${imageUrl}uploads/projects/large/${project.image}`}
                    alt="asdfasdf"
                  />
                )}
              </div>
              <h3 class="py-3">{project.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          </div>
        </div>
        <div className="bg_gary">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Testimonials />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectDetails;
