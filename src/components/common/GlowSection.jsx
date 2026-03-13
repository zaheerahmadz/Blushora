import React, { useState, useContext } from "react";
import CtnBtn from "../common/CtnBtn";
import GlowProducts from "../../constant/GlowProducts";
import { Link } from "react-router-dom";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";

const GlowSection = () => {
  const { addToCart, toggleWishlist, wishlist } = useContext(CartContext);
  const [toast, setToast] = useState({ message: "", show: false });

  // Toast function
  const showToast = (message) => {
    setToast({ message, show: true });
    setTimeout(() => setToast({ message, show: false }), 2000);
  };

  // Handle Add to Cart
  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    addToCart(item);
    showToast("Product added to cart!");
  };

  // Handle Wishlist
  const handleWishlist = (e, item) => {
    e.stopPropagation();
    toggleWishlist(item);
    showToast(
      wishlist.find((p) => p.id === item.id)
        ? "Removed from wishlist!"
        : "Added to wishlist!",
    );
  };

  return (
    <section className="py-12 relative">
      {/* Toast message */}
      {toast.show && (
        <div className="fixed top-5 right-5 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-3 animate-slide-in animate-fade-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="font-medium">{toast.message}</span>
        </div>
      )}

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl mb-8">
        The Glow <span className="text-red-500">Everyone Wants</span>
      </h2>

      <div className="w-full bg-[url('/love.png')] bg-cover bg-center bg-no-repeat py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          <div className="relative w-full lg:w-5/12 rounded-2xl overflow-hidden shadow-xl group">
            <img
              src="/images/lifestyle-3.jpg"
              alt="Glow Lifestyle"
              className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-100">
                Celebrate Your Glow
              </h2>
              <p className="py-3 text-sm sm:text-base">
                Skin That Feels as Good as It Looks
              </p>
              <Link to={"/collection"}>
                <CtnBtn className="bg-red-500 px-5 py-2 !w-auto !inline-block rounded-xl text-sm">
                  Explore More
                </CtnBtn>
              </Link>
            </div>
          </div>

          <div className="lg:w-7/12 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
            {GlowProducts.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 relative rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="relative group bg-cover bg-center aspect-square overflow-hidden rounded-t-2xl">
                  {/* Wishlist */}
                  <button
                    onClick={(e) => handleWishlist(e, item)}
                    className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition"
                  >
                    {wishlist.find((p) => p.id === item.id) ? (
                      <IoHeart size={18} className="text-red-500" />
                    ) : (
                      <IoHeartOutline size={18} />
                    )}
                  </button>

                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.info}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 pointer-events-none opacity-40 lg:opacity-0 lg:group-hover:opacity-100 transition" />

                  {/* Add to cart */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <CtnBtn
                      className="px-4 py-2 text-xs md:text-sm"
                      onClick={(e) => handleAddToCart(e, item)}
                    >
                      Add To Cart
                    </CtnBtn>
                  </div>
                </div>

                {/* Sale badge */}
                <span className="bg-red-500 absolute top-2 left-2 px-2 py-1 rounded-md text-white text-[10px] sm:text-xs uppercase">
                  Sale
                </span>

                {/* Price */}
                <div className="flex justify-center gap-2 p-3 text-xs sm:text-sm md:text-base">
                  <span className="font-bold text-red-500">
                    Rs.{item.DiscountPrice}
                  </span>
                  <span className="line-through text-gray-500">
                    Rs.{item.Price}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-center px-3 pb-4 text-xs sm:text-sm md:text-base hover:text-red-500 text-gray-900">
                  {item.info}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlowSection;
