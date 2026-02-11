import React from "react";

function WhyBahojuMart() {
  return (
    <section className="max-w-7xl pl-[10%] px-6 py-5 relative lato-regular">
      {/* Header */}
      <div className="mb-9xl lg:pb-30 pb-10">
        <span className="text-sm text-gray-400 block mb-2 lato-regular">— Explore</span>
        <h2 className="text-3xl font-semibold mb-4 lato-bold">Why Bahoju Mart?</h2>
        <p className="max-w-xl  text-gray-500 text-sm lato-regular">
          Every ride is supported by real-time tracking, verified vendors, and
          emergency systems that create a safer, more transparent experience for
          everyone on the platform.
        </p>
        {/* <div className="w-6 h-[2px] bg-[#005F87] mx-auto mt-4" /> */}
      </div>

      {/* Diagram Area */}
      <div className="relative lg:block flex flex-wrap justify-start gap-20 items-center pb-30 min-h-[700px]">
        {/* Curved dotted connectors */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none lg:block hidden"
          viewBox="0 0 1200 750"
          preserveAspectRatio="none"
        >
          {/* Curve 1 — Top Left → Right */}
          <path
            d="M 180 250
       C 30 60, 980 100, 900 65"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="6 8"
            fill="none"
          />

          {/* Curve 2 — Bottom Left → Right */}
          <path
            d="M 460 470
       C 50 220, 420 720, 820 360"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="6 8"
            fill="none"
          />

          {/* Curve 3 — Middle sweep */}
          <path
            d="M 200 100
       C 300 260, 1000 00, 900 270"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="6 8"
            fill="none"
          />
        </svg>

        {/* Card 1 */}
        <FeatureCard
          title="Shop With Confidence"
          text="Verified vendors and transparent reviews help you make confident purchases."
          number='01'
          className="lg:bottom-40 lg:left-[60%] lg:rotate-[-27deg]"
        />
        {/* Card 2 */}
        <FeatureCard
          title=" Secure Payments"
          text="Every transaction is encrypted and protected to ensure safe and seamless payments."
          number='02'
          className="lg:top-[10%] lg:left-[5%] lg:rotate-[20deg] lg:mt-[-5%] sm:mt-10"
        />

        {/* Card 3 */}
        <FeatureCard
          title="Fast & Reliable Delivery"
          text="Get your orders delivered on time with our optimized logistics system."
          number='03'
          className="lg:bottom-67 lg:left-[60%] lg:rotate-[-21deg] lg:mt-0 sm:mt-10"
        />

        {/* Card 4 */}
        <FeatureCard
          title="Grow Your Business"
          text="Powerful tools help merchants reach more customers and scale faster."
          number='04'
          className="lg:bottom-24 lg:left-[13%] lg:rotate-[21deg] lg:mt-0 sm:mt-10"
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, text, className, number }) {
  return (
    <div className={`md:relative mt-10 ${className}`}>
      {/* Small top dot */}
        {/* <span className="absolute top-6 left-[13%] w-6 h-6 bg-[#005F87] rounded-full z-10 shadow-[0_0_5px_rgba(0,0,0,0.3)]" /> */}

      {/* Outer card */}
      <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] shadow-2xl p-7 w-80 h-90">
        <span className="flex justify-center items-center">
          <div className="w-6 h-6 bg-[#005F87] rounded-full z-10 shadow-[0_0_5px_rgba(0,0,0,0.3)]"/>
        </span>
        {/* Inner card */}
        <div className="bg-gray-100 rounded-lg p-4 mt-5 h-65">
          <h1 className="text-[18px] font-semibold">{number}</h1>
          <h4 className="text-2xl font-semibold mt-12">{title}</h4>
          <p className="text-14rem text-gray-500 leading-relaxed mt-3">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyBahojuMart;
