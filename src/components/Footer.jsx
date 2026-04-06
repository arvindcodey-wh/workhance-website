import { useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/workhance_logo.png";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-col">
          <div className="footer-brand">
            <img src={logo} alt="Work Hance Logo" className="footer-logo" />
            <h3>Work Hance LLP</h3>
          </div>

          <p className="footer-description">
            Delivering reliable business solutions across technology, talent,
            and finance to help organizations grow with confidence.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/workhance/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/workhance.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/about")}>About Us</p>
          <p onClick={() => navigate("/services")}>Services</p>
          <p onClick={() => navigate("/career")}>Career</p>
          <p onClick={() => navigate("/contact")}>Contact</p>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <p>IT Services</p>
          <p>Staffing & RPO</p>
          <p>Digital Marketing</p>
          <p>Finance & Accounting</p>
        </div>

       {/* Contact */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>📞 +1 332 287 1906</p>
          <p>📧 info@workhance.in</p>
          <p>📧 careers@workhance.in</p>
          <p>📍 575 5th Avenue, New York, New York 10017</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Work Hance LLP. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;