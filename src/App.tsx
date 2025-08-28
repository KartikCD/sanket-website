import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SanketWaterproofing } from "./screens/SanketWaterproofing/SanketWaterproofing";
import { Projects } from "./screens/Projects/Projects";
import { StickySocials } from "./components/StickySocials/StickySocials";
import { usePageTracking } from "./hooks/usePageTracking";

const AppContent = () => {
  // This hook will track page views on route changes
  usePageTracking();

  return (
    <>
      <StickySocials />
      <Routes>
        <Route path="/" element={<SanketWaterproofing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}


export const App = (): JSX.Element => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};
