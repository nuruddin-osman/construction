import React, { useEffect, useState } from "react";
import BlogsImg from "../../../public/assets/images/engineer-4925140_1280.jpg";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";
const BlogDetails = () => {
  const [articles, setArticles] = useState([]);
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "latest-articles?limit=1", {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
      setArticles(result.data[0]);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <h2>Key Elements of Civil Construction within the construction</h2>
      <span>by Mark on 01 Feb, 2025</span>
      <div className="w-100 mt-3">
        <img
          className="w-100 "
          src={
            articles.image &&
            `${imageUrl}uploads/articles/large/${articles.image}`
          }
          alt="Blogs Img"
        />
      </div>
      <div className="mt-3">
        <article>{articles.title}</article>
        <br />
        <article>
          Civil construction projects are often large-scale and involve complex
          engineering and logistical challenges. These projects require
          extensive planning and collaboration among engineers, architects,
          government agencies, and construction firms. The construction process
          typically begins with site surveys, environmental impact assessments,
          and the design of the project, followed by site preparation and the
          construction of the necessary structures. Due to the critical nature
          of these projects, safety, durability, and sustainability are key
          considerations throughout the construction process.
        </article>
        <br />
        <article>
          One of the defining characteristics of civil construction is its focus
          on public works and infrastructure that serve the broader community.
          These projects often have long lifespans and must be designed to
          withstand the elements, heavy use, and changing environmental
          conditions. Advances in technology and materials have led to the
          development of more efficient and sustainable construction methods,
          helping to reduce costs, minimize environmental impact, and extend the
          lifespan of civil infrastructure.
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
