import { ArrowUpRight, Eye, Target } from "lucide-react";
import React, { useState } from "react";
import DetailedVisionMission from "./DetailedVisionMission";

function VisionMissionCard() {
  const [isOpen, setIsopen] = useState(false);
  const [index,setIndex]=useState(0)

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      {/* Vision Card */}
      <div
        
        className="group relative p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Our <span className="text-blue-600">Vision</span>
            </h3>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            To establish{" "}
            <span className="font-semibold text-gray-800">Work Hance</span> as a
            globally recognized leader in business solutions and outsourcing,
            delivering innovative and high-performance services that redefine
            industry standards.
          </p>

          <button onClick={()=>{
            setIsopen(true)
            setIndex(0)
          }} className="bg-sky-600 text-white px-4 py-2 rounded-xl active:scale-90 transition-all duration-500 font-medium ease-in-out"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Mission Card */}
      <div
      
        className="group relative p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Our <span className="text-blue-600">Mission</span>
            </h3>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            To empower businesses by providing reliable, cost-effective, and
            result-driven solutions across{" "}
            <span className="font-semibold text-gray-800">
              Staffing, Technology, and Finance
            </span>
            , ensuring our clients achieve sustainable growth.
          </p>

          <button onClick={()=>{
            setIsopen(true)
            setIndex(1)
          }} className="bg-sky-600 text-white px-4 py-2 rounded-xl active:scale-90 transition-all duration-500 font-medium ease-in-out"
          >
            Learn More
          </button>
        </div>
      </div>
      <DetailedVisionMission isOpen={isOpen} setIsopen={setIsopen} index={index}></DetailedVisionMission>
    </section>
  );
}

export default VisionMissionCard;
