import React from "react";

function AboutUsDetail({ index, item }) {
  const sections = [
    {
      id: 1,
      title: "Our Story",
      content:
        "Incorporated in August 2025, Work Hance LLP was established with a mission to redefine professional service standards in India. From our headquarters in Jabalpur, we began as a vision to simplify complex business processes, growing rapidly into a trusted partner for firms seeking operational excellence.",
    },
    {
      id: 2,
      title: "What We Are",
      content:
        "Work Hance LLP is a forward-thinking Limited Liability Partnership specializing in diversified business solutions. We operate at the intersection of innovation and reliability, providing a stable foundation for startups and established enterprises.",
    },
    {
      id: 3,
      title: "What We Do",
      content:
        "We provide end-to-back professional services, ranging from strategic business advisory to operational support. Our core focus is on delivering practical, data-driven solutions that help our clients optimize their workflows.",
      cardContent: [
        "Strategic Advisory: Tailored roadmaps for scaling.",
        "Operational Support: Back-office integration.",
        "Consulting: Expert regulatory guidance.",
        "Performance Tracking: Data-driven reporting.",
      ],
    },
    {
      id: 4,
      title: "Our Values",
      content:
        "Transparency, accountability, and client-centricity are the pillars of Work Hance LLP. We believe in building long-term relationships through ethical practices and a relentless commitment to quality.",
    },
    {
      id: 5,
      title: "How We Work",
      content:
        "Our methodology is rooted in deep analysis and open communication. We move through distinct phases to ensure meticulous implementation and performance.",
      cardContent: [
        "Discovery: Deep-dive into business bottlenecks.",
        "Blueprint: Creation of a risk-mitigated strategy.",
        "Execution: Deployment of professional teams.",
        "Optimization: Continuous feedback loops.",
      ],
    },
    {
      id: 6,
      title: "Why Choose Us",
      content:
        "By choosing Work Hance LLP, you gain a partner that understands the nuances of modern business, offering the agility of a startup with professional rigor.",
    },
  ];

  return (
    <div
      key={item.id}
      className={`py-20 px-6 transition-colors duration-500  ${
        index % 2 === 1 ? "bg-slate-50/50" : "bg-white"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 ${
          index % 2 === 1 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Content Side */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            {/* Subtle Tagline */}
            <span className="text-sky-600 font-semibold tracking-wider text-sm uppercase">
              {item.tagline}
            </span>

            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-white shadow-sm border border-slate-100 rounded-lg">
                {item.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {item.title}
              </h2>
            </div>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed font-light">
            {item.content}
          </p>

          {/* Decorative Divider */}
          <div className="w-12 h-1 bg-sky-500/20 rounded-full"></div>
        </div>

        {/* Image Side - Refined Small Frame */}
        <div className="flex-1 flex justify-center relative">
          <div className="group relative w-full max-w-[440px]">
            {" "}
            {/* Controlled width */}
            {/* Animated Background Blur */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200 to-indigo-100 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <img
                src={item.img}
                alt={item.title}
                className="w-full aspect-[4/5] object-cover transition-scale duration-700 group-hover:scale-110"
              />
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            {/* Professional Accent Element */}
            <div
              className={`absolute -bottom-4 ${
                index % 2 === 1 ? "-left-4" : "-right-4"
              } hidden lg:block w-20 h-20 bg-sky-50 rounded-full -z-10`}
            ></div>
          </div>
          <div className="w-[90%] absolute left-[50%] bottom-0 translate-x-[-50%]  bg-white py-5 px-3 rounded-2xl">
            <p>{sections[index]?.content}</p>
            <div className="flex flex-col items-start gap-2 mt-2">
            {sections[index]?.cardContent?.map((one, ind) => {
              return (
                <div className="flex  items-center gap-2">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-black group-hover:bg-peach-500 transition-colors inline-block" />

                  {/* The Text Content */}
                  <p className="text-gray-700 leading-relaxed font-medium tracking-tight">
                    {one}
                  </p>
                </div>
              );
            })}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsDetail;
