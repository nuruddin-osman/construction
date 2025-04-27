import React from "react";
import BlogsImg from "../../../public/assets/images/engineer-4925140_1280.jpg";

const MoreBlogs = () => {
  return (
    <div>
      <div className="card shadow border-0 sidebar">
        <div className="card-body px-5 py-4">
          <h3 className="mt-2 mb-3">Latest Blogs</h3>
          <div class="d-flex border-bottom mb-3 pb-2">
            <div class="pe-3 pb-2">
              <a href="#">
                <img width="100" src={BlogsImg} alt="Blogs Img"></img>
              </a>
            </div>
            <a class="title" href="#">
              One of the defining characteristics of civil construction
            </a>
          </div>
          <div class="d-flex border-bottom mb-3 pb-2">
            <div class="pe-3 pb-2">
              <a href="#">
                <img width="100" src={BlogsImg} alt="Blogs Img"></img>
              </a>
            </div>
            <a class="title" href="#">
              One of the defining characteristics of civil construction
            </a>
          </div>
          <div class="d-flex border-bottom mb-3 pb-2">
            <div class="pe-3 pb-2">
              <a href="#">
                <img width="100" src={BlogsImg} alt="Blogs Img"></img>
              </a>
            </div>
            <a class="title" href="#">
              One of the defining characteristics of civil construction
            </a>
          </div>
          <button class="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default MoreBlogs;
