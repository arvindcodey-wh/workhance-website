import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GetStartedModal from "./GetStartedModal";
import SideNavbar from "./SideNavbar"; // Import the new component

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false); // New State

  return (
    <>
      <nav className="bg-white border-b border-gray-100 px-6 py-4 md:px-12 flex justify-between items-center sticky top-0 z-50">
        
        {/* Brand & Tagline */}
        <Link to={'/'} className="flex items-center gap-3 group">
          <img 
            alt="Work Hance" 
            className="object-contain h-[56px] w-auto transition-transform group-hover:scale-105" 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WmK2dNVlt1ol7M3pXbugkRMtLV7hWh.png" 
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-slate-800 leading-tight tracking-tight">
              Work Hance
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex gap-10 text-base font-semibold tracking-tight">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about-us" },
              { name: "Services", path: "/services" },
              { name: "Careers", path: "/careers" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`relative pb-2 transition-colors duration-300 ${
                    isActive(link.path) ? "text-sky-500" : "text-slate-600 hover:text-sky-500"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-sky-500 rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <button className="nav-btn" onClick={() => setShowGetStartedModal(true)}>
            Get Started
          </button>
        </div>

        {/* Mobile Toggle - Click to open Sidebar */}
        <div 
          className="lg:hidden text-slate-800 cursor-pointer p-2 hover:bg-slate-100 rounded-lg"
          onClick={() => setIsSideNavOpen(true)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m11 6H4" />
          </svg>
        </div>
      </nav>

      {/* Side Navigation for Mobile */}
      <SideNavbar 
        isOpen={isSideNavOpen} 
        onClose={() => setIsSideNavOpen(false)} 
      />

      <GetStartedModal
        isOpen={showGetStartedModal}
        onClose={() => setShowGetStartedModal(false)}
      />
    </>
  );
}

export default Navbar;