import React from "react";

import portfolioImg from "../assets/ecosystem.png";

import { FaArrowRight } from "react-icons/fa";



function Portfolio() {

  return (

    <section className="bg-black text-white overflow-hidden relative">

    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20 lg:min-h-[500px]">
          
          {/* IMAGE - TOP ON MOBILE, RIGHT ON DESKTOP */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              src={portfolioImg}
              alt="Company Portfolio"
              className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[300px] xl:w-[700px]"
            />
          </div>

          {/* TEXT CONTENT - BOTTOM ON MOBILE, LEFT ON DESKTOP */}
          <div className="w-full lg:w-1/2 text-left lg:relative order-2 lg:order-1">
            
            {/* Portfolio label - Desktop absolute, Mobile normal */}
            <div className="italic flex items-center gap-3 text-gray-400 text-lg mb-4 lg:mb-0 lg:absolute lg:bottom-0 lg:left-0 lg:-translate-y-70">
              <span className="w-8 h-[1px] bg-gray-500"></span>
              Portfolio
            </div>

            {/* Heading - Desktop absolute, Mobile normal */}
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[50px] font-bold leading-tight mb-4 lg:mb-0 lg:absolute lg:top-4 lg:left-0 lg:-translate-y-70">
              Our Company Portfolio
            </h2>

            {/* Paragraph - Desktop absolute, Mobile normal */}
            <p className="text-gray-300 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[18px] leading-relaxed max-w-lg mb-8 lg:mb-0 lg:absolute lg:top-22 lg:left-0 lg:px-0 lg:-translate-y-55 lg:translate-x-20">
              Explore our portfolio to see the quality, creativity, and impact behind our work. 
              Each project reflects our commitment to thoughtful design and reliable technology. Discover how we turn ideas into meaningful, scalable solutions. Let our work show what we can build together.
            </p>

            {/* Button - Desktop absolute, Mobile normal */}
            <button className="inline-flex items-center gap-2 bg-[#0A6D8C] hover:bg-[#095c75] transition-all duration-300 text-white text-sm px-6 py-3 lg:px-6 lg:py-4 rounded-xl font-medium lg:absolute lg:top-56 lg:left-0 lg:translate-x-20 lg:-translate-y-45">
              View Portfolio
              <FaArrowRight />
            </button>

          </div>



        </div>
      </div>

    </section>

  );

}



export default Portfolio;

