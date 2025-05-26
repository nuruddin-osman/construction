import React from "react";
import Banner from "../../components/common/Banner";
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { apiUrl } from "../../backend/dashboard/common/Http";
import { toast } from "react-toastify";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch(`${apiUrl}contact-mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.status == true) {
      toast.success(result.message);
      reset();
    } else {
      toast.error(result.errors);
    }
  };
  return (
    <div>
      <Navbars />
      <Banner
        heading="Contact Us"
        sub_heading="Quality. Integrity. Value."
        para="We excel at transforming visions into reality <br/> through outstanding craftsmanship and precise."
      />
      <div className="container py-5">
        <div className="text-center">
          <h2 className="">Contact Us</h2>
          <p>
            We offer a diverse array of construction services, spanning <br />
            residential, commercial, and industrial projects.
          </p>
          <div className="row">
            <div className="col-md-3">
              <div className="card-body shadow p-4">
                <h3 className="mb-3">Call Us</h3>
                <div className="mb-3">
                  <div>
                    <a href="#">(888) 000-0000</a>
                  </div>
                  <div>
                    <a href="#">(222) 123-12345</a>
                  </div>
                </div>

                <h3 className="mt-4 mb-3">You can write us</h3>
                <div className="mb-3">
                  <div>
                    <a href="#">example@example.com</a>
                  </div>
                  <div>
                    <a href="#">info@example.com</a>
                  </div>
                </div>

                <h3 className="mt-4 mb-3">Address</h3>
                <div className="mb-3">
                  B-18X, Rajaji Puram
                  <br />
                  Lucknow, Uttar Pradesh, 226017
                  <br />
                  Phone: <a href="#">0522-400XXXX</a>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-body shadow p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control form-control-lg undefined ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Name"
                        {...register("name", {
                          required: "the name failds is required",
                        })}
                      />
                    </div>
                    {errors.name && (
                      <p className="invalid-feedback">{errors.name.message}</p>
                    )}
                    <div className="col-md-6 mb-4">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className={`form-control form-control-lg undefined ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        {...register("email", {
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address",
                          },
                        })}
                      />
                    </div>
                    {errors.email && (
                      <p className="invalid-feedback">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control form-control-lg"
                        placeholder="Phone No."
                        {...register("phone")}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control form-control-lg"
                        placeholder="Subject"
                        {...register("subject")}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="5"
                      id=""
                      className="form-control form-control-lg"
                      {...register("message")}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary large mt-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
