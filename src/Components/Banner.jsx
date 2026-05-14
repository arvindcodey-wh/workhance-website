import React, { useState, useEffect } from "react";
import { Sparkles, Rocket, Globe } from "lucide-react";

function Banner({ type }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  // 1. Updated Configuration Logic
  const getConfig = () => {
    switch (type) {
      case "about us":
        return {
          label: "About Us",
          title: "Our Path, Your Prosperity",
          description: "Driving innovation and delivering excellence in every project. We create solutions that empower businesses to thrive.",
          icon: <Sparkles className="w-10 h-10 text-white mb-6" />,
        };
      case "services":
        return {
          label: "Our Services",
          title: "Solutions Built for Success",
          description: "Comprehensive digital strategies and technical expertise tailored to your business goals. Explore how we can transform your vision.",
          icon: <Globe className="w-10 h-10 text-white mb-6" />,
        };
      default: // Careers / Home
        return {
          label: "Careers",
          title: "Grow With Us",
          description: "Join our team of passionate professionals shaping the future. Grow, innovate, and make an impact with Work Hance.",
          icon: <Rocket className="w-10 h-10 text-white mb-6" />,
        };
    }
  };

  const config = getConfig();

  return (
    <div className="w-full h-[450px] md:h-[550px] relative overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            className="w-full h-full object-cover scale-105"
            src={img}
            alt={`Banner Slide ${index}`}
          />
          <div className="absolute inset-0 bg-sky-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-900/40 to-sky-900/80" />
        </div>
      ))}

      {/* Content Section */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <div className="flex flex-col items-center animate-fade-in">
          {/* Use config.label for the subtitle */}
          <div className="drop-shadow-lg uppercase tracking-[0.3em] text-sky-300 font-bold text-xs mb-4">
            {config.label}
          </div>

          {config.icon}

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 drop-shadow-2xl">
            {config.title}
          </h1>

          <div className="w-20 h-1.5 bg-sky-400 rounded-full mb-8 shadow-lg shadow-sky-500/50" />

          <p className="text-lg md:text-2xl font-medium text-sky-50 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            {config.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;