import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  ChevronLeft,
  CheckCircle2,
  ArrowRight,
  Share2,
  Globe,
} from "lucide-react";
import ShareModal from "./ShareModal";

const data = [
  {
    id: "head-of-technology-ai-product",
    title: "Head of Technology & AI Product",
    location: "New York, USA",
    type: "Full-Time",
    overview:
      "A fast-growing New York-based tech startup is looking for a Head of Technology & AI Product to lead the development of a scalable, secure, and data-driven enterprise platform. This role focuses on building AI-powered solutions that deliver insights and automation for business users.",
    responsibilities: [
      {
        category: "Platform Architecture",
        tasks: [
          "Design scalable cloud-based infrastructure",
          "Build data pipelines and centralized data systems",
          "Ensure system reliability and scalability",
        ],
      },
      {
        category: "AI Product Development",
        tasks: [
          "Develop AI-driven insights and automation tools",
          "Work on predictive analytics and workflow automation",
        ],
      },
      {
        category: "Data & Integrations",
        tasks: [
          "Integrate data from multiple external systems",
          "Manage APIs, data quality, and real-time processing",
        ],
      },
      {
        category: "Product Design & UX",
        tasks: [
          "Build user-friendly dashboards and interfaces",
          "Focus on data visualization and decision-making tools",
        ],
      },
      {
        category: "Security & Infrastructure",
        tasks: [
          "Ensure enterprise-level security standards",
          "Implement access control, encryption, and compliance",
        ],
      },
    ],
    requirements: [
      "7+ years of experience in technology or system leadership roles",
      "Experience in building SaaS/PaaS platforms",
      "Strong knowledge of AI, automation, and data systems",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Data engineering and API integration experience",
      "Familiarity with tools like Snowflake, Databricks, PowerBI, etc.",
      "Strong understanding of enterprise security practices",
    ],
    benefits: [],
    additional_requirements: [],
  },
  {
    id: "head-of-strategic-acquisitions",
    title: "Head of Strategic Acquisitions",
    location: "New York, USA",
    type: "Full-Time",
    overview:
      "A fast-growing New York-based platform company is seeking a Head of Strategic Acquisitions to lead deal sourcing and execution across AI and technology-enabled businesses. This role involves building a strong acquisition pipeline and working closely with leadership to scale the platform through strategic investments.",
    responsibilities: [
      {
        category: "Investment & Acquisition Strategy",
        tasks: [
          "Define and execute acquisition strategy",
          "Identify opportunities in AI, data, and tech-enabled sectors",
          "Evaluate deals based on scalability and long-term value",
        ],
      },
      {
        category: "Deal Sourcing & Pipeline Development",
        tasks: [
          "Build and manage a strong acquisition pipeline",
          "Source opportunities through research and outreach",
          "Maintain structured tracking and prioritization",
        ],
      },
      {
        category: "Founder Relationships",
        tasks: [
          "Engage with founders and stakeholders",
          "Understand business vision and long-term goals",
          "Build strong, trust-based partnerships",
        ],
      },
      {
        category: "Financial Analysis & Diligence",
        tasks: [
          "Perform financial and strategic analysis",
          "Build valuation models",
          "Assess risks, scalability, and integration",
        ],
      },
      {
        category: "Transaction Execution",
        tasks: [
          "Manage end-to-end deal execution",
          "Coordinate legal, financial, and technical processes",
          "Negotiate terms and close deals",
        ],
      },
    ],
    requirements: [
      "Experience in Private Equity, M&A, or Venture Capital",
      "Strong financial modeling and valuation skills",
      "Interest in AI, data, and technology platforms",
      "Experience working with founder-led businesses",
      "Ability to work in a fast-paced, high-growth environment",
      "Strong communication and relationship-building skills",
    ],
    benefits: ["Medical Insurance", "Vision Insurance", "Dental Insurance"],
    additional_requirements: [
      "Authorized to work in the United States",
      "No visa sponsorship required",
    ],
  },
  {
    id: "blockchain-smart-contract-developer",
    title: "Blockchain / Smart Contract Developer",
    location: "New York, USA (Hybrid)",
    type: "Full-Time",
    overview:
      "A leading Financial Technology company is looking for a Blockchain / Smart Contract Developer to join their technology team. This role involves building secure blockchain-based applications and decentralized applications (dApps), including smart contract development and system integration.",
    responsibilities: [
      {
        category: "Development",
        tasks: [
          "Design and develop secure smart contracts for blockchain applications",
          "Work on Ethereum-based standards like ERC20, ERC721, ERC1400",
          "Integrate with multiple blockchain protocols (EVM & non-EVM)",
          "Build and test applications using tools like OpenZeppelin, Hardhat, Foundry",
          "Develop end-to-end blockchain solutions and integrations",
          "Work with Web3, DeFi, and distributed systems",
        ],
      },
    ],
    requirements: [
      "3+ years of experience in blockchain / smart contract development",
      "Strong knowledge of Solidity and blockchain concepts",
      "Experience with Web3 integration and dApps development",
      "Proficiency in languages like Java, Python, or TypeScript",
      "Familiarity with tools like ethers.js, OpenZeppelin, Hardhat",
      "Experience with cloud platforms (AWS, GCP) is a plus",
      "Good communication and problem-solving skills",
    ],
    nice_to_have: [
      "Knowledge of DeFi, cross-chain, and Layer 2 solutions",
      "Experience with AI coding tools",
      "Experience working with large-scale systems",
    ],
    benefits: ["Medical Insurance", "Vision Insurance", "Dental Insurance"],
    additional_requirements: [
      "3+ years of blockchain experience",
      "Background check required",
      "Authorized to work in the United States",
      "No visa sponsorship required",
    ],
  },
  {
    id: "talent-acquisition-specialist-healthcare",
    title: "Talent Acquisition Specialist – Healthcare",
    location: "India (Remote)",
    type: "Full-Time",
    overview:
      "We are looking for a Talent Acquisition Specialist (Healthcare) to join our team and support end-to-end recruitment for healthcare roles. The candidate will be responsible for sourcing, screening, and placing qualified healthcare professionals for international clients.",
    responsibilities: [
      {
        category: "End-to-End Recruitment",
        tasks: [
          "Handle end-to-end recruitment for healthcare roles",
          "Source candidates through job portals, LinkedIn, and other channels",
          "Screen resumes and conduct initial interviews",
          "Coordinate with clients and hiring managers",
          "Maintain candidate database and recruitment pipeline",
          "Ensure timely closures and quality hiring",
        ],
      },
    ],
    requirements: [
      "2–3 years of experience in healthcare recruitment",
      "Strong sourcing and screening skills",
      "Familiarity with job portals and LinkedIn hiring",
      "Good communication and coordination skills",
      "Ability to work in a target-driven environment",
    ],
    nice_to_have: [
      "Experience working with US healthcare clients",
      "Knowledge of healthcare roles (nurses, therapists, etc.)",
    ],
  },
  {
    id: "talent-acquisition-specialist-it",
    title: "Talent Acquisition Specialist – IT",
    location: "India (Remote)",
    type: "Full-Time",
    overview:
      "We are looking for a Talent Acquisition Specialist (IT) to manage end-to-end recruitment for various technical roles. The candidate will be responsible for sourcing, screening, and closing positions across different IT domains for global clients.",
    responsibilities: [
      {
        category: "End-to-End Recruitment",
        tasks: [
          "Handle end-to-end IT recruitment",
          "Source candidates through job portals, LinkedIn, and other platforms",
          "Screen resumes and conduct initial interviews",
          "Coordinate with hiring managers and clients",
          "Manage candidate pipeline and ensure timely closures",
          "Understand technical requirements and match suitable candidates",
        ],
      },
    ],
    requirements: [
      "3–5 years of experience in IT recruitment",
      "Strong understanding of technical roles (developers, testers, etc.)",
      "Hands-on experience with sourcing tools and job portals",
      "Good communication and stakeholder management skills",
      "Ability to work in a fast-paced, target-driven environment",
    ],
    nice_to_have: [
      "Experience working with US/UK clients",
      "Knowledge of niche tech hiring",
    ],
  },
  {
    id: "finance-accounting-specialist",
    title: "Finance & Accounting Specialist",
    location: "India (Remote)",
    type: "Full-Time",
    overview:
      "We are looking for a Finance & Accounting Specialist to manage financial operations and support accounting processes for global clients. The candidate will be responsible for handling day-to-day accounting tasks, financial reporting, and compliance activities.",
    responsibilities: [
      {
        category: "Financial Operations",
        tasks: [
          "Manage bookkeeping and financial records",
          "Handle accounts payable & receivable",
          "Prepare financial reports and statements",
          "Support payroll processing and reconciliation",
          "Ensure compliance with financial regulations",
          "Assist in tax-related tasks and documentation",
        ],
      },
    ],
    requirements: [
      "3–5 years of experience in finance & accounting",
      "Strong knowledge of accounting principles",
      "Experience with accounting tools/software",
      "Good analytical and problem-solving skills",
      "Strong attention to detail",
      "Good communication skills",
    ],
    nice_to_have: [
      "Experience working with US/UK clients",
      "Knowledge of international accounting standards",
    ],
  },
];

function DetailedJob() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [openShareModal, setOpenShareModal] = useState(false);

  const jobIndex = parseInt(index);
  const job = data[jobIndex-1];

  if (!job) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Job not found</h2>
        <button
          onClick={() => navigate('..')}
          className="mt-4 text-sky-600 font-medium flex items-center gap-2"
        >
          <ChevronLeft size={20} /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 relative ">
      {/* Navigation Header */}
      <div className="bg-white border-b ">
        <div className="w-[90%] max-w-7xl mx-auto py-4 flex items-center justify-between ">
          <button
            onClick={() => navigate('/careers',{  state: { jobId: jobIndex }})}
            className="flex items-center text-gray-600 hover:text-sky-600 transition-colors font-medium gap-1"
          >
            <ChevronLeft size={20} /> Back to Openings
          </button>
          <div className="hidden md:flex items-center gap-4">
            <button onClick={()=>{
              setOpenShareModal(true)

            }} className="p-2 text-gray-400 hover:text-sky-600 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-[90%]  top-0 z-10 max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Job Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header Info */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                <MapPin size={16} className="text-sky-600" /> {job.location}
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                <Briefcase size={16} className="text-sky-600" /> {job.type}
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                <Globe size={16} className="text-sky-600" />{" "}
                {job.location.includes("Remote") ? "Worldwide" : "On-site"}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-4">
              Job Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg italic">
              {job.overview}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
              Key Responsibilities
            </h2>
            <div className="space-y-8">
              {job.responsibilities.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-sky-700 font-bold text-sm uppercase tracking-wider mb-4">
                    {section.category}
                  </h3>
                  <ul className="grid grid-cols-1 gap-4">
                    {section.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 leading-relaxed"
                      >
                        <CheckCircle2
                          size={20}
                          className="text-green-500 shrink-0 mt-0.5"
                        />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-sky-900 text-white p-8 rounded-3xl shadow-xl shadow-sky-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-sky-400 inline-block"></span>
              Required Skills & Experience
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {job.requirements.map((req, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sky-100 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></div>
                  {req}
                </li>
              ))}
            </ul>

            {/* Nice to Have Section (if exists) */}
            {job.nice_to_have && (
              <div className="mt-8 pt-8 border-t border-sky-800">
                <h3 className="font-bold text-sky-300 mb-4">Nice to Have:</h3>
                <ul className="space-y-2">
                  {job.nice_to_have.map((item, i) => (
                    <li key={i} className="text-sm text-sky-200">
                      + {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
             <button
            onClick={() => navigate('/careers',{  state: { jobId: jobIndex }})}
            className="flex items-center text-gray-600 hover:text-sky-600 transition-colors font-medium gap-1"
          >
            <ChevronLeft size={20} /> Back to Openings
          </button>
        </div>

        {/* Right Column: Sticky Sidebar Info */}
        <div className="lg:col-span-1">
          <div className=" top-28 space-y-6">
            {/* Benefits Card */}
            {job.benefits?.length > 0 && (
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4">
                  Perks & Benefits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-green-100"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Action Card */}
            <div className="bg-gradient-to-br from-sky-600 to-sky-700 p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-2">
                Interested in this role?
              </h3>
              <p className="text-sky-100 text-sm mb-6">
                Join our mission-driven team and help us build the next
                generation of AI platforms.
              </p>
              <button
                onClick={() => navigate(`/apply/${jobIndex}`)}
                  
                
                className="w-full bg-white text-sky-700 py-4 rounded-2xl font-bold hover:bg-sky-50 transition-all flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight size={20} />
              </button>
            </div>

            {/* Additional Info */}
            <div className="p-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Additional Info
              </h4>
              <ul className="space-y-3">
                {job.additional_requirements?.map((req, i) => (
                  <li
                    key={i}
                    className="text-xs text-gray-500 flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                    {req}
                  </li>
                ))}
                <li className="text-xs text-gray-500 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                  Verified Listing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ShareModal title={job.title} setOpenShareModal={setOpenShareModal} openShareModal={openShareModal}></ShareModal>
    </div>
  );
}

export default DetailedJob;
