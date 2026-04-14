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
// import DetailedWhyWork from "./DetailedBenefitCard";

const WhyWorkWithUsCard = () => {
  const [isDetail, setIsDetail] = useState(false);
  const [currInd, setcurrInd] = useState(0);
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
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
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
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
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
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
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
      icon: <Users className="w-6 h-6 text-indigo-600" />,
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
      icon: <Target className="w-6 h-6 text-indigo-600" />,
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
            We provide an environment where you can thrive, innovate, and make a
            real difference.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              onClick={() => {
                setIsDetail(true);
                setcurrInd(index);
              }}
              key={index}
              className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-xl mb-6  group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white">{item.icon}</div>
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
        <DetailedBenefitCard
          isDetail={isDetail}
          setIsDetail={setIsDetail}
          data={data[currInd]}
        ></DetailedBenefitCard>
      </div>
    </section>
  );
};

export default WhyWorkWithUsCard;
