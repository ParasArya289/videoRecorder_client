import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import "./Navbar.css";
export const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <Link to="/">Video Recorder</Link>
      <div>
        <span>Welcome, {user?.username}</span>{" "}
        <button onClick={logoutUser}>Logout</button>
      </div>
    </nav>
  );
};
