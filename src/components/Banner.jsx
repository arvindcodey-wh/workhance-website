import React, { useState, useEffect } from "react";

function Banner({ type }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const config =
    type === "services"
      ? {
          subtitle: "Welcome to Work Hance",
          title: "Our Services",
          description:
            "From Strategy to Execution, we help businesses grow smarter." 
        }
      : {
          subtitle: "Welcome to Work Hance",
          title: "Grow With Us",
          description:
            "Join our team of passionate professionals shaping the future and building meaningful impact.",
        };

  return (
    <section className="custom-banner">
      {images.map((img, index) => (
        <div
          key={index}
          className={`custom-banner-slide ${
            index === currentImageIndex ? "active" : ""
          }`}
        >
          <img src={img} alt={`Banner Slide ${index + 1}`} />
          <div className="custom-banner-overlay-one"></div>
          <div className="custom-banner-overlay-two"></div>
        </div>
      ))}

      <div className="custom-banner-content">
        <p className="custom-banner-subtitle">{config.subtitle}</p>
        <h1>{config.title}</h1>
        <div className="custom-banner-line"></div>
        <p className="custom-banner-description">{config.description}</p>
      </div>
    </section>
  );
}

export default Banner;