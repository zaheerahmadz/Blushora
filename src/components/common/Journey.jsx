import React from "react";

const journeyData = [
  {
    title: "Inception",
    desc: "Founded by two friends looking for clean skincare solutions.",
    side: "left",
  },
  {
    title: "First Patent",
    desc: "Patented our unique Turmeric-C complex extraction method.",
    side: "bottom",
  },
  {
    title: "Global Launch",
    desc: "Launched in multiple countries after strong local demand.",
    side: "top",
  },
  {
    title: "Sustainability Award",
    desc: "Recognized for our zero-waste packaging initiatives.",
    side: "right",
  },
];

const Journey = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Our <span className="text-red-600">Journey</span>
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          From a small idea to a recognized clean beauty brand
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal line - hidden on very small screens */}
        <div className="hidden md:block absolute top-1/2 left-4 right-4 h-1 bg-pink-200 -translate-y-1/2 rounded"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col items-center
                ${index % 2 === 0 ? "md:mt-16" : "md:-mt-4"}
              `}
            >
              {/* Circle / Dot */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 border-4 border-white shadow-md z-10 flex items-center justify-center text-white font-bold text-sm md:text-base">
                {index + 1}
              </div>

              {/* Content card */}
              <div
                className={`
                  mt-4 md:mt-6 w-full max-w-xs md:max-w-[220px] lg:max-w-[260px]
                  bg-white rounded-xl shadow-lg p-5 md:p-6 text-center
                  border border-gray-100
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                `}
              >
                <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Connecting line - only on mobile (vertical) */}
              {index < journeyData.length - 1 && (
                <div className="md:hidden absolute top-full left-1/2 w-0.5 h-10 bg-pink-300 -translate-x-1/2 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
