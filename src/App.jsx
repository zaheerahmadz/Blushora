import React from "react";

import Hero from "./components/home/Hero";
import NavBar from "./components/home/NavBar";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Lipstick from "./components/common/Lipstick";
import RevealingBeauty from "./components/common/RevealingBeauty";
import GlowSection from "./components/common/GlowSection";
import Reviews from "./components/common/Reviews";
import Discover from "./components/common/Discover";
import MailingListCTA from "./components/common/MailingListCTA";
import Footer from "./components/home/Footer";
import Shop from "./pages/Shop/Shop";
import Magazine from "./pages/Magazine/Magazine";
import Blog from "./pages/Blog/Blog";
import About from "./pages/about/About";
import { Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection/Collection";
import MagDetails from "./pages/Magazine/MagDetails";
import BlogDetails from "./pages/Blog/BlogDetails";
import Wishlist from "./pages/Seller/Wishlist";
import Cart from "./pages/Seller/Cart";
import Signup from "./pages/User/SignUp";
import Login from "./pages/User/Login";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/collection" element={<Collection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/magazine/:slug" element={<MagDetails />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProducts />
              <Lipstick />
              <RevealingBeauty />
              <GlowSection />
              <Reviews />
              <Discover />
              <MailingListCTA />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
