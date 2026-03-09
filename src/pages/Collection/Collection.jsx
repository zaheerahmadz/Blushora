import React, { useEffect } from "react";

import ShopProduct from "../Shop/ShopProduct";
import Reviews from "../../components/common/Reviews";

const Collection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="py-12 w-full ">
        <h1 className="text-center text-5xl">
          Our <span className="text-red-500">Collection</span>
        </h1>
        <p className="text-center px-5 text-sm mx-auto text-gray-500 py-2">
          Discover our carefully curated collections, each inspired by the
          changing seasons and the timeless beauty of nature.
        </p>
        <div className="py-5">
          <ShopProduct />
        </div>
        <Reviews />
      </section>
    </>
  );
};

export default Collection;
