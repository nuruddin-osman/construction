import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import { Link } from "react-router-dom";
import Navbars from "../../../components/navbar/Navbar";
import Sidebar from "../sidebar/Index";
import { apiUrl, token } from "../common/Http";

const ShowTestimonials = () => {
  const [testimonials, setTestimonials] = useState();
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "testimonials", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${token()}`,
      },
    });
    const result = await res.json();
    if (result.status == true) {
      console.log(result);

      setTestimonials(result.data);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
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
                <Link to="/admin/services/create" className="btn btn-primary">
                  Create
                </Link>
              </div>
              <div className="tables">
                <table className="table table-success table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>name</th>
                      <th>rating</th>
                      <th>Description</th>
                      <th>designation</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testimonials &&
                      testimonials.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.name}</td>
                          <td>{item.rating}</td>
                          <td>{item.designation}</td>
                          <td
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                          <td>{item.status == 1 ? "Active" : "Block"}</td>
                          <td>
                            <div className="td_action">
                              <Link
                                to={`/admin/services/edit/${item.id}`}
                                className="btn-small"
                              >
                                edit
                              </Link>
                              <Link
                                onClick={() => handleDelete(item.id)}
                                to="#"
                                className="btn-small"
                              >
                                delete
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
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

export default ShowTestimonials;
