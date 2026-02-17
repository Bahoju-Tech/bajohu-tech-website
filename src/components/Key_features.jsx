import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

import {
  FaMoneyBillWave,
  FaVideo,
  FaMapMarkedAlt,
  FaClipboardList,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Company provided vehicles",
    icon: <FaMoneyBillWave />,
    bg: "bg-[#FFF6E8]",
  },
  {
    id: 2,
    title: "Audio & Video Ride Recording",
    icon: <FaVideo />,
    bg: "bg-[#EAF8EE]",
  },
  {
    id: 3,
    title: "Real-Time Ride Monitoring",
    icon: <FaMapMarkedAlt />,
    bg: "bg-[#F3EAFE]",
  },
  {
    id: 4,
    title: "Incident Reporting with Evidence Logs",
    icon: <FaClipboardList />,
    bg: "bg-[#FFF3E8]",
  },
];

function Key_features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
        <span className="text-xl text-gray-400 flex items-center gap-2 italic ">
          <span className="w-6 h-[1px] bg-gray-300 " />
          Explore
        </span>

        <h2 className="text-3xl font-semibold mt-3 mb-4">
          Key Features
        </h2>

        <p className="max-w-2xl text-gray-600 leading-relaxed">
          Every ride is supported by real-time tracking, recorded
          evidence, and emergency systems that create a safer, more
          transparent experience for everyone on the platform.
        </p>
      </div>

      {/* Features grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">

  {features.map((feature, index) => (
    <div
      key={feature.id}
      className="
        bg-white rounded-2xl
        p-6 sm:p-8
        shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105
        min-h-[200px] sm:min-h-0
        flex flex-col justify-between
      "
      data-aos="fade-up"
      data-aos-delay={300 + (index * 150)}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${feature.bg} hover:scale-110 transition-transform duration-300`}
      >
        <span className="text-[#005F87] text-lg">
          {feature.icon}
        </span>
      </div>

      {/* Text */}
      <h3 className="font-medium text-[15px] sm:text-[16px] leading-snug">
        {feature.title}
      </h3>
    </div>
  ))}

</div>


      {/* Download CTA */}
<div className="mt-16 sm:mt-24 lg:mt-32" data-aos="fade-up" data-aos-delay="1000">
  <div className="bg-black rounded-3xl px-6 sm:px-10 py-12 sm:py-16 text-center text-white hover:shadow-2xl transition-shadow duration-300">

    <h2 className="text-[24px] sm:text-[30px] md:text-[34px] font-semibold mb-4">
      Download Bahoju Ride App
    </h2>

    <p className="max-w-md mx-auto text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] mb-8 sm:mb-10">
      Enjoy fast, safe, and transparent rides anytime. Download the
      Bahoju Ride app and experience a smarter way to move.
    </p>

    {/* Store Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center ">

      {/* Play Store */}
      <button className="flex items-center justify-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:opacity-90 transition hover:scale-105 transform w-full sm:w-auto">
        <FaGooglePlay className="text-2xl" />
        <div className="text-left leading-tight">
          <p className="text-[10px]">Download on</p>
          <p className="text-sm font-semibold">Playstore</p>
        </div>
      </button>

      {/* App Store */}
      <button className="flex items-center justify-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:opacity-90 transition hover:scale-105 transform w-full sm:w-auto">
        <FaAppStoreIos className="text-2xl" />
        <div className="text-left leading-tight">
          <p className="text-[10px]">Download on</p>
          <p className="text-sm font-semibold">Appstore</p>
        </div>
      </button>

    </div>

  </div>
  </div>

    </section>
  );
}

export default Key_features;
