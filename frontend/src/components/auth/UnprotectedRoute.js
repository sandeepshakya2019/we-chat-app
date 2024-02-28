import React from "react";
import { Navigate } from "react-router-dom";

function UnprotectedRoute({ children, user, redirect = "/" }) {
  console.log(user);
  if (user) return <Navigate to={redirect} />;
  return children;
}

export default UnprotectedRoute;
