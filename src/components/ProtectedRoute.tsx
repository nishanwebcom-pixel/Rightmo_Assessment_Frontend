import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAdminToken, selectAdminUser } from "../store/auth/authSelector";

const ProtectedRoute: React.FC = () => {
  const token = useSelector(selectAdminToken);
  const user = useSelector(selectAdminUser);

  if (!token || (user && user?.role_id != 1)) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
