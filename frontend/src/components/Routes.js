import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ElectionsPage from "../pages/ElectionsPage";
import ConnectWalletPage from "../pages/ConnectWalletPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/connect-wallet" element={<ConnectWalletPage />} />
      <Route path="/elections" element={<ElectionsPage />} />
    </Routes>
  );
};

export default AppRoutes;
