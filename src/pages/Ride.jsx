import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from 'aos';

import phoneMockup from "../assets/mockups/frame_1.png"; 
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import How_it_works from "../components/How_it_works";
import Key_features from "../components/Key_features";

// import phoneMockup2 from "../assets/mockups/frame_2.png"; 

function Ride() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="lato-regular">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <h1 
            className="text-4xl lg:text-5xl md:text-4xl font-semibold leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Bahoju Ride – The <br/>
            safety first ride app
          </h1>

          <p 
            className="text-gray-600 max-w-xl mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            A negotiated-fare ride platform designed to deliver
            unmatched safety, fair pricing, and complete trip
            accountability, ensuring every journey is transparent,
            protected, and fully documented.
          </p>

          {/* Store buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {/* Play Store */}
            <button className="flex items-center gap-3 bg-[#005F87] text-white px-5 py-3 rounded-lg hover:opacity-90 transition hover:scale-105 transform">
              <FaGooglePlay className="text-2xl" />

              <div className="flex flex-col leading-tight text-left">
                <span className="text-xs opacity-80">Download on</span>
                <span className="text-sm font-semibold">Play Store</span>
              </div>
            </button>

            {/* App Store */}
            <button className="flex items-center gap-3 bg-[#005F87] text-white px-4 py-3 rounded-lg hover:opacity-90 transition hover:scale-105 transform">
              <FaAppStoreIos className="text-3xl" />

              <div className="flex flex-col leading-tight text-left">
                <span className="text-xs opacity-80">
                  Download On
                </span> 
                <span className="text-sm font-semibold">
                  App Store
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Right image */}
        <div 
          className="relative flex justify-center"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <img
            src={phoneMockup}
            alt="Bahoju Ride App"
            className="w-50 h-100 hover:scale-105 transition-transform duration-300"
          />

          {/* Floating badges */}
          <div 
            className="absolute top-10 left-1/7 bg-[#00756F] text-white shadow-lg px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <span className=" rounded-full fill-white" />
            {<FaCheckCircle />}Driver Accepted Ride Request
          </div>

          <div 
            className="absolute bottom-16 -right-3 bg-[#00756F] text-white shadow-lg px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <span className="rounded-full fill-white" />
            {<FaCheckCircle />}Earn More Money by Driving
          </div>
        </div>
      </section>
      <How_it_works />
      <Key_features />

      <Footer />
    </div>
  );
}

export default Ride;
