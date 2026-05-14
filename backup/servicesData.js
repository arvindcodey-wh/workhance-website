import itImg from "../assets/service-it.jpg";
import staffImg from "../assets/service-staffing.jpg";
import financeImg from "../assets/service-finance.jpg";
import marketImg from "../assets/service-marketing.jpg";

import {
  FaLaptopCode,
  FaUsers,
  FaMoneyCheckDollar,
  FaChartLine,
} from "react-icons/fa6";

export const servicesData = [
    {
      id: "it",
      title: "IT Services",
      icon: FaLaptopCode,
      image: itImg,
      intro:
        "Scalable technology solutions built to improve operations, strengthen digital presence, and support long-term business growth.",
      points: [
        "Custom websites, web apps, and software solutions",
        "Cloud deployment and infrastructure support",
        "UI/UX-focused product design and usability improvement",
        "Maintenance, optimization, and technical support",
      ],
      overview:
        "Our IT services are designed to solve real business problems through practical, scalable technology. From websites and business software to cloud support and product design, we help organizations build strong digital systems that perform reliably and grow with the business.",
      subServices: [
        "Custom Web Development",
        "Software Development",
        "Cloud Solutions & Deployment",
        "UI/UX Design",
        "Mobile App Development",
        "Website Maintenance & Optimization",
      ],
      subServicesNote:
        "Each solution is planned around actual business needs so the final product is not just functional, but aligned with performance, usability, and future scalability.",
      included: [
        "Custom web and application development aligned with business goals",
        "Software solutions for business workflows and operations",
        "Cloud setup for flexible and scalable infrastructure",
        "UI/UX support and continuous optimization",
      ],
      delivery: [
        "Understand the business requirement and technical objective",
        "Plan the solution structure, flow, and project roadmap",
        "Develop, test, and deploy the required system",
        "Provide ongoing support and performance improvement",
      ],
      value: [
        "Improves operational efficiency and workflow clarity",
        "Builds scalable digital systems for future growth",
        "Enhances user experience and overall platform usability",
        "Reduces technical disruption through continuous support",
      ],
      whyItMatters:
        "Outdated or inefficient technology can quietly slow down a business. Strong digital infrastructure helps teams work faster, serve customers better, and scale without constant technical setbacks.",
      stats: [
        { value: "30%", label: "Faster Delivery" },
        { value: "95%", label: "System Stability" },
        { value: "24/7", label: "Support Ready" },
      ],
    },
    {
      id: "rpo",
      title: "Staffing & RPO Services",
      icon: FaUsers,
      image: staffImg,
      intro:
        "Structured hiring solutions that help businesses find the right talent faster, improve recruitment efficiency, and support workforce growth.",
      points: [
        "End-to-end recruitment process support",
        "Candidate sourcing, screening, and shortlisting",
        "IT, healthcare, and finance staffing support",
        "Resume formatting and hiring coordination assistance",
      ],
      overview:
        "Our Staffing and RPO services are built to reduce hiring effort while improving the quality and speed of recruitment. We support businesses across key hiring stages and act as an extended recruitment arm that helps identify, evaluate, and onboard the right talent efficiently.",
      subServices: [
        "Recruitment Process Outsourcing (RPO)",
        "IT Staffing",
        "Healthcare Staffing",
        "Finance & Accounting Staffing",
        "Talent Sourcing & Screening",
        "Resume Formatting & VMS Support",
      ],
      subServicesNote:
        "The hiring model is designed to be flexible and scalable, so businesses can strengthen recruitment without building a large in-house hiring structure.",
      included: [
        "End-to-end recruitment process management",
        "Candidate sourcing and screening support",
        "Domain-specific staffing solutions",
        "Resume enhancement and onboarding coordination",
      ],
      delivery: [
        "Understand hiring requirements and role expectations",
        "Source and shortlist relevant candidates",
        "Coordinate screening and interview stages",
        "Support final selection and onboarding process",
      ],
      value: [
        "Reduces hiring time and recruitment workload",
        "Improves the quality of shortlisted candidates",
        "Supports team growth with a structured hiring model",
        "Creates a more efficient and scalable recruitment process",
      ],
      whyItMatters:
        "Hiring delays, poor candidate fit, and fragmented recruitment processes directly affect growth. A structured talent pipeline helps businesses scale faster with less internal pressure and better hiring outcomes.",
      stats: [
        { value: "40%", label: "Faster Hiring" },
        { value: "90%", label: "Better Matches" },
        { value: "30%", label: "Cost Saving" },
      ],
    },
    {
      id: "finance",
      title: "Finance & Accounting Services",
      icon: FaMoneyCheckDollar,
      image: financeImg,
      intro:
        "Reliable finance support that improves accuracy, strengthens process control, and helps businesses manage operations with more confidence.",
      points: [
        "Bookkeeping and financial reporting",
        "Accounts payable and receivable handling",
        "Payroll processing and compliance support",
        "Financial insights for better decision-making",
      ],
      overview:
        "Our finance and accounting services help businesses maintain structured financial operations without the overhead of building a large internal team. From bookkeeping and payroll to reporting and compliance support, we focus on accuracy, consistency, and better financial visibility.",
      subServices: [
        "Bookkeeping & Financial Reporting",
        "Accounts Payable & Receivable",
        "Payroll Management",
        "Tax & Compliance Support",
        "Financial Analysis",
        "Advisory Support",
      ],
      subServicesNote:
        "The service approach is designed to keep financial processes organized, reduce manual gaps, and support better reporting for operational as well as strategic decisions.",
      included: [
        "Bookkeeping and regular financial reporting",
        "Accounts payable and receivable management",
        "Payroll and compliance-related support",
        "Financial analysis and reporting assistance",
      ],
      delivery: [
        "Review business needs and current finance processes",
        "Set up a structured workflow for operations",
        "Manage accounting activities with consistency and accuracy",
        "Share reports and support informed planning",
      ],
      value: [
        "Improves accuracy in records and reporting",
        "Supports better control over financial operations",
        "Helps maintain compliance and process discipline",
        "Provides useful financial visibility for decision-making",
      ],
      whyItMatters:
        "Weak financial processes can lead to reporting errors, compliance risks, and poor planning. Strong accounting support creates clarity, improves control, and helps businesses make smarter decisions with confidence.",
      stats: [
        { value: "35%", label: "Efficiency Boost" },
        { value: "98%", label: "Accuracy" },
        { value: "25%", label: "Time Saved" },
      ],
    },
    {
      id: "marketing",
      title: "Digital Marketing Services",
      icon: FaChartLine,
      image: marketImg,
      intro:
        "Performance-focused marketing solutions that improve visibility, strengthen audience engagement, and support measurable business growth.",
      points: [
        "SEO and search visibility improvement",
        "Paid campaigns for reach and lead generation",
        "Social media management and audience engagement",
        "Content strategy and performance tracking",
      ],
      overview:
        "Our digital marketing services are designed to help businesses grow through visibility, engagement, and conversion-focused execution. We work across SEO, paid campaigns, social platforms, and content strategy to build a stronger digital presence and deliver measurable marketing outcomes.",
      subServices: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (SEM)",
        "Social Media Marketing",
        "Paid Advertising",
        "Content Marketing",
        "Analytics & Performance Reporting",
      ],
      subServicesNote:
        "Every activity is aligned with a business objective, whether that means better reach, stronger engagement, more qualified leads, or improved overall marketing performance.",
      included: [
        "SEO and search visibility optimization",
        "Paid advertising across digital platforms",
        "Social media growth and management",
        "Content planning and reporting support",
      ],
      delivery: [
        "Understand audience behavior and business goals",
        "Plan the right digital strategy and content direction",
        "Execute campaigns across selected channels",
        "Track performance and optimize for better results",
      ],
      value: [
        "Increases brand visibility and online reach",
        "Improves audience engagement and lead quality",
        "Supports business growth through focused campaigns",
        "Helps improve ROI through measurable optimization",
      ],
      whyItMatters:
        "Visibility alone is not enough if it does not lead to engagement or conversion. A clear marketing strategy helps businesses attract the right audience, build trust, and turn digital activity into growth.",
      stats: [
        { value: "45%", label: "Engagement Growth" },
        { value: "32%", label: "Visibility Boost" },
        { value: "28%", label: "Lead Increase" },
      ],
    },
  ];