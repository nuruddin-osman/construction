import React, { useEffect, useState } from "react";
import Navbars from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Sidebar from "../sidebar/Index";
import { Link, useParams } from "react-router-dom";
import { apiUrl, token } from "../common/Http";
import { toast } from "react-toastify";

const Show = () => {
  const [servicesData, setServicesData] = useState([]);
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "services", {
      method: "get",
      headers: {
        "content-type": "application/json",
        Accpet: "application/json",
        Authorization: `bearer ${token()}`,
      },
    });
    const result = await res.json();
    setServicesData(result.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure this services item is delete!")) {
      const res = await fetch(apiUrl + "services/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Accpet: "application/json",
          Authorization: `bearer ${token()}`,
        },
        body: JSON.stringify(),
      });
      const result = await res.json();

      if (result.status == true) {
        const newServiceData = servicesData.filter((item) => item.id != id);
        setServicesData(newServiceData);
        toast.success(result.message);
      }
    }
  };

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
                      <th>Slug</th>
                      <th>Short_desc</th>
                      <th>Description</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servicesData &&
                      servicesData.map((item) => (
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

export default Show;
