import React, { useEffect, useState } from "react";
import value from "../assets/value-bg.png";

function Values() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${value})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // height: "120vh",
        padding: '50px 0',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5 pb-20">
        <h1 
          className="text-[#fff] text-[32px] sm:text-[40px] md:text-[50px] lato-bold text-center pt-16 sm:pt-20 md:pt-24 transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0ms'
          }}
        >
          Our Values
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
          {/* MOBILE ORDER: 01, 02, 03, 04, 05, 06, 07 */}
          
          {/* LEFT COLUMN - DESKTOP */}
          <div className="hidden lg:grid gap-8">
            {/* 01 - Boldness In Innovation */}
            <div 
              className="max-w-md relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-5 transition-all translate-x-20 "
            >
              <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold mb-[10rem] lg:mb-[7rem] transition-all duration-300 hover:scale-110">
                01
              </span>
              <div className="absolute bottom-4 left-4 max-w-2xl">
                <h1 className="text-[28px] lato-regular text-white">
                  Boldness In Innovation
                </h1>
                <p className="text-[14px] lato-light text-white">
                  Challenge conventions. Pioneer new approaches. Embrace calculated risks. Learn fast from failures
                </p>
              </div>
            </div>

            {/* 03 - Hunger for Excellence */}
            <div 
              className="max-w-md relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-5 transition-all translate-x-20 "
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '400ms'
              }}
            >
              <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold mb-[10rem] lg:mb-[7rem] transition-all duration-300 hover:scale-110">
                03
              </span>
              <div className="absolute bottom-4 left-4 max-w-2xl">
                <h1 className="text-[28px] lato-regular text-white">Hunger for Excellence</h1>
                <p className="text-[14px] lato-light text-white">
                  pursue World-Class Standards. Never Settle for Mediocrity.
                  Continuously Improve. Take Pride in Quality
                </p>
              </div>
            </div>

            {/* 06 - Urgency With Precision */}
            <div 
              className="max-w-md relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-5 transition-all translate-x-20"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '600ms'
              }}
            >
              <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold mb-[10rem] lg:mb-[7rem] transition-all duration-300 hover:scale-110">
                06
              </span>
              <div className="absolute bottom-4 left-4 max-w-2xl">
                <h1 className="text-[28px] lato-regular text-white">
                  Urgency With Precision
                </h1>
                <p className="text-[14px] lato-light text-white">
                  Move Fast Without Shortcuts. Respond Promptly. Balance Speed With Quality. Execute Efficiently
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - DESKTOP */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8 lg:-ml-6">
            {/* 02 - Accountability and Ownership */}
            <div 
              className="relative md:col-span-2 shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 transition-all "
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '300ms'
              }}
            >
              <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold mb-[10rem] lg:mb-[7rem] transition-all duration-300 hover:scale-110">
                02
              </span>
              <div className="absolute bottom-4 left-4 max-w-2xl">
                <h1 className="text-[28px] lato-regular text-white">
                  Accountability and Ownership
                </h1>
                <p className="text-[14px] lato-light text-white">
                  Deliver On promises. Own Mistakes. Take initiative. Follow Through Completely.
                </p>
              </div>
            </div>

            {/* 04 - Obsession With Client Success */}
            <div 
              className="relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 transition-all "
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '500ms'
              }}
            >
              <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold mb-[10rem] lg:mb-[7rem] transition-all duration-300 hover:scale-110">
                04
              </span>
              <div className="absolute bottom-4 left-4 max-w-2xl">
                <h1 className="text-[28px] lato-regular text-white">Obsession With Client Success</h1>
                <p className="text-[14px] lato-light text-white mt-3">
                  Understand Deeply. Deliver Measurable Outcomes. Anticipate Needs. Build Lasting Partnerships
                </p>
              </div>
            </div>

            {/* 05 - Joy In Collaboration */}
            <div 
              className="relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 transition-all "
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '700ms'
              }}
            >
              <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold transition-all duration-300 hover:scale-110">
                05
              </span>
              <div className="mt-12">
                <h1 className="text-[28px] lato-regular text-white">Joy In Collaboration</h1>
                <p className="text-[14px] lato-light text-white mt-3">
                  Share Knowledge Freely. Celebrate Team Wins. Respect Diverse Views. Build Positive Culture
                </p>
              </div>
            </div>

            {/* 07 - Servant Leadership */}
            <div 
              className="relative md:col-span-2 shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 transition-all "
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '800ms'
              }}
            >
              <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold mb-[10rem] lg:mb-[7rem] transition-all duration-300 hover:scale-110">
                07
              </span>
              <div className="absolute bottom-4 left-4 max-w-2xl">
                <h1 className="text-[28px] lato-regular text-white">
                  Servant Leadership
                </h1>
                <p className="text-[14px] lato-light text-white">
                  Mentor Regardless Of Position. Lead By Example. Remove Obstacles. Develop Others
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT - ORDERED 01-07 */}
          <div className="lg:hidden">
            {/* 01 - Boldness In Innovation */}
            <div 
              className="w-full order-1 relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 sm:p-5 mb-6 transition-all duration-1000 ease-out hover:scale-105 hover:shadow-[#fff]/60"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '200ms'
              }}
            >
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold text-sm sm:text-base mb-[8rem] sm:mb-[10rem] transition-all duration-300 hover:scale-110">
                01
              </span>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 max-w-2xl">
                <h1 className="text-[20px] sm:text-[24px] lato-regular text-white">
                  Boldness In Innovation
                </h1>
                <p className="text-[12px] sm:text-[14px] lato-light text-white">
                  Challenge conventions. Pioneer new approaches. Embrace calculated risks. Learn fast from failures
                </p>
              </div>
            </div>

            {/* 02 - Accountability and Ownership */}
            <div 
              className="w-full order-2 relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 sm:p-5 mb-6 transition-all duration-1000 ease-out hover:scale-105 hover:shadow-[#fff]/60"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '300ms'
              }}
            >
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold text-sm sm:text-base mb-[8rem] sm:mb-[10rem] transition-all duration-300 hover:scale-110">
                02
              </span>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 max-w-2xl">
                <h1 className="text-[20px] sm:text-[24px] lato-regular text-white">
                  Accountability and Ownership
                </h1>
                <p className="text-[12px] sm:text-[14px] lato-light text-white">
                  Deliver On promises. Own Mistakes. Take initiative. Follow Through Completely.
                </p>
              </div>
            </div>

            {/* 03 - Hunger for Excellence */}
            <div 
              className="w-full order-3 relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 sm:p-5 mb-6 transition-all duration-1000 ease-out hover:scale-105 hover:shadow-[#fff]/60"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '400ms'
              }}
            >
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold text-sm sm:text-base mb-[8rem] sm:mb-[10rem] transition-all duration-300 hover:scale-110">
                03
              </span>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 max-w-2xl">
                <h1 className="text-[20px] sm:text-[24px] lato-regular text-white">Hunger for Excellence</h1>
                <p className="text-[12px] sm:text-[14px] lato-light text-white">
                  pursue World-Class Standards. Never Settle for Mediocrity.
                  Continuously Improve. Take Pride in Quality
                </p>
              </div>
            </div>

            {/* 04 - Obsession With Client Success */}
            <div 
              className="w-full order-4 relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 sm:p-5 mb-6 transition-all duration-1000 ease-out hover:scale-105 hover:shadow-[#fff]/60"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '500ms'
              }}
            >
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold text-sm sm:text-base mb-[8rem] sm:mb-[10rem] transition-all duration-300 hover:scale-110">
                04
              </span>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 max-w-2xl">
                <h1 className="text-[20px] sm:text-[24px] lato-regular text-white">Obsession With Client Success</h1>
                <p className="text-[12px] sm:text-[14px] lato-light text-white">
                  Understand Deeply. Deliver Measurable Outcomes. Anticipate Needs. Build Lasting Partnerships
                </p>
              </div>
            </div>

            {/* 05 - Joy In Collaboration */}
            <div 
              className="w-full order-5 relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 sm:p-5 mb-6 transition-all duration-1000 ease-out hover:scale-105 hover:shadow-[#fff]/60"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '600ms'
              }}
            >
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold text-sm sm:text-base mb-[8rem] sm:mb-[10rem] transition-all duration-300 hover:scale-110">
                05
              </span>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 max-w-2xl">
                <h1 className="text-[20px] sm:text-[24px] lato-regular text-white">Joy In Collaboration</h1>
                <p className="text-[12px] sm:text-[14px] lato-light text-white">
                  Share Knowledge Freely. Celebrate Team Wins. Respect Diverse Views. Build Positive Culture
                </p>
              </div>
            </div>

            {/* 06 - Urgency With Precision */}
            <div 
              className="w-full order-6 relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 sm:p-5 mb-6 transition-all duration-1000 ease-out hover:scale-105 hover:shadow-[#fff]/60"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '700ms'
              }}
            >
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold text-sm sm:text-base mb-[8rem] sm:mb-[10rem] transition-all duration-300 hover:scale-110">
                06
              </span>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 max-w-2xl">
                <h1 className="text-[20px] sm:text-[24px] lato-regular text-white">
                  Urgency With Precision
                </h1>
                <p className="text-[12px] sm:text-[14px] lato-light text-white">
                  Move Fast Without Shortcuts. Respond Promptly. Balance Speed With Quality. Execute Efficiently
                </p>
              </div>
            </div>

            {/* 07 - Servant Leadership */}
            <div 
              className="w-full order-7 relative shadow shadow-[#fff]/40 border border-white/10 rounded-xl p-4 sm:p-5 transition-all duration-1000 ease-out hover:scale-105 hover:shadow-[#fff]/60"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '800ms'
              }}
            >
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center font-semibold text-sm sm:text-base mb-[8rem] sm:mb-[10rem] transition-all duration-300 hover:scale-110">
                07
              </span>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 max-w-2xl">
                <h1 className="text-[20px] sm:text-[24px] lato-regular text-white">
                  Servant Leadership
                </h1>
                <p className="text-[12px] sm:text-[14px] lato-light text-white">
                  Mentor Regardless Of Position. Lead By Example. Remove Obstacles. Develop Others
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
