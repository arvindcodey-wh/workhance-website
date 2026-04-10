import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaUsers,
  FaMoneyCheckDollar,
  FaChartLine,
} from "react-icons/fa6";

function Services() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "IT Services",
      icon: FaLaptopCode,
      intro:
        "We provide reliable and scalable IT solutions designed to support business growth and long-term digital performance.",
      points: [
        "Custom-built web and software solutions tailored to business needs",
        "Cloud-based deployment for flexibility and scalability",
        "User-focused design to improve experience and usability",
        "Continuous maintenance and system optimization",
      ],
      overview:
        "Our IT services are designed to build strong digital foundations that enable businesses to operate efficiently, scale confidently, and adapt to evolving technological demands.",
      included: [
        "Custom web and application development aligned with business goals",
        "Cloud infrastructure setup for scalable operations",
        "UI/UX design focused on usability and engagement",
        "Ongoing maintenance and system optimization",
      ],
      delivery: [
        "Understanding business requirements and technical needs",
        "Planning and designing scalable system architecture",
        "Development, testing, and deployment",
        "Continuous monitoring and performance improvement",
      ],
      value: [
        "Improved operational efficiency",
        "Scalable and reliable digital systems",
        "Better user experience and engagement",
        "Long-term technical support and stability",
      ],
      stats: [
        { value: "30%", label: "Faster Delivery" },
        { value: "95%", label: "System Stability" },
        { value: "24/7", label: "Support Ready" },
      ],
    },
    {
      title: "Staffing & RPO Services",
      icon: FaUsers,
      intro:
        "Our staffing solutions help businesses streamline hiring and connect with the right talent efficiently.",
      points: [
        "End-to-end recruitment process management",
        "Talent sourcing, screening, and evaluation",
        "Domain-specific staffing across multiple industries",
        "Resume support and hiring process optimization",
      ],
      overview:
        "We simplify recruitment by providing structured hiring solutions that help businesses identify, evaluate, and onboard the right talent efficiently.",
      included: [
        "Complete recruitment lifecycle management",
        "Candidate sourcing and screening",
        "Industry-specific staffing solutions",
        "Resume enhancement and hiring support",
      ],
      delivery: [
        "Understanding hiring requirements",
        "Sourcing and shortlisting candidates",
        "Coordinating interviews and evaluations",
        "Supporting onboarding and integration",
      ],
      value: [
        "Faster hiring cycles",
        "Better quality candidate selection",
        "Reduced recruitment effort",
        "Scalable hiring processes",
      ],
      stats: [
        { value: "40%", label: "Faster Hiring" },
        { value: "90%", label: "Better Matches" },
        { value: "30%", label: "Cost Saving" },
      ],
    },
    {
      title: "Finance & Accounting Services",
      icon: FaMoneyCheckDollar,
      intro:
        "We support businesses with accurate financial management and structured accounting processes.",
      points: [
        "Financial record management and reporting",
        "Payroll and compliance handling",
        "Accounts payable and receivable support",
        "Data-driven financial insights",
      ],
      overview:
        "Our finance and accounting services ensure accurate financial management while maintaining compliance and supporting informed decision-making.",
      included: [
        "Bookkeeping and financial reporting",
        "Payroll and compliance management",
        "Accounts payable and receivable handling",
        "Financial analysis and insights",
      ],
      delivery: [
        "Assessing financial processes and requirements",
        "Setting up structured workflows",
        "Executing financial operations",
        "Providing reports and performance insights",
      ],
      value: [
        "Improved financial accuracy",
        "Better control over operations",
        "Compliance with regulations",
        "Data-driven decision support",
      ],
      stats: [
        { value: "35%", label: "Efficiency Boost" },
        { value: "98%", label: "Accuracy" },
        { value: "25%", label: "Time Saved" },
      ],
    },
    {
      title: "Digital Marketing Services",
      icon: FaChartLine,
      intro:
        "We help businesses grow their online presence through targeted and performance-driven marketing strategies.",
      points: [
        "SEO and search visibility improvement",
        "Paid campaigns for better reach and conversions",
        "Social media growth and engagement",
        "Strategic content planning and execution",
      ],
      overview:
        "We help businesses strengthen their digital presence through targeted strategies focused on visibility, engagement, and measurable growth.",
      included: [
        "SEO and search engine visibility optimization",
        "Paid advertising campaigns across digital platforms",
        "Social media management and growth",
        "Content strategy and execution",
      ],
      delivery: [
        "Analyzing market and audience behavior",
        "Planning marketing strategies",
        "Executing campaigns across channels",
        "Monitoring and optimizing performance",
      ],
      value: [
        "Increased online visibility",
        "Higher audience engagement",
        "Better lead generation",
        "Improved marketing ROI",
      ],
      stats: [
        { value: "45%", label: "Engagement Growth" },
        { value: "32%", label: "Visibility Boost" },
        { value: "28%", label: "Lead Increase" },
      ],
    },
  ];

  return (
    <div className="services-container">
      <div className="container">
        <h1>Our Services</h1>

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <section className="services-page-card" key={index}>
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
                style={{ marginTop: "18px" }}
              >
                View Details
              </button>
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
                <h3>What’s Included</h3>
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
            </div>
          </div>
        )}

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