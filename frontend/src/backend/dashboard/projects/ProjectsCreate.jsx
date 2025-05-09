import React, { useState, useRef, useMemo } from "react";
import Navbars from "../../../components/navbar/Navbar";
import Sidebar from "../sidebar/Index";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { apiUrl, token } from "../common/Http";
import { toast } from "react-toastify";

const ProjectsCreate = ({ placeholder }) => {
  const [imageId, setImageId] = useState("");
  const navigate = useNavigate();

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

  const onSubmit = async (data) => {
    const newData = { ...data, description: content, imageId: imageId };

    const res = await fetch(apiUrl + "projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });
    const result = await res.json();
    if (result.status == true) {
      toast.success(result.message);
      setTimeout(() => {
        navigate("/admin/projects");
      }, 2000);
    } else {
      toast.error(result.errors);
    }
  };

  const handleFile = async (e) => {
    const fileObject = new FormData();
    const file = e.target.files[0];
    fileObject.append("image", file);

    await fetch(apiUrl + "temp-image", {
      method: "post",
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${token()}`,
      },
      body: fileObject,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status == false) {
          toast.error(result.errors.image[0]);
        } else {
          setImageId(result.data.id);
        }
      });
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
                <h4>Projects ducumantation</h4>
                <Link to="/admin/services" className="btn btn-primary">
                  Back
                </Link>
              </div>
              <div className="tables">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="title">Title</label>
                    <input
                      {...register("title", {
                        required: "please title must fillup",
                      })}
                      className={`form-control ${
                        errors.title ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  {errors.title && (
                    <div className="invalid-feedback d-block">
                      {errors.title.message}
                    </div>
                  )}

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="slug">Slug</label>
                    <input
                      {...register("slug", {
                        required: "please slug must fillup",
                      })}
                      className={`form-control ${
                        errors.slug ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  {errors.slug && (
                    <div className="invalid-feedback d-block">
                      {errors.slug.message}
                    </div>
                  )}
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="short_desc">Short_desc</label>
                    <input
                      {...register("short_desc")}
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="description">Description</label>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      config={config}
                      onChange={(newContent) => {
                        setContent(newContent);
                      }}
                      onBlur={(newContent) => {
                        setContent(newContent);
                      }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex gap-3 align-items-center py-4">
                        <label htmlFor="construction_type">
                          Construction_type
                        </label>
                        <select
                          name="construction_type"
                          {...register("construction_type")}
                          className="form-control"
                        >
                          <option value="residential construction">
                            Residential construction
                          </option>
                          <option value="commercial construction">
                            Commercial construction
                          </option>
                          <option value="indoustrial construction">
                            Indoustrial construction
                          </option>
                          <option value="infrustructrue construction">
                            Infrustructrue construction
                          </option>
                        </select>
                      </div>
                      <div className="d-flex gap-3 align-items-center py-4">
                        <label htmlFor="sector">Sector</label>
                        <select
                          {...register("sector")}
                          name="sector"
                          className="form-control"
                        >
                          <option value="uttora">Uttora</option>
                          <option value="badda">badda</option>
                          <option value="mirpur">Mirpur</option>
                          <option value="gulsan">gulsan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex gap-3 align-items-center py-4">
                        <label htmlFor="location">Location</label>
                        <input
                          {...register("location")}
                          className="form-control"
                        />
                      </div>
                      <div className="d-flex gap-3 align-items-center py-4">
                        <label htmlFor="status">Status</label>
                        <select
                          {...register("status")}
                          className="form-control"
                        >
                          <option value="1">Active</option>
                          <option value="0">Block</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="image">Image</label>
                    <input onChange={handleFile} type="file" />
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

export default ProjectsCreate;
