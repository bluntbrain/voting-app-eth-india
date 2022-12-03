import React from "react";
import { Route, Routes } from "react-router-dom";
import ElectionsPage from "../pages/ElectionsPage";
import LandingPage from "../pages/LandingPage";
import VotingPage from "../pages/VotingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/vote" element={<VotingPage />} />
      <Route path="/elections" element={<ElectionsPage />} />
    </Routes>
  );
};

export default AppRoutes;
