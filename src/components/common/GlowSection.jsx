import React from "react";
import CtnBtn from "./CtnBtn";
import GlowProducts from "../../constant/GlowProducts";
import { Link } from "react-router-dom";

const GlowSection = () => {
  return (
    <section className="py-12">
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
                  <img
                    src={item.img}
                    alt={item.info}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div
                    className="absolute inset-0 flex items-center justify-center 
                opacity-100 lg:opacity-0 
                lg:group-hover:opacity-100 transition"
                  >
                    <CtnBtn
                      className="px-4 py-2 text-xs md:text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Add To Cart
                    </CtnBtn>
                  </div>
                </div>

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
                <h3 className="text-center px-2 pb-4 text-xs sm:text-sm md:text-base hover:text-red-500 text-gray-900">
                  {item.info}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlowSection;
