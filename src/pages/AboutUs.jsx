import React, { act, useState } from "react";
import Banner from "../Components/Banner.jsx";
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {
  Users,
  Target,
  Zap,
  TrendingUp,
  Award,
  ShieldCheck,
  BarChart,
  Eye,
  Globe,
  Lightbulb,
  HeartHandshake,
  ArrowUpRight,
  Monitor,
  BarChart3,
  Rocket,
} from "lucide-react";
import Leaders from "../Components/Leaders";
import AboutUsDetail from "../Components/AboutUsDetail";
import { sections, services, features } from "../utils/AboutUsData";
import VisionMissionCard from "../Components/VisionMissionCard";
import { servicesData } from "../data/servicesData";
import ServiceModal from "../Components/ServiceModal";

function AboutUs() {
  let [activeService,setActiveService]=useState(null)
  const Navigate=useNavigate()
  return (
    <div className="min-h-screen bg-white">
      <Banner type={"about us"} />

      <div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        
        <section className="relative overflow-hidden bg-gray-50 py-24 px-6">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 flex flex-col items-center py-16 px-8 md:px-16 border border-gray-100">
        
        {/* Minimalist Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-4 block">
            Our Identity
          </span>
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Who We Are
          </h2>
          <div className="mt-6 h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Hero Quote */}
        <div className="w-full mb-20">
          <p className="text-3xl md:text-4xl text-gray-800 text-center font-semibold leading-snug max-w-4xl mx-auto">
            "Empowering businesses with <span className="text-blue-600">intelligent solutions</span>, global expertise, and an unwavering commitment to excellence."
          </p>
        </div>

        {/* Content Area with Icons */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 w-full border-t border-gray-100 pt-16">
          
          {/* Left Column */}
          <div className="space-y-10">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <Globe className="w-6 h-6" />
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900 uppercase tracking-wide">Work Hance</strong> is a premier global business solutions provider, built on a foundation of 
                  <span className="font-bold text-blue-600 italic mx-1">trust</span>, 
                  <span className="font-bold text-blue-600 italic mx-1">innovation</span>, 
                  and <span className="font-bold text-blue-600 italic mx-1">scalability</span>.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <Lightbulb className="w-6 h-6" />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expertise spans across <strong>Staffing & RPO</strong>, <strong>IT Services</strong>, and <strong>Finance</strong>. We integrate deep knowledge with technology to help partners optimize workflows.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                In a shifting digital landscape, we prioritize <strong>future-ready solutions</strong>. We don't just solve today's problems; we anticipate tomorrow's challenges with a data-driven approach.
              </p>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <HeartHandshake className="w-6 h-6" />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in a <strong>client-first mindset</strong>. Whether scaling a startup or transforming an enterprise, we provide the global reach required to unlock your potential.
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Partner Section */}
        <div className="mt-20 flex flex-col items-center">
          <p className="text-gray-400 text-sm uppercase tracking-[0.3em] font-bold mb-2">
            The Result
          </p>
          <p className="text-gray-900 text-4xl font-black tracking-tight">
            Strategic Growth Partner
          </p>
        </div>
      </div>
    </section>
        <AboutUsDetail index={0} item={sections[0]}></AboutUsDetail>

        <section className="bg-slate-50 py-32 px-6">
          <div className="max-w-7xl mx-auto flex items-center flex-col gap-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                What we do
              </h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((s, i) => (

                     <div
                   onClick={()=>{
                     
                    setActiveService(servicesData[i])
                    

                   }}
                 
                  key={i}
                  className="group relative bg-white p-12 rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
                >
                  {/* Decorative Background Element */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full transition-all duration-500 group-hover:bg-blue-600 group-hover:scale-[3.5] group-hover:opacity-10 opacity-50" />

                  {/* Icon Container - Floating Style */}
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-8 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[10deg] group-hover:shadow-lg group-hover:shadow-blue-200">
                    {s.icon}
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
                      {s.title}
                    </h3>

                    <p className="text-slate-500 text-lg leading-relaxed font-medium opacity-90">
                      {s.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 h-1.5 bg-blue-600 transition-all duration-500 w-0 group-hover:w-full" />
                </div>  
                
              
              ))}
            </div>
          </div>
        </section>
        <AboutUsDetail index={4} item={sections[4]}></AboutUsDetail>
        <section className=" py-24 px-6">
          <div className="max-w-7xl mx-auto flex items-center flex-col gap-5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why to choose Work Hance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group relative p-6 bg-white border border-gray-100 rounded-xl transition-all duration-300 
                     hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 cursor-default"
                >
                  {/* Icon Wrapper */}
                  <div
                    className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 
                          group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>

                  {/* Subtle Accent Bar */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-b-xl" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <VisionMissionCard></VisionMissionCard>
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
      <ServiceModal activeService={activeService} setActiveService={setActiveService}></ServiceModal>
    </div>
  );
}

export default AboutUs;