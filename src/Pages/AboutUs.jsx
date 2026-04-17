import React from "react";
import Banner from "../Components/Banner";
import {
  Users,
  Target,
  Zap,
  TrendingUp,
  Award,
  ShieldCheck,
  BarChart,
  Monitor,
  BarChart3,
  Rocket,
} from "lucide-react";
import Leaders from "../Components/Leaders";
import AboutUsDetail from "../Components/AboutUsDetail";
import { sections,services } from "../utils/AboutUsData";
function AboutUs() {
  
  return (
    <div className="min-h-screen bg-white">
      <Banner type={"about us"} />

      {/* Main Content Sections */}
      {/* <div className="py-20 flex flex-col gap-24 md:gap-32">
        {
      
        sections.map((item, index) => (
         <AboutUsDetail index={index} item={sections[index]}></AboutUsDetail>
        ))
        
        }
      </div> */}
      <div>
        <section className="max-w-4xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              Work Hance is a fast-growing global business solutions and
              outsourcing company, built with a vision to empower organizations
              through high-quality, reliable, and scalable services.
            </p>
            <p>
              We specialize in Staffing & RPO, IT Services, US Finance &
              Accounting, and Digital Marketing, helping businesses streamline
              operations, reduce costs, and achieve sustainable growth.
            </p>
          </div>
        </section>
        <AboutUsDetail index={0} item={sections[0]}></AboutUsDetail>
        <section className="bg-slate-50/50 py-24 px-6">
          <div className="max-w-7xl mx-auto flex items-center flex-col gap-5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What we do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="group relative bg-white p-10 rounded-2xl border border-slate-200 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-slate-200/50 overflow-hidden"
                >
                  {/* Subtle accent line on top that appears on hover */}

                  {/* Icon Container */}
                  <div className=" text-blue-500 transition-colors duration-300 mb-6">
                    {s.icon}
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold tracking-tight  mb-3 text-blue-500 transition-colors duration-300">
                    {s.title}
                  </h3>

                  <p className="text-slate-500 text-[15px] leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <AboutUsDetail index={1} item={sections[1]}></AboutUsDetail>
        <section className=" py-24 px-6">
          <div className="max-w-7xl mx-auto flex items-center flex-col gap-5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why to choose Work Hance
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                "Experienced Leadership",
                "Multi-domain Expertise",
                "Cost-effective Solutions",
                "Performance Driven",
                "Client Focused",
              ].map((text, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-50 rounded-lg text-center text-sm font-medium text-gray-700 transition-transform hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-700 cursor-default shadow-sm hover:shadow-md"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>
        <AboutUsDetail index={2} item={sections[2]}></AboutUsDetail>
        <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-10 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To establish Work Hance as a globally recognized leader in
              business solutions and outsourcing, delivering innovative and
              high-performance services.
            </p>
          </div>
          <div className="p-10 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses by providing reliable, cost-effective, and
              result-driven solutions across Staffing, Technology, and Finance.
            </p>
          </div>
        </section>
        <AboutUsDetail index={3} item={sections[3]}></AboutUsDetail>
      </div>
      <Leaders></Leaders>

      {/* Simple Stats Bar for "Our Story" numbers */}
      <div className="bg-sky-600 py-16 ">
        <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-white">
          <div>
            <p className="text-4xl font-bold mb-2">200+</p>
            <p className="text-sky-100 uppercase tracking-widest text-sm">
              Global Clients
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">15+</p>
            <p className="text-sky-100 uppercase tracking-widest text-sm">
              Countries Served
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">10k+</p>
            <p className="text-sky-100 uppercase tracking-widest text-sm">
              Placed Professionals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
