import React from "react";
import Sidebar from "./sidebar/Index";
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbars />
      <div className="dashboard">
        <div className="container">
          <div className="dashboard_wrapper">
            <Sidebar />
            <div className="main_part"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
