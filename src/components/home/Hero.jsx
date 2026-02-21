import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

import CtnBtn from "../common/CtnBtn";

const slides = [
  {
    id: 1,
    img: "/images/hero1.jpg",
    title: "Radiance in Every Drop",
    desc: "Elevate your routine with our premium collection designed for the modern muse.",
  },
  {
    id: 2,
    img: "/images/hero2.jpeg",
    title: "Your Signature Glow Starts Here",
    desc: "Pure, potent, and perfect for your skin. Discover the essence of true beauty.",
  },
  {
    id: 3,
    img: "/images/hero3.jpeg",
    title: "Timeless Beauty, Captured",
    desc: "Pure, potent, and perfect for your skin. Discover the essence of true beauty.",
  },
];

const Hero = () => {
  return (
    <section className="w-full">
      {/* Single Swiper – background image + centered text overlay */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[500px] md:h-[600px] lg:h-[700px]" // ← adjust height as needed
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Dark overlay for better text readability (optional – adjust opacity) */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Text content – centered */}
              <div className="relative z-10 flex flex-col gap-4 md:gap-6 items-center justify-center h-full text-center text-white px-5 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                  {slide.title.split(" ").map((word, index, arr) =>
                    index >= arr.length - 2 ? (
                      <span key={index} className="text-red-500">
                        {" "}
                        {word}
                      </span>
                    ) : (
                      <span key={index}>{word} </span>
                    ),
                  )}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 opacity-95 max-w-2xl">
                  {slide.desc}
                </p>

                <div className="mt-4 md:mt-6">
                  <CtnBtn>Explore More</CtnBtn>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Beauty Deal section – remains unchanged */}
      <div className="bg-gray-100 flex flex-col gap-4 text-center py-10 w-full">
        <h2 className="text-4xl font-semibold">Beauty Deal</h2>
        <p className="text-xl px-5 text-gray-600">
          Pick your beauty products today. 50% OFF on the most popular cosmetic
          brands. Order all classy products today!
        </p>
      </div>
    </section>
  );
};

export default Hero;
