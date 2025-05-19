import React, { useState, useRef, useMemo } from "react";
import Navbars from "../../../components/navbar/Navbar";
import Sidebar from "../sidebar/Index";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { apiUrl, imageUrl, token } from "../common/Http";
import { toast } from "react-toastify";

const EditProjects = ({ placeholder }) => {
  const [content, setContent] = useState("");
  const [imageFind, setImageFind] = useState([]);
  const [imageId, setImageId] = useState(null);
  const editor = useRef(null);
  const navigate = useNavigate();
  const params = useParams();
  //   console.log(imageFind.image);
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
  } = useForm({
    defaultValues: async () => {
      const res = await fetch(apiUrl + "projects/" + params.id, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: `bearer ${token()}`,
        },
      });
      const result = await res.json();
      if (result.status == true) {
        setImageFind(result.data);
        setContent(result.data.description);
        return {
          title: result.data.title,
          slug: result.data.slug,
          short_desc: result.data.short_desc,
          construction_type: result.data.construction_type,
          sector: result.data.sector,
          location: result.data.location,
          status: result.data.status,
        };
      }
    },
  });

  const onSubmit = async (data) => {
    if (!imageId) {
      toast.error("Please upload/select an image before submitting.");
      return;
    }
    const newData = { ...data, description: content, imageId: imageId };
    const res = await fetch(apiUrl + "projects/" + params.id, {
      method: "PUT",
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
    }
  };
  const handleFile = async (e) => {
    const formImage = new FormData();
    const file = e.target.files[0];
    formImage.append("image", file);

    await fetch(apiUrl + "temp-image", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `bearer ${token()}`,
      },
      body: formImage,
    })
      .then((response) => response.json())
      .then((resutl) => {
        if (resutl.status == false) {
          toast.success(resutl.errors);
        } else {
          setImageId(resutl.data.id);
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
                <Link to="/admin/projects" className="btn btn-primary">
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
                      {...register("title", {
                        required: "the titel fields is required",
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
                      {...register("slug", {
                        required: "the slug fields is required",
                      })}
                    />
                  </div>
                  {errors.slug && (
                    <div className="invalid-feedback d-block">
                      {errors.slug.errors}
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
                      tabIndex={1} // tabIndex of textarea
                      onBlur={(newContent) => setContent(newContent)}
                      onChange={(newContent) => {}}
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
                          className="form-control"
                          {...register("construction_type")}
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
                    <div className="">
                      <label htmlFor="image">Image</label>
                      <input onChange={handleFile} type="file" />
                    </div>
                    <div className="servicesAdminImage">
                      {imageFind.image && (
                        <img
                          src={
                            imageUrl +
                            "uploads/projects/large/" +
                            imageFind.image
                          }
                          alt={imageFind.image}
                        />
                      )}
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

export default EditProjects;
