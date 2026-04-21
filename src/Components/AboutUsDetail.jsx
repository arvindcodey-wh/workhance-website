import React from "react";
import { sections } from "../utils/AboutUsData";
function AboutUsDetail({ index, item }) {
  
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
                className="w-full aspect-square object-cover  transition-scale duration-700 group-hover:scale-110"
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
          <div className="w-[90%] absolute left-[50%] bottom-0 translate-x-[-50%]  bg-gray-200/90 py-5 px-3 rounded-2xl">
            {/* <p>{sections[index]?.content}</p> */}
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
