import React, { useEffect, useState } from "react";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";
import Navbars from "../../components/navbar/Navbar";
import Banner from "../../components/common/Banner";
import MoreBlogs from "./MoreBlogs";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const [article, setArticle] = useState([]);
  const params = useParams();
  const fetchApi = async () => {
    const res = await fetch(`${apiUrl}latest-one-articles/${params.id}`, {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
      setArticle(result.data);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [params.id]);

  return (
    <>
      <Navbars />
      <Banner
        sub_heading="Quality. Integrity. Value."
        heading={article.title}
      />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div>
              <h2>{article.title}</h2>
              <p>
                by <strong>{article.author}</strong> on {article.created_at}
              </p>
              <div className="w-100 mt-3">
                <img
                  className="w-100 "
                  src={
                    article.image &&
                    `${imageUrl}uploads/articles/large/${article.image}`
                  }
                  alt="Blogs Img"
                />
              </div>
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{
                  __html: article.content,
                }}
              ></div>
            </div>
          </div>
          <div className="col-md-4">
            <MoreBlogs />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
