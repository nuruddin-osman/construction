import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Banner from "../../components/common/Banner";
import BlogDetails from "./BlogDetails";
import MoreBlogs from "./MoreBlogs";
import Footer from "../../components/footer/Footer";

const Blogs = () => {
  return (
    <div>
      <Navbars />
      <Banner sub_heading="Quality. Integrity. Value." heading="Blogs" />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <BlogDetails />
          </div>
          <div className="col-md-4">
            <MoreBlogs />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
