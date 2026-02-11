import React, { useEffect, useState } from 'react'
import Header from './Header'
import bgImage from '../assets/hero-bg.png'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
   <div
  className="relative min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <Header />

  <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 ">
    <div className="max-w-4xl mx-auto mt-55 sm:mt-28 lg:mt-36">
      <h1 
        className="lato-bold text-white text-[47px] sm:text-[42px] lg:text-[60px] leading-tight transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transitionDelay: '0ms'
        }}
      >
        One Platform
      </h1>

      <h2 
        className="lato-regular text-white text-[50px] sm:text-[40px] lg:text-[60px] leading-tight mt-1 transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transitionDelay: '0ms'
        }}
      >
        Multiple Global Tech Solutions
      </h2>

      <p 
        className="lato-light text-white text-[14px] sm:text-[15px] lg:text-[19px] mt-7 max-w-3xl transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transitionDelay: '100ms'
        }}
      >
       From enterprise software and cloud infrastructure to safe mobility, e-commerce systems, 
       and tech education. Bahoju build scalable products that power businesses, communities, and the global market
      </p>
    </div>
  </div>
</div>
  )
}

export default Hero