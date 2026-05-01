import React from "react";
import {
  Target,
  Rocket,
  ShieldCheck,
  HeartHandshake,
  Zap,
  TrendingUp,
  Sparkles,
  Eye,
  Globe,
  Lightbulb,
  Cpu,
  X,
  Award,
} from "lucide-react";

const DetailedVisionMission = ({ isOpen, setIsopen, index }) => {
  if (!isOpen) return null;

  const purposeData = [
    {
      type: "Vision",
      sidebarTitle: "Leading the Future.",
      sidebarDesc:
        "We envision a future where businesses don’t just grow — they lead, innovate, and redefine industries.",
      accentColor: "bg-indigo-600",
      iconColor: "text-indigo-600",
      bannerImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      sections: [
        {
          title: "Global Influence",
          icon: <Globe className="w-6 h-6" />,
          content:
            "To become a globally trusted partner that brings together talent, technology, and finance to build high-performance organizations where businesses scale without limitations.",
        },
        {
          title: "Legacy of Impact",
          icon: <Award className="w-6 h-6" />,
          content:
            "We aspire to be recognized as a transformation partner that reshapes how businesses operate, making them smarter, faster, and more adaptive to the global market.",
        },
        {
          title: "Innovation Leadership",
          icon: <Cpu className="w-6 h-6" />,
          content:
            "By leveraging AI and data-driven strategies, we strive to build future-ready businesses that are resilient and built for long-term success.",
        },
        {
          title: "Global Transformation",
          icon: <Lightbulb className="w-6 h-6" />,
          content:
            "Our vision is to help organizations unlock their full potential through integrated solutions, driving performance and enabling sustainable growth across geographies.",
        },
        {
          title: "New Benchmarks",
          icon: <Eye className="w-6 h-6" />,
          content:
            "We aim to set new standards in service quality and technological advancement, making Work Hance a global symbol of transformation and excellence.",
        },
      ],
    },
    {
      type: "Mission",
      sidebarTitle: "Defining Direction.",
      sidebarDesc:
        "We don’t just deliver services — we define the direction for business growth.",
      accentColor: "bg-sky-600",
      iconColor: "text-sky-600",
      bannerImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      sections: [
        {
          title: "Empowering Growth",
          icon: <Target className="w-6 h-6" />,
          content:
            "At Work Hance, our mission is to empower businesses to achieve sustainable growth by providing high-quality, reliable, and cost-effective solutions across Staffing, Technology, Finance, and Digital Marketing.",
        },
        {
          title: "Measurable Results",
          icon: <TrendingUp className="w-6 h-6" />,
          content:
            "We approach every project with a strong sense of ownership, focusing on creating real impact. We help businesses improve productivity, optimize processes, and gain a competitive edge.",
        },
        {
          title: "Idea Transformation",
          icon: <Zap className="w-6 h-6" />,
          content:
            "Through strategic recruitment and scalable IT solutions, we convert business ideas into tangible outcomes, ensuring every solution contributes to performance.",
        },
        {
          title: "Long-term Partnerships",
          icon: <HeartHandshake className="w-6 h-6" />,
          content:
            "We focus on long-term value creation rather than short-term gains, ensuring sustained growth and stability for our clients through customized, scalable solutions.",
        },
        {
          title: "Driving Change",
          icon: <Rocket className="w-6 h-6" />,
          content:
            "By leveraging modern technologies and automation, we help businesses stay future-ready. We are not just service providers — we are growth partners.",
        },
      ],
    },
  ];

  const activeData = purposeData[index];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl transition-opacity"
        onClick={() => {
          setIsopen(false);
        }}
      />

      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Close Button - Added z-40 to stay above banner */}
        <button
          onClick={() => {
            setIsopen(false);
          }}
          className="absolute top-6 right-6 z-40 p-2 bg-white/20 hover:bg-white/40 md:bg-slate-100 md:hover:bg-red-500 text-white md:text-slate-900 md:hover:text-white rounded-full transition-all backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Sidebar */}
        <div
          className={`hidden md:flex w-1/3 ${activeData.accentColor} p-12 flex-col justify-between text-white relative`}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-6 h-6 opacity-70" />
              <span className="font-bold tracking-widest text-sm uppercase opacity-80">
                Work Hance
              </span>
            </div>
            <h2 className="text-5xl font-black mb-6 leading-tight">
              Our <br /> {activeData.type}
            </h2>
            <div className="h-1.5 w-12 bg-white mb-8 rounded-full" />
            <p className="text-xl font-medium leading-relaxed opacity-90 italic">
              "{activeData.sidebarDesc}"
            </p>
          </div>
          <p className="text-xs tracking-widest uppercase opacity-40">
            EST. 2025
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-white">
          
          {/* Banner Section */}
          <div className="relative h-48 md:h-64 w-full overflow-hidden">
            <img 
              src={activeData.bannerImage} 
              alt={activeData.type} 
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
          </div>

          <div className="p-8 md:p-20">
            <div className="max-w-2xl space-y-12">
              {activeData.sections.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-slate-50 ${activeData.iconColor} flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm border border-slate-100`}
                    >
                      {item.icon}
                    </div>
                    {i !== activeData.sections.length - 1 && (
                      <div className="w-px flex-1 bg-slate-100 mt-6" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedVisionMission;