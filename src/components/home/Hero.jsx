import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Controller } from "swiper/modules";

import "swiper/css";

import "swiper/css/controller"; // ← important for controller visuals if needed

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
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <section className="w-full">
      {/* First Swiper - Text on fixed background - exactly as before */}
      <div className="relative w-full h-60 bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, Controller]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          controller={{ control: secondSwiper }} // this one controls / follows the other
          onSwiper={setFirstSwiper} // store instance
          className="w-full h-full relative z-10"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col gap-3 items-center justify-center h-full text-center text-white px-5">
                <h1 className="text-4xl md:text-5xl font-bold text-black">
                  {slide.title.split(" ").map((word, index, arr) =>
                    index >= arr.length - 2 ? (
                      <span key={index} className="text-red-500">
                        {" "}
                        {word}
                      </span>
                    ) : (
                      <span key={index}> {word}</span>
                    ),
                  )}
                </h1>

                <p className="mt-3 text-lg text-gray-500 opacity-90">
                  {slide.desc}
                </p>
                <CtnBtn>Explore More</CtnBtn>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Second Swiper - Image slides - exactly as before */}
      <section className="w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, Controller]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          controller={{ control: firstSwiper }} // this one controls / follows the other
          onSwiper={setSecondSwiper} // store instance
          className="w-full h-[500px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Beauty Deal - unchanged */}
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
