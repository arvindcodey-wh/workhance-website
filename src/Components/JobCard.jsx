import React from "react";
import { 
  Brain, 
  Briefcase, 
  ShieldCheck, 
  Stethoscope, 
  Terminal, 
  Calculator, 
  
} from "lucide-react";
import { useNavigate,Link } from "react-router-dom";

function JobCard() {
  const navigate=useNavigate()
  const jobs = [
    {
      title: "Head of Technology & AI Product",
      type: "Full-Time",
      location: "New York, USA",
      desc: "Lead the development of scalable, secure, and data-driven enterprise platforms. You'll build AI-powered solutions, predictive analytics, and centralized data pipelines.",
      icon: <Brain className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Head of Strategic Acquisitions",
      type: "Full-Time",
      location: "New York, USA",
      desc: "Lead deal sourcing and execution across AI and tech-enabled businesses. Build valuation models, manage full-cycle transactions, and partner with founders.",
      icon: <Briefcase className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Blockchain / Smart Contract Developer",
      type: "Full-Time (Hybrid)",
      location: "New York, USA",
      desc: "Design and develop secure smart contracts and decentralized applications (dApps). Work with Solidity, Web3, DeFi, and Ethereum standards.",
      icon: <ShieldCheck className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Talent Acquisition Specialist – Healthcare",
      type: "Full-Time (Remote)",
      location: "India",
      desc: "Handle end-to-end recruitment for healthcare roles. Source, screen, and place qualified medical professionals for international clients.",
      icon: <Stethoscope className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Talent Acquisition Specialist – IT",
      type: "Full-Time (Remote)",
      location: "India",
      desc: "Manage end-to-end IT recruitment for various technical roles. Understand niche tech requirements to source and place global developers.",
      icon: <Terminal className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Finance & Accounting Specialist",
      type: "Full-Time (Remote)",
      location: "India",
      desc: "Manage day-to-day financial operations, bookkeeping, AP/AR, and payroll processing for global clients while ensuring international compliance.",
      icon: <Calculator className="w-6 h-6 text-sky-600" />,
    },
  ];

  return (
 
    <div className="w-[90%] mx-auto py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Career Opportunities
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore our open roles across technology, finance, and talent acquisition. Join a global, fast-growing team.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <Link  to={`/jobs/${index}`}><div
          key={index}
          className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-sky-100 hover:-translate-y-2 flex flex-col justify-between"
        >
          <div>
            {/* Top Section */}
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-sky-50 rounded-xl  group-hover:text-white transition-colors duration-300 mr-4">
                <div className="group-hover:text-white transition-colors">
                  {job.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-sky-600 transition-colors">
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

          {/* Bottom Button */}
          <button onClick={()=>{
              navigate('/apply')
          }} className="w-full bg-sky-500 text-white px-4 py-3 rounded-xl font-semibold  active:scale-95 transition-all flex justify-center items-center gap-2 group-hover:shadow-lg shadow-sky-200">
            Apply Now 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div></Link>
        ))}
      </div>
    </div>
  );
}

export default JobCard;