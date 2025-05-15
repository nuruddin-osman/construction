import React, { useState, useRef, useMemo } from "react";
import Footer from "../../../components/footer/Footer";
import Navbars from "../../../components/navbar/Navbar";
import Sidebar from "../sidebar/Index";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";

const ArticlesEdit = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "",
    }),
    [placeholder]
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log({ ...data, content: content });
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
                <Link to="/admin/articles" className="btn btn-primary">
                  Back
                </Link>
              </div>
              <div className="tables">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Please type your name"
                      {...register("title", {
                        required: "the title fields is required",
                      })}
                      className={`form-control ${
                        errors.title ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  {errors.title && (
                    <span className="invalid-feedback d-block">
                      {errors.title.message}
                    </span>
                  )}
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="slug">Slug</label>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      placeholder="Please type your slug"
                      {...register("slug", {
                        required: "the slug fields is required",
                      })}
                      className={`form-control ${
                        errors.slug ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  {errors.slug && (
                    <span className="invalid-feedback d-block">
                      {errors.slug.message}
                    </span>
                  )}
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="description">Description</label>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      config={config}
                      tabIndex={1}
                      onBlur={(newContent) => setContent(newContent)}
                      onChange={(newContent) => {}}
                    />
                  </div>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="author">Author</label>
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      name="author"
                      placeholder="Please type your author"
                      {...register("author")}
                    />
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="image">Image</label>
                    <input type="file" />
                  </div>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="status">Status</label>
                    <select
                      {...register("status")}
                      className="form-control"
                      id="status"
                      name="status"
                    >
                      <option value="1">Active</option>
                      <option value="0">Block</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticlesEdit;
