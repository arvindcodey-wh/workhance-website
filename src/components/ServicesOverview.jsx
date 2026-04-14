import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaUsers, FaChartLine, FaMoneyCheckDollar } from "react-icons/fa6";

function ServicesOverview({ initialOpenService }) {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const services = {
    it: {
      icon: <FaLaptopCode />,
      title: "IT Services",
      description:
        "Our IT services are designed to help businesses build, improve, and scale their digital operations with reliable technology support and smart solutions.",
      focus: "What we help with",
      points: [
        "Improving digital efficiency",
        "Strengthening business systems",
        "Supporting long-term scalability",
      ],
    },
    rpo: {
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
    },
    finance: {
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
    },
    marketing: {
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
    },
  };

  useEffect(() => {
    if (initialOpenService && services[initialOpenService]) {
      setSelectedService(services[initialOpenService]);
    }
  }, [initialOpenService]);

  return (
    <section className="services-overview" id="core-services">
      <h2>Our Core Services</h2>

      <div className="services-cards">
        <div className="service-card">
          <div className="service-icon">
            <FaLaptopCode />
          </div>
          <h3>IT Services</h3>
          <p>Modern IT solutions to support business growth.</p>
          <span
            className="card-link"
            onClick={() => setSelectedService(services.it)}
          >
            Learn More
          </span>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaUsers />
          </div>
          <h3>RPO & Staffing</h3>
          <p>Recruitment and staffing support for growing teams.</p>
          <span
            className="card-link"
            onClick={() => setSelectedService(services.rpo)}
          >
            Learn More
          </span>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaMoneyCheckDollar />
          </div>
          <h3>US Finance & Accounting</h3>
          <p>Reliable finance and accounting support services.</p>
          <span
            className="card-link"
            onClick={() => setSelectedService(services.finance)}
          >
            Learn More
          </span>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaChartLine />
          </div>
          <h3>Digital Marketing</h3>
          <p>Digital marketing solutions to improve online visibility and engagement.</p>
          <span
            className="card-link"
            onClick={() => setSelectedService(services.marketing)}
          >
            Learn More
          </span>
        </div>
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
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
            <p className="modal-description">{selectedService.description}</p>

            <h4 className="modal-subtitle">{selectedService.focus}</h4>

            <ul className="modal-points">
              {selectedService.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <button
              className="primary-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesOverview;