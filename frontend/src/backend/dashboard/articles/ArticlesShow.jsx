import React, { useEffect, useState } from "react";
import Navbars from "../../../components/navbar/Navbar";
import Sidebar from "../sidebar/Index";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import { apiUrl, token } from "../common/Http";
import { toast } from "react-toastify";

const ArticlesShow = () => {
  const [articles, setArticles] = useState(null);
  const fetchApi = async () => {
    const res = await fetch(`${apiUrl}article`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `bearer ${token()}`,
      },
    });
    const result = await res.json();
    if (result.status == true) {
      setArticles(result.data);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure this item is delete")) {
      const res = await fetch(`${apiUrl}article/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `bearer ${token()}`,
        },
      });
      const result = await res.json();
      if (result.status == true) {
        const filterItems = articles.filter((item) => item.id != id);
        setArticles(filterItems);
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
                <Link to="/admin/articles/create" className="btn btn-primary">
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
                      <th>Content</th>
                      <th>Author</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles &&
                      articles.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.slug}</td>
                          <td
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                          <td>{item.author}</td>
                          <td>{item.status == 1 ? "Active" : "Block"}</td>
                          <td>
                            <div className="td_action">
                              <Link
                                to={`/admin/articles/edit/${item.id}`}
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

export default ArticlesShow;
