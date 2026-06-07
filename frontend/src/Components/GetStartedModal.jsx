import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaUsers,
  FaMoneyCheckDollar,
  FaChartLine,
} from "react-icons/fa6";

function GetStartedModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const services = [
    {
      title: "IT Services",
      description: "Modern IT solutions to support business growth.",
      icon: <FaLaptopCode />,
      key: "it",
    },
    {
      title: "RPO & Staffing",
      description: "Recruitment and staffing support for growing teams.",
      icon: <FaUsers />,
      key: "rpo",
    },
    {
      title: "Finance & Accounting",
      description: "Reliable finance and accounting support services.",
      icon: <FaMoneyCheckDollar />,
      key: "finance",
    },
    {
      title: "Digital Marketing",
      description: "Solutions to improve online visibility and engagement.",
      icon: <FaChartLine />,
      key: "marketing",
    },
  ];

  const handleExploreServices = () => {
    onClose();
    navigate("/services");
  };

  const handleOpenSpecificService = (serviceKey) => {
    onClose();
    navigate("/services", {
      state: { openService: serviceKey, scrollToServices: true },
    });
  };

  return (
    <div className="get-started-modal-overlay" onClick={onClose}>
      <div
        className="get-started-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="get-started-close" onClick={onClose}>
          ✕
        </button>

        <h2>How can we support your business?</h2>
        <p className="get-started-subtitle">
          Explore our core service areas and choose the one most relevant to your needs.
        </p>

        <div className="get-started-services-list">
          {services.map((service, index) => (
            <div className="get-started-service-item" key={index}
            onClick={() =>
              handleOpenSpecificService(service.key)}
            >
              <div className="get-started-service-content">
                <div className="get-started-service-title">
                  <span className="get-started-service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </div>

            </div>
          ))}
        </div>

        <div className="get-started-actions">
          <button className="secondary-btn" onClick={() => {
            onClose();
            navigate("/contact");
        }}
        >
            Contact Us
          </button>
          <button className="primary-btn" onClick={handleExploreServices}>
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStartedModal;