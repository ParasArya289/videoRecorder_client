import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

export const ProtectedRoute = ({ children }) => {
  const data = useAuth();
  const location = useLocation();
  //   console.log(location);

  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location?.pathname }} replace />
  );
};
