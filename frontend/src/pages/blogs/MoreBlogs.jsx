import React, { useEffect, useState } from "react";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";
import { Link } from "react-router-dom";

const MoreBlogs = () => {
  const [articles, setArticles] = useState([]);
  const fetchApi = async () => {
    const res = await fetch(`${apiUrl}latest-articles?limit=4`, {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
      setArticles(result.data);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <div className="card shadow border-0 sidebar">
        <div className="card-body px-5 py-4">
          <h3 className="mt-2 mb-3">Latest Blogs</h3>
          {articles &&
            articles.map((item) => (
              <Link
                to={`/blogs/${item.id}`}
                key={item.id}
                className="d-flex border-bottom mb-3 pb-2"
              >
                <div className="pe-3 pb-2">
                  {item.image && (
                    <img
                      width="100"
                      src={`${imageUrl}uploads/articles/small/${item.image}`}
                      alt="Blogs Img"
                    ></img>
                  )}
                </div>
                <a className="title" href="#">
                  {item.title}
                </a>
              </Link>
            ))}
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default MoreBlogs;
