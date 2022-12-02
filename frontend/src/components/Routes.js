import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import VotingPage from "../pages/VotingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/vote" element={<VotingPage />} />
    </Routes>
  );
};

export default AppRoutes;
