import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="">
        <ul className="sidebar_menu">
          <li>
            <Link to="#" className="items  ">
              home
            </Link>
          </li>
          <li>
            <Link to="#" className="items  ">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="#" className="items  ">
              Projects
            </Link>
          </li>
          <li>
            <Link to="#" className="items  ">
              About Us
            </Link>
          </li>
          <li>
            <Link to="#" className="items  ">
              Services
            </Link>
          </li>
          <li>
            <Link to="#" className="items  ">
              Contact Us
            </Link>
          </li>
          <li>
            <button onClick={logout} className="items btn-primary">
              logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
