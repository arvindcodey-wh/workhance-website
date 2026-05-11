import { useNavigate } from "react-router-dom";

import itImg from "../assets/service-it.jpg";
import staffImg from "../assets/service-staffing.png";
import financeImg from "../assets/service-finance.jpg";
import marketImg from "../assets/service-marketing.jpg";

import {
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaMoneyCheckDollar,
} from "react-icons/fa6";

function ServicesOverview() {
  const navigate = useNavigate();

  const services = [
    {
      key: "it",
      image: itImg,
      icon: <FaLaptopCode className="service-title-icon" />,
      title: "IT Services",
      intro: "Our IT services help businesses strengthen digital operations through reliable technology support, smarter systems, and scalable development solutions.",
      focus: "What we help with",
      points: [
        "Improving digital efficiency",
        "Strengthening business systems",
        "Supporting long-term scalability",
      ],
    },
    {
      key: "rpo",
      image: staffImg,
      icon: <FaUsers className="service-title-icon" />,
      title: "RPO & Staffing Services",
      intro: "We support organizations in finding the right talent through structured recruitment solutions and efficient hiring support tailored to business needs.",
      focus: "What we help with",
      points: [
        "Building stronger talent pipelines",
        "Streamlining hiring processes",
        "Supporting workforce growth",
      ],
    },
    {
      key: "finance",
      image: financeImg,
      icon: <FaMoneyCheckDollar className="service-title-icon" />,
      title: "Finance & Accounting Services",
      intro: "Our finance and accounting support helps businesses manage financial processes with greater accuracy, consistency, and efficiency.",
      focus: "What we help with",
      points: [
        "Improving financial accuracy",
        "Supporting organized operations",
        "Maintaining reliable processes",
      ],
    },
    {
      key: "marketing",
      image: marketImg,
      icon: <FaChartLine className="service-title-icon" />,
      title: "Digital Marketing Services",
      intro:
        "We help brands strengthen their online visibility and reach the right audience through result-oriented digital marketing support.",
      focus: "What we help with",
      points: [
        "Improving online presence",
        "Reaching the right audience",
        "Generating quality growth opportunities",
      ],
    },
  ];

  const handleViewFullDetails = (serviceKey) => {
    navigate("/services", {
      state: {
        openService: serviceKey,
      },
    });
  };

  return (
  <section className="services-overview" id="core-services">
    
    <div className="services-header">
      <h2 className="services-heading">Our Core Services</h2>
    </div>

    <div className="services-section">

      <div className="services-cards">

        {services.map((service) => (

          <div
            key={service.key}
            className="service-card services-overview-card"
          >

            <div className="image-wrapper">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-card-content">

              <h3 className="service-title">
                {service.icon}
                {service.title}
              </h3>

              <p>{service.intro}</p>

              <div className="service-focus-block">

                <h4 className="service-focus-title">
                  {service.focus}
                </h4>

                <ul className="service-focus-points">
                  {service.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

              </div>

              <button
                className="card-detail-btn"
                onClick={() => handleViewFullDetails(service.key)}
              >
                View Full Details
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  </section>
);
}

export default ServicesOverview;