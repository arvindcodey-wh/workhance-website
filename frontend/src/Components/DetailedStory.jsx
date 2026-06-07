import React from 'react';
import { Rocket, Users, LineChart, Globe, Cpu, X, Sparkles } from 'lucide-react';

const DetailedStory = ({ isLearnMore, setIsLearnMore }) => {
  if (!isLearnMore) return null;

  const sections = [
    {
      title: "The Vision",
      icon: <Rocket className="w-6 h-6" />,
      content: "Incorporated in August 2025, Work Hance  was founded with a mission to redefine professional service standards in India. From our headquarters in New York, we started with a simple yet powerful idea — to simplify complex business processes."
    },
    {
      title: "The Foundation",
      icon: <Users className="w-6 h-6" />,
      content: "In the early stages, our focus was on staffing and recruitment, connecting the right talent with the right opportunities. This helped organizations build strong, reliable teams."
    },
    {
      title: "The Pivot",
      icon: <LineChart className="w-6 h-6" />,
      content: "We realized businesses needed a complete ecosystem that could support technology, financial operations, and growth strategies alongside talent acquisition."
    },
    {
      title: "The Ecosystem",
      icon: <Cpu className="w-6 h-6" />,
      content: "We expanded into Technology, Finance, and Digital Marketing, delivering end-to-end solutions under one roof, becoming a long-term growth partner."
    },
    {
      title: "The Future",
      icon: <Globe className="w-6 h-6" />,
      content: "Today, we work with global clients using modern technologies and AI-driven strategies to ensure sustainable success in a rapidly evolving world."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl transition-opacity"
        onClick={()=>{setIsLearnMore(false)}}
      />

      {/* Main Container */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/20">
        
        {/* Close Button */}
        <button 
          onClick={()=>{setIsLearnMore(false)}}
          className="absolute top-6 right-6 z-20 p-2 bg-slate-100 hover:bg-sky-600 hover:text-white rounded-full transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Sidebar (Visual) */}
        <div className="hidden md:flex w-1/3 bg-sky-600 p-12 flex-col justify-between text-white relative">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-10">
              <Sparkles className="w-8 h-8 text-sky-200" />
              <span className="font-bold text-2xl tracking-tight">Work Hance</span>
            </div>
            <h2 className="text-5xl font-extrabold leading-[1.1] mb-6">Our Story, Your Growth.</h2>
            <p className="text-sky-100 text-lg leading-relaxed opacity-90">
              From a New York vision to a global reality.
            </p>
          </div>
          <div className="text-sm opacity-50 relative z-10">
            © 2026 Work Hance 
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-500 rounded-full blur-3xl opacity-50" />
        </div>

        {/* Right Content Area (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-8 md:p-20 bg-white">
          <div className="max-w-2xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-sky-200 group-hover:scale-110">
                    {section.icon}
                  </div>
                  {index !== sections.length - 1 && (
                    <div className="w-px flex-1 bg-slate-100 mt-6 group-hover:bg-sky-200 transition-colors" />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{section.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-10 border-t border-slate-100">
              <p className="text-3xl font-semibold text-slate-900 leading-snug">
                Work Hance is a commitment to driving innovation and long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedStory;