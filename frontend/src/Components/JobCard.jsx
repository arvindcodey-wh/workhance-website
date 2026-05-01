import React from "react";
import {
  Brain,
  Briefcase,
  ShieldCheck,
  Stethoscope,
  Terminal,
  Calculator,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const iconMap = {
  brain: <Brain className="w-6 h-6 text-sky-600" />,
  briefcase: <Briefcase className="w-6 h-6 text-sky-600" />,
  shield: <ShieldCheck className="w-6 h-6 text-sky-600" />,
  stethoscope: <Stethoscope className="w-6 h-6 text-sky-600" />,
  terminal: <Terminal className="w-6 h-6 text-sky-600" />,
  calculator: <Calculator className="w-6 h-6 text-sky-600" />,
};

function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <Link to={`/jobs/${job.id}`}>
      <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sky-100 hover:-translate-y-2 flex flex-col justify-between">

        <div>
          {/* Top Section */}
          <div className="flex justify-between items-start mb-6">

            {/* ICON (missing) */}
            <div className="w-12 h-12 flex items-center justify-center bg-sky-50 rounded-xl mr-4">
              {iconMap[job.icon] || iconMap["briefcase"]}
            </div>


            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-sky-600 transition-colors line-clamp-1">
                {job.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-sky-50 text-sky-600 rounded-full">
                  {job.type}
                </span>

                <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-gray-50 text-gray-600 rounded-full">
                  {job.location}
                </span>
              </div>
            </div>
          </div>

          <hr className="mb-5 border-sky-50" />

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm mb-8">
            {job.desc}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={(e) => {
            e.preventDefault(); // prevents Link override
            navigate(`/apply/${job.id}`);
          }}
          className="w-full bg-sky-500 text-white px-4 py-3 rounded-xl font-semibold active:scale-95 transition-all flex justify-center items-center gap-2 group-hover:shadow-lg shadow-sky-200"
        >
          Apply Now
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </Link>
  );
}

export default JobCard;