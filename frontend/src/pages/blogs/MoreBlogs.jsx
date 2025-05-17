import React, { useEffect, useState } from "react";
import BlogsImg from "../../../public/assets/images/engineer-4925140_1280.jpg";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";

const MoreBlogs = () => {
  const [articles, setArticles] = useState([]);
  const [articlesMore, setArticlesMore] = useState(false);
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "get-articles", {
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

  const sliceAticles = articles.slice(0, 3);

  const handleMoreBlog = () => {
    setArticlesMore(true);
  };
  return (
    <div>
      <div className="card shadow border-0 sidebar">
        <div className="card-body px-5 py-4">
          <h3 className="mt-2 mb-3">Latest Blogs</h3>
          {articles && articlesMore
            ? articles.map((item) => (
                <div key={item.id} className="d-flex border-bottom mb-3 pb-2">
                  <div className="pe-3 pb-2">
                    <a href="#">
                      <img
                        width="100"
                        src={
                          item.image &&
                          `${imageUrl}uploads/articles/small/${item.image}`
                        }
                        alt="Blogs Img"
                      ></img>
                    </a>
                  </div>
                  <a className="title" href="#">
                    {item.title}
                  </a>
                </div>
              ))
            : sliceAticles.map((item) => (
                <div key={item.id} className="d-flex border-bottom mb-3 pb-2">
                  <div className="pe-3 pb-2">
                    <a href="#">
                      <img
                        width="100"
                        src={
                          item.image &&
                          `${imageUrl}uploads/articles/small/${item.image}`
                        }
                        alt="Blogs Img"
                      ></img>
                    </a>
                  </div>
                  <a className="title" href="#">
                    {item.title}
                  </a>
                </div>
              ))}
          <button onClick={handleMoreBlog} className="btn btn-primary">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreBlogs;
