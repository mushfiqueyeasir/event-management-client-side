import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../layer/AppLayer";

const RequireAuth = ({ children }) => {
  const { user } = useContext(GLOBAL_CONTEXT);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/join" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default RequireAuth;
