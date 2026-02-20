import React from "react";

const CtnBtn = ({
  children,
  className = "",
  bg = "bg-red-500",
  hoverText = "group-hover:text-red-500",
}) => {
  const base =
    "relative inline-flex items-center justify-center cursor-pointer font-semibold text-white overflow-hidden group border-none rounded-md transition-all duration-300";

  const defaultSize = "px-6 py-3 text-lg"; // default but overridable

  return (
    <button className={`${base} ${defaultSize} ${className}`}>
      {/* hover slide */}
      <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-md"></span>

      {/* content */}
      <span
        className={`relative z-10 transition-colors duration-500 ${hoverText}`}
      >
        {children}
      </span>

      {/* dynamic background */}
      <span className={`absolute inset-0 ${bg} rounded-md z-[-1]`}></span>
    </button>
  );
};

export default CtnBtn;
