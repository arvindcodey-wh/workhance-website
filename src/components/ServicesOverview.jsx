import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import itImg from "../assets/service-it.jpg";
import staffImg from "../assets/service-staffing.jpg";
import financeImg from "../assets/service-finance.jpg";
import marketImg from "../assets/service-marketing.jpg";

import {
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaMoneyCheckDollar,
} from "react-icons/fa6";

function ServicesOverview({ initialOpenService }) {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const services = {
    it: {
      key: "it",
      icon: <FaLaptopCode />,
      title: "IT Services",
      description:
        "Our IT services help businesses strengthen digital operations through reliable technology support, smarter systems, and scalable development solutions.",
      focus: "What we help with",
      points: [
        "Improving digital efficiency",
        "Strengthening business systems",
        "Supporting long-term scalability",
      ],
      highlights: [
        "Business-focused technology support",
        "Scalable digital development",
        "Reliable execution and improvement",
      ],
    },

    rpo: {
      key: "rpo",
      icon: <FaUsers />,
      title: "RPO & Staffing",
      description:
        "We support organizations in finding the right talent through structured recruitment solutions and efficient hiring support tailored to business needs.",
      focus: "What we help with",
      points: [
        "Building stronger talent pipelines",
        "Streamlining hiring processes",
        "Supporting workforce growth",
      ],
      highlights: [
        "Structured hiring support",
        "Better candidate alignment",
        "Faster recruitment coordination",
      ],
    },

    finance: {
      key: "finance",
      icon: <FaMoneyCheckDollar />,
      title: "US Finance & Accounting",
      description:
        "Our finance and accounting support helps businesses manage financial processes with greater accuracy, consistency, and efficiency.",
      focus: "What we help with",
      points: [
        "Improving financial accuracy",
        "Supporting organized operations",
        "Maintaining reliable processes",
      ],
      highlights: [
        "Consistent finance process support",
        "Improved operational clarity",
        "Reliable reporting assistance",
      ],
    },

    marketing: {
      key: "marketing",
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description:
        "We help brands strengthen their online visibility and reach the right audience through result-oriented digital marketing support.",
      focus: "What we help with",
      points: [
        "Improving online presence",
        "Reaching the right audience",
        "Generating quality growth opportunities",
      ],
      highlights: [
        "Better online visibility",
        "Audience-focused promotion",
        "Growth-driven campaign support",
      ],
    },
  };

  useEffect(() => {
    if (initialOpenService && services[initialOpenService]) {
      setSelectedService(services[initialOpenService]);
    }
  }, [initialOpenService]);

  const openFullDetails = () => {
    if (!selectedService) return;

    navigate("/services", {
      state: {
        openService: selectedService.key,
      },
    });
  };

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="services-overview" id="core-services">
        <div className="services-header">
          <h2 className="services-heading">Our Core Services</h2>
        </div>

        <div className="services-cards">

          {/* IT */}
          <div className="service-card services-overview-card">
            <div className="image-wrapper">
              <img src={itImg} alt="IT Services" />
              <div className="card-tag">IT</div>
            </div>

            <h3 className="service-title">
              <FaLaptopCode className="service-title-icon" />
              IT Services
            </h3>

            <p>Modern IT solutions to support business growth.</p>

            <span
              className="card-link"
              onClick={() => setSelectedService(services.it)}
            >
              Learn More
            </span>
          </div>

          {/* RPO */}
          <div className="service-card services-overview-card">
            <div className="image-wrapper">
              <img src={staffImg} alt="Staffing" />
              <div className="card-tag">Staffing</div>
            </div>

            <h3 className="service-title">
              <FaUsers className="service-title-icon" />
              RPO & Staffing Services
            </h3>

            <p>Recruitment and staffing support for growing teams.</p>

            <span
              className="card-link"
              onClick={() => setSelectedService(services.rpo)}
            >
              Learn More
            </span>
          </div>

          {/* FINANCE */}
          <div className="service-card services-overview-card">
            <div className="image-wrapper">
              <img src={financeImg} alt="Finance" />
              <div className="card-tag">Finance</div>
            </div>

            <h3 className="service-title">
              <FaMoneyCheckDollar className="service-title-icon" />
              Finance & Accounting Services
            </h3>

            <p>Reliable finance and accounting support services.</p>

            <span
              className="card-link"
              onClick={() => setSelectedService(services.finance)}
            >
              Learn More
            </span>
          </div>

          {/* MARKETING */}
          <div className="service-card services-overview-card">
            <div className="image-wrapper">
              <img src={marketImg} alt="Marketing" />
              <div className="card-tag">Marketing</div>
            </div>

            <h3 className="service-title">
              <FaChartLine className="service-title-icon" />
              Digital Marketing Services
            </h3>

            <p>
              Digital marketing solutions to improve online visibility and
              engagement.
            </p>

            <span
              className="card-link"
              onClick={() => setSelectedService(services.marketing)}
            >
              Learn More
            </span>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {selectedService && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>

            <div className="modal-icon">{selectedService.icon}</div>

            <h2>{selectedService.title}</h2>

            <p className="modal-description">
              {selectedService.description}
            </p>

            <h4 className="modal-subtitle">{selectedService.focus}</h4>

            <ul className="modal-points">
              {selectedService.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <h4 className="modal-subtitle">Key Highlights</h4>

            <ul className="modal-points">
              {selectedService.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="learn-more-btn-wrapper">
              <button className="primary-btn" onClick={openFullDetails}>
                View Full Details
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default ServicesOverview;