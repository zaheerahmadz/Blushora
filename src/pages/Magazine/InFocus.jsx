import React from "react";

const InFocus = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-serif text-center mb-10">In Focus</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white hover:shadow-2xl cursor-pointer shadow-lg rounded-lg overflow-hidden">
          <img
            src="/images/mag_Info1.png" // replace with your image
            alt="Trend Report"
            className="w-full h-auto object-cover"
          />
          <div className="p-6">
            <span className="text-sm text-red-500 uppercase">Trends</span>
            <h3 className="text-xl hover:text-red-500 cursor-pointer font-semibold mt-2">
              Trend Report: 'Glass Skin' vs 'Cloud Skin'
            </h3>
            <p className="text-gray-600 mt-2">
              Dewy and wet or soft and diffused? We break down the two biggest
              texture trends.
            </p>
            <p className="text-gray-400 text-sm mt-4">4 min read</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg hover:shadow-2xl cursor-pointer rounded-lg overflow-hidden">
          <img
            src="/images/mag_Info2.png" // replace with your image
            alt="Sustainability Edit"
            className="w-full h-auto object-cover"
          />
          <div className="p-6">
            <span className="text-sm text-red-500 uppercase">
              Sustainability
            </span>
            <h3 className="text-xl hover:text-red-500 cursor-pointer font-semibold mt-2">
              The Sustainability Edit
            </h3>
            <p className="text-gray-600 mt-2">
              Eco-friendly doesn't have to mean compromising on experience.
            </p>
            <p className="text-gray-400 text-sm mt-4">7 min read</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InFocus;
