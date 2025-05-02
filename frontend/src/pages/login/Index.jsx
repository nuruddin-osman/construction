import React from "react";
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Login = () => {
  return (
    <>
      <Navbars />
      <div className="login_page">
        <div className="container">
          <h2 className="text-center">Login form</h2>
          <div className="card border-0 shadow mt-4">
            <div className="card-body">
              <form action="">
                <div className="d-flex gap-3 align-items-center py-4">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Please type your name"
                  />
                </div>
                <div className="d-flex gap-3 align-items-center py-4">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Please type your Email"
                  />
                </div>
                <div className="d-flex gap-3 align-items-center py-4">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Please type your password"
                  />
                </div>
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
