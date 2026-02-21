import React from "react";
import CtnBtn from "./CtnBtn";

const Discover = () => {
  return (
    <section className="py-12">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl mb-4">
        Discover <span className="text-red-500">What's Next</span>
      </h2>

      <p className="text-center text-gray-600 max-w-xl mx-auto">
        Our bundles were designed to conveniently package your tanning
        essentials while saving you money
      </p>

      {/* GRID */}
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-10 mx-auto px-4">
        {/* CARD 1 */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
          <img
            src="/images/Winter.jpg"
            alt="Winter Collection"
            className="w-full cursor-pointer h-[360px] object-cover hover:scale-105 transition duration-500"
          />

          <div className="text-center py-6 space-y-3">
            <h2 className="text-2xl md:text-2xl font-semibold">
              Winter Collection
            </h2>
            <CtnBtn className="bg-red-500 shadow-2xl">Shop now</CtnBtn>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
          <img
            src="/images/Blogs.jpg"
            alt="Winter Collection"
            className="w-full cursor-pointer h-[360px] object-cover hover:scale-105 transition duration-500"
          />

          <div className="text-center py-6 space-y-3">
            <h2 className="text-2xl md:text-2xl font-semibold">
              From Our Blogs
            </h2>
            <CtnBtn className="bg-red-500 shadow-2xl">Read More</CtnBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
