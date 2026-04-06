import React from 'react';
import { 
  TrendingUp, 
  Clock, 
  Sparkles, 
  Users, 
  Target, 
  Trophy 
} from 'lucide-react';

const WhyWorkWithUsCard = () => {
  const data = [
    {
      title: "Grow With Purpose",
      desc: "Be part of a team that supports your learning, growth, and long-term success.",
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Flexible Work Style",
      desc: "Work in a way that suits you best with flexibility to balance productivity and personal life.",
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Room to Innovate",
      desc: "We encourage creativity and new ideas to help you explore your full potential.",
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Collaborative Culture",
      desc: "Work with a supportive team that values respect, communication, and shared success.",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Meaningful Impact",
      desc: "Your contributions directly influence outcomes and create real value.",
      icon: <Target className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Recognition & Growth",
      desc: "We value your efforts and provide opportunities to grow personally and professionally.",
      icon: <Trophy className="w-6 h-6 text-indigo-600" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Join Our Team?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide an environment where you can thrive, innovate, and make a real difference.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-xl mb-6  group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsCard;