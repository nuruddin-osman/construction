import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./assets/css/style.scss";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Index";
import About from "./pages/about/Index";
import Services from "./pages/Services/Index";
import Project from "./pages/projects/Index";
import Blogs from "./pages/blogs/Index";
import Contacts from "./pages/contacts/Index";
import Login from "./pages/login/Index";
import { ToastContainer } from "react-toastify";
import Dashboard from "./backend/dashboard/Index";
import RequiredAuth from "./components/common/RequiredAuth";
import { default as ShowServices } from "./backend/dashboard/services/Show";
import ServiceCreate from "./backend/dashboard/services/ServiceCreate";
import ServicesEdit from "./backend/dashboard/services/ServicesEdit";
import ShowProjects from "./backend/dashboard/projects/ShowProjects";
import ProjectsCreate from "./backend/dashboard/projects/ProjectsCreate";
import EditProjects from "./backend/dashboard/projects/EditProjects";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        />
        <Route
          path="/admin/services"
          element={
            <RequiredAuth>
              <ShowServices />
            </RequiredAuth>
          }
        />
        <Route
          path="/admin/services/create"
          element={
            <RequiredAuth>
              <ServiceCreate />
            </RequiredAuth>
          }
        />
        <Route
          path="/admin/services/edit/:id"
          element={
            <RequiredAuth>
              <ServicesEdit />
            </RequiredAuth>
          }
        />
        <Route
          path="/admin/projects"
          element={
            <RequiredAuth>
              <ShowProjects />
            </RequiredAuth>
          }
        />
        <Route
          path="/admin/projects/create"
          element={
            <RequiredAuth>
              <ProjectsCreate />
            </RequiredAuth>
          }
        />
        <Route
          path="/admin/projects/edit/:id"
          element={
            <RequiredAuth>
              <EditProjects />
            </RequiredAuth>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="light"
      />
    </>
  );
};

export default App;
