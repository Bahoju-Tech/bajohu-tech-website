import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import { useNavigate } from "react-router-dom";



import serviceBg from "../assets/service.jpg";

import sBg from "../assets/service_img.png";

import instituteBg from "../assets/institute.png";

import martBg from "../assets/mart.png";

import rideBg from "../assets/ride.png";

import mBg from "../assets/mart_bg.jpg";

import rBg from "../assets/ride_bg.jpg";

import iBg from "../assets/institute_bg.jpg";

import { FaArrowRight } from "react-icons/fa";



import "swiper/css";

import "swiper/css/pagination";



const tabs = [

  "Bahoju Service",

  "Bahoju Institute",

  "Bahoju Ride",

  "Bahoju Mart",

];



const productsData = {

  "Bahoju Service": [

    {

      title: "Services",

      subtitle: "We deliver end-to-end technology and solutions designed to help businesses build innovative products, secure their infrastructure, and scale with confidence in a fast-moving digital world.",

      description: [

        "Software Development",

        "Mobile App Development", 

        "Cloud Engineering",

        "Cybersecurity Solutions",

        "Digital Marketing Services",

        "Branding Solutions"

      ],

      image: sBg,

      bg: serviceBg,

      route: "/services", // future-ready

    },

  ],

  "Bahoju Institute": [

    {

      title: "Institute",

      description:

        "At Bahoju Institute, we train the next generation of innovators. From strategy and user experience to development and deployment, students gain practical skills for real-world impact.  ",

      image: instituteBg,

      bg: iBg,

      route: "/institute", // future-ready

    },

  ],

  "Bahoju Ride": [

    {

      title: "Ride",

      description:

        "Track your journey in real time, record ride audio, and automatically document incidents with evidence designed to deliver a safer, smarter ride experience. ",

      image: rideBg,

      bg: rBg,

      route: "/ride", // ✅ ACTIVE

    },

  ],

  "Bahoju Mart": [

    {

      title: "Mart",

      description:

        "Shop smarter. Get more value from every purchase. Delivered fast to your doorstep, with reliable service, trusted sellers, and quality products you can count on.",

      image: martBg,

      bg: mBg,

      route: "/mart", // future-ready

    },

  ],

};



function Products() {

  const [activeTab, setActiveTab] = useState("Bahoju Service");

  const [isFading, setIsFading] = useState(false);



  const navigate = useNavigate();

  const activeIndex = tabs.indexOf(activeTab);



  const changeTab = (nextIndex) => {

    if (tabs[nextIndex] === activeTab) return;



    setIsFading(true);



    setTimeout(() => {

      setActiveTab(tabs[nextIndex]);

      setIsFading(false);

    }, 150);

  };



  return (

    <section id="products" className="max-w-7xl lg:mx-auto lg:px-12 sm:px-0 px-1 py-24">

      {/* Section header */}

      {/* <span className="text-sm text-gray-400">—— Explore</span> */}

      <h2 className="text-4xl font-bold mt-2 mb-10">Our Products</h2>



      {/* Tabs - Hidden on small screens, shown on medium and up */}

      <div className="flex flex-wrap gap-3 mb-12 hidden md:flex">

        {tabs.map((tab, index) => (

          <button

            key={tab}

            onClick={() => changeTab(index)}

            className={`px-5 py-2 rounded-lg text-sm transition cursor-pointer

              ${

                activeTab === tab

                  ? "bg-black text-white"

                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"

              }

            `}

          >

            {tab}

          </button>

        ))}

      </div>



      {/* Product Cards - Vertical on small screens, Swiper on medium and up */}

      <div className="md:hidden px-3">

        {/* Show all cards vertically on small screens */}

        {tabs.map((tab) => (

          <div key={tab} className="mb-8">

            {productsData[tab].map((item, index) => (

              <div

                key={index}

                className="relative text-white rounded-xl p-6 flex flex-col items-center justify-between gap-10 min-h-[420px] bg-cover bg-center"

                style={{

                  backgroundImage: `url(${item.bg})`,

                }}

              >

                {/* Overlay */}

                <div className="absolute inset-2 bg-black/20 rounded-2xl" />



                {/* Content */}

                <div className="relative max-w-xl text-left">

                  <h3 className="text-3xl lato-semibold mb-4">{item.title}</h3>

                  {item.subtitle && (

                    <p className="text-base  lato-light text-white/80 mb-9 leading-relaxed text-[15px]">{item.subtitle}</p>

                  )}

                  {Array.isArray(item.description) ? (

                    <ul className="text-[15px] sm:text-base lato-light leading-relaxed mb-6 text-white/90 grid grid-cols-2 gap-2 sm:gap-3 sm:space-y-0">

                      {item.description.map((service, index) => (

                        <li key={index} className="flex items-start gap-1">

                          <span className="text-[#005F87] mt-1 text-xs sm:text-sm">▸</span>

                          <span className="text-[13px] sm:text-[15px]">{service}</span>

                        </li>

                      ))}

                    </ul>

                  ) : (

                    <p className="text-[15px] sm:text-base lato-light leading-relaxed mb-6 text-white/90">

                      {item.description}

                    </p>

                  )}



                  {/* Preview Button */}

                  <button

                    onClick={() => item.route && navigate(item.route)}

                    className="lato lato-semibold bg-black px-5 py-3 rounded-xl text-sm hover:bg-black/80 transition cursor-pointer flex items-center gap-3"

                  >

                    Explore

                    <span className="text-md mt-0.5"><FaArrowRight /></span>

                  </button>

                </div>



                {/* Image */}

                <div className="relative w-full">

                  <img

                    src={item.image}

                    alt={item.title}

                    className="w-full h-[300px] object-cover rounded-xl"

                  />

                </div>

              </div>

            ))}

          </div>

        ))}

      </div>



      {/* Swiper for medium screens and up */}

      <div className="hidden md:block">

        <Swiper modules={[Pagination]} slidesPerView={1} allowTouchMove={false}>

          {productsData[activeTab].map((item, index) => (

            <SwiperSlide key={index}>

              <div

                className={`relative text-white rounded-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[420px] bg-cover bg-center

                  transition-opacity duration-300 ease-in-out

                  ${isFading ? "opacity-0" : "opacity-100"}

                `}

                style={{

                  backgroundImage: `url(${item.bg})`,

                }}

              >

                {/* Overlay */}

                <div className="absolute inset-0 bg-black/20 rounded-2xl" />



                {/* Content */}

                <div className="relative max-w-xl lg:px-9  px-1 md:right-[70px] lg:right-[0px]">

                  <h3 className="text-3xl lato-semibold mb-4 ">{item.title}</h3>

                  {item.subtitle && (

                    <p className="text-base sm:text-sm lato-light text-white/80 mb-9">{item.subtitle}</p>

                  )}

                  {Array.isArray(item.description) ? (

                    <ul className="text-[18px] sm:text-base lato-light leading-relaxed mb-6 text-white/90 space-y-1 md:grid md:grid-cols-2 md:gap-3 md:space-y-0 lg:grid-cols-1">

                      {item.description.map((service, index) => (

                        <li key={index} className="flex items-start gap-2">

                          <span className="text-[#005F87] mt-1 text-xs sm:text-sm">▸</span>

                          <span className="text-xs sm:text-[14px] md:text-[18px] lg:text-[18px]">{service}</span>

                        </li>

                      ))}

                    </ul>

                  ) : (

                    <p className="text-[18px] sm:text-base lato-light leading-relaxed mb-6 text-white/90">

                      {item.description}

                    </p>

                  )}



                  {/* Preview Button */}

                  <button

                    onClick={() => item.route && navigate(item.route)}

                    className="translate-x-5 translate-y-3 bg-black px-5 py-3 rounded-xl text-sm hover:bg-black/80 transition cursor-pointer flex items-center gap-3"

                  >

                    Explore

                    <span className="text-md mt-0.5"><FaArrowRight /></span>

                  </button>

                </div>



                {/* Image */}

                <div className="relative w-full lg:w-[500px] mx-auto lg:mx-0 lg:left-5">

                  <img

                    src={item.image}

                    alt={item.title}

                    className="w-full h-[300px] object-cover rounded-xl"

                  />

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>



      {/* Dot Navigation - Hidden on small screens */}

      <div className="flex justify-center items-center gap-3 mt-8 hidden md:flex">

        {tabs.map((_, index) => (

          <button

            key={index}

            onClick={() => changeTab(index)}

            className={`w-3 h-3 rounded-full transition-all duration-300

              ${

                index === activeIndex

                  ? "bg-black scale-125"

                  : "bg-gray-300 hover:bg-gray-400"

              }

            `}

            aria-label={`Go to ${tabs[index]}`}

          />

        ))}

      </div>

    </section>

  );

}



export default Products;

