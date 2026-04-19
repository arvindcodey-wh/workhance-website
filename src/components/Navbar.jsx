import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/workhance_logo.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo-section">
          <img src={logo} alt="Work Hance Logo" className="logo-img" />
          <span className="logo-text">Work Hance</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
          <Link to="/about-us" className={isActive("/about-us") ? "active" : ""}>About</Link>
          <Link to="/services" className={isActive("/services") ? "active" : ""}>Services</Link>
          <Link to="/careers" className={isActive("/careers") ? "active" : ""}>Careers</Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
        </div>

        <button
          className="nav-btn"
          onClick={() => navigate("/services")}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;