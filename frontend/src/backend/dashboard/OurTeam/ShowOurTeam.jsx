import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Index";
import Navbars from "../../../components/navbar/Navbar";
import { apiUrl, token } from "../common/Http";

const ShowOurTeam = () => {
  const [members, setMembers] = useState([]);
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "members", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `bearer ${token()}`,
      },
    });
    const result = await res.json();
    if (result.status == true) {
      setMembers(result.data);
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
                <Link
                  to="/admin/team-members/create"
                  className="btn btn-primary"
                >
                  Create
                </Link>
              </div>
              <div className="tables">
                <table className="table table-success table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Link</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members &&
                      members.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.designation}</td>
                          <td>{item.link}</td>
                          <td>{item.status == 1 ? "Active" : "Block"}</td>
                          <td>
                            <div className="td_action">
                              <Link
                                to={`/admin/team-members/edit/${item.id}`}
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

export default ShowOurTeam;
