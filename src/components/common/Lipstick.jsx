import React from "react";
import CtnBtn from "./CtnBtn";

const Lipstick = () => {
  return (
    <section className="w-full bg-gray-50">
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16 bg-gray-50 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Left - Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-left">
            <h1 className="text-red-600 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Lipstick
            </h1>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl">
              Long-lasting, non-drying lipstick is popular.
            </p>

            <div className="mt-2">
              <CtnBtn className="bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-3.5 font-medium transition-colors rounded-full shadow-md">
                Shop Now
              </CtnBtn>
            </div>
          </div>

          {/* Right - Images */}
          <div className="w-full md:w-1/2 flex flex-row md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-10">
            <div className="relative">
              <img
                src="/images/lipstick-detail.png"
                alt="Lipstick close-up"
                className="w-52 sm:w-64 md:w-60 lg:w-72 object-cover rounded-[2rem_6rem_2rem_6rem] shadow-xl"
              />
            </div>

            <div className="relative">
              <img
                src="/images/lipstick-splash.png"
                alt="Lipstick texture splash"
                className="w-40 sm:w-52 md:w-56 lg:w-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Lipstick;
