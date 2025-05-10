import React from "react";
import Navbars from "../../../components/navbar/Navbar";
import Sidebar from "../sidebar/Index";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer";

const EditProjects = () => {
  return (
    <>
      <Navbars />
      <div className="services_admin">
        <div className="container">
          <div className="services_wrapper">
            <Sidebar />

            <div className="main_part shadow p-3">
              <div className="servies_header py-2">
                <h4>Projects ducumantation</h4>
                <Link to="/admin/projects" className="btn btn-primary">
                  Back
                </Link>
              </div>
              <div className="tables">
                <form>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="title">Title</label>
                    <input />
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="slug">Slug</label>
                    <input />
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="short_desc">Short_desc</label>
                    <input className="form-control" />
                  </div>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="description">Description</label>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex gap-3 align-items-center py-4">
                        <label htmlFor="construction_type">
                          Construction_type
                        </label>
                        <select
                          name="construction_type"
                          className="form-control"
                        >
                          <option value="residential construction">
                            Residential construction
                          </option>
                          <option value="commercial construction">
                            Commercial construction
                          </option>
                          <option value="indoustrial construction">
                            Indoustrial construction
                          </option>
                          <option value="infrustructrue construction">
                            Infrustructrue construction
                          </option>
                        </select>
                      </div>
                      <div className="d-flex gap-3 align-items-center py-4">
                        <label htmlFor="sector">Sector</label>
                        <select name="sector" className="form-control">
                          <option value="uttora">Uttora</option>
                          <option value="badda">badda</option>
                          <option value="mirpur">Mirpur</option>
                          <option value="gulsan">gulsan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex gap-3 align-items-center py-4">
                        <label htmlFor="location">Location</label>
                        <input className="form-control" />
                      </div>
                      <div className="d-flex gap-3 align-items-center py-4">
                        <label htmlFor="status">Status</label>
                        <select className="form-control">
                          <option value="1">Active</option>
                          <option value="0">Block</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="image">Image</label>
                    <input type="file" />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProjects;
