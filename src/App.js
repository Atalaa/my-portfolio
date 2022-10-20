import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<NotFound />} />
    </Routes>
  );
};

export default App;
