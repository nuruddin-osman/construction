import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import Navbars from "../../../components/navbar/Navbar";
import Sidebar from "../sidebar/Index";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { apiUrl, imageUrl, token } from "../common/Http";
import { toast } from "react-toastify";

const EditTestimonials = ({ placeholder }) => {
  const [content, setContent] = useState("");
  const [imageFind, setImageFind] = useState([]);
  const [imageId, setImageId] = useState("");
  const params = useParams();
  const editor = useRef(null);
  const navigate = useNavigate();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "",
    }),
    [placeholder]
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await fetch(apiUrl + "testimonials/" + params.id, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `bearer ${token()}`,
        },
      });
      const result = await res.json();
      if (result.status == true) {
        setContent(result.data.description);
        setImageFind(result.data);
        return {
          title: result.data.title,
          name: result.data.name,
          rating: result.data.rating,
          status: result.data.status,
          designation: result.data.designation,
        };
      }
    },
  });

  const onSubmit = async (data) => {
    const newData = { ...data, description: content, imageId: imageId };
    const res = await fetch(apiUrl + "testimonials/" + params.id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });
    const result = await res.json();
    if (result.status == true) {
      toast.success(result.message);
      setTimeout(() => {
        navigate("/admin/testimonials");
      }, 2000);
    }
  };

  const handleFile = async (e) => {
    const fileObject = new FormData();
    const file = e.target.files[0];
    fileObject.append("image", file);

    await fetch(apiUrl + "temp-image", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${token()}`,
      },
      body: fileObject,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status == false) {
          toast.success(result.errors);
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
                <h4>Services ducumantation</h4>
                <Link to="/admin/testimonials" className="btn btn-primary">
                  Back
                </Link>
              </div>
              <div className="tables">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="title">Title</label>
                    <input
                      {...register("title", {
                        required: "The title fields is required",
                      })}
                      className={`form-control ${
                        errors.title ? "is-invalid" : ""
                      }`}
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Please type your name"
                    />
                  </div>
                  {errors.title && (
                    <span className="invalid-feedback d-block">
                      {errors.title.message}
                    </span>
                  )}
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="name">Name</label>
                    <input
                      {...register("name", {
                        required: "The title fields is required",
                      })}
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Please type your name"
                    />
                  </div>
                  {errors.name && (
                    <span className="invalid-feedback d-block">
                      {errors.name.message}
                    </span>
                  )}
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="designation">Designation</label>
                    <input
                      {...register("designation")}
                      className="form-control"
                      type="text"
                      id="designation"
                      name="designation"
                      placeholder="Please type your rating"
                    />
                  </div>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="description">Description</label>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      config={config}
                      tabIndex={1} // tabIndex of textarea
                      onBlur={(newContent) => setContent(newContent)}
                      onChange={(newContent) => {}}
                    />
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <div className="">
                      <label htmlFor="image">Image</label>
                      <input onChange={handleFile} type="file" />
                    </div>
                    <div className="servicesAdminImage">
                      {imageFind.image && (
                        <img
                          src={
                            imageFind.image &&
                            imageUrl + "uploads/testimonials/" + imageFind.image
                          }
                          alt={imageFind.image}
                        />
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex gap-3 align-items-center py-4 col-md-6">
                      <label htmlFor="rating">Rating</label>
                      <select
                        {...register("rating")}
                        className="form-control"
                        id="rating"
                        name="rating"
                      >
                        <option value="1">Normal</option>
                        <option value="2">Avarage</option>
                        <option value="3">Good</option>
                        <option value="4">Better</option>
                        <option value="5">Best</option>
                      </select>
                    </div>
                    <div className="d-flex gap-3 align-items-center py-4 col-md-6">
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

export default EditTestimonials;
