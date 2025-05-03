import React, { useContext } from "react";
import { AuthContext } from "../../backend/auth/AuthContext";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/admin/login" />;
  }
  return children;
};

export default RequiredAuth;
