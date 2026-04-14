import React from 'react';
import { X, CheckCircle2, Quote } from 'lucide-react';

function DetailedBenefitCard({ data, setIsDetail, isDetail }) {
  if (!isDetail || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={() => setIsDetail(false)}
      ></div>

      {/* Main Card */}
      <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-8 shadow-2xl transition-all duration-300">
        
        {/* Close Icon */}
        <button 
          onClick={() => setIsDetail(false)}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col">
          {/* Header Section: Icon & Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 shadow-sm">
              {data.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{data.title}</h3>
              <p className="text-sm font-medium text-indigo-600 tracking-wide">Company Culture</p>
            </div>
          </div>

          {/* Long Description */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-gray-700">
              {data.longDesc}
            </p>
          </div>

          {/* Perks Section */}
          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Key Benefits</h4>
            <ul className="grid grid-cols-1 gap-3">
              {data.perks.map((perk, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Culture Insight Box */}
          <div className="mt-8 flex gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
            <Quote size={20} className="text-indigo-300 shrink-0 mt-1" />
            <p className="text-sm italic text-slate-600 leading-snug">
              {data.cultureInsight}
            </p>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => setIsDetail(false)}
            className="mt-8 w-full rounded-xl bg-indigo-600 py-4 font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-[0.95] duration-300"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailedBenefitCard;