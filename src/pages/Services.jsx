import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaUsers,
  FaMoneyCheckDollar,
  FaChartLine,
} from "react-icons/fa6";

function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <div className="container">
        <h1>Our Services</h1>

        {/* IT Services */}
        <section className="services-page-card">
          <h2 className="service-heading">
            <FaLaptopCode className="service-heading-icon" />
            IT Services
          </h2>
          <ul>
            <li>Custom Web Development</li>
            <li>Software Development</li>
            <li>Cloud Solutions & Deployment</li>
            <li>UI/UX Design</li>
            <li>Website Maintenance & Optimization</li>
          </ul>
        </section>

        {/* Staffing & RPO */}
        <section className="services-page-card">
          <h2 className="service-heading">
            <FaUsers className="service-heading-icon" />
            Staffing & RPO Services
          </h2>
          <ul>
            <li>End-to-End Recruitment Process Outsourcing (RPO)</li>
            <li>IT Staffing</li>
            <li>Healthcare Staffing</li>
            <li>Finance & Accounting Staffing</li>
            <li>Talent Sourcing & Screening</li>
            <li>Resume Formatting & VMS Support</li>
          </ul>
        </section>

        {/* Finance */}
        <section className="services-page-card">
          <h2 className="service-heading">
            <FaMoneyCheckDollar className="service-heading-icon" />
            Finance & Accounting Services
          </h2>
          <ul>
            <li>Bookkeeping & Financial Reporting</li>
            <li>Accounts Payable & Receivable</li>
            <li>Payroll Management</li>
            <li>Tax & Compliance Support</li>
            <li>Financial Analysis</li>
          </ul>
        </section>

        {/* Digital Marketing */}
        <section className="services-page-card">
          <h2 className="service-heading">
            <FaChartLine className="service-heading-icon" />
            Digital Marketing Services
          </h2>
          <ul>
            <li>Search Engine Optimization (SEO)</li>
            <li>Search Engine Marketing (SEM)</li>
            <li>Social Media Marketing</li>
            <li>Paid Advertising (Google Ads, Meta Ads, etc.)</li>
            <li>Content Marketing</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="services-cta">
          <h2>Need support in any of these areas?</h2>
          <p>Connect with us to find the right solution for your business.</p>
          <button
            className="primary-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
}

export default Services;