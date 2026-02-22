import React from "react";
import { PiPlantLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { SiAnimalplanet } from "react-icons/si";
import { Data1, Data2 } from "../../constant/data";
import { TbLamp2 } from "react-icons/tb";
import Journey from "../../components/common/Journey";

const About = () => {
  return (
    <section className="w-full bg-white">
      {/* Top banner */}
      <div className="w-full">
        <img
          className="w-full object-cover max-h-[420px] md:max-h-[520px]"
          src="/images/about.png"
          alt="About banner"
        />
      </div>

      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="py-6 text-3xl sm:text-4xl font-semibold">Blushora</h2>
        <p className="pb-10 text-gray-600 max-w-2xl mx-auto">
          At Blushora, we unite homegrown purity with world-class science,
          creating beauty that is both authentic and advanced.
        </p>
      </div>

      {/* Section 1 */}
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl h-[320px] sm:h-[420px] lg:h-[520px]">
          <img
            src="/images/about2.jpg"
            alt="Ethical Roots"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div>
          <PiPlantLight
            className="bg-pink-100 rounded-full text-pink-600 p-2"
            size={55}
          />

          <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4">
            Ethical <span className="text-pink-600">Roots</span>
          </h2>

          <p className="text-gray-600 py-4 text-base sm:text-lg lg:text-xl">
            At Blushora, our ethical roots guide every choice we make — from
            responsibly sourced ingredients and cruelty-free practices to clean
            formulations, sustainability, and complete transparency.
          </p>

          <div className="space-y-2">
            {Data1.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <GoDotFill className="text-pink-600 mt-1 shrink-0" />
                <p className="text-gray-600">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Content */}
        <div className="lg:order-1">
          <PiPlantLight
            className="bg-pink-100 rounded-full text-pink-600 p-2"
            size={55}
          />

          <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4">
            Global <span className="text-pink-600">Science</span>
          </h2>

          <p className="text-gray-600 py-4 text-base sm:text-lg lg:text-xl">
            At Blushora, global science shapes every formula — combining
            advanced research, clinically inspired methods, and internationally
            recognized standards to deliver proven, high-performance beauty.
          </p>

          <div className="space-y-2">
            {Data2.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <GoDotFill className="text-pink-600 mt-1 shrink-0" />
                <p className="text-gray-600">{item.info}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-3xl h-[320px] sm:h-[420px] lg:h-[520px] lg:order-2">
          <img
            src="/images/about3.jpg"
            alt="Global Science"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="py-5 max-w-6xl mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card text-center  rounded-2xl hover:shadow-2xl cursor-pointer py-7 bg-gray-100 flex flex-col justify-center">
          <PiPlantLight
            className="w-18 h-18 mx-auto bg-pink-100 p-4 rounded-full"
            size={40}
          />
          <h2 className="text-4xl font-semibold py-3">100%</h2>
          <h2 className="text-2xl py-3">Natural Ingredient</h2>
          <p className="text-gray-600">
            Source ethically from their native origins
          </p>
        </div>
        <div className="card text-center shadow-xl rounded-2xl hover:shadow-2xl cursor-pointer py-7 bg-gray-100 flex flex-col justify-center">
          <SiAnimalplanet
            className="w-18 h-18 mx-auto bg-pink-100 p-4 rounded-full"
            size={40}
          />
          <h2 className="text-4xl font-semibold py-3">0%</h2>
          <h2 className="text-2xl py-3">Animal Cruelty</h2>
          <p className="text-gray-600">
            Sourced ethically from their native origins.
          </p>
        </div>
        <div className="card text-center shadow-xl rounded-2xl hover:shadow-2xl cursor-pointer py-7 bg-gray-100 flex flex-col justify-center">
          <TbLamp2
            className="w-18 h-18 mx-auto bg-pink-100 p-4 rounded-full"
            size={40}
          />
          <h2 className="text-4xl font-semibold py-3">100%</h2>
          <h2 className="text-2xl py-3">Lab Formulations</h2>
          <p className="text-gray-600">
            Rigorously tested for safety and efficacy.
          </p>
        </div>
      </div>
      <div className="my-10">
        <Journey />
      </div>
    </section>
  );
};

export default About;
