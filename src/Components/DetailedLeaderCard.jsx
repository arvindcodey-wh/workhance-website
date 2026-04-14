import React from 'react';
import { X } from 'lucide-react'; 
function DetailedLeaderCard({ data, setIsDetail, isDetail }) {
  if (!isDetail || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
     
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={() => setIsDetail(false)}
      ></div>

      {/* Card Content */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-2xl duration-300">
        
       
        <button 
          onClick={() => setIsDetail(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center">
        
          <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-blue-50 shadow-md">
            <img 
              src={data.url} 
              alt={data.name} 
              className=" "
            />
          </div>

         
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-bold text-gray-900">{data.name}</h3>
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">{data.role}</p>
          </div>

          
          <div className="mt-2 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {data.exp} Experience
          </div>

        
          <div className="my-6 h-px w-full bg-gray-100"></div>

         
          <div className="text-center">
            <p className="text-sm leading-relaxed text-gray-600">
              {data.desc}
            </p>
          </div>

          <button 
            onClick={() => setIsDetail(false)}
            className="mt-8 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition-all hover:bg-gray-800 active:scale-[0.90] duration-300"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailedLeaderCard;