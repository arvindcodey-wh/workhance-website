import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SideNavbar({ isOpen, onClose }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="self-end p-2 text-slate-600 hover:bg-slate-100 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul className="mt-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  onClick={onClose}
                  className={`block text-lg font-semibold p-3 rounded-lg transition-colors ${
                    isActive(link.path) 
                    ? "bg-sky-50 text-sky-500" 
                    : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Action Button */}
          <div className="mt-auto pt-6 border-t border-slate-100">
            <button
              className="w-full bg-sky-500 text-white py-3 rounded-xl font-bold hover:bg-sky-600 transition-colors"
              onClick={() => {
                // You can trigger your GetStartedModal logic here if needed
                onClose();
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNavbar;