import React from "react";
import { Link2, X, ChevronRight } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import toast from "react-hot-toast";
function ShareModal({ openShareModal, setOpenShareModal, title }) {
  if (!openShareModal) return null;

  let url = encodeURIComponent(window.location.href);
  let text = encodeURIComponent(`Check out this job! ${title}`);

  const shareOptions = [
    {
      name: "WhatsApp",
      description: "Share with your contacts",
      icon: <SiWhatsapp size={24} />,
      link: `https://api.whatsapp.com/send?text=${text}%20${url}`,
      color: "text-green-500",
      bg: "hover:bg-green-50",
      border: "hover:border-green-200",
    },
    {
      name: "Twitter",
      description: "Post to your timeline",
      icon: <FaTwitter size={24} />,
      link: `https://twitter.com/intent/tweet?text=${text}%20${url}`,
      color: "text-sky-400",
      bg: "hover:bg-sky-50",
      border: "hover:border-sky-200",
    },
    {
      name: "LinkedIn",
      description: "Share with your professional network",
      icon: <FaLinkedinIn size={24} />,
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      color: "text-blue-700",
      bg: "hover:bg-blue-50",
      border: "hover:border-blue-200",
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);

    toast.success("Link copied to clipboard");
  };

  return (
    <div
      onClick={() => {
        setOpenShareModal(false);
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300"
      >
        <div className="px-6 pt-6 pb-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Share Job
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Spread the word about this opportunity
            </p>
          </div>
          <button
            onClick={() => setOpenShareModal(false)}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all active:scale-95"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        <div className="px-6 py-4 flex flex-col gap-3">
          {shareOptions.map((option) => (
            <a
              key={option.name}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center p-4 rounded-2xl border-2 border-gray-50 bg-gray-50/50 transition-all duration-200 ${option.bg} ${option.border} active:scale-[0.98]`}
            >
              <div
                className={`p-3 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow ${option.color}`}
              >
                {option.icon}
              </div>

              <div className="ml-4 flex-1">
                <h3 className="font-bold text-gray-800">{option.name}</h3>
                <p className="text-xs text-gray-500">{option.description}</p>
              </div>

              <ChevronRight
                size={18}
                className="text-gray-300 group-hover:text-gray-500 transition-colors"
              />
            </a>
          ))}
        </div>

        {/* Footer / Copy Link Section */}
        <div className="bg-gray-50 p-6 mt-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
            Or copy link
          </label>
          <div className="relative group">
            <input
              type="text"
              readOnly
              value={window.location.href}
              className="w-full bg-white border-2 border-gray-100 rounded-xl py-3 pl-4 pr-24 text-sm text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors shadow-inner"
            />
            <button
              onClick={copyToClipboard}
              className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-200"
            >
              <Link2 size={16} />
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
