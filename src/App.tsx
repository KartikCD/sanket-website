import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SanketWaterproofing } from "./screens/SanketWaterproofing/SanketWaterproofing";
import { Projects } from "./screens/Projects/Projects";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SanketWaterproofing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};
