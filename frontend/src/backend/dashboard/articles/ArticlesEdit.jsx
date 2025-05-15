import React, { useState, useRef, useMemo } from "react";
import Footer from "../../../components/footer/Footer";
import Navbars from "../../../components/navbar/Navbar";
import Sidebar from "../sidebar/Index";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { apiUrl, imageUrl, token } from "../common/Http";
import { toast } from "react-toastify";

const ArticlesEdit = ({ placeholder }) => {
  const [imageId, setImageId] = useState(null);
  const [findImage, setFindImage] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const params = useParams();
  const navigate = useNavigate();

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
      const res = await fetch(apiUrl + "article/" + params.id, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Accept: "application/josn",
          Authorization: `bearer ${token()}`,
        },
      });
      const result = await res.json();
      if (result.status == true) {
        setContent(result.data.content);
        setFindImage(result.data);
        return {
          title: result.data.title,
          slug: result.data.slug,
          author: result.data.author,
          status: result.data.status,
        };
      }
    },
  });

  const onSubmit = async (data) => {
    const newData = { ...data, content: content, imageId: imageId };
    const res = await fetch(apiUrl + "article/" + params.id, {
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
        navigate("/admin/articles");
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
        if (result.status == true) {
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
                    <div className="">
                      <label htmlFor="image">Image</label>
                      <input onChange={handleFile} type="file" />
                    </div>
                    <div className="servicesAdminImage">
                      {findImage.image && (
                        <img
                          src={
                            imageUrl +
                            "uploads/articles/large/" +
                            findImage.image
                          }
                          alt={findImage.image}
                        />
                      )}
                    </div>
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
