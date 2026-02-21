import React from "react";

import Hero from "./components/home/Hero";
import NavBar from "./components/home/NavBar";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Lipstick from "./components/common/Lipstick";
import RevealingBeauty from "./components/common/RevealingBeauty";
import GlowSection from "./components/common/GlowSection";
import Reviews from "./components/common/Reviews";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <FeaturedProducts />
      <Lipstick />
      <RevealingBeauty />
      <GlowSection />
      <Reviews />
    </>
  );
};

export default App;
