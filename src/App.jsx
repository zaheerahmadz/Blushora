import React from "react";

import Hero from "./components/home/Hero";
import NavBar from "./components/home/NavBar";
import FeaturedProducts from "./components/home/FeaturedProducts";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default App;
