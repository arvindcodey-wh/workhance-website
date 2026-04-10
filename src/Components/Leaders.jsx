import React from "react";
import { Award, Briefcase } from "lucide-react";



function Leaders() {
  const leaders = [
    {
      name: "Jay Prakash",
      role: "Chief Executive Officer (CEO)",
      url:'https://i.ibb.co/WWLHPNQ4/jay-sir.jpg',
      // image: jayImg,
      
      exp: "15+ Years",
      desc: "A seasoned leader with over 15 years of experience in the Staffing & RPO industry. Jay Prakash brings deep domain expertise and strategic vision, driving business growth and building long-term client partnerships.",
    },
    {
      name: "Vinayak",
      role: "Director",
      url:'https://i.ibb.co/XrPNbnmb/vinayak-sir.jpg',
      // image: vinayakImg,
      exp: "9+ Years",
      desc: "An experienced recruitment professional with strong expertise in talent acquisition and client management. Vinayak has consistently delivered high-quality hiring solutions across multiple industries.",
    },
    {
      name: "Anand",
      role: "Vice President",
      url:'https://i.ibb.co/yB4NY67b/Anand-sir.jpg',
      // image: anandImg,
      exp: "5+ Years",
      desc: "Specializing in Staffing, RPO, and US Finance & Accounting services, Anand plays a key role in operational execution and client delivery, ensuring efficient processes for global clients.",
    },
    {
      name: "Arvind",
      role: "Chief Technology Officer (CTO)",
      url:'https://i.ibb.co/W4YnCW4d/arvind.png',
      // image: arvindImg,
      exp: "4+ Years",
      desc: "Leading the technology vision at Work Hance, Arvind focuses on building scalable IT solutions and driving digital innovation across modern technology frameworks.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-[90%] max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Our Leaders</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full" />
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Decorative Background Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-50 rounded-full group-hover:scale-[3] transition-transform duration-700 -z-0 opacity-40" />

              {/* Circle Image Container */}
              <div className="relative z-10 w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 group-hover:border-sky-100 transition-colors">
                <img src={leader.url} alt="" />
              </div>

              {/* Leader Info */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {leader.name}
                </h3>
                <p className="text-sky-600 font-bold text-xs uppercase tracking-wider mb-4">
                  {leader.role}
                </p>
                
                {/* Experience Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full text-slate-500 text-[10px] font-bold mb-4 border border-slate-100">
                  <Briefcase className="w-3 h-3 text-sky-500" />
                  {leader.exp} EXP
                </div>

                <p className="text-slate-500 text-sm leading-relaxed font-medium px-2">
                  {leader.desc}
                </p>
              </div>

      
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leaders;