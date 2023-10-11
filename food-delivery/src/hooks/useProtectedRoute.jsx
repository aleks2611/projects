import { Navigate } from "react-router-dom";
import appContext from "../context/Provider";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(appContext);
  const userData = JSON.parse(localStorage.getItem("user"));

  if (!user && !userData) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default ProtectedRoute;
