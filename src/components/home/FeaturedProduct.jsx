import React, { useState, useContext } from "react";
import Products from "../../constant/Products";
import CtnBtn from "../common/CtnBtn";
import { Link } from "react-router-dom";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";

const FeaturedProduct = ({ selectedCategory }) => {
  const { addToCart, toggleWishlist, wishlist } = useContext(CartContext);
  const [activeId, setActiveId] = useState(null);
  const [toast, setToast] = useState({ message: "", show: false });

  // Toast function
  const showToast = (message) => {
    setToast({ message, show: true });
    setTimeout(() => setToast({ message, show: false }), 2000);
  };

  const filteredProducts = selectedCategory
    ? Products.filter((product) => product.category === selectedCategory)
    : Products;

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
    <>
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

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
              activeId === item.id
                ? "bg-white scale-105 shadow-2xl ring-2 ring-red-500"
                : "bg-gray-100 hover:shadow-xl"
            }`}
          >
            <div className="relative group aspect-square overflow-hidden rounded-t-2xl">
              {/* Wishlist button */}
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

              {/* Product image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-40 lg:opacity-0 lg:group-hover:opacity-100 transition" />

              {/* Add to cart button */}
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
            <h3 className="bg-red-500 absolute top-2 left-2 px-2 py-1 rounded-lg text-white text-xs uppercase">
              Sale
            </h3>

            {/* Price */}
            <div className="flex gap-2 justify-center p-3 text-sm md:text-base">
              <h2 className="font-bold text-red-500">Rs.{item.SalePrice}</h2>
              <h2 className="line-through text-gray-500">
                Rs.{item.RegularPrice}
              </h2>
            </div>

            {/* Product title */}
            <h2
              className={`text-center px-2 pb-4 text-sm md:text-base ${
                activeId === item.id
                  ? "text-red-500 font-semibold"
                  : "text-gray-900"
              }`}
            >
              {item.info}
            </h2>
          </div>
        ))}
      </div>

      {/* View All button */}
      <div className="flex justify-center mt-12">
        <Link to={"/collection"}>
          <CtnBtn className="bg-red-500 px-10 md:px-20 py-3 rounded-2xl">
            View All
          </CtnBtn>
        </Link>
      </div>
    </>
  );
};

export default FeaturedProduct;
