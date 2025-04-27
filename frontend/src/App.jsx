import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import "./assets/css/style.scss";
import Home from "./pages/home/Index";
import About from "./pages/about/Index";
import Services from "./pages/Services/Index";
import Project from "./pages/projects/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
