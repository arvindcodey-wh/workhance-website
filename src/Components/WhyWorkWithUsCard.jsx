import React, { useState } from "react";
import {
  TrendingUp,
  Clock,
  Sparkles,
  Users,
  Target,
  Trophy,
} from "lucide-react";
import DetailedBenefitCard from "./DetailedBenefitCard";

const WhyWorkWithUsCard = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [currInd, setcurrInd] = useState(0);

  const data = [
    {
      title: "Grow With Purpose",
      desc: "Be part of a team that supports your learning, growth, and long-term success.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Flexible Work Style",
      desc: "Work in a way that suits you best with flexibility to balance productivity and personal life.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Room to Innovate",
      desc: "We encourage creativity and new ideas to help you explore your full potential.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Collaborative Culture",
      desc: "Work with a supportive team that values respect, communication, and shared success.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Meaningful Impact",
      desc: "Your contributions directly influence outcomes and create real value.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Recognition & Growth",
      desc: "We value your efforts and provide opportunities to grow personally and professionally.",
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto flex items-center flex-col gap-5">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why to choose Work Hance
          </h2>
          <p className=" max-w-2xl mx-auto">
            We provide an environment where you can thrive, innovate, and make a
            real difference.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setIsDetail(true);
                setcurrInd(index);
              }}
              className="group relative p-8 bg-white border border-gray-100 rounded-xl transition-all duration-300 
                         hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon Wrapper */}
              <div
                className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 
                           group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>

              {/* Subtle Accent Bar */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-b-xl" />
            </div>
          ))}
        </div>

        <DetailedBenefitCard
          isDetail={isDetail}
          setIsDetail={setIsDetail}
          data={data[currInd]}
        />
      </div>
    </section>
  );
};

export default WhyWorkWithUsCard;