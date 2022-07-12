import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import auth from "./auth";
import Sidebar from "../components/Sidebar";
import RightSide from "../components/RigtSide/RightSide";
import GlobalStyle from "../styles/GlobalStyle";

const ProtectedRoute = () => {
  const isAuth = auth.isAuthenticated();
  return isAuth ? (
    <>
      <Sidebar />
      <Outlet />
      <RightSide />
      <GlobalStyle />
    </>
  ) : (
    <Navigate to="/Login" />
  );
};

export default ProtectedRoute;
