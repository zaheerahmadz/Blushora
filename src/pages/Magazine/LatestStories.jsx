import React from "react";
import stories from "./stories";

const LatestStories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-baseline border-b border-gray-100 pb-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
          Latest Stories
        </h2>
        <a
          href="#"
          className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1 transition-colors"
        >
          View Archive
        </a>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div key={story.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden mb-4">
              <img
                src={story.imageUrl}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.15em] font-bold text-pink-600 uppercase">
                {story.category}
              </span>
              <h3 className="text-2xl font-serif text-gray-900 leading-tight group-hover:underline decoration-1 underline-offset-4">
                {story.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestStories;
