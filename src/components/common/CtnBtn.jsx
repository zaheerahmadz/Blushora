import React from "react";

const CtnBtn = () => {
  return (
    <button className="relative w-46 h-15 cursor-pointer font-semibold text-white overflow-hidden group border-none rounded-md">
      {/* Sliding background (bottom-to-top) */}
      <span className="absolute bottom-0 left-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-md"></span>

      {/* Button text */}
      <span className="relative z-10 text-lg  group-hover:text-red-500 transition-colors duration-500">
        Explore More
      </span>

      {/* Default red background */}
      <span className="absolute inset-0 bg-red-500 rounded-md z-[-1]"></span>
    </button>
  );
};

export default CtnBtn;
