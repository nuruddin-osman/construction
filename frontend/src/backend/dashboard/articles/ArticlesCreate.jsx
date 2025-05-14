import React from "react";
import Navbars from "../../../components/navbar/Navbar";
import Sidebar from "../sidebar/Index";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer";

const ArticlesCreate = () => {
  return (
    <>
      <Navbars />
      <div className="services_admin">
        <div className="container">
          <div className="services_wrapper">
            <Sidebar />

            <div className="main_part shadow p-3">
              <div className="servies_header py-2">
                <h4>Services ducumantation</h4>
                <Link to="/admin/services" className="btn btn-primary">
                  Back
                </Link>
              </div>
              <div className="tables">
                <form>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Please type your name"
                    />
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="slug">Slug</label>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      placeholder="Please type your slug"
                    />
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="short_desc">Short_desc</label>
                    <input
                      className="form-control"
                      type="text"
                      id="short_desc"
                      name="short_desc"
                      placeholder="Please type your short_desc"
                    />
                  </div>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="description">Description</label>
                    <input
                      className="form-control"
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Please type your short_desc"
                    />
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="image">Image</label>
                    <input type="file" />
                  </div>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="status">Status</label>
                    <select className="form-control" id="status" name="status">
                      <option value="1">Active</option>
                      <option value="0">Block</option>
                    </select>
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

export default ArticlesCreate;
