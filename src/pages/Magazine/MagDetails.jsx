import React from "react";
import { useParams, Link } from "react-router-dom";
import MagData from "../../constant/MagData";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import { useEffect } from "react";

const MagDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();
  const article = MagData.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-medium text-gray-700">
        Article Not Found
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl flex justify-center mx-auto px-5 pt-8 md:pt-12">
        <Link
          to="/magazine"
          className="inline-flex items-center text-sm uppercase tracking-wider text-gray-500 hover:text-red-600 transition-colors duration-200"
        >
          ← Back to Magazine
        </Link>
      </div>

      {/* Header Section */}
      <header className="max-w-5xl mx-auto px-5 pt-10 pb-16 md:pb-20 text-center">
        <div className="inline-block uppercase text-xs md:text-sm tracking-[0.25em] font-bold text-red-600 border border-red-200 rounded-full px-5 py-2 mb-6 md:mb-8">
          Cover Story
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-tight md:leading-snug text-gray-900 mb-10 md:mb-12">
          {article.title}
        </h1>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base">
          <div className="text-center">
            <p className="uppercase text-xs font-semibold text-gray-500 tracking-wide mb-1">
              Words By
            </p>
            <p className="text-lg md:text-xl font-medium text-gray-900">
              {article.Words_By}
            </p>
          </div>
          <div className="text-center">
            <p className="uppercase text-xs font-semibold text-gray-500 tracking-wide mb-1">
              Published
            </p>
            <p className="text-lg md:text-xl font-medium text-gray-900">
              {article.Published}
            </p>
          </div>
          <div className="text-center">
            <p className="uppercase text-xs font-semibold text-gray-500 tracking-wide mb-1">
              Read Time
            </p>
            <p className="text-lg md:text-xl font-medium text-gray-900">
              {article.Read_Time}
            </p>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-5">
        <img
          src={article.img}
          alt={article.title}
          className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] object-cover rounded-2xl md:rounded-3xl shadow-xl mb-12 md:mb-16"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 flex gap-8 lg:gap-12 xl:gap-16 relative">
        <aside className="hidden lg:flex flex-col items-center sticky top-24 h-fit">
          <div className="w-px h-16 bg-gray-200 mb-6"></div>
          <span
            className="[writing-mode:vertical-rl] rotate-180 text-xs font-bold tracking-widest text-gray-400 uppercase mb-8
  "
          >
            Share This Story
          </span>
          <div className="flex flex-col gap-5 text-gray-500">
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={22} strokeWidth={1.4} />
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} strokeWidth={1.4} />
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} strokeWidth={1.4} />
            </a>
          </div>
        </aside>

        <article className="flex-1 max-w-3xl pb-20">
          <p className="text-gray-700 leading-relaxed md:leading-9 text-base md:text-lg lg:text-xl mb-10 md:mb-12">
            {article.para_1}
          </p>

          {article.para_heading_1 && (
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mt-12 mb-5">
              {article.para_heading_1}
            </h2>
          )}
          <p className="text-gray-700 leading-relaxed md:leading-9 text-base md:text-lg lg:text-xl mb-10 md:mb-12">
            {article.para_2}
          </p>

          {article.title_2 && (
            <blockquote className="border-l-4 border-red-500 pl-5 md:pl-8 py-1 md:py-2 my-12 md:my-16 text-2xl md:text-3xl lg:text-4xl italic font-serif text-gray-800">
              {article.title_2}
            </blockquote>
          )}

          {article.para_heading_2 && (
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mt-12 mb-5">
              {article.para_heading_2}
            </h2>
          )}
          <p className="text-gray-700 leading-relaxed md:leading-9 text-base md:text-lg lg:text-xl mb-10 md:mb-12">
            {article.para_3}
          </p>

          {article.para_heading_3 && (
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mt-12 mb-5">
              {article.para_heading_3}
            </h2>
          )}
          <p className="text-gray-700 leading-relaxed md:leading-9 text-base md:text-lg lg:text-xl mb-14 md:mb-16">
            {article.para_4}
          </p>

          {/* Author Box */}
          <div className="border-t border-gray-200 pt-10 mt-16">
            <p className="text-lg font-medium text-gray-900">
              Written by {article.arthur}
            </p>
            <p className="text-gray-600 mt-1">{article.job}</p>
          </div>
        </article>

        <aside className="hidden xl:flex flex-col sticky top-24 h-fit w-80 min-w-[20rem] max-w-xs">
          <div className="mb-6 text-center">
            <span className="inline-block uppercase text-xs font-bold tracking-widest text-red-600 bg-red-50 px-4 py-1.5 rounded-full">
              Shop The Look
            </span>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden mb-5">
              <img
                src="/images/Glow3.png"
                alt="Velvet Gaze Lipstick"
                className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="text-xl font-bold text-[#001D3D] mb-1 text-center">
              Velvet Gaze Lipstick
            </h3>
            <p className="text-lg text-gray-600 font-medium mb-5 text-center">
              ₹2,499.00
            </p>

            <button className="w-full bg-[#121212] text-white py-3.5 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-gray-900 transition-colors active:scale-98">
              Add to Cart
            </button>
          </div>
        </aside>
      </div>

      <section className="xl:hidden bg-gray-50 py-12 md:py-16 mt-12">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-[#001D3D] mb-10 tracking-tight">
            Shop The Look
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden mb-5">
                <img
                  src="/images/Glow3.png"
                  alt="Velvet Gaze Lipstick"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#001D3D] mb-2">
                Velvet Gaze Lipstick
              </h3>
              <p className="text-xl text-gray-600 font-medium mb-6">
                ₹2,499.00
              </p>

              <button className="w-full bg-[#121212] text-white py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-gray-900 transition-colors active:scale-98">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MagDetails;
