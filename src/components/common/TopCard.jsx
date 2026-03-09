import React from "react";
import { FaTruck, FaPhone, FaHeadset, FaSyncAlt } from "react-icons/fa";
const TopCard = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl px-6 py-6 flex flex-wrap justify-between items-center gap-4  relative z-10">
      <div className="flex flex-1 min-w-[220px]  items-center gap-3">
        <div className="bg-red-500 text-white p-3 rounded-full">
          <FaTruck size={18} />
        </div>
        <div>
          <h4 className="font-semibold text-sm sm:text-base">Free Shipping</h4>
          <p className="text-xs sm:text-sm text-gray-500">Worldwide Delivery</p>
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
  );
};

export default TopCard;
