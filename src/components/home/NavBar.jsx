import React, { useState } from "react";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [SearchIon, setSearchIon] = useState(false);
  const [MobileShow, setMobileShow] = useState(false);

  return (
    <section className="w-full p-5 relative">
      <nav className="container mx-auto flex items-center justify-between lg:justify-center relative">
        {/* Left menu */}
        <ul className="hidden lg:flex absolute left-0 space-x-6 text-gray-700 font-semibold h-full items-center">
          <li className="hover:text-red-500">Collection</li>

          <li className="hover:text-red-500">
            <Link to="/shop">Shop</Link>
          </li>

          <li className="hover:text-red-500">
            <Link to="/about">About</Link>
          </li>

          <li className="hover:text-red-500">
            <Link to="/blog">Blog</Link>
          </li>

          <li className="hover:text-red-500">
            <Link to="/magazine">Magazine</Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Link to={"/"}>
            <img src="./logo.png" alt="Logo" width={150} />
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-6 ml-auto">
          <div className="hidden lg:flex items-center gap-6 text-black">
            <Search
              onClick={() => setSearchIon(!SearchIon)}
              size={22}
              className="hover:text-red-500 cursor-pointer"
            />
            <Heart size={22} className="hover:text-red-500 cursor-pointer" />
            <User size={22} className="hover:text-red-500 cursor-pointer" />
            <div className="relative">
              <ShoppingBag
                size={22}
                className="hover:text-red-500 cursor-pointer"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                4
              </span>
            </div>
          </div>

          {/* Mobile icon */}
          <Menu
            onClick={() => setMobileShow(true)}
            className="block lg:hidden cursor-pointer"
            size={26}
          />
        </div>

        {/* Desktop search */}
        {SearchIon && (
          <div className="absolute top-16 right-5 hidden lg:block">
            <div className="relative w-72 bg-white shadow-lg p-5 rounded-md">
              <input
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                type="text"
                placeholder="Search Products ..."
              />
              <Search
                size={15}
                className="absolute right-7 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
        )}
      </nav>

      {/* ✅ Mobile Panel */}
      {MobileShow && (
        <div className="fixed inset-0 p-5 bg-white z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <img src="./logo.png" alt="Logo" width={130} />
            <X
              size={28}
              className="cursor-pointer"
              onClick={() => setMobileShow(false)}
            />
          </div>

          {/* Search */}
          <div className="p-5">
            <div className="relative">
              <input
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                type="text"
                placeholder="Search Products..."
              />
              <Search
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-8 text-lg font-semibold text-gray-700 px-5">
            <li className="hover:text-red-500">Collection</li>
            <li className="hover:text-red-500">Shop</li>
            <li className="hover:text-red-500">About</li>
            <li className="hover:text-red-500">Blog</li>
            <li className="hover:text-red-500">Magazine</li>
          </ul>
          <div className="flex p-5 w-full justify-between ">
            <div className="flex gap-5">
              {" "}
              <Heart size={22} className="hover:text-red-500 cursor-pointer" />
              <User size={22} className="hover:text-red-500 cursor-pointer" />
            </div>
            <div className="relative me-1">
              <ShoppingBag
                size={22}
                className="hover:text-red-500 cursor-pointer"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                4
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NavBar;
