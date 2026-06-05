import { Brain, Briefcase, Calculator, ShieldCheck, Stethoscope, Terminal } from "lucide-react";

const jobs = [
    {
      id : 1,
      title: "Head of Technology & AI Product",
      type: "Full-Time",
      location: "New York, USA",
      desc: "Lead the development of scalable, secure, and data-driven enterprise platforms. You'll build AI-powered solutions, predictive analytics, and centralized data pipelines.",
      icon: <Brain className="w-6 h-6 text-sky-600" />,
    },
    {
      id : 2,
      title: "Head of Strategic Acquisitions",
      type: "Full-Time",
      location: "New York, USA",
      desc: "Lead deal sourcing and execution across AI and tech-enabled businesses. Build valuation models, manage full-cycle transactions, and partner with founders.",
      icon: <Briefcase className="w-6 h-6 text-sky-600" />,
    },
    {
      id: 3,
      title: "Blockchain / Smart Contract Developer",
      type: "Full-Time (Hybrid)",
      location: "New York, USA",
      desc: "Design and develop secure smart contracts and decentralized applications (dApps). Work with Solidity, Web3, DeFi, and Ethereum standards.",
      icon: <ShieldCheck className="w-6 h-6 text-sky-600" />,
    },
    {
      id : 4,
      title: "Talent Acquisition Specialist – Healthcare",
      type: "Full-Time (Remote)",
      location: "India",
      desc: "Handle end-to-end recruitment for healthcare roles. Source, screen, and place qualified medical professionals for international clients.",
      icon: <Stethoscope className="w-6 h-6 text-sky-600" />,
    },
    {
      id : 5,
      title: "Talent Acquisition Specialist – IT",
      type: "Full-Time (Remote)",
      location: "India",
      desc: "Manage end-to-end IT recruitment for various technical roles. Understand niche tech requirements to source and place global developers.",
      icon: <Terminal className="w-6 h-6 text-sky-600" />,
    },
    {
      id: 6,
      title: "Finance & Accounting Specialist",
      type: "Full-Time (Remote)",
      location: "India",
      desc: "Manage day-to-day financial operations, bookkeeping, AP/AR, and payroll processing for global clients while ensuring international compliance.",
      icon: <Calculator className="w-6 h-6 text-sky-600" />,

    },
  ];
  export default jobs