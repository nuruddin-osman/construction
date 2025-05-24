import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";
import Navbars from "../../components/navbar/Navbar";
import Banner from "../../components/common/Banner";
import Footer from "../../components/footer/Footer";

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  console.log(articles);

  const fetchApi = async () => {
    const res = await fetch(apiUrl + "latest-articles?limit=3", {
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
    <>
      <Navbars />
      <Banner sub_heading="Quality. Integrity. Value." heading="Blogs" />
      <div className="blog py-5">
        <div className="text-center">
          <h4 className="blog_sub_title">Blog & News</h4>
          <h2 className="">Articles & blog posts</h2>
          <p>
            We offer a diverse array of construction services, spanning
            residential, commercial, and industrial projects.
          </p>
        </div>
        <div className="container py-5">
          <div className="row">
            {articles &&
              articles.map((item) => (
                <div key={item.id} className="col-md-4">
                  <Card className="blog_card shadow">
                    <Card.Img
                      className="blog_img"
                      variant="top"
                      src={
                        item.image &&
                        `${imageUrl}uploads/articles/small/${item.image}`
                      }
                    />
                    <Card.Body className="blog_body">
                      <Link className="blog_link" to="#">
                        <Card.Title className="py-3">{item.title}</Card.Title>
                      </Link>
                      <Link
                        className="btn-small"
                        to={`/blogs/${item.id}`}
                        variant="primary"
                      >
                        read more
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        </div>
        <div className="text-center">
          <Button variant="primary">View more</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
