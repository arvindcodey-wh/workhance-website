import { NavLink } from "react-router-dom";
import logo from "../assets/workhance_logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">

        {/* Logo + Name */}
        <div className="logo-section">
          <img src={logo} alt="Work Hance Logo" className="logo-img" />
          <h2>Work Hance LLP</h2>
        </div>

        {/* Links */}
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;