import React, { useState } from "react";
import category from "../../constant/category";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Lotion");

  return (
    <section className="py-10">
      <h2 className="text-center text-2xl md:text-4xl pb-6">
        Loved at <span className="text-red-500">Every Level</span>
      </h2>

      <div className="w-full bg-[url('/love.png')] bg-cover bg-center bg-no-repeat py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap gap-6 md:gap-12 lg:gap-20 mb-12">
            {category.map((item, index) => {
              const { img, category: catName } = item;
              const isActive = selectedCategory === catName;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(catName)}
                  className="flex cursor-pointer flex-col items-center gap-3 group"
                >
                  <div
                    className={`rounded-full p-3 transition
                    ${
                      isActive
                        ? "bg-red-500 scale-110 shadow-lg"
                        : "border border-red-500 group-hover:bg-pink-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt={catName}
                      className={`rounded-full w-16 h-16 md:w-20 md:h-20 object-cover
                      ${isActive ? "brightness-0 invert" : ""}`}
                    />
                  </div>

                  <h2
                    className={`capitalize text-sm md:text-lg
                    ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "group-hover:text-red-500"
                    }`}
                  >
                    {catName}
                  </h2>
                </div>
              );
            })}
          </div>

          <FeaturedProduct selectedCategory={selectedCategory} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
