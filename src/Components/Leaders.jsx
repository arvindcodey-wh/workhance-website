import React, { useState } from "react";
import { Award, Briefcase } from "lucide-react";
import DetailedLeaderCard from "./DetailedLeaderCard";



function Leaders() {
  const [isDetail,setIsDetail]=useState(false)

  const [currInd,setcurrInd]=useState(0)

  const leaders = [
    {
      name: "Jay Prakash",
      role: "Chief Executive Officer (CEO)",
      url:'https://i.ibb.co/WWLHPNQ4/jay-sir.jpg',
      // image: jayImg,
      
      exp: "15+ Years",
      desc: "Driving the overall vision and strategic direction of Work Hance, Jay Prakash leads business growth, global client partnerships, and service expansion across multiple domains. He ensures that the organization consistently delivers high-quality, reliable, and cost-effective solutions while maintaining strong long-term client relationships.",
      long_desc:"Jay Prakash is the visionary leader behind Work Hance, bringing over 15 years of extensive experience across Staffing, Recruitment Process Outsourcing (RPO), and Accounting services. With a strong track record of working with large-scale and global clients, he has consistently delivered high-quality, reliable, and cost-effective solutions aligned with business goals. As the CEO, he defines the strategic direction of the company and drives overall business growth, global expansion, and long-term client partnerships. His deep understanding of recruitment, workforce strategy, and financial operations enables organizations to scale efficiently while maintaining operational excellence.He is known for his leadership mindset, decision-making ability, and commitment to quality delivery. Under his guidance, Work Hance continues to evolve as a fast-growing and trusted partner for talent and financial solutions across international markets"
    },
    {
      name: "Vinayak Kumar",
      role: "Director",
      url:'https://i.ibb.co/XrPNbnmb/vinayak-sir.jpg',
      // image: vinayakImg,
      exp: "9+ Years",
      desc: "Leading core business operations and recruitment strategy, Vinayak plays a key role in scaling client success and strengthening delivery performance. He focuses on building strong partnerships, optimizing hiring processes, and ensuring consistent, high-quality outcomes across all recruitment functions.",
      long_desc:"Vinayak Kumar is a key leader at Work Hance, bringing over 9 years of experience in recruitment, staffing, outsourcing, and RPO services. He has played a significant role in acquiring and managing high-value clients while consistently delivering strong and measurable hiring outcomes.As Director, he leads core business operations and recruitment strategy, ensuring that hiring processes are efficient, scalable, and aligned with client expectations. His expertise lies in talent acquisition, client relationship management, and building structured hiring systems that drive consistent performance.Vinayak is known for his execution-focused approach and ability to deliver results in dynamic environments. His leadership continues to strengthen Work Hance’s position as a reliable and performance-driven recruitment partner."
    },
    {
      name: "Anand Prakash",
      role: "Vice President",
      url:'https://i.ibb.co/yB4NY67b/Anand-sir.jpg',
      // image: anandImg,
      exp: "5+ Years",
      desc:"Overseeing operations and end-to-end client delivery, Anand manages key projects across Staffing, RPO, Accounting, and Digital Marketing. He ensures efficient execution, performance-driven results, and high client satisfaction while maintaining strong control over operational workflows.",
      long_desc: "Anand Prakash is a dynamic and result-driven leader at Work Hance, with strong expertise across Staffing, RPO, US Finance & Accounting, and Digital Marketing. Over the years, he has successfully handled multiple high-value clients and delivered exceptional, cost-effective results across different service domains.As Vice President, he oversees operations and end-to-end client delivery, ensuring that all projects are executed smoothly, efficiently, and with a strong focus on performance and client satisfaction. His hands-on leadership style and deep operational understanding allow him to manage complex workflows and deliver consistent outcomes.Anand’s ability to lead teams, optimize processes, and maintain strong client relationships makes him a key driving force behind the company’s day-to-day success and overall growth.",
    },
    {
      name: "Arvind Kashyap",
      role: "Chief Technology Officer (CTO)",
      url:'https://i.ibb.co/W4YnCW4d/arvind.png',
      // image: arvindImg,
      exp: "4+ Years",
      desc: "Driving the technology vision at Work Hance, Arvind leads innovation, scalable system development, and all technical initiatives. He focuses on building secure, high-performance, and future-ready solutions while continuously exploring advanced technologies like AI and automation.",
      long_desc:"Arvind Kashyap leads the technology vision at Work Hance, bringing strong expertise in IT, cloud computing, and modern development frameworks. He is responsible for managing all internal systems and client-facing technology solutions, ensuring scalability, security, and performance across all platforms.With experience working in reputed organizations and a solid background in areas like AWS, project management, and system architecture, he ensures that technology aligns with business objectives and supports long-term growth.As CTO, Arvind is also focused on future-ready innovation, actively exploring and implementing advanced technologies such as AI and automation. His forward-thinking approach is helping shape Work Hance into a tech-driven organization prepared for the evolving digital landscape."
    },
  ];


  return (
    <section className="py-24 bg-white">
      <div className="w-[90%] max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Our Leaders</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full" />
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          { 
          leaders.map((leader, index) => (
            <div
              onClick={()=>{
                setIsDetail(true)
                setcurrInd(index)
              }} 
              key={index} 
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col items-center text-center relative overflow-hidden"
            >
             
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-50 rounded-full group-hover:scale-[3] transition-transform duration-700 -z-0 opacity-40" />

             
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
        <DetailedLeaderCard data={leaders[currInd]}  setIsDetail={setIsDetail} isDetail={isDetail}></DetailedLeaderCard>
      </div>
    </section>
  );
}

export default Leaders;