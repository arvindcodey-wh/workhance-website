import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ServicesOverview from "../components/ServicesOverview";
import GlobalClients from "../components/GlobalClients";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.jpg";

function Home() {

  const images = [hero1, hero2];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 4 sec
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Work Hance has been instrumental in helping us scale our operations. Their team understands our requirements deeply and delivers high-quality solutions consistently. Highly recommended!",
      highlight: "high-quality solutions",
    },
    {
      text: "We partnered with Work Hance for staffing and were impressed by the quality of talent they provided. The entire process was smooth, fast, and professional.",
      highlight: "smooth, fast, and professional",
    },
    {
      text: "The IT solutions provided were well-planned and aligned with our business needs. The team ensured smooth implementation and reliable performance throughout.",
      highlight: "smooth implementation and reliable performance",
    },
    {
      text: "Work Hance helped us streamline our financial processes with accuracy and efficiency. Their support team is reliable and always responsive.",
      highlight: "accuracy and efficiency",
    },
    {
      text: "Their digital marketing approach was practical and well-structured. We saw steady improvement in engagement and overall online presence within a short time.",
      highlight: "steady improvement in engagement",
    },
  ];

  useEffect(() => {
    if (location.state?.scrollToServices) {
      const section = document.getElementById("core-services");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderHighlightedText = (text, highlight) => {
    const parts = text.split(highlight);

    return (
      <>
        {parts[0]}
        <span>{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        
        <div className="hero-slider">
          {images.map((img, index) => (
            <img
            key={index}
            src={img}
            className={`hero-slide ${
              index === currentIndex ? "active" : ""
            }`}
            alt="hero"
            />
            ))}
            </div>

        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Smart Solutions for Growing Businesses</h1>

            <p>
              Work Hance delivers reliable support across technology,
              talent, finance, and marketing—helping businesses operate
              smarter,scale faster, and grow with confidence.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => navigate("/services")}
              >
                Explore Services
              </button>
            </div>
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

          <div className="testimonial-slider">

            <div className="testimonial-card testimonial-slider-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>

              <p>
                {renderHighlightedText(
                  testimonials[currentTestimonial].text,
                  testimonials[currentTestimonial].highlight
                )}
              </p>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${
                    currentTestimonial === index ? "active-dot" : ""
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="home-cta">
          <h2>Let’s Talk</h2>

          <p>
            Connect with us to discuss the right support for your business.
          </p>

          <div className="cta-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;