import React from "react";
import CtnBtn from "./CtnBtn";

const RevealingBeauty = () => {
  return (
    <section className="w-full my-8 md:my-12 lg:my-16 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        {/* Images – stacked on mobile, side-by-side on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/6] overflow-hidden">
            <img
              src="/images/tools-flatlay.jpg"
              alt="Beauty tools flatlay"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/6] overflow-hidden">
            <img
              src="/images/lifestyle-2.jpg"
              alt="Lifestyle beauty moment"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Centered overlay card – improved positioning & visibility */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 py-8 sm:px-8 sm:py-12 lg:py-16 pointer-events-none">
          <div
            className="
            pointer-events-auto
            bg-white/92 backdrop-blur-md 
            rounded-2xl sm:rounded-3xl 
            shadow-2xl 
            p-6 sm:p-8 md:p-10 lg:p-12 
            max-w-md sm:max-w-lg md:max-w-xl w-[90%] sm:w-4/5 md:w-3/4 lg:w-3/5 
            text-center 
            border border-white/30
            transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl
          "
          >
            <h1
              className="
              text-3xl sm:text-4xl md:text-4xl lg:text-4xl 
              font-bold text-gray-900 tracking-tight 
              mb-3 sm:mb-4 md:mb-5
            "
            >
              The Art of Revealing Beauty
            </h1>

            <p
              className="
              text-base 
              text-gray-700 
              mb-6 sm:mb-8 md:mb-10
            "
            >
              Where High-Fashion Beauty Meets Transformation
            </p>

            <CtnBtn
              className="
                bg-red-500 hover:bg-red-600 active:bg-red-700 
                text-white font-medium 
                px-8 sm:px-10 md:px-12 
                py-3 sm:py-3.5 
                text-base sm:text-lg 
                rounded-full 
                shadow-lg 
                transition-all duration-300
              "
            >
              Treading
            </CtnBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevealingBeauty;
