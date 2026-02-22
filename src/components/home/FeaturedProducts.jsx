import React, { useState } from "react";
import category from "../../constant/category";
import Products from "../../constant/Products";
import CtnBtn from "../common/CtnBtn";

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Lotion");
  const [ActiveId, setActiveId] = useState(null);

  const filteredProducts = Products.filter(
    (product) => product.category === selectedCategory,
  );

  return (
    <section className="py-10">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-4xl pb-6">
        Loved at <span className="text-red-500">Every Level</span>
      </h2>

      {/* Background Wrapper */}
      <div className="w-full bg-[url('/love.png')] bg-cover bg-center bg-no-repeat py-10 md:py-20">
        {/* Categories */}
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap gap-6 md:gap-12 lg:gap-20 mb-12">
            {category.map((item, index) => {
              const { img, category: catName } = item;
              const isActive = selectedCategory === catName;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(catName)}
                  className="flex cursor-pointer flex-col items-center gap-3 group transition-all duration-300"
                >
                  <div
                    className={`rounded-full p-2 md:p-3 transition-all duration-300
          ${
            isActive
              ? "bg-red-500 scale-110 shadow-lg"
              : "border border-red-500 group-hover:bg-pink-200"
          }`}
                  >
                    <img
                      className={`rounded-full w-16 h-16 md:w-20 md:h-20 object-cover transition-all duration-300
            ${isActive ? "brightness-0 invert" : ""}
            `}
                      src={img}
                      alt={catName}
                    />
                  </div>

                  <h2
                    className={`capitalize text-sm md:text-lg transition-all duration-300
          ${isActive ? "text-red-500 font-semibold" : "group-hover:text-red-500"}
          `}
                  >
                    {catName}
                  </h2>
                </div>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300
      
      ${
        ActiveId === item.id
          ? "bg-white scale-105 shadow-2xl ring-2 ring-red-500"
          : "bg-gray-100 hover:shadow-xl"
      }
      `}
              >
                {/* Image */}
                <div className="relative group aspect-square overflow-hidden rounded-t-2xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <CtnBtn
                      className="px-4 py-2 text-xs md:text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Add To Cart
                    </CtnBtn>
                  </div>
                </div>

                {/* Sale Tag */}
                <h3 className="bg-red-500 absolute top-2 left-2 px-2 py-1 rounded-lg text-white text-xs uppercase">
                  Sale
                </h3>

                {/* Price */}
                <div className="flex gap-2 justify-center p-3 text-sm md:text-base">
                  <h2 className="font-bold text-red-500">
                    Rs.{item.SalePrice}
                  </h2>
                  <h2 className="line-through text-gray-500">
                    Rs.{item.RegularPrice}
                  </h2>
                </div>

                {/* Title */}
                <h2
                  className={`text-center px-2 pb-4 text-sm md:text-base transition
        ${ActiveId === item.id ? "text-red-500 font-semibold" : "text-gray-900"}
        `}
                >
                  {item.info}
                </h2>
              </div>
            ))}
          </div>

          {/* View All */}
          <div className="flex justify-center mt-15">
            <CtnBtn className="bg-red-500 px-10 md:px-20 py-3 rounded-2xl">
              View All
            </CtnBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
