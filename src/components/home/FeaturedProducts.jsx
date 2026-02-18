import React from "react";

const FeaturedProducts = () => {
  return (
    <>
      <section className="py-5">
        <h2 className="text-center text-4xl py-5">
          Loved at <span className="text-red-500">Every Level</span>
        </h2>
        <div className="w-full h-[600px] md:h-[800px] bg-[url('/love.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="flex justify-center gap-8 flex-wrap mb-10"></div>
      </section>
    </>
  );
};

export default FeaturedProducts;
