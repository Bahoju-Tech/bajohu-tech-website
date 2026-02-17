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
    <div className="lato-regular">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
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
    </div>
  );
}

export default Home;
