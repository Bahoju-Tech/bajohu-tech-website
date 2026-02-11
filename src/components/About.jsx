import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidBinoculars } from "react-icons/bi";
import { PiGenderMaleBold } from "react-icons/pi";
import aboutImage from "../assets/about.png";
import logos from "../assets/logos.png";
import Button from "./Button";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
    setIsVisible(true);
  }, []);

  return (
   <section
  id="about-us"
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center scroll-mt-28"
>
  {/* Heading */}
  <h1 
    className="lato-bold text-[32px] sm:text-[40px] lg:text-[50px] text-black transition-all duration-1000 ease-out"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transitionDelay: '0ms'
    }}
  >
    About us
  </h1>

  <p 
    className="text-[16px] sm:text-[17px] lg:text-[18px] text-[#52525B] mt-4 sm:mt-5 lato-regular max-w-4xl mx-auto transition-all duration-1000 ease-out"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay="100"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transitionDelay: '200ms'
    }}
  >
    At BAHOJU, we help brands unlock their full potential through
    innovative, data-driven digital marketing. Our tailored strategies boost
    visibility, engage audiences, and drive measurable growth.
  </p>

  {/* Mission / Vision / Mantra */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mt-16 lg:mt-28">
    {/* Mission */}
    <div 
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: '400ms'
      }}
    >
      <div className="border border-black rounded-full w-14 h-14 flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white">
        <TbTargetArrow size={28} />
      </div>
      <h2 className="lato-regular text-[22px] sm:text-[24px] lg:text-[28px] mt-4">
        Mission
      </h2>
      <p className="lato-regular text-[#52525B] text-[15px] sm:text-[15px] mt-3 max-w-sm mx-auto text-balance" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        Solving everyday challenges with tech-driven efficiency and creating
        shared wealth for the creators of tomorrow's solutions.
      </p>
    </div>

    {/* Vision */}
    <div 
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: '600ms'
      }}
    >
      <div className="border border-black rounded-full w-14 h-14 flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white">
        <BiSolidBinoculars size={28} />
      </div>
      <h2 className="lato-regular text-[22px] sm:text-[24px] lg:text-[28px] mt-4">
        Vision
      </h2>
      <p className="lato-regular text-[#52525B] text-[14px] sm:text-[15px] mt-3 max-w-sm mx-auto text-balance" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
        To establish Bahoju as the global hallmark of digital excellence,
        transforming human productivity and pioneering a future of shared
        prosperity through purposeful innovation.
      </p>
    </div>

    {/* Mantra */}
    <div 
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: '800ms'
      }}
    >
      <div className="border border-black rounded-full w-14 h-14 flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white">
        <PiGenderMaleBold size={28} />
      </div>
      <h2 className="lato-regular text-[22px] sm:text-[24px] lg:text-[28px] mt-4">
        Mantra
      </h2>
      <p className="lato-regular text-[#52525B] text-[14px] sm:text-[15px] mt-3 max-w-sm mx-auto text-balance" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        Transforming lives through technology, building wealth through
        innovation.
      </p>
    </div>
  </div>

  {/* Our Team */}
  <div className="mt-20 lg:mt-40 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
    <div 
      className="w-full lg:w-1/2 transition-all duration-1000 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
        transitionDelay: '300ms'
      }}
    >
      <img
        src={aboutImage}
        alt="About Us"
        className="mx-auto lg:mx-0 w-full max-w-2xl rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
      />
    </div>

    <div 
      className="w-full lg:w-1/2 text-left transition-all duration-1000 ease-out space-y-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
        transitionDelay: '400ms'
      }}
    >
      <h2 className="lato-bold text-[26px] sm:text-[28px] lg:text-[32px] mb-6">
        Our Team
      </h2>
      <p className="lato-regular text-[#52525B] text-[15px] sm:text-[16px] lg:text-[17px] leading-loose " >
        At Bahoju, our experienced and dedicated team forms the cornerstone of our client-centric approach. 
        We are deeply committed to understanding your business objectives and providing the support you need to thrive. 
        <br />
        Our collaborative spirit and diverse skill sets enable us to work seamlessly with you, delivering innovative solutions and ensuring your complete satisfaction. We are more than just a service provider; we are your trusted technology partner.
      </p>
      

      <Button className="mt-6 py-3 px-6 text-white w-full sm:w-auto transition-all duration-300 hover:scale-105">
        Download Brochure
      </Button>
    </div>
  </div>

  {/* Trusted Partners */}
  <div 
    className="mt-20 lg:mt-36 transition-all duration-1000 ease-out"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transitionDelay: '1400ms'
    }}
  >
    <h2 className="lato-bold text-[32px] sm:text-[40px] lg:text-[50px]">
      Trusted Partners
    </h2>
    <div className="mt-8 sm:mt-10">
      <img
        src={logos}
        alt="Trusted Partners"
        className="mx-auto w-full max-w-5xl rounded-lg transition-all duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>

  );
}

export default About;
