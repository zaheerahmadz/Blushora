import React, { useState } from "react";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import Wishlist from "../../pages/Seller/Wishlist";
import Cart from "../../pages/Seller/Cart";

const NavBar = () => {
  const [SearchIon, setSearchIon] = useState(false);
  const [UserIon, setUserIon] = useState(false);
  const [MobileShow, setMobileShow] = useState(false);
  const closeMenu = () => setMobileShow(false);
  const { cart, wishlist } = useContext(CartContext);

  return (
    <section className="w-full p-5 bg-white sticky top-0 z-50">
      <nav className="container  mx-auto flex items-center justify-between lg:justify-center relative">
        <ul className="hidden lg:flex absolute left-0 space-x-6 text-gray-700 font-semibold h-full items-center">
          <li className="hover:text-red-500">
            <Link to="/collection">Collection</Link>
          </li>
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

        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Link to={"/"}>
            <img src="/logo.png" alt="Logo" className="h-8" />
          </Link>
        </div>

        <div className="flex items-center space-x-6 ml-auto">
          <div className="hidden z-50 lg:flex items-center gap-6 text-black">
            <Search
              onClick={() => setSearchIon(!SearchIon)}
              size={22}
              className="hover:text-red-500  cursor-pointer"
            />
            <Link to="/wishlist" className="relative">
              <Heart size={22} className="hover:text-red-500 cursor-pointer" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <User
              onClick={() => setUserIon(!UserIon)}
              size={22}
              className="hover:text-red-500 cursor-pointer"
            />
            {UserIon && (
              <div className="absolute right-0 mt-30 w-40 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                <Link to={"/signup"}>
                  <button className="w-full hover:text-white hover:bg-gradient-to-r from-red-500 to-pink-500 cursor-pointer text-left px-4 py-2 text-sm hover:bg-gray-100 transition">
                    Signup
                  </button>
                </Link>

                <hr className="border-gray-200" />
                <Link to={"/login"}>
                  <button className="w-full hover:text-white hover:bg-gradient-to-r from-red-500 to-pink-500 cursor-pointer text-left px-4 py-2 text-sm hover:bg-gray-100 transition">
                    Login
                  </button>
                </Link>
              </div>
            )}
            <div className="relative">
              <Link to="/cart" className="relative">
                <ShoppingBag
                  size={22}
                  className="hover:text-red-500 cursor-pointer"
                />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.reduce((acc, item) => acc + item.qty, 0)}
                  </span>
                )}
              </Link>
            </div>
          </div>

          <Menu
            onClick={() => setMobileShow(true)}
            className="block lg:hidden cursor-pointer"
            size={26}
          />
        </div>

        {SearchIon && (
          <div className="absolute top-16 right-5 hidden lg:block">
            <div className="relative w-72 z-50 bg-white shadow-lg p-5 rounded-md">
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

      {MobileShow && (
        <div className="fixed inset-0 p-5 bg-white z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <Link to={"/"}>
              <img src="./logo.png" alt="Logo" width={150} />
            </Link>
            <X
              size={28}
              className="cursor-pointer"
              onClick={() => setMobileShow(false)}
            />
          </div>

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

          <ul className="flex flex-col gap-8 text-lg font-semibold text-gray-700 px-5">
            <Link
              to="/collection"
              onClick={closeMenu}
              className="hover:text-red-500"
            >
              Collection
            </Link>
            <Link to="/shop" onClick={closeMenu} className="hover:text-red-500">
              Shop
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="hover:text-red-500"
            >
              About
            </Link>
            <Link to="/blog" onClick={closeMenu} className="hover:text-red-500">
              Blog
            </Link>
            <Link
              to="/magazine"
              onClick={closeMenu}
              className="hover:text-red-500"
            >
              Magazine
            </Link>
          </ul>
          <div className="flex p-5 w-full justify-between ">
            <div className="flex gap-5">
              {" "}
              <Link to={"/wishlist"}>
                <Heart
                  onClick={closeMenu}
                  size={22}
                  className="hover:text-red-500 cursor-pointer"
                />
              </Link>
              <Link to={"/login"}>
                <User
                  onClick={closeMenu}
                  size={22}
                  className="hover:text-red-500 cursor-pointer"
                />
              </Link>
            </div>
            <div className="relative me-1">
              <Link to={"/cart"}>
                <ShoppingBag
                  onClick={closeMenu}
                  size={22}
                  className="hover:text-red-500 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NavBar;
