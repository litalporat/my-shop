import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import auth from "./auth";

const ProtectedRoute = () => {
  const isAuth = auth.isAuthenticated();
  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoute;
