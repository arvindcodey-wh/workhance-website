import React from "react";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#05192D] text-white pb-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[1px] bg-blue-400/20 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                {/* Logo Placeholder */}
                <img
                  alt="Work Hance - Professional Talent Acquisition"
                  className="object-contain h-[56px] w-auto transition-transform group-hover:scale-105"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WmK2dNVlt1ol7M3pXbugkRMtLV7hWh.png"
                />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Work Hance</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Delivering reliable business solutions across technology, talent,
              and finance to help organizations grow with confidence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/workhance/"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-all"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://www.instagram.com/workhance.in/"
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-600 transition-all"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-blue-400 font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <Link to={"/"}>
                <li className="hover:text-white transition-colors mb-2">
                  Home
                </li>
              </Link>
              <Link to={"/about-us"}>
                <li className="hover:text-white transition-colors mb-2">
                  About Us
                </li>
              </Link>
              <Link to={"/"}>
                <li className="hover:text-white transition-colors mb-2">
                  Services
                </li>
              </Link>
              <Link to={"/careers"}>
                <li className="hover:text-white transition-colors mb-2">
                  Career
                </li>
              </Link>
              <Link to={"/"}>
                <li className="hover:text-white transition-colors mb-2">
                  Contact
                </li>
              </Link>

              {/* <li className="hover:text-white transition-colors">About Us</li>
              <li className="hover:text-white transition-colors">Services</li>
              <li className="hover:text-white transition-colors">Career</li>
              <li className="hover:text-white transition-colors">Contact</li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-blue-400 font-semibold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  IT Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Staffing & RPO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Finance & Accounting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-blue-400 font-semibold text-lg mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>+1 332 287 1906</li>
              <li>
                <a href="mailto:info@workhance.in" className="hover:text-white">
                  info@workhance.in
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@workhance.in"
                  className="hover:text-white"
                >
                  careers@workhance.in
                </a>
              </li>
              <li className="leading-relaxed">
                575 5th Avenue, New York, <br /> New York 10017
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-5 pt-8 border-t border-white/5 text-center text-gray-400 text-sm">
          <p>© 2026 Work Hance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
