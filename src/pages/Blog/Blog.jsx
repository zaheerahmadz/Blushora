import React, { useEffect } from "react";
import { Calendar, User } from "lucide-react";
import blogData from "../../constant/Blog";
import MailingListCTA from "../../components/common/MailingListCTA";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="w-full bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 text-center">
          <h1 className="text-sm sm:text-base uppercase tracking-widest text-red-500">
            Our Journal
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold py-6 leading-tight">
            The Beauty
            <span className="text-red-600 px-2 sm:px-3">Edit</span>
          </h2>

          <p className="max-w-2xl mx-auto px-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            Expert advice, skincare guides, and beauty stories to help you glow
            from the inside out.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div
              onClick={() => navigate(`/blog/${blog.slug}`)}
              key={blog.id}
              className="bg-white cursor-pointer rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 hover:scale-105 transition-all duration-500 object-cover"
                />

                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold tracking-wide px-4 py-2 rounded-full text-gray-700">
                  {blog.icon.toUpperCase()}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-red-500" />
                    <span className="text-[10px]">{blog.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <User size={14} className="text-red-500" />
                    <span className="text-[10px]">{blog.person}</span>
                  </div>
                </div>

                <h2 className="text-xl font-serif  leading-snug hover:text-red-600 transition">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.info}
                </p>

                <button className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-black hover:text-red-600 transition">
                  Read More
                  <span className="text-red-500">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <MailingListCTA />
    </>
  );
};

export default Blog;
