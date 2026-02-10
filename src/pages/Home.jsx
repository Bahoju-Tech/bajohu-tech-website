import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Values from "../components/Values";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import Faq from "../components/Faq";
import Footer from "../components/Footer";








function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Values />
      <Products />
      <Testimonials />
      <Portfolio />
      <Faq />
      <Footer />

    </div>
  );
}

export default Home;
