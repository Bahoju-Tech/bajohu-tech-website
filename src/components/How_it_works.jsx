import React from "react";
import phoneMockup2 from "../assets/mockups/frame_2.png";

const steps = [
  {
    id: 1,
    title: "Download Bahoju Ride",
    text:
      "Get started by downloading the app and creating your account as a customer or driver. Complete a simple verification process to ensure safety, then enjoy.",
    position: "left",
  },
  {
    id: 2,
    title: "Request & accept a ride",
    text:
      "Rider enters their pickup and destination, and nearby verified drivers receive the request with full route, distance, and trip details so they can decide to accept.",
    position: "right",
  },
  {
    id: 2,
    title: "Ride with full protection",
    text:
      "Once the trip starts, live location tracking, automatic audio recording, and in-car video monitoring are activated to ensure safety, transparency, and accountability.",
    position: "left",
  },
  {
    id: 2,
    title: "Complete & review",
    text:
      "At the end of the ride, payment is processed securely, and both the rider and driver can rate each other, review trip details, and access recordings or logs if needed.",
    position: "right",
  },
];

function How_it_works() {
  return (
   <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

  {/* HEADER */}
  <div className="text-center mb-12 sm:mb-16" data-aos="fade-up" data-aos-delay="200">
    <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold mb-4">
      How it works
    </h2>

    <div className="relative w-12 h-1 mx-auto overflow-hidden">
      <span className="absolute left-0 top-0 h-full w-1/2 bg-[#005F87] animate-line-left" />
      <span className="absolute right-0 top-0 h-full w-1/2 bg-[#005F87] animate-line-right" />
    </div>
  </div>

  {/* MOBILE LAYOUT */}
  <div className="lg:hidden space-y-10">

    {/* All steps stacked */}
    {steps.map((step, index) => (
      <StepCard key={step.id} step={step} align="left" delay={300 + (index * 200)} />
    ))}

    {/* Phone bottom */}
    <div className="relative flex justify-center pt-10" data-aos="fade-up" data-aos-delay="1100">

      {/* Circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[260px] h-[260px] border border-dashed border-[#005F87]/40 rounded-full" />
        <div className="absolute w-[190px] h-[190px] border border-dashed border-[#005F87]/40 rounded-full" />
      </div>

      <img
        src={phoneMockup2}
        alt="Bahoju Ride App"
        className="relative z-10 w-[180px] hover:scale-105 transition-transform duration-300"
      />
    </div>

  </div>

  {/* DESKTOP LAYOUT */}
  <div className="hidden lg:grid relative grid-cols-3 gap-16 items-center">

    {/* LEFT STEPS */}
    <div className="space-y-20">
      {steps
        .filter((s) => s.position === "left")
        .map((step, index) => (
          <StepCard key={step.id} step={step} align="right" delay={300 + (index * 200)} />
        ))}
    </div>

    {/* PHONE */}
    <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="700">

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[400px] h-[400px] border border-dashed border-[#005F87]/40 rounded-full" />
        <div className="absolute w-[300px] h-[300px] border border-dashed border-[#005F87]/40 rounded-full" />
      </div>

      <img
        src={phoneMockup2}
        alt="Bahoju Ride App"
        className="relative z-10 w-[240px] hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* RIGHT STEPS */}
    <div className="space-y-20">
      {steps
        .filter((s) => s.position === "right")
        .map((step, index) => (
          <StepCard key={step.id} step={step} align="left" delay={500 + (index * 200)} />
        ))}
    </div>

  </div>
</section>

  );
}

export default How_it_works;

function StepCard({ step, align, delay }) {
  return (
   <div
  className={`
    flex gap-4 sm:gap-6
    ${
      align === "right"
        ? "lg:flex-row-reverse lg:text-right"
        : "lg:text-left"
    }
    text-left
  `}
  data-aos="fade-up"
  data-aos-delay={delay}
>

  {/* NUMBER */}
  <div className="
    flex-shrink-0
    w-8 h-8 sm:w-10 sm:h-10
    rounded-full
    bg-[#005F87]
    text-white
    flex items-center justify-center
    text-sm sm:text-base
    font-semibold
    hover:scale-110 transition-transform duration-300
  ">
    {step.id}
  </div>

  {/* TEXT */}
  <div className="max-w-full sm:max-w-sm">

    <h3 className="font-semibold text-[16px] sm:text-[18px] mb-2">
      {step.title}
    </h3>

    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
      {step.text}
    </p>

  </div>

</div>

  );
}
