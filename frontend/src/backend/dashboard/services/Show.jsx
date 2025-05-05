import React from "react";
import Navbars from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Sidebar from "../sidebar/Index";
import { Link } from "react-router-dom";

const Show = () => {
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
                <Link to="#" className="btn btn-primary">
                  Create
                </Link>
              </div>
              <div className="table">
                <table className="table table-success table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Slug</th>
                      <th>Short_desc</th>
                      <th>Description</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Alu</td>
                      <td>alus</td>
                      <td>thik ache vai</td>
                      <td>abar dekha hobe</td>
                      <td>Active</td>
                      <td className="td_action">
                        <Link to="#" className="btn-small">
                          edit
                        </Link>
                        <Link to="#" className="btn-small">
                          delete
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Show;
