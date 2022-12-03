import React from "react";
import { Route, Routes } from "react-router-dom";
import ElectionsPage from "../pages/ElectionsPage";
import LandingPage from "../pages/LandingPage";
import VotingPage from "../pages/VotingPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/vote" element={<VotingPage />} />
      <Route path="/elections" element={<ElectionsPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
