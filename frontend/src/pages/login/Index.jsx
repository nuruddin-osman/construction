import React, { useContext } from "react";
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../backend/auth/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("http://127.0.0.1:8000/api/authenticate", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.status == true) {
      toast.success("Login successful");
      const userInfo = { id: result.id, token: result.token };
      login(userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      //   localStorage.setItem("userInfo", JSON.stringify(result));
      navigate("/admin/dashboard");
    } else {
      toast.warn("User credential error");
    }
  };

  return (
    <>
      <Navbars />
      <div className="login_page">
        <div className="container">
          <h2 className="text-center">Login form</h2>
          <div className="card border-0 shadow mt-4">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex gap-3 align-items-center py-4">
                  <label htmlFor="name">Name</label>
                  <input
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Please type your name"
                  />
                </div>
                {errors.name && (
                  <div className="invalid-feedback d-block">
                    {errors.name.message}
                  </div>
                )}
                <div className="d-flex gap-3 align-items-center py-4">
                  <label htmlFor="email">Email</label>
                  <input
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    type="email"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    placeholder="Please type your Email"
                  />
                </div>
                {errors.email && (
                  <div className="invalid-feedback d-block">
                    Email is required
                  </div>
                )}
                <div className="d-flex gap-3 align-items-center py-4">
                  <label htmlFor="password">Password</label>
                  <input
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    type="password"
                    name="password"
                    {...register("password", { required: true })}
                    placeholder="Please type your password"
                  />
                </div>
                {errors.password && (
                  <div className="invalid-feedback d-block">
                    Password is required
                  </div>
                )}
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
