import React, { useState } from "react";
import Products from "../../constant/Products";
import CtnBtn from "../common/CtnBtn";
import { Link } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
const FeaturedProduct = ({ selectedCategory }) => {
  const [activeId, setActiveId] = useState(null);

  const filteredProducts = selectedCategory
    ? Products.filter((product) => product.category === selectedCategory)
    : Products;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300
            ${
              activeId === item.id
                ? "bg-white scale-105 shadow-2xl ring-2 ring-red-500"
                : "bg-gray-100 hover:shadow-xl"
            }`}
          >
            <div className="relative group aspect-square overflow-hidden rounded-t-2xl">
              <button
                onClick={(e) => e.stopPropagation()}
                className="absolute cursor-pointer top-2 right-2 z-10 bg-white/80 backdrop-blur-md 
  p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition"
              >
                <IoHeartOutline size={18} />
              </button>
              <img
                src={item.img}
                alt={item.title}
                className="w-full  h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-40 lg:opacity-0 lg:group-hover:opacity-100 transition" />
              <div
                className="absolute inset-0 flex items-center justify-center
  opacity-100 lg:opacity-0 lg:group-hover:opacity-100
  transition-opacity duration-300"
              >
                <CtnBtn
                  className="px-4 py-2 text-xs md:text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Add To Cart
                </CtnBtn>
              </div>
            </div>

            <h3 className="bg-red-500 absolute top-2 left-2 px-2 py-1 rounded-lg text-white text-xs uppercase">
              Sale
            </h3>

            <div className="flex gap-2 justify-center p-3 text-sm md:text-base">
              <h2 className="font-bold text-red-500">Rs.{item.SalePrice}</h2>

              <h2 className="line-through text-gray-500">
                Rs.{item.RegularPrice}
              </h2>
            </div>

            <h2
              className={`text-center px-2 pb-4 text-sm md:text-base
              ${
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
