import React from "react";

const images = [
  "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800",
  "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800",
  "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800",
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800",
  "https://images.unsplash.com/photo-1615396899839-c99c121888b0?q=80&w=800",
  "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=800",
  "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800",
  "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=800",
  "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800",
  "/images/hero1.jpg",
  "/images/hero2.jpeg",
  "/images/hero3.jpeg",
  "/images/Winter.jpg",
  "/images/tools-flatlay.jpg",
];

const Row = ({ reverse = false }) => {
  const duplicated = [...images, ...images];
  return (
    <div className="group relative w-full overflow-hidden">
      <div
        className={`flex w-max gap-6 md:gap-8 whitespace-nowrap ${
          reverse ? "marquee-reverse" : "marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {duplicated.map((src, index) => (
          <div
            key={index}
            className="min-w-[170px] sm:min-w-[200px] md:min-w-[260px] rounded-3xl overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt="gallery"
              className="w-full h-52 sm:h-56 md:h-64 object-cover transition duration-500 hover:scale-110 hover:brightness-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const SliderAbout = () => {
  return (
    <div className="w-full overflow-hidden py-14 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
        Our <span className="text-red-500">Gallery</span>
      </h2>

      <Row />

      <div className="h-6 md:h-10" />

      <Row reverse />

      <style>{`
        .marquee { animation: marquee 40s linear infinite; }
        .marquee-reverse { animation: marqueeReverse 40s linear infinite; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default SliderAbout;
