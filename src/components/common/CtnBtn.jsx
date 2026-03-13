import React from "react";
import { useNavigate } from "react-router-dom";

const CtnBtn = ({
  children,
  className = "",
  bg = "bg-red-500",
  hoverText = "group-hover:text-red-500",
  to = null,
  onClick = null, // allow external onClick
}) => {
  const navigate = useNavigate();

  const base =
    "relative inline-flex items-center justify-center cursor-pointer font-semibold text-white overflow-hidden group border-none rounded-md transition-all duration-300";

  const defaultSize = "px-6 py-3 text-lg";

  const handleClick = (e) => {
    // call external onClick first
    if (onClick) onClick(e);

    // navigate if `to` is provided
    if (to) navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className={`${base} ${defaultSize} ${className}`}
    >
      <span className={`absolute inset-0 ${bg} rounded-md z-0`}></span>

      <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-md z-10"></span>

      <span
        className={`relative z-20 transition-colors duration-500 ${hoverText}`}
      >
        {children}
      </span>
    </button>
  );
};

export default CtnBtn;
