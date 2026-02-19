import React, { useState } from "react";
import category from "../../constant/category";
import Products from "../../constant/Products";

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Lotion");
  console.log(selectedCategory);

  const filteredProducts = Products.filter(
    (product) => product.category === selectedCategory,
  );

  return (
    <section className="py-5">
      <h2 className="text-center text-4xl pb-1 pt-5">
        Loved at <span className="text-red-500">Every Level</span>
      </h2>

      <div className="w-full h-[600px] md:h-[800px] bg-[url('/love.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center lg:gap-40 gap-20 pt-25 flex-wrap mb-10">
          {category.map((item, index) => {
            const { img, category: catName } = item;

            return (
              <div
                key={index}
                onClick={() => setSelectedCategory(catName)}
                className="flex cursor-pointer flex-col items-center gap-4 hover:text-red-500"
              >
                <img
                  className="border object-cover hover:bg-pink-200 transition-all duration-200 border-red-500 p-3 rounded-full"
                  src={img}
                  alt={catName}
                />
                <h2 className="capitalize text-xl hover:text-red-500">
                  {catName}
                </h2>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-5 flex-wrap">
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <img
                src={item.img}
                alt={item.title}
                className="w-40 h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
