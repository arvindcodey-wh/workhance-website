import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ServicesOverview from "../components/ServicesOverview";
import GlobalClients from "../components/GlobalClients";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.jpg";

function Home() {
  const images = [hero1, hero2];
  const navigate = useNavigate();
  const location = useLocation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [currentInsightPage, setCurrentInsightPage] = useState(0);

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

  const insights = [
    {
      id: 1,
      tag: "Hiring Trends",
      title: "Top Hiring Trends in 2026",
      text: "Businesses are prioritizing agility, skill-based hiring, and faster recruitment processes to stay competitive.",
    },
    {
      id: 2,
      tag: "IT Strategy",
      title: "Why IT Solutions Drive Business Growth",
      text: "Modern IT support enables smoother operations, stronger digital presence, and better long-term scalability.",
    },
    {
      id: 3,
      tag: "Staffing",
      title: "The Future of RPO & Staffing",
      text: "Recruitment support is evolving toward smarter sourcing, better candidate quality, and faster turnaround.",
    },
    {
      id: 4,
      tag: "Finance",
      title: "Why Financial Accuracy Matters",
      text: "Strong finance and accounting support helps businesses improve compliance, cash flow visibility, and decision-making.",
    },
    {
      id: 5,
      tag: "Operations",
      title: "Scalable Support for Growing Teams",
      text: "As companies expand, flexible support systems help maintain efficiency without slowing down daily operations.",
    },
    {
      id: 6,
      tag: "Marketing",
      title: "Data-Driven Marketing Creates Impact",
      text: "Businesses are seeing better engagement and stronger reach through focused digital campaigns and measurable strategies.",
    },
  ];

  const loopedTestimonials = [...testimonials, testimonials[0]];
  const insightsPerPage = 3;
  const totalInsightPages = Math.ceil(insights.length / insightsPerPage);

  const visibleInsights = insights.slice(
    currentInsightPage * insightsPerPage,
    currentInsightPage * insightsPerPage + insightsPerPage
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
  if (location.state?.scrollToInsights) {
    const section = document.getElementById("industry-insights");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => prev + 1);
      setIsTransitioning(true);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentTestimonial === testimonials.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentTestimonial(0);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentTestimonial, testimonials.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const id = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);

      return () => clearTimeout(id);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (location.state?.scrollToServices) {
      const section = document.getElementById("core-services");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleNextInsights = () => {
    if (currentInsightPage < totalInsightPages - 1) {
      setCurrentInsightPage((prev) => prev + 1);
    }
  };

  const handlePrevInsights = () => {
    if (currentInsightPage > 0) {
      setCurrentInsightPage((prev) => prev - 1);
    }
  };

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
      {/* Hero Banner Img */}
      <section className="hero-section">
        <div className="hero-slider">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`hero-slide ${index === currentIndex ? "active" : ""}`}
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
              smarter, scale faster, and grow with confidence.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() =>
                  document
                    .getElementById("core-services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Services
              </button>

              <a
                href="workhance-brochure.html"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Global Section */}
        <GlobalClients />

        {/* Services Overview */}
        <div id="core-services">
          <ServicesOverview initialOpenService={location.state?.openService} />
        </div>

        {/* Dashboard Content */}
        <section className="dashboard-section">
          <div className="section-heading">
            <h2>Our Impact in Numbers</h2>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>120+</h3>
              <h4>Clients Served</h4>
              <p>Trusted by businesses across multiple sectors with reliable support.</p>
            </div>

            <div className="dashboard-card">
              <h3>300+</h3>
              <h4>Successful Placements</h4>
              <p>Helping organizations build stronger teams with the right talent.</p>
            </div>

            <div className="dashboard-card">
              <h3>95%</h3>
              <h4>Client Satisfaction</h4>
              <p>Focused on quality delivery, responsiveness, and long-term value.</p>
            </div>

            <div className="dashboard-card">
              <h3>10+</h3>
              <h4>Countries Reached</h4>
              <p>Supporting global clients with scalable and dependable services.</p>
            </div>
          </div>
        </section>

        {/* Insight Outside Content */}
        <section className="insights-section"
        id="industry-insights">
          <div className="section-heading no-line">
            <h2>Industry Insights</h2>
            <p>
              We do not just provide services — we understand the market, trends, and business needs behind them.
            </p>
          </div>

          {/* Insight Details Inside Content */}
          <div className="insights-slider-wrapper">
            <button
              className="insight-arrow left-arrow"
              onClick={handlePrevInsights}
              disabled={currentInsightPage === 0}
              aria-label="Previous insights"
            >
              &#10094;
            </button>

            <div className="insights-grid">
              {visibleInsights.map((insight) => (
                <div className="insight-card" key={insight.id}>
                  <span className="insight-tag">{insight.tag}</span>
                  <h3>{insight.title}</h3>
                  <p>{insight.text}</p>

                  <button
                    className="insight-link-btn"
                    onClick={() => navigate(`/insights/${insight.id}`)}
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>

            <button
              className="insight-arrow right-arrow"
              onClick={handleNextInsights}
              disabled={currentInsightPage === totalInsightPages - 1}
              aria-label="Next insights"
            >
              &#10095;
            </button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <h2>What Our Clients Say</h2>

          <div className="testimonial-slider">
            <div
              className="testimonial-track"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
                transition: isTransitioning ? "transform 1s ease-in-out" : "none",
              }}
            >
              {loopedTestimonials.map((testimonial, index) => (
                <div className="testimonial-slide" key={index}>
                  <div className="testimonial-card testimonial-slider-card">
                    <div className="stars">⭐⭐⭐⭐⭐</div>

                    <p>
                      {renderHighlightedText(
                        testimonial.text,
                        testimonial.highlight
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${
                    currentTestimonial % testimonials.length === index
                      ? "active-dot"
                      : ""
                  }`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentTestimonial(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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