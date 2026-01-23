import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidBinoculars } from "react-icons/bi";
import { PiGenderMaleBold } from "react-icons/pi";
import aboutImage from "../assets/about.png";
import logos from "../assets/logos.png";
import Button from "./Button";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center mt-24">
      <h1 className="lato-bold text-[50px] text-black">About Us</h1>

      <p className="text-[18px] text-[#52525B] mt-5 lato-regular max-w-4xl mx-auto">
        At BAHOJU, we help brands unlock their full potential through
        innovative, data-driven digital marketing. Our tailored strategies boost
        visibility, engage audiences, and drive measurable growth.
      </p>

      {/* Cards */}
      <div className="flex items-center justify-center gap-[4rem] mt-28">
        {/* Mission */}
        <div>
          <div className="border border-black rounded-full w-14 h-14 flex items-center justify-center mx-auto">
            <TbTargetArrow size={30} />
          </div>
          <h2 className="lato-regular text-[28px] mt-4">Mission</h2>
          <p className="lato-regular text-[#52525B] text-[15px] mt-3">
            At BAHOJU, we help brands unlock their full potential through
            innovative, data-driven digital marketing.
          </p>
        </div>

        {/* Vision */}
        <div>
          <div className="border border-black rounded-full w-14 h-14 flex items-center justify-center mx-auto">
            <BiSolidBinoculars size={30} />
          </div>
          <h2 className="lato-regular text-[28px] mt-4">Vision</h2>
          <p className="lato-regular text-[#52525B] text-[15px] mt-3">
            To establish Bahoju as the global hallmark of digital excellence,
            transforming human productivity and pioneering a future of shared
            success.
          </p>
        </div>

        {/* Mantra */}
        <div>
          <div className="border border-black rounded-full w-14 h-14 flex items-center justify-center mx-auto">
            <PiGenderMaleBold size={30} />
          </div>
          <h2 className="lato-regular text-[28px] mt-4">Mantra</h2>
          <p className="lato-regular text-[#52525B] text-[15px] mt-3">
            Transforming lives through technology, building wealth through
            innovation.
          </p>
        </div>
      </div>

      <div className="mt-48 flex items-center justify-center gap-20">
        <div>
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="max-w-3xl mx-auto text-left">
            <h2 className="lato-bold text-[32px]">Our Team</h2>
            <p className="lato-light text-[#52525B] text-[17px] mt-4">At Bahoju, our experienced and dedicated team forms the cornerstone of our client-centric approach. We are deeply committed to understanding your business objectives and providing the support you need to thrive. </p>
            <p className="lato-regular text-[#52525B] text-[17px]">Our collaborative spirit and diverse skill sets enable us to work seamlessly with you, delivering innovative solutions and ensuring your complete satisfaction. We are more than just a service provider; we are your trusted technology partner.</p>
            <Button text="Download Brochure" className="mt-6 py-3" />
        </div>
      </div>

      <div className="mt-42">
        <h2 className="lato-bold text-[50px]">Trusted Partners</h2>
        <div className="mt-10">
            <img src={logos} alt="Trusted Partners" />
        </div>
      </div>
    </div>
  );
}

export default About;
