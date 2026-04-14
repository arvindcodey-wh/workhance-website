import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ServicesOverview from "../components/ServicesOverview";
import GlobalClients from "../components/GlobalClients";
import heroImg from "../assets/hero.png";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToServices) {
      const section = document.getElementById("core-services");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroImg} alt="Hero banner" className="hero-img" />

        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Empowering Global Businesses</h1>

            <p>
              Work Hance LLP provides IT Services, RPO & Staffing, and US Finance &
              Accounting solutions to clients worldwide.
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("/services")}
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      <div className="container">

        <GlobalClients />

        <ServicesOverview
          initialOpenService={location.state?.openService}
        />

        {/* Testimonials Section */}
<section className="testimonials-section">
  <h2>What Our Clients Say</h2>

  <div className="testimonials-cards">
    <div className="testimonial-card">

      <div className="stars">
    ⭐ ⭐ ⭐ ⭐ ⭐
  </div>
      <p>
        “Work Hance has been instrumental in helping us scale our operations. Their team understands our requirements deeply and delivers <span>high-quality solutions</span> consistently. Highly recommended!”
      </p>
    </div>

    <div className="testimonial-card">
      
      <div className="stars">
    ⭐ ⭐ ⭐ ⭐ ⭐
  </div>
      <p>
        “We partnered with Work Hance for staffing and were impressed by the quality of talent they provided. The entire process was <span>smooth, fast, and professional</span>.”
      </p>
    </div>

    <div className="testimonial-card">
      
      <div className="stars">
    ⭐ ⭐ ⭐ ⭐ ⭐
  </div>
      <p>
        “The IT solutions provided were well-planned and aligned with our business needs. The team ensured <span>smooth implementation and reliable performance</span> throughout.”
      </p>
    </div>

    <div className="testimonial-card">
      
      <div className="stars">
    ⭐ ⭐ ⭐ ⭐ ⭐
  </div>
      <p>
        “Work Hance helped us streamline our financial processes with <span>accuracy and efficiency</span>. Their support team is reliable and always responsive.”
      </p>
    </div>

    <div className="testimonial-card
    testimonial-card-center">
      
      <div className="stars">
    ⭐ ⭐ ⭐ ⭐ ⭐
  </div>
      <p>
        “Their digital marketing approach was practical and well-structured. We saw <span>steady improvement in engagement</span> and overall online presence within a short time.”
      </p>
    </div>
  </div>
</section>

        {/* CTA Section */}
        <section className="home-cta">
          <h2>Looking for reliable business support solutions?</h2>

          <p>
            Explore our services and connect with us for the right support.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </button>
        </section>

      </div>
    </div>
  );
}

export default Home;