import React from "react";
import ReviewsData from "../../constant/ReviewsData";
const Reviews = () => {
  return (
    <>
      <section className="py-25 bg-gray-100 w-full">
        <div className="py-10">
          <h2 className="text-center text-4xl">
            Loved by <span className="text-red-500">Thousands</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-2 py-5 max-w-6xl mx-auto">
          {ReviewsData.map((item, index) => {
            const { rate, info, name, img, user } = item;
            return (
              <div
                className="p-5 shadow-2xl rounded-2xl py-10 cursor-pointer hover:scale-105 transition-all duration-300 bg-white"
                key={index}
              >
                <h2 className="py-2">{rate}</h2>
                <h3 className="text-md text-gray-600 py-2 pe-5">{info}</h3>
                <div className="flex items-center py-10 gap-5">
                  <img src={img} className="rounded-full w-15 h-15" alt="" />
                  <div className="flex flex-col">
                    <h3 className="text-xm">{name}</h3>
                    <p className="text-gray-500 text-sm">{user}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Reviews;
