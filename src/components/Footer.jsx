import { useNavigate, useLocation } from "react-router-dom";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import logo from "../assets/workhance_logo.png";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (serviceId) => {
    navigate("/", {
      state: {
        scrollToServices: true,
        openService: serviceId,
      },
    });
  };

  // NEW: handle same-page scroll
  const handleQuickLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate(path);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-col">
          <div className="footer-brand">
            <img src={logo} alt="Work Hance Logo" className="footer-logo" />
            <h3>Work Hance</h3>
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
          <p onClick={() => handleQuickLinkClick("/")}>Home</p>
          <p onClick={() => handleQuickLinkClick("/about")}>About Us</p>
          <p onClick={() => handleQuickLinkClick("/services")}>Services</p>
          <p onClick={() => handleQuickLinkClick("/career")}>Career</p>
          <p onClick={() => handleQuickLinkClick("/contact")}>Contact</p>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <p onClick={() => handleServiceClick("it")}>IT Services</p>
          <p onClick={() => handleServiceClick("rpo")}>Staffing & RPO</p>
          <p onClick={() => handleServiceClick("marketing")}>
            Digital Marketing
          </p>
          <p onClick={() => handleServiceClick("finance")}>
            Finance & Accounting
          </p>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Info</h4>

          <p>
            <a href="tel:+13322871906" className="footer-contact-link">
              +1 332 287 1906
            </a>
          </p>

          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@workhance.in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              info@workhance.in
            </a>
          </p>

          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@workhance.in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              careers@workhance.in
            </a>
          </p>

          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=575+5th+Avenue,+New+York,+New+York+10017"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              575 5th Avenue, New York, New York 10017
            </a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Work Hance. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;