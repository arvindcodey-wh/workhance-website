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

  // Data structure kept EXACTLY as original to prevent DetailedBenefitCard from crashing
  const data = [
    {
      title: "Grow With Purpose",
      desc: "Be part of a team that supports your learning, growth, and long-term success.",
      longDesc:
        "We don't believe in stagnant roles. Our 'Growth First' philosophy ensures that every team member has a clear roadmap for their professional journey, backed by the resources needed to get there.",
      perks: [
        "Customized Career Roadmaps",
        "Professional Certification Credits",
        "Quarterly Skill Workshops",
      ],
      cultureInsight:
        "85% of our leadership team started in entry-level positions within the company.",
      icon: <TrendingUp className="w-6 h-6 " />,
    },
    {
      title: "Flexible Work Style",
      desc: "Work in a way that suits you best with flexibility to balance productivity and personal life.",
      longDesc:
        "We measure success by outcomes, not by hours spent at a desk. Our flexible environment allows you to integrate your professional responsibilities with your personal life seamlessly.",
      perks: [
        "Remote & Hybrid Options",
        "Flexible Start/End Times",
        "No-Meeting Wednesdays",
      ],
      cultureInsight:
        "We trust our experts to manage their own schedules because results speak louder than punch-clocks.",
      icon: <Clock className="w-6 h-6 " />,
    },
    {
      title: "Room to Innovate",
      desc: "We encourage creativity and new ideas to help you explore your full potential.",
      longDesc:
        "Innovation isn't just for the R&D department. We provide a safe space for team members to pitch 'Wildcard' ideas, experiment with new tech stacks, and challenge the status quo.",
      perks: [
        "Internal Hackathons",
        "Innovation Lab Access",
        "Idea Pitching Sessions",
      ],
      cultureInsight:
        "Some of our most successful internal tools started as side projects from our junior developers.",
      icon: <Sparkles className="w-6 h-6 " />,
    },
    {
      title: "Collaborative Culture",
      desc: "Work with a supportive team that values respect, communication, and shared success.",
      longDesc:
        "Our strength lies in our diversity of thought. We foster an environment where ego is left at the door and cross-departmental collaboration is the standard way of working.",
      perks: [
        "Cross-Functional Squads",
        "Open-Door Leadership Policy",
        "Peer-to-Peer Recognition",
      ],
      cultureInsight:
        "We use collaborative tools and transparent documentation so no one ever works in a silo.",
      icon: <Users className="w-6 h-6 " />,
    },
    {
      title: "Meaningful Impact",
      desc: "Your contributions directly influence outcomes and create real value.",
      longDesc:
        "At many companies, you're just a cog in a machine. Here, your code and your decisions impact thousands of users and drive the company's core metrics every single day.",
      perks: [
        "Direct Ownership of Projects",
        "Client Interaction Opportunities",
        "Monthly Impact Reports",
      ],
      cultureInsight:
        "Every Friday, we share 'Success Stories' showing how our work helped a real-world client.",
      icon: <Target className="w-6 h-6 " />,
    },
    {
      title: "Recognition & Growth",
      desc: "We value your efforts and provide opportunities to grow personally and professionally.",
      longDesc:
        "Hard work shouldn't go unnoticed. We have built a robust system for rewarding excellence, ensuring that your contributions are celebrated by both your peers and management.",
      perks: [
        "Performance-Based Bonuses",
        "Annual Excellence Awards",
        "Public Shout-out Platforms",
      ],
      cultureInsight:
        "We celebrate work anniversaries and project launches with the same energy as a championship win.",
      icon: <Trophy className="w-6 h-6 " />,
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide an environment where you can thrive, innovate, and make a
            real difference.
          </p>
        </div>

        {/* Grid Section with New Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setIsDetail(true);
                setcurrInd(index);
              }}
              className="group relative p-8 bg-white border border-gray-100 rounded-xl transition-all duration-300 
                         hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Icon Wrapper Animation */}
              <div
                className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 
                           group-hover:bg-blue-600 transition-colors duration-300"
              >
                {/* Targeting the child icon's color on group-hover. 
                  This works without changing the data structure.
                */}
                <div className="group-hover:text-white transition-colors duration-300 text-blue-600">
                  {item.icon}
                </div>
              </div>

              {/* Content Animation */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>

              {/* The Sliding Accent Bar Animation */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-b-xl" />
            </div>
          ))}
        </div>

        {/* Detailed Card Trigger */}
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