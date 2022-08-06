import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import auth from "./auth";
import Sidebar from "../components/Sidebar";

const ProtectedRoute = () => {
  const isAuth = auth.isAuthenticated();
  return isAuth ? (
    <>
      <Sidebar />
      <Outlet />
    </>
  ) : (
    <>
      <Navigate to="/Login" />
    </>
  );
};

export default ProtectedRoute;
