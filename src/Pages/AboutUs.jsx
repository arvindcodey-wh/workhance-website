import React from "react";
import Banner from "../Components/Banner";
import { Users, Target, Zap, TrendingUp, Award, ShieldCheck,BarChart } from "lucide-react";
import Leaders from "../Components/Leaders";
import AboutUsDetail from "../Components/AboutUsDetail";

function AboutUs() {
  const sections = [
    {
      id: 1,
      title: "Our Story",
      tagline: "Bridging Ambition and Opportunity",
      content: "Incorporated in August 2025, Work Hance LLP was established with a mission to redefine professional service standards in India. From our headquarters in Jabalpur, we began as a vision to simplify complex business processes, growing rapidly into a trusted partner for firms seeking operational excellence and strategic growth.",
      icon: <Award className="w-8 h-8 text-sky-500" />,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "What We Are",
      tagline: "Innovation Meets Integrity",
      content: "Work Hance LLP is a forward-thinking Limited Liability Partnership specializing in diversified business solutions. We operate at the intersection of innovation and reliability, providing a stable foundation for startups and established enterprises to navigate the competitive Indian market.",
      icon: <Users className="w-8 h-8 text-sky-500" />,
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "What We Do",
      tagline: "Comprehensive Service Excellence",
      content: "We provide end-to-back professional services, ranging from strategic business advisory to operational support. Our core focus is on delivering practical, data-driven solutions that help our clients optimize their workflows and scale their impact effectively.",
      icon: <Target className="w-8 h-8 text-sky-500" />,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Our Values",
      tagline: "The Core of Our Operations",
      content: "Transparency, accountability, and client-centricity are the pillars of Work Hance LLP. We believe in building long-term relationships through ethical practices and a relentless commitment to quality in every project we undertake.",
      icon: <ShieldCheck className="w-8 h-8 text-sky-500" />,
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "How We Work",
      tagline: "A Systematic Approach to Success",
      content: "Our methodology is rooted in deep analysis and open communication. We move through four distinct phases: comprehensive assessment, customized strategy design, meticulous implementation, and continuous performance monitoring.",
      icon: <Zap className="w-8 h-8 text-sky-500" />,
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      title: "Why Choose Us",
      tagline: "The Work Hance Advantage",
      content: "By choosing Work Hance LLP, you gain a partner that understands the nuances of modern business. We offer the agility of a startup with the professional rigor of a seasoned consultancy, ensuring that your goals are met with precision.",
      icon: <BarChart className="w-8 h-8 text-sky-500" />,
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Banner type={"about us"} />

      {/* Main Content Sections */}
      <div className="py-20 flex flex-col gap-24 md:gap-32">
        {
      
        sections.map((item, index) => (
         <AboutUsDetail index={index} item={sections[index]}></AboutUsDetail>
        ))
        
        }
      </div>
      <Leaders></Leaders>

      {/* Simple Stats Bar for "Our Story" numbers */}
      <div className="bg-sky-600 py-16 ">
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