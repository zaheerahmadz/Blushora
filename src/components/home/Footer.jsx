import React from "react";
import {
  FaTruck,
  FaPhone,
  FaHeadset,
  FaSyncAlt,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 my-10 relative">
      {/* Top Info Cards */}
      {/* Top Info Cards */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl px-6 py-6 flex flex-wrap justify-between items-center gap-4 -mt-12 relative z-10">
        {/* Card */}
        <div className="flex flex-1 min-w-[220px] items-center gap-3">
          <div className="bg-red-500 text-white p-3 rounded-full">
            <FaTruck size={18} />
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base">
              Free Shipping
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              Worldwide Delivery
            </p>
          </div>
        </div>

        <div className="flex flex-1 min-w-[220px] items-center gap-3">
          <div className="bg-red-500 text-white p-3 rounded-full">
            <FaPhone size={18} />
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base">Helpline</h4>
            <p className="text-xs sm:text-sm text-gray-500">+91 1234567890</p>
          </div>
        </div>

        <div className="flex flex-1 min-w-[220px] items-center gap-3">
          <div className="bg-red-500 text-white p-3 rounded-full">
            <FaHeadset size={18} />
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base">24×7</h4>
            <p className="text-xs sm:text-sm text-gray-500">Customer Support</p>
          </div>
        </div>

        <div className="flex flex-1 min-w-[220px] items-center gap-3">
          <div className="bg-red-500 text-white p-3 rounded-full">
            <FaSyncAlt size={18} />
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base">Returns</h4>
            <p className="text-xs sm:text-sm text-gray-500">Instant Exchange</p>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 pb-6">
        {/* Store Info */}
        <div className="space-y-2">
          <h4 className="text-2xl font-bold text-red-500">STORE</h4>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <FaGlobe /> Mumbai, MH, India
          </p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <FaClock /> 09:00 am - 05:00 pm
          </p>
        </div>

        {/* Reach Us */}
        <div className="space-y-2">
          <h4 className="text-2xl font-bold text-red-500">REACH US</h4>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <FaPhone /> +1234567890
          </p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <FaGlobe /> johndoe@example.com
          </p>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h4 className="text-2xl font-bold text-red-500">INFO</h4>
          <ul className="text-gray-500 text-sm space-y-1">
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
            <li className="hover:text-red-500 cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-red-500 cursor-pointer">FAQ</li>
            <li className="hover:text-red-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-2">
          <h4 className="text-2xl font-bold text-red-500">SHARE WITH US</h4>
          <div className="flex gap-3 text-gray-500">
            <a href="#">
              <FaInstagram className="hover:text-red-500" size={20} />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-red-500" size={20} />
            </a>
            <a href="#">
              <FaGlobe className="hover:text-red-500" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm pb-6">
        © Copyright 2025 Blushora Cosmetics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
