import React from "react";
import { GoDotFill } from "react-icons/go";
import MagData from "./MagData";
import InFocus from "./InFocus";
import LatestStories from "./LatestStories";
import { useNavigate } from "react-router-dom";

const Magazine = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 w-full">
      <div className="max-w-8xl mx-auto px-5">
        {/* Header */}
        <h1 className="text-xl text-red-500 text-center uppercase">
          The Digital Issue
        </h1>
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mt-2">
          BlushOra <span className="text-red-500">Magazine</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 mt-5">
          <p className="text-gray-600 text-lg md:text-xl">Beauty</p>
          <GoDotFill size={10} className="text-red-600" />
          <p className="text-gray-600 text-lg md:text-xl">Culture</p>
          <GoDotFill size={10} className="text-red-600" />
          <p className="text-gray-600 text-lg md:text-xl">Lifestyle</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-wrap lg:flex-nowrap gap-5 md:gap-10 lg:gap-20 mt-10 max-w-6xl mx-auto">
          {/* Left Large Image */}

          <div
            onClick={() => navigate(`/magazine/Mag_1`)}
            className="w-full lg:w-2/3 cursor-pointer overflow-hidden rounded-2xl"
          >
            <img
              src="/images/mag1.png"
              className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
              alt="Magazine cover"
            />
            <section className="max-w-3xl mx-auto px-4 py-8">
              {/* Cover Label */}
              <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Cover Story
              </span>

              {/* Title */}
              <h1 className="mt-4 text-4xl hover:text-red-500 md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
                The Renaissance of Rouge
              </h1>

              {/* Subtitle */}
              <p className="mt-2 text-gray-600  text-lg md:text-xl">
                Why the classic red lip is making a comeback in 2024
              </p>

              {/* Author & Read Time */}
              <div className="mt-4 flex items-center text-gray-500 text-sm space-x-3">
                <span>By Eleanor Vance</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </section>
            <section className="w-full max-w-sm  my-10 p-6 bg-white rounded-2xl shadow-md text-center">
              {/* Title */}
              <h2 className="text-xl font-semibold mb-2">The Newsletter</h2>
              <p className="text-gray-500 mb-4 text-sm">
                Weekly beauty edits, straight to your inbox.
              </p>

              {/* Input */}
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              {/* Button */}
              <button className="w-full bg-black text-white py-3 rounded-2xl hover:bg-red-600 font-semibold  cursor-pointer transition-colors">
                SUBSCRIBE
              </button>
            </section>
          </div>

          {/* Right Trending Stories */}
          <div className="w-full lg:w-1/3">
            <h3 className="font-semibold text-sm uppercase">
              Trending Stories
            </h3>
            <div className="h-1 w-20 my-2 bg-red-500"></div>

            <div className="flex flex-col gap-5 mt-5">
              {MagData.map((item, index) => (
                <div
                  onClick={() => navigate(`/magazine/${item.slug}`)}
                  key={index}
                  className="cursor-pointer rounded-2xl overflow-hidden transition-transform duration-500 hover:scale-105"
                >
                  <img
                    src={item.img}
                    className="w-full h-auto object-cover rounded-2xl"
                    alt={item.label}
                  />
                  <p className="text-sm py-2 uppercase text-red-500 font-bold">
                    {item.label}
                  </p>
                  <h2 className="text-lg md:text-xl font-semibold hover:text-red-500">
                    {item.head}
                  </h2>
                  <p className="text-gray-600 text-sm py-1">{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <InFocus />
      <LatestStories />
    </section>
  );
};

export default Magazine;
