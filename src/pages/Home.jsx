import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ServicesOverview from "../components/ServicesOverview";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.jpg";
import GlobalReach from "../components/GlobalReach";

function Home() {
  const images = [hero1, hero2];
  const navigate = useNavigate();
  const location = useLocation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // ✅ UPDATED INSIGHTS STATE
  const [currentInsightIndex, setCurrentInsightIndex] = useState(1);
  const [isInsightTransitioning, setIsInsightTransitioning] = useState(true);

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

  // ✅ NEW LOOPED INSIGHTS
  const loopedInsights = [
    insights[insights.length - 1],
    ...insights,
    insights[0],
  ];

  // ---------------- HERO ----------------
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // ---------------- SCROLL ----------------
  useEffect(() => {
    if (location.state?.scrollToInsights) {
      document.getElementById("industry-insights")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollToServices) {
      document.getElementById("core-services")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // ---------------- TESTIMONIALS ----------------
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => prev + 1);
      setIsTransitioning(true);
    }, 8000);

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
      const id = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(id);
    }
  }, [isTransitioning]);

  // ---------------- INSIGHTS ARROWS ----------------
  const handleNextInsight = () => {
    if (!isInsightTransitioning) return;
    setCurrentInsightIndex((prev) => prev + 1);
  };

  const handlePrevInsight = () => {
    if (!isInsightTransitioning) return;
    setCurrentInsightIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentInsightIndex === loopedInsights.length - 1) {
      const timeout = setTimeout(() => {
        setIsInsightTransitioning(false);
        setCurrentInsightIndex(1);
      }, 600);
      return () => clearTimeout(timeout);
    }

    if (currentInsightIndex === 0) {
      const timeout = setTimeout(() => {
        setIsInsightTransitioning(false);
        setCurrentInsightIndex(insights.length);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentInsightIndex, loopedInsights.length, insights.length]);

  useEffect(() => {
    if (!isInsightTransitioning) {
      const id = setTimeout(() => setIsInsightTransitioning(true), 50);
      return () => clearTimeout(id);
    }
  }, [isInsightTransitioning]);

  // ---------------- HELPER ----------------
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
      {/* HERO */}
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

        <div className="hero-content">
          <div className="hero-overlay"></div>
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
                document.getElementById("core-services")?.scrollIntoView({ behavior: "smooth" })
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
      </section>

      <div className="container">
        <GlobalReach />

        <div id="core-services">
          <ServicesOverview initialOpenService={location.state?.openService} />
        </div>

        {/* INSIGHTS */}
        <section className="insights-section" id="industry-insights">
          <div className="section-heading no-line">
            <h2>Industry Insights</h2>
            <p>
              We do not just provide services — we understand the market, trends, and business needs behind them.
            </p>
          </div>

          <div className="insight-slider-wrapper-single">
            <button className="insight-arrow-single" onClick={handlePrevInsight}>
              &#10094;
            </button>

            <div className="insight-slider-single">
              <div
                className="insight-slider-track-single"
                style={{
                  transform: `translateX(-${currentInsightIndex * 100}%)`,
                  transition: isInsightTransitioning ? "transform 0.6s ease-in-out" : "none",
                }}
              >
                {loopedInsights.map((insight, index) => (
                  <div className="insight-slide-single" key={`${insight.id}-${index}`}>
                    <div className="insight-card">
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
                  </div>
                ))}
              </div>
            </div>

            <button className="insight-arrow-single" onClick={handleNextInsight}>
              &#10095;
            </button>
          </div>
        </section>

        {/* TESTIMONIALS */}
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
                    <p>{renderHighlightedText(testimonial.text, testimonial.highlight)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${
                    currentTestimonial % testimonials.length === index ? "active-dot" : ""
                  }`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentTestimonial(index);
                  }}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="home-cta">
          <h2>Let's Talk</h2>
          <p>Connect with us to discuss the right support for your business.</p>
          <div className="cta-buttons">
            <button className="primary-btn" onClick={() => navigate("/contact")}>
              Get in Touch
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;