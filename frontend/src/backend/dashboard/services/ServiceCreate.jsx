import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Sidebar from "../sidebar/Index";
import Navbars from "../../../components/navbar/Navbar";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../common/Http";
import { toast } from "react-toastify";

const ServiceCreate = ({ placeholder }) => {
  const [servicesData, setServicesData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  // jodit for textarea
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "description",
    }),
    [placeholder]
  );

  const navigate = useNavigate();
  //form handling and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const newData = { ...data, description: content };
    // data store in database
    const res = await fetch(apiUrl + "services", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accpet: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });

    const result = await res.json();
    if (result.status == true) {
      toast.success(result.message);
      setTimeout(() => {
        navigate("/admin/services");
      }, 2000);
    } else {
      toast.error(result.errors);
    }
  };

  const handleFile = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);
    setIsLoader(true);
    await fetch(apiUrl + "temp-image", {
      method: "POST",
      headers: {
        Accpet: "application/json",
        Authorization: `bearer ${token()}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status == false) {
          toast.error(result.errors.image[0]);
        } else {
          toast.success(result.message);
          setIsLoader(false);
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
                <h4>Services ducumantation</h4>
                <Link to="/admin/services" className="btn btn-primary">
                  Back
                </Link>
              </div>
              <div className="tables">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="title">Title</label>
                    <input
                      className={`form-control ${
                        errors.title ? "is-invalid" : ""
                      }`}
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Please type your name"
                      {...register("title", {
                        required: "Please enter your title",
                      })}
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
                      className={`form-control ${
                        errors.slug ? "is-invalid" : ""
                      }`}
                      type="text"
                      id="slug"
                      name="slug"
                      placeholder="Please type your slug"
                      {...register("slug", {
                        required: "Please enter your slug",
                      })}
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
                      className="form-control"
                      type="text"
                      id="short_desc"
                      name="short_desc"
                      placeholder="Please type your short_desc"
                      {...register("short_desc")}
                    />
                  </div>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="description">Description</label>
                    <JoditEditor
                      className="form-control"
                      ref={editor}
                      value={content}
                      config={config}
                      tabIndex={1} // tabIndex of textarea
                      onChange={(newContent) => setContent(newContent)}
                    />
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="image">Image</label>
                    <input onChange={handleFile} type="file" />
                  </div>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="status">Status</label>
                    <select
                      className="form-control"
                      id="status"
                      name="status"
                      {...register("status")}
                    >
                      <option value="1">Active</option>
                      <option value="0">Block</option>
                    </select>
                  </div>
                  <button
                    disabled={isLoader}
                    type="submit"
                    className="btn btn-primary"
                  >
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

export default ServiceCreate;
