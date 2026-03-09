import React from "react";
import RateUsData from "./RateUsData";
import { MdOutlineVerifiedUser } from "react-icons/md";

const RateUs = () => {
  return (
    <section className="py-25 bg-gray-100 w-full">
      <div className="py-10 flex flex-col md:flex-row items-center md:justify-between px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center md:text-center flex-1">
          The Beauty <span className="text-red-500">Diaries</span>
        </h2>

        <button className="mt-4 md:mt-0 px-5 py-2 rounded-2xl text-red-500 cursor-pointer hover:bg-red-600 transition-all duration-300 hover:text-white border border-gray-300">
          Rate & Review
        </button>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-2 py-5 max-w-6xl mx-auto">
        {RateUsData.map((item, index) => {
          const { rate, info, name, img, user } = item;
          return (
            <div
              className="p-5 shadow-2xl rounded-2xl py-10 cursor-pointer hover:scale-105 transition-all duration-300 bg-white"
              key={index}
            >
              <h2 className="py-2">{rate}</h2>
              <h3 className="text-sm text-gray-600 py-2 pe-5">{info}</h3>
              <div className="flex items-center py-5 gap-5">
                <img src={img} className="rounded-full w-15 h-15" alt="" />
                <div className="flex flex-col">
                  <h3 className="text-xm">{name}</h3>
                  <div className="flex justify-center text-green-500 items-center gap-2">
                    <MdOutlineVerifiedUser />
                    <p className="text-gray-500 text-sm">{user}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RateUs;
