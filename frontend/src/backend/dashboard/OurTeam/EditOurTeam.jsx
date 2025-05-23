import React from "react";
import Footer from "../../../components/footer/Footer";
import Navbars from "../../../components/navbar/Navbar";
import Sidebar from "../sidebar/Index";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditOurTeam = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleFile = (e) => {
    const fileObject = new FormData();
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
                      placeholder="Please type your name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      {...register("name", {
                        required: "This name field is required",
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

export default EditOurTeam;
