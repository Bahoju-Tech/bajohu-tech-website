import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Explore from '../components/Explore';

import React from 'react'

function Blog() {
  return (
    <div className="lato-regular">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header/>
      </div>
      <div className="pt-20">
        {/* <Hero />m */}
        <Explore />
        <Footer />
      </div>
    </div>
  )
}

export default Blog