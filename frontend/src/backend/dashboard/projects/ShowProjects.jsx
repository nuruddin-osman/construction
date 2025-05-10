import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Index";
import Navbars from "../../../components/navbar/Navbar";
import { apiUrl, token } from "../common/Http";

const ShowProjects = () => {
  const [projectData, setProjectData] = useState("");
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "projects", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `bearer ${token()}`,
      },
    });
    const result = await res.json();
    setProjectData(result.data);
  };
  console.log(projectData);

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
                <h4>Projects ducumantation</h4>
                <Link to="/admin/projects/create" className="btn btn-primary">
                  Create
                </Link>
              </div>
              <div className="tables">
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
                    {projectData &&
                      projectData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.slug}</td>
                          <td>{item.short_desc}</td>
                          <td
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                          <td>{item.status == 1 ? "Active" : "Block"}</td>
                          <td>
                            <div className="td_action">
                              <Link
                                to={`/admin/projects/edit/${item.id}`}
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

export default ShowProjects;
