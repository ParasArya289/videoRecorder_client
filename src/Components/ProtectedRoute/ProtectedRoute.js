import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location?.pathname }} replace />
  );
};
