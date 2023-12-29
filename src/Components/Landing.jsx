import React from "react";
import Hero from "./Hero";
import CollectionCards from "./CollectionCards";
// import CollectionCards from './CollectionCards'
import Trending from "./Trending";
import Social from "./Social";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import MyNavbar from "./MyNavbar";

const Landing = () => {
  return (
    <>
      {/* <Navbar/> */}
      <MyNavbar />
      <Hero />
      <CollectionCards />
      <Trending />
      <Testimonials />
      <Social />
      <Footer />
    </>
  );
};

export default Landing;
