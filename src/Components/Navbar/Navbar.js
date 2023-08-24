import { useAuth } from "../../Context/authContext";
import "./Navbar.css";
export const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav className="navbar">
      <h4>Video Recorder</h4>
      <span>Welcome, {user?.username}</span>
    </nav>
  );
};
