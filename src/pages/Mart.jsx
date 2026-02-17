import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import AOS from "aos";

import martImage from "../assets/mart1.png";
import martImage2 from "../assets/mockups/mart2.png";
import Why_bahoju_mart from "../components/Why_bahoju_mart";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
// import { FaArrowRightLong } from "react-icons/fa";

function Mart() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="lato-regular">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-semibold leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Buy. Sell. Discover <br />
              More All in One <br />
              Marketplace
            </h1>

            <p
              className="text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-10 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              A modern online marketplace built to help you buy and sell
              anything with confidence. Whether you're a shopper looking for
              great deals or a seller growing a business.
            </p>

            {/* BUTTONS */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Button className="w-full max-w-[195px] sm:w-auto px-6 py-3 text-white font-semibold hover:scale-105 transition-transform duration-300">
                Join the Waitlist
              </Button>

              <Button className="w-full max-w-[195px] sm:w-auto px-6 py-3 border border-[#005F87] text-[#005F87] hover:bg-[#005F87] text-white font-semibold hover:scale-105 transition-transform duration-300">
                Become a Merchant
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <img
              src={martImage}
              alt="Bahoju Mart"
              className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-md rounded-3xl object-cover hover:scale-105 transition-transform duration-500 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section className="px-6 pb-32">
        {/* Black Border Wrapper */}
        <div className="bg-black rounded-[32px] p-6 md:p-7 max-w-8xl mx-auto">
          {/* Inner White Card */}
          <div className="bg-white rounded-[28px] px-6 py-16 md:px-16">
            {/* Title */}
            <div className="text-center mb-14">
              <h2 className="text-3xl font-semibold mb-3">How it works</h2>
              {/* Animated underline */}
              <div className="relative w-12 h-1 mx-auto overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1/2 bg-[#005F87] animate-line-left" />
                <span className="absolute right-0 top-0 h-full w-1/2 bg-[#005F87] animate-line-right" />
              </div>

              {/* <div className="w-12 h-[2px] bg-[#005F87] mx-auto rounded-full" /> */}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Phone Mockup */}
              <div className="flex justify-center">
                <img
                  src={martImage2}
                  alt="Bahoju Mart App"
                  className="w-full max-w-2xs hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Steps */}
              <div className="bg-[#F7F8FA] rounded-2xl p-8 mx-auto hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="relative pl-6">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold block mb-1">
                        1. Download the app or visit our website
                      </span>
                      Get the Bahoju Mart app from the Apple or Play store.
                    </p>

                    {/* Dashed line */}
                    <span className="absolute left-8 top-full mt-2 h-10 border-l border-dashed border-gray-300" />
                  </div>

                  {/* Step 2 */}
                  <div className="relative pl-6">
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold block mb-1 pt-9">
                        2. Add to Cart
                      </span>
                      Select your preferred add them to your cart in just a tap
                    </p>

                    {/* Dashed line */}
                    <span className="absolute left-8 mt-2 h-10 border-1 border-dashed border-gray-300" />
                  </div>

                  {/* Step 3 */}
                  <div className="relative pl-6">
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold block mb-1 pt-9">
                        2. Checkout Securely
                      </span>
                      Review your order and pay safely
                    </p>
                    <span className="absolute left-8 top-full mt-2 h-10 border-l border-dashed border-gray-300" />
                  </div>

                  <div className="relative pl-6">
                    <p className="text-sm text-gray-400">
                      <span className="font-semibold block mb-1 pt-9">
                        2. Get it Delivered
                      </span>
                      Sit back while we process your order and deliver it
                    </p>
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <button className="bg-[#005F87] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition flex items-center gap-2 hover:scale-105 transform">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Why_bahoju_mart data-aos="fade-up" data-aos-delay="2800" />

      {/* Download CTA */}
      <div className="mb-10 px-6">
        <div className="bg-black px-6 py-20 text-center text-white max-w-8xl mx-auto rounded-2xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Download Bahoju Mart App
          </h2>

          <p className="max-w-xl mx-auto text-gray-300 text-sm md:text-base mb-10">
            Enjoy fast, secure, and seamless shopping anytime. Download the
            Bahoju Mart app and discover a smarter way to shop.
          </p>

          {/* store buttons */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {/* Play Store */}
            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:opacity-90 transition hover:scale-105 transform">
              <FaGooglePlay className="text-3xl" />
              <div className="text-left leading-tight">
                <p className="text-[10px] ">Download on</p>
                <p className="text-sm font-semibold">Play Store</p>
              </div>
            </button>

            {/* App Store */}
            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:opacity-90 transition hover:scale-105 transform">
              <FaAppStoreIos className="text-3xl" />
              <div className="text-left leading-tight">
                <p className="text-[10px] ">Download on</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Footer data-aos="fade-up" data-aos-delay="3200" />
    </div>
  );
}

export default Mart;
