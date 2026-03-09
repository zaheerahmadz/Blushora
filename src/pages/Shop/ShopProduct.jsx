import { SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";
import ShopProducts from "../../constant/ShopProducts";
import CtnBtn from "../../components/common/CtnBtn";
import { Link } from "react-router-dom";

const categories = ["All", "Make-up", "Skincare", "Fashion & Food", "Lips Duo"];

const ShopProduct = () => {
  const [filteredProducts, setFilteredProducts] = useState(ShopProducts);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeId, setActiveId] = useState(null);

  const filterCategory = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilteredProducts(ShopProducts);
    } else {
      const result = ShopProducts.filter((item) => item.category === category);
      setFilteredProducts(result);
    }
  };

  const handlePriceFilter = (value) => {
    let result = ShopProducts;

    if (value === "1000") {
      result = ShopProducts.filter((item) => item.price < 1000);
    } else if (value === "2000") {
      result = ShopProducts.filter(
        (item) => item.price >= 1000 && item.price <= 2000,
      );
    } else if (value === "2000+") {
      result = ShopProducts.filter((item) => item.price > 2000);
    }

    setFilteredProducts(result);
  };

  const Reset = () => {
    setActiveCategory("All");
    setFilteredProducts(ShopProducts);
  };

  return (
    <section className="w-full">
      <div className="mx-auto">
        <ul className="flex justify-center gap-10 lg:text-xl flex-wrap border-b border-gray-300 py-5">
          {categories.map((item) => (
            <li
              key={item}
              onClick={() => filterCategory(item)}
              className={`cursor-pointer pb-2 transition-all duration-300
              ${
                activeCategory === item
                  ? "text-red-500 border-b-2 border-red-500 font-semibold"
                  : "hover:text-red-500"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full text-gray-600 px-4">
        <div className="flex max-w-6xl mx-auto flex-col sm:flex-row sm:flex-wrap sm:justify-end items-center gap-3 p-4 rounded-xl ">
          <button
            onClick={Reset}
            className="flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto px-4 sm:px-5 py-2 text-sm sm:text-base bg-white border border-gray-300 rounded-lg hover:shadow transition"
          >
            <SlidersHorizontal size={18} />
            Reset All Filters
          </button>

          <select
            onChange={(e) => handlePriceFilter(e.target.value)}
            className="w-full sm:w-auto px-4 sm:px-5 py-2 text-sm sm:text-base bg-white border border-gray-300 rounded-lg outline-none cursor-pointer"
          >
            <option value="">Price Range</option>
            <option value="1000">Under Rs 1000</option>
            <option value="2000">Rs 1000 - 2000</option>
            <option value="2000+">Above Rs 2000</option>
          </select>
        </div>
      </div>
      <div className="max-w-6xl my-10 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
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
              <h2 className="font-bold text-red-500">
                Rs.{item.DiscountPrice}
              </h2>
              <h2 className="line-through text-gray-500">Rs.{item.price}</h2>
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

      <div className="flex justify-center">
        <Link to={"/collection"}>
          <CtnBtn className="!px-10 !py-2 my-5 shadow-2xl">Load More</CtnBtn>
        </Link>
      </div>
    </section>
  );
};

export default ShopProduct;
