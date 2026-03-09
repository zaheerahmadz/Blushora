import React, { useEffect } from "react";

import FeaturedProduct from "../../components/home/FeaturedProduct";
import Mascara from "./Mascara";
import ShopProduct from "./ShopProduct";
import Reviews from "../../components/common/Reviews";
import RateUs from "./RateUs";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="relative w-full py-10 h-64 md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/shop-hero.png)` }}
        ></div>

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center pt-10">
          <h2 className="text-4xl text-yellow-50 lg:text-7xl">Discover Your</h2>

          <h2 className="text-4xl text-red-500 lg:text-7xl">Perfect Beauty</h2>

          <p className="py-5 text-white text-xl">
            Explore our curated collection of premium skincare and makeup
          </p>
        </div>
      </section>

      <section className="py-16 text-center">
        <h3 className="text-4xl font-semibold">
          Top <span className="text-red-500">Product</span>
        </h3>
        <div className="py-10 max-w-6xl mx-auto">
          <FeaturedProduct selectedCategory="Lotion" />
          <Mascara />
        </div>
        <div>
          <ShopProduct />
        </div>
        <RateUs />
      </section>
    </>
  );
};

export default Shop;
