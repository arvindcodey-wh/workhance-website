import React from 'react';
import { X, Award, Briefcase, Quote } from 'lucide-react';

function DetailedLeaderCard({ data, setIsDetail, isDetail }) {
  if (!isDetail || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-6 py-10  ">
     
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity" 
        onClick={() => setIsDetail(false)}
      ></div>


      <div className="relative w-[80%] max-h-[90vh]    overflow-hidden rounded-3xl bg-white shadow-2xl transition-all animate-in fade-in zoom-in duration-300">
        
       
        <button 
          onClick={() => setIsDetail(false)}
          className="absolute right-6 top-6 z-10 rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-all active:scale-95"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row w-full">
          
          
          <div className="relative w-full md:w-2/5 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-4  shadow-xl">
                <img 
                  src={data.url} 
                  alt={data.name} 
                  className="object-cover"
                />
              </div>
              {/* <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-600 opacity-20 blur-sm"></div> */}
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">{data.name}</h3>
              <p className="mt-1 text-sm font-semibold text-blue-600 uppercase tracking-widest">{data.role}</p>
              
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                  <Briefcase size={12} /> {data.exp} Exp
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                  <Award size={12} /> Verified
                </span>
              </div>
            </div>
          </div>

       
          <div className="flex-1 p-8 md:p-12 overflow-y-auto  md:max-h-none ">
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
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex -space-x-2">
                 {/* Decorative elements or social links could go here */}
                 <div className="h-2 w-12 rounded-full bg-blue-600"></div>
                 <div className="h-2 w-4 rounded-full bg-blue-200 ml-1"></div>
              </div>
              <button 
                onClick={() => setIsDetail(false)}
                className="px-8 py-3 rounded-xl bg-gray-900 font-bold text-white shadow-lg hover:bg-blue-600 hover:shadow-blue-200 transition-all active:scale-95"
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