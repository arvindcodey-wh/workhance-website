import Banner from "../components/Banner";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { faqData } from "../data/faqData";

function Services() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeService, setActiveService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (location.state?.openService) {
      const matchedService = servicesData.find(
        (service) => service.id === location.state.openService
      );

      if (matchedService) {
        setActiveService(matchedService);
      }
    }
  }, [location.state]);

  return (
    <div className="services-container">
      <Banner type="services" />

      <div className="container">
        {servicesData.map((service, index) => {
          const Icon = service.icon;

          return (
            <section className="services-page-card" key={index}>
              <div className="service-card-layout">

              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-content">
              <h2 className="service-heading">
                <Icon className="service-heading-icon" />
                {service.title}
              </h2>

              <p className="service-card-intro">{service.intro}</p>

              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <button
                className="secondary-btn"
                onClick={() => setActiveService(service)}
                style={{ marginTop: "16px" }}
              >
                View Details
              </button>
              </div>
              </div>
            </section>
          );
        })}

        {activeService && (
          <div className="modal-overlay">
            <div className="modal-content large">
              <button
                className="modal-close"
                onClick={() => setActiveService(null)}
              >
                ✕
              </button>

              {(() => {
                const PopupIcon = activeService.icon;
                return (
                  <h2 className="service-popup-heading">
                    <PopupIcon className="service-popup-icon" />
                    {activeService.title}
                  </h2>
                );
              })()}

              <div className="service-detail-section">
                <h3>Overview</h3>
                <p className="modal-description">{activeService.overview}</p>
              </div>

              <div className="service-detail-section">
                <h3>Sub-Services</h3>
                <div className="service-box-grid">
                  {activeService.subServices.map((item, i) => (
                    <div className="service-box" key={i}>
                      {item}
                    </div>
                  ))}
                </div>
                <p className="modal-description">
                  {activeService.subServicesNote}
                </p>
              </div>

              <div className="service-detail-section">
                <h3>What's Included</h3>
                <div className="service-box-grid">
                  {activeService.included.map((item, i) => (
                    <div className="service-box" key={i}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="service-detail-section">
                <h3>How We Deliver</h3>
                <div className="service-process">
                  {activeService.delivery.map((step, i) => (
                    <div className="process-card" key={i}>
                      <span>{i + 1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="service-detail-section">
                <h3>Business Value</h3>
                <ul className="service-value-list">
                  {activeService.value.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="service-detail-section why-section">
                <h3>Why It Matters</h3>
                <p className="modal-description">{activeService.whyItMatters}</p>
              </div>

              <div className="service-detail-section">
                <h3>Service Impact</h3>
                <div className="service-stats">
                  {activeService.stats.map((stat, i) => (
                    <div className="stat-card" key={i}>
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-cta">
                <button
                  className="primary-btn"
                  onClick={() =>
                    navigate("/contact", {
                      state: {
                        service: activeService.title,
                      },
                    })
                  }
                >
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        )}

        <section className="services-faq">
          <div className="section-heading">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div
                className={`faq-item ${openFaq === index ? "active" : ""}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`faq-answer-wrapper ${
                    openFaq === index ? "open" : ""
                  }`}
                >
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

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