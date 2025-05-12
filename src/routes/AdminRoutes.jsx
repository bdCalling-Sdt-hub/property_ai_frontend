/* eslint-disable react/prop-types */
// AdminRoutes.js
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { user, token } = useSelector(state=>state?.auth);
  if (!user || !token) {
    return <Navigate to="/auth/login/" replace />;
  }
  const isAdmin = user && (user.role === "admin" || user.role === "user");
  if (!isAdmin) {
    return <Navigate to="/auth/login/" replace />;
  }

  // If admin, render the requested admin route component
  return <>{children}</>;
};

export default AdminRoutes;
