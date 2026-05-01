import {
  Award,
  BadgeDollarSign,
  BarChart,
  BarChart3,
  Layers,
  Monitor,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

const sections = [
  {
    id: 1,
    title: "Our Story",
    tagline: "Bridging Ambition and Opportunity",
    content:
      "Work Hance was founded with a clear vision — to simplify complex business challenges and elevate professional service standards.Incorporated in August 2025, Work Hance LLP was established with a mission to redefine professional service standards in India. From our headquarters in New York, we began as a vision to simplify complex business processes, growing rapidly into a trusted partner for firms seeking operational excellence and strategic growth.Today, Work Hance has evolved into a multi-service organization delivering integrated solutions across Staffing, Technology, Finance, and Digital Marketing — helping businesses achieve efficient operations and scalable success.",
    cardContent: [
      "Founded in August 2025",
      "Headquartered in New York",
      "Global vision for operational excellence"
    ],
    icon: <Award className="w-8 h-8 text-sky-500" />,
    img: "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "What We Are",
    tagline: "Innovation Meets Integrity",
    content:
      "Work Hance LLP is a forward-thinking Limited Liability Partnership specializing in diversified business solutions. We operate at the intersection of innovation and reliability, providing a stable foundation for startups and established enterprises to navigate the competitive Indian market.",
    cardContent: [
      "Modern Limited Liability Partnership",
      "Specialized in diversified solutions",
      "Foundation for startups & enterprises"
    ],
    icon: <Users className="w-8 h-8 text-sky-500" />,
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "What We Do",
    tagline: "Comprehensive Service Excellence",
    content:
      "We provide end-to-back professional services, ranging from strategic business advisory to operational support. Our core focus is on delivering practical, data-driven solutions that help our clients optimize their workflows and scale their impact effectively.",
    cardContent: [
      "Strategic business advisory",
      "Data-driven operational support",
      "Workflow optimization & scaling"
    ],
    icon: <Target className="w-8 h-8 text-sky-500" />,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Our Values",
    tagline: "The Core of Our Operations",
    content:
      "Transparency, accountability, and client-centricity are the pillars of Work Hance LLP. We believe in building long-term relationships through ethical practices and a relentless commitment to quality in every project we undertake.",
    cardContent: [
      "Transparency & Accountability",
      "Ethical business practices",
      "Client-centric quality commitment"
    ],
    icon: <ShieldCheck className="w-8 h-8 text-sky-500" />,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "How We Work",
    tagline: "A Systematic Approach to Success",
    content:
      "Our methodology is rooted in deep analysis and open communication. We move through four distinct phases: comprehensive assessment, customized strategy design, meticulous implementation, and continuous performance monitoring.",
    cardContent: [
      "Deep analytical assessment",
      "Customized strategy design",
      "Continuous performance monitoring"
    ],
    icon: <Zap className="w-8 h-8 text-sky-500" />,
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Why Choose Us",
    tagline: "The Work Hance Advantage",
    content:
      "By choosing Work Hance LLP, you gain a partner that understands the nuances of modern business. We offer the agility of a startup with the professional rigor of a seasoned consultancy, ensuring that your goals are met with precision.",
    cardContent: [
      "Startup agility & flexibility",
      "Rigorous professional consultancy",
      "Precision-focused goal delivery"
    ],
    icon: <BarChart className="w-8 h-8 text-sky-500" />,
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
  },
];

const services = [
  {
    title: "IT Services",
    desc: "Custom web development and scalable cloud-based systems built for growth.",
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    title: "Staffing & RPO",
    desc: "End-to-end recruitment solutions and talent sourcing across multiple industries.",
    icon: <Users className="w-8 h-8" />,
  },
  
  {
    title: "Finance & Accounting",
    desc: "Bookkeeping, payroll management, and strict US compliance support.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "Digital Marketing",
    desc: "SEO, SEM, and performance-driven campaigns that create real impact.",
    icon: <Rocket className="w-8 h-8" />,
  },
];

  const features = [
    {
      title: "Experienced Leadership",
      description: "Guiding projects with decades of collective industry wisdom and strategic foresight.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Multi-domain Expertise",
      description: "Versatile technical proficiency across diverse sectors to solve complex challenges.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Cost-effective Solutions",
      description: "Optimizing resources to deliver premium quality results within your budget constraints.",
      icon: <BadgeDollarSign className="w-6 h-6" />,
    },
    {
      title: "Performance Driven",
      description: "Focused on high-speed execution and measurable outcomes that scale with your needs.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "Client Focused",
      description: "Building lasting partnerships through transparent communication and dedicated support.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

export { sections, services,features };