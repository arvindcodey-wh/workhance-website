import React from 'react'
import { X } from "lucide-react";

function ServiceModal({ activeService, setActiveService }) {

  if (!activeService) {
    return null
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content large relative">

        {/* Cross Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
          onClick={() => setActiveService(null)}
        >
          <X size={24} />
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
          <p className="modal-description">
            {activeService.overview}
          </p>
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

          <p className="modal-description">
            {activeService.whyItMatters}
          </p>
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

          <button
            className="secondary-btn-outline"
            onClick={() => setActiveService(null)}
          >
            Close
          </button>

        </div>
      </div>
    </div>
  )
}

export default ServiceModal