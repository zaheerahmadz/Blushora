import React from "react";

import Hero from "./components/home/Hero";
import NavBar from "./components/home/NavBar";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Lipstick from "./components/common/Lipstick";
import RevealingBeauty from "./components/common/RevealingBeauty";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <FeaturedProducts />
      <Lipstick />
      <RevealingBeauty />
    </>
  );
};

export default App;
