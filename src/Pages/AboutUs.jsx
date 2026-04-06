import React from "react";
import Banner from "../Components/Banner";
import { Users, Target, Zap, TrendingUp, Award } from "lucide-react";
import Leaders from "../Components/Leaders";

function AboutUs() {
  const sections = [
    {
      title: "Our Story",
      content: "Founded in 2025, Work Hance emerged from a vision to revolutionize recruitment process outsourcing. We recognized that finding the right talent requires more than just matching skills—it requires understanding culture, aspirations, and potential. Today, we serve over 200+ clients across 15 countries, having successfully placed more than 10,000 professionals in roles that drive business growth.",
      icon: <Award className="w-8 h-8 text-sky-500" />,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80", // Team working
    },
    {
      title: "What We Are",
      content: "Work Hance LLP is a forward-thinking partnership firm committed to delivering high-quality professional services with a focus on innovation, reliability, and client success. We combine strategic insight with operational excellence to help businesses and individuals thrive in a competitive landscape.",
      icon: <Users className="w-8 h-8 text-sky-500" />,
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80", // Modern office
    },
    {
      title: "What We Do",
      content: "We specialize in delivering tailored solutions across domains such as business advisory, operational support, strategic planning, and professional consulting. We work closely with clients to understand their goals and implement practical strategies that drive growth and efficiency.",
      icon: <Target className="w-8 h-8 text-sky-500" />,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80", // Strategy/Data
    },
    {
      title: "How We Work",
      content: "Our processes are grounded in careful analysis, open communication, and measurable outcomes. We begin by understanding client goals, conducting in-depth assessments, and implementing customized strategies with an emphasis on quality and accountability.",
      icon: <Zap className="w-8 h-8 text-sky-500" />,
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80", // Collaboration
    },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      <Banner type={"about us"} />

      {/* Main Content Sections */}
      <div className="py-20 flex flex-col gap-24 md:gap-32">
        {sections.map((item, index) => (
          <div 
            key={index} 
            className={`w-[90%] max-w-6xl mx-auto flex  ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
          >
            {/* Text Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-50 mb-2">
                {item.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                {item.title}
              </h2>
              <div className="w-16 h-1 bg-sky-500 rounded-full" />
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light">
                {item.content}
              </p>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2 relative group">
              {/* Decorative Background Square */}
              <div className={`absolute -inset-4 bg-sky-50 rounded-3xl -z-10 transition-transform group-hover:scale-105 duration-500`} />
              
              <div className="aspect-square w-full max-w-[450px] mx-auto overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Leaders></Leaders>

      {/* Simple Stats Bar for "Our Story" numbers */}
      <div className="bg-sky-600 py-16 mb-20">
        <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-white">
          <div>
            <p className="text-4xl font-bold mb-2">200+</p>
            <p className="text-sky-100 uppercase tracking-widest text-sm">Global Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">15+</p>
            <p className="text-sky-100 uppercase tracking-widest text-sm">Countries Served</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">10k+</p>
            <p className="text-sky-100 uppercase tracking-widest text-sm">Placed Professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;