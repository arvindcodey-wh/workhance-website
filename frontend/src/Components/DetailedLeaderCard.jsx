import React from 'react';
import { X, Award, Briefcase, Quote } from 'lucide-react';

function DetailedLeaderCard({ data, setIsDetail, isDetail }) {
  if (!isDetail || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" 
        onClick={() => setIsDetail(false)}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl transition-all animate-in fade-in zoom-in duration-300 flex flex-col">
        
        {/* Close Button - High Z-Index to stay above scrolling content */}
        <button 
          onClick={() => setIsDetail(false)}
          className="absolute right-4 top-4 z-50 rounded-full bg-white/80 backdrop-blur-md p-2 text-gray-500 shadow-sm hover:bg-gray-200 hover:text-gray-800 transition-all active:scale-95"
        >
          <X size={20} />
        </button>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto md:overflow-hidden">
          
          {/* Left Sidebar: Fixed position on desktop, scrolls with page on mobile */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 shrink-0">
            <div className="relative">
              <div className="relative h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <img 
                  src={data.url} 
                  alt={data.name} 
                  className=""
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">{data.name}</h3>
              <p className="mt-1 text-sm font-semibold text-blue-600 uppercase tracking-widest">{data.role}</p>
              
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                  <Briefcase size={12} /> {data.exp} Exp
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                  <Award size={12} /> Verified
                </span>
              </div>
            </div>
          </div>

          {/* Right Content: Scrollable area */}
          <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-white custom-scrollbar">
            <div className="relative">
              <Quote className="absolute -left-2 -top-2 h-8 w-8 text-blue-100 -z-0" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Professional Overview</h4>
                <p className="text-gray-600 leading-relaxed text-lg italic">
                  "{data.desc}"
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Detailed Biography</h4>
              <p className="text-gray-700 leading-relaxed">
                {data.long_desc}
              </p>
            </div>

            {/* Footer Action */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between pb-4">
              <div className="flex items-center gap-1">
                 <div className="h-1.5 w-10 rounded-full bg-blue-600"></div>
                 <div className="h-1.5 w-3 rounded-full bg-blue-200"></div>
              </div>
              <button 
                onClick={() => setIsDetail(false)}
                className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl bg-gray-900 font-bold text-white shadow-lg hover:bg-blue-600 transition-all active:scale-95"
              >
                Close Profile
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DetailedLeaderCard;