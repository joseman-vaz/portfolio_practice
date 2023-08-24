import { Link, useLocation } from "react-router-dom";
// import "./index.css";

function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        to="/profile"
        className={location.pathname === "/profile" ? "active" : ""}
      >
        Profile
      </Link>
      <Link
        to="/contact"
        className={location.pathname === "/contact" ? "active" : ""}
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
