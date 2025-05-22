import React, { useState } from "react";
import Sidebar from "../sidebar/Index";
import Navbars from "../../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../common/Http";
import { toast } from "react-toastify";

const CreateOurTeam = () => {
  const [imageId, setImageId] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newData = { ...data, imageId: imageId };
    const res = await fetch(apiUrl + "members", {
      method: "POST",
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
        navigate("/admin/services");
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
        } else {
          toast.error(result.errors);
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
                <Link to="/admin/team-members" className="btn btn-primary">
                  Back
                </Link>
              </div>
              <div className="tables">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Please type your name"
                      {...register("name", {
                        required: "the name field is required",
                      })}
                    />
                  </div>
                  {errors.name && (
                    <span className="invalid-feedback d-block">
                      {errors.name}
                    </span>
                  )}
                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="designation">Designation</label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      placeholder="Please type your slug"
                      className="form-control"
                      {...register("designation")}
                    />
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="link">Link</label>
                    <input
                      className="form-control"
                      type="text"
                      id="link"
                      name="link"
                      placeholder="Please type your link"
                      {...register("link")}
                    />
                  </div>

                  <div className="d-flex gap-3 align-items-center py-4">
                    <label htmlFor="image">Image</label>
                    <input onChange={handleFile} type="file" />
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

export default CreateOurTeam;
