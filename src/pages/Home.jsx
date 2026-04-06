import { useNavigate } from "react-router-dom";
import ServicesOverview from "../components/ServicesOverview";
import GlobalClients from "../components/GlobalClients";
import heroImg from "../assets/hero.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="container">
        <section
          className="hero-section"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
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

        <GlobalClients />
        <ServicesOverview />

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
        “Their IT team delivered a scalable and efficient solution that perfectly matched our business needs. Great communication and <span>strong technical expertise</span>.”
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
        “Their digital marketing strategies helped us significantly improve our online presence and generate <span>quality leads</span>. A great partner for growth!”
      </p>
    </div>
  </div>
</section>

        <section className="home-cta">
          <h2>Looking for reliable business support solutions?</h2>
          <p>Explore our services and connect with us for the right support.</p>
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