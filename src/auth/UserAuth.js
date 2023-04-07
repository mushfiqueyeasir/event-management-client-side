import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../layer/AppLayer";

const UserAuth = ({ children }) => {
  const { user, handleEmail } = useContext(GLOBAL_CONTEXT);
  const location = useLocation();

  if (user) {
    handleEmail(user?.email);
    return <Navigate to="/home" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default UserAuth;
