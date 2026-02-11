import React, { useEffect, useState, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";

import heroBg from "../assets/services_img.png";
import cloudBg from "../assets/cloud_bg.png";
import cloudImg from "../assets/cloud_img.png";
import cloudImg2 from "../assets/cloud_img2.png";
import cloudImg3 from "../assets/cloud_img3.png";
import cloudImg4 from "../assets/cloud_img4.png";
import cloudImg5 from "../assets/infra.png";
import brandImg from "../assets/brand.png";
import digital from "../assets/digital.png";
import { MdDone } from "react-icons/md";




function Services() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    // Handle scroll for overlapping effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate overlap transform for each section
  const getSectionTransform = (index) => {
    const sectionHeight = window.innerHeight;
    const sectionTop = sectionRefs.current[index]?.offsetTop || 0;
    const scrollProgress = Math.max(0, Math.min(1, (scrollY - sectionTop + sectionHeight) / sectionHeight));
    
    // Make sections overlap as you scroll
    const translateY = scrollProgress * -50; // Overlap by 50px
    const scale = 1 - (scrollProgress * 0.05); // Slight scale down
    
    return `translateY(${translateY}px) scale(${scale})`;
  };
  return (
    <div className="bg-black overflow-x-hidden lato-regular">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">

  {/* Background */}
  <img
    src={heroBg}
    alt="Bahoju Services"
    className="absolute inset-0 w-full h-full object-cover"
    data-aos="fade-in"
    data-aos-duration="1500"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full">

    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

      {/* Heading */}
      <h1 
        className="lato-bold text-white text-[40px] sm:text-[50px] md:text-[52px] lg:text-[60px] font-semibold leading-tight mb-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Your Trusted Technology Partner for Smart Software Solutions
      </h1>

      {/* Paragraph */}
      <p 
        className="lato-regular text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-md mx-auto lg:mx-0 "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        From product development to cloud deployment, we help you launch faster,
        operate smarter, and scale securely.
      </p>

      {/* Button */}
      <div 
        className="lato-bold flex justify-center lg:justify-start"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        <Button className="px-5 py-3 text-md  md:text-base w-full sm:w-auto max-w-[220px] text-white font-bold">
          Book a Consultation
        </Button>
      </div>

    </div>

  </div>

</section>


      {/* ================= CLOUD ENGINEERING & DEVOPS ================= */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="relative py-16 sm:py-24 lg:py-32 px-4 z-10"
        style={{
          transform: getSectionTransform(0),
          transition: 'transform 0.3s ease-out'
        }}
      >

  {/* Background */}
  <img
    src={cloudBg}
    alt="Cloud background"
    className="absolute right-0 top-0 h-full w-auto opacity-70 pointer-events-none"
  />

  <div className="absolute inset-0 bg-black/30" />

  {/* Glass Card */}
  <div className="relative z-10 max-w-7xl mx-auto">
    
    <div className="
      border border-white/40 rounded-3xl bg-white/5 
      backdrop-blur-xl
      p-6 sm:p-10 md:p-12 lg:p-14
      grid grid-cols-1 lg:grid-cols-2 
      gap-10 sm:gap-14 lg:gap-16
      items-center
      relative overflow-hidden
      transition-all duration-700 ease-in-out
      hover:shadow-2xl hover:shadow-white/20
      hover:bg-white/10
      hover:scale-[1.02]
      hover:border-white/60
      group
    ">
      {/* Liquid ripple effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glass shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* IMAGE (Top on mobile, right on desktop) */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
        <img
          src={cloudImg}
          alt="Cloud engineering"
          className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-md rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/20"
        />
        {/* Liquid glow effect behind image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </div>

      {/* CONTENT */}
      <div className="order-2 lg:order-1 text-center lg:text-left relative z-10">

        <h2 className="text-white text-[21px] sm:text-[28px] text-left md:text-[34px] lg:text-[38px] font-semibold mb-5 sm:mb-6 transition-all duration-700 ease-in-out group-hover:text-white group-hover:scale-105">
          Cloud Engineering and DevOps
        </h2>

        <p className="text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-left transition-all duration-700 ease-in-out group-hover:text-white/90">
          Cloud computing and storage solutions provide scalable, secure,
          and cost-effective ways to store, manage, and access data and
          applications over the internet, enhancing collaboration and
          efficiency for business and individuals.
        </p>

        <ul className="space-y-4 sm:space-y-4 text-gray-300 text-[14px] sm:text-[13px] md:text-[16px] max-w-md mx-auto lg:mx-0">
          <li className="flex items-start gap-3 transition-all duration-700 ease-in-out group-hover:translate-x-2">
            <span className="text-[#007CBA] mt-[2px] transition-all duration-700 ease-in-out group-hover:text-cyan-400 group-hover:scale-125"><MdDone /></span>
            <span className="transition-all duration-700 ease-in-out group-hover:text-white">AWS, Azure, and Google Cloud Management</span>
          </li>
          <li className="flex items-start gap-3 transition-all duration-700 ease-in-out group-hover:translate-x-2 text-left">
            <span className="text-[#007CBA] mt-[2px] transition-all duration-700 ease-in-out group-hover:text-cyan-400 group-hover:scale-125"><MdDone /></span>
            <span className="transition-all duration-700 ease-in-out group-hover:text-white">Seamless DevOps Automation and Continuous Integration</span>
          </li>

          <li className="flex items-start gap-3 transition-all duration-700 ease-in-out group-hover:translate-x-2">
            <span className="text-[#007CBA] mt-[2px] transition-all duration-700 ease-in-out group-hover:text-cyan-400 group-hover:scale-125"><MdDone /></span>
            <span className="transition-all duration-700 ease-in-out group-hover:text-white">Real-Time Collaboration and Accessibility</span>
          </li>

          <li className="flex items-start gap-3 transition-all duration-700 ease-in-out group-hover:translate-x-2">
            <span className="text-[#007CBA] mt-[2px] transition-all duration-700 ease-in-out group-hover:text-cyan-400 group-hover:scale-125"><MdDone /></span>
            <span className="transition-all duration-700 ease-in-out group-hover:text-white text-left">Scalable,Secure and High-Performance cloud Solutions</span>
          </li>
        </ul>

      </div>

    </div>

  </div>
</section>


      {/* SOFTWARE & MOBILE APP DEVELOPMENT SECTION */}
     <section 
       ref={el => sectionRefs.current[1] = el}
       className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-[#0B82B8] overflow-hidden z-20"
       style={{
         transform: getSectionTransform(1),
         transition: 'transform 0.3s ease-out'
       }}
     >

  {/* Background Pattern */}
  <img
    src={cloudBg}
    alt=""
    className="absolute right-0 top-0 h-full w-auto opacity-70 pointer-events-none"
  />

  {/* Glass Card Wrapper */}
  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="
      border border-white/40 rounded-3xl bg-white/10
      backdrop-blur-xl
      p-6 sm:p-10 md:p-12 lg:p-14
      grid grid-cols-1 lg:grid-cols-2
      gap-10 sm:gap-14 lg:gap-16
      items-center
      relative overflow-hidden
      transition-all duration-700 ease-in-out
      hover:shadow-2xl hover:shadow-white/20
      hover:bg-white/20
      hover:scale-[1.02]
      hover:border-white/60
      group
    ">
      {/* Liquid ripple effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glass shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* IMAGE */}
      <div className="flex justify-center lg:justify-start relative">
        <img
          src={cloudImg2}
          alt="Software & Mobile Development"
          className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px] rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/20"
        />
        {/* Liquid glow effect behind image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </div>

      {/* CONTENT */}
      <div className="text-center lg:text-left relative z-10">

        <h2 className="text-white text-[19px] sm:text-[28px] text-left md:text-[34px] lg:text-[38px] font-semibold mb-5 sm:mb-6 transition-all duration-700 ease-in-out group-hover:text-white group-hover:scale-105">
          Software & Mobile App Development
        </h2>

        <p className="text-white/90 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-left transition-all duration-700 ease-in-out group-hover:text-white">
          Software and mobile app development involves designing, building,
          and maintaining reliable digital solutions that run across web and
          mobile platforms, focusing on performance, security, and user
          experience to help businesses scale and operate efficiently.
        </p>

        <ul className="space-y-3 sm:space-y-4 text-white text-[14px] sm:text-[15px] md:text-[16px] max-w-md mx-auto lg:mx-0">
          <li className="flex items-start gap-3 transition-all duration-700 ease-in-out group-hover:translate-x-2">
            <span className="text-[#ffffff] mt-[2px] transition-all duration-700 ease-in-out group-hover:text-cyan-400 group-hover:scale-125"><MdDone /></span>
            <span className="transition-all duration-700 ease-in-out group-hover:text-white">Cross-Platform & Native Development</span>
          </li>

          <li className="flex items-start gap-3 transition-all duration-700 ease-in-out group-hover:translate-x-2">
            <span className="text-[#ffffff] mt-[2px] transition-all duration-700 ease-in-out group-hover:text-cyan-400 group-hover:scale-125"><MdDone /></span>
            <span className="transition-all duration-700 ease-in-out group-hover:text-white">API & Backend Systems Integration</span>
          </li>

          <li className="flex items-start gap-3 transition-all duration-700 ease-in-out group-hover:translate-x-2">
            <span className="text-[#ffffff] mt-[2px] transition-all duration-700 ease-in-out group-hover:text-cyan-400 group-hover:scale-125"><MdDone /></span>
            <span className="transition-all duration-700 ease-in-out group-hover:text-white">Performance Optimization & Maintenance</span>
          </li>
        </ul>

      </div>

    </div>

  </div>
</section>


      
      {/* CYBERSECURITY & COMPLIANCE SECTION */}
     <section 
       ref={el => sectionRefs.current[2] = el}
       className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden z-30"
       style={{
         transform: getSectionTransform(2),
         transition: 'transform 0.3s ease-out'
       }}
     >

  {/* Background Pattern */}
  <img
    src={cloudBg}
    alt=""
    className="absolute right-0 top-0 h-full w-auto opacity-60 pointer-events-none"
  />

  {/* Card Wrapper */}
  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="
      border border-gray-700 rounded-3xl
      bg-white/95
      backdrop-blur-xl
      p-6 sm:p-10 md:p-12 lg:p-14
      grid grid-cols-1 lg:grid-cols-2
      gap-10 sm:gap-14 lg:gap-16
      items-center
      relative overflow-hidden
      transition-all duration-700 ease-in-out
      hover:shadow-2xl hover:shadow-gray-800/20
      hover:bg-white
      hover:scale-[1.02]
      hover:border-gray-800
      group
    ">
      {/* Liquid ripple effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-700/20 via-blue-500/20 to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glass shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-200/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* IMAGE — TOP ON MOBILE */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
        <img
          src={cloudImg3}
          alt="Cybersecurity illustration"
          className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px] rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-gray-800/20"
        />
        {/* Liquid glow effect behind image */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 to-blue-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </div>

      {/* TEXT CONTENT */}
      <div className="order-2 lg:order-1 text-center lg:text-left">

        <h2 className="text-black text-[22px] sm:text-[28px] text-left md:text-[34px] lg:text-[38px] font-semibold mb-5 sm:mb-6">
          Cybersecurity and Compliance
        </h2>

        <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-left">
          Cybersecurity and compliance solutions protect digital systems,
          networks, and data from cyber threats while ensuring adherence
          to industry standards and regulatory requirements, reducing risk
          and maintaining business trust.
        </p>

        <ul className="space-y-3 sm:space-y-4 text-gray-800 text-[14px] sm:text-[15px] md:text-[16px] max-w-md mx-auto lg:mx-0">
          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] font-semibold mt-[2px]"><MdDone /></span>
            Threat Detection & Risk Management
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] font-semibold mt-[2px]"><MdDone /></span>
            Data Protection & Access Control
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] font-semibold mt-[2px]"><MdDone /></span>
            Regulatory Compliance & Security Policies
          </li>
        </ul>

      </div>

    </div>

  </div>
</section>


      {/* MANAGED ENGINEERING SERVICE SECTION */}
      <section 
        ref={el => sectionRefs.current[3] = el}
        className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 z-40"
        style={{
          transform: getSectionTransform(3),
          transition: 'transform 0.3s ease-out'
        }}
      >

  {/* Background */}
  <img
    src={cloudBg}
    alt="Cloud background"
    className="absolute right-0 top-0 h-full w-auto opacity-70 pointer-events-none"
  />

  <div className="absolute inset-0 bg-black/30" />

  {/* Glass Card */}
  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="
      border border-white/50 rounded-3xl bg-white/10
      backdrop-blur-xl
      p-6 sm:p-10 md:p-12 lg:p-14
      grid grid-cols-1 lg:grid-cols-2
      gap-10 sm:gap-14 lg:gap-16
      items-center
      relative overflow-hidden
      transition-all duration-700 ease-in-out
      hover:shadow-2xl hover:shadow-white/20
      hover:bg-white/20
      hover:scale-[1.02]
      hover:border-white/60
      group
    ">
      {/* Liquid ripple effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glass shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* IMAGE — TOP ON MOBILE */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
        <img
          src={cloudImg4}
          alt="Managed engineering services"
          className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-md rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/20"
        />
        {/* Liquid glow effect behind image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </div>

      {/* CONTENT */}
      <div className="order-2 lg:order-1 text-center lg:text-left">

        <h2 className="text-white text-[22px] sm:text-[28px] text-left md:text-[34px] lg:text-[38px] font-semibold mb-5 sm:mb-6">
          Managed Engineering Services
        </h2>

        <p className="text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-left">
          Managed engineering services provide ongoing technical expertise,
          system management, and operational support to ensure software,
          infrastructure, and digital products remain reliable, secure,
          and optimized for performance.
        </p>

        <ul className="space-y-3 sm:space-y-4 text-gray-300 text-[13px] sm:text-[15px] md:text-[16px] max-w-md mx-auto lg:mx-0">
          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] mt-[2px]"><MdDone /></span>
            24/7 Operational Support
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] mt-[2px]"><MdDone /></span>
            Continuous Improvement & System Upgrades
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] mt-[2px]"><MdDone /></span>
            Incident Management & Root Cause Analysis
          </li>
        </ul>

      </div>

    </div>

  </div>
</section>


      {/* INFRASTRUCTURE AND SYSTEMS ARCHI SECTION */}
      <section 
        ref={el => sectionRefs.current[4] = el}
        className="relative py-28 px-6 bg-[#0A83B9] overflow-hidden z-50"
        style={{
          transform: getSectionTransform(4),
          transition: 'transform 0.3s ease-out'
        }}
      >
  {/* dotted background pattern (right side only) */}
  <img
    src={cloudBg}
    alt=""
    className="absolute right-0 top-0 h-full w-auto opacity-60 pointer-events-none"
  />

  {/* glass card wrapper */}
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="
      border border-white/40 rounded-3xl p-10 md:p-14 bg-white/10
      backdrop-blur-xl
      grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
      relative overflow-hidden
      transition-all duration-700 ease-in-out
      hover:shadow-2xl hover:shadow-white/20
      hover:bg-white/20
      hover:scale-[1.02]
      hover:border-white/60
      group
    ">
      {/* Liquid ripple effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glass shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* RIGHT – IMAGE */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
        <img
          src={cloudImg5}
          alt="Infrastructure architecture"
          className="w-full max-w-[420px] rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/20"
        />
        {/* Liquid glow effect behind image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </div>

      {/* LEFT – CONTENT */}
      <div className="order-2 lg:order-1">
        <h2 className="text-white text-xl md:text-4xl font-semibold mb-6 transition-all duration-700 ease-in-out group-hover:text-white group-hover:scale-105">
          Infrastructure and Systems Architecture
        </h2>

        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 max-w-xl transition-all duration-700 ease-in-out group-hover:text-white/90">
          Infrastructure and systems architecture services focus on planning,
          designing, and managing robust technology environments, ensuring
          seamless integration, high availability, and long-term scalability
          for modern digital systems.
        </p>

        <ul className="space-y-4 text-white text-sm md:text-base">
          <li className="flex items-start gap-3 transition-all duration-700 ease-in-out group-hover:translate-x-2">
            <span className="text-[#ffffff] mt-[2px] transition-all duration-700 ease-in-out group-hover:text-cyan-400 group-hover:scale-125"><MdDone /></span>
            <span className="transition-all duration-700 ease-in-out group-hover:text-white">AWS and Google Cloud Management</span>
          </li>
          <li className="flex items-start gap-3 transition-all duration-700 ease-in-out group-hover:translate-x-2">
            <span className="text-[#ffffff] mt-[2px] transition-all duration-700 ease-in-out group-hover:text-cyan-400 group-hover:scale-125"><MdDone /></span>
            <span className="transition-all duration-700 ease-in-out group-hover:text-white">Real-time collaboration and accessibility</span>
          </li>
          <li className="flex items-start gap-3 transition-all duration-700 ease-in-out group-hover:translate-x-2">
            <span className="text-[#ffffff] mt-[2px] transition-all duration-700 ease-in-out group-hover:text-cyan-400 group-hover:scale-125"><MdDone /></span>
            <span className="transition-all duration-700 ease-in-out group-hover:text-white">Secure and scalable cloud storage</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* DIGITAL MARKETING */}
      <section 
        ref={el => sectionRefs.current[5] = el}
        className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden z-60"
        style={{
          transform: getSectionTransform(5),
          transition: 'transform 0.3s ease-out'
        }}
      >

  {/* Background Pattern */}
  <img
    src={cloudBg}
    alt=""
    className="absolute right-0 top-0 h-full w-auto opacity-60 pointer-events-none"
  />

  {/* Card Wrapper */}
  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="
      border border-gray-700 rounded-3xl
      bg-white/95
      backdrop-blur-xl
      p-6 sm:p-10 md:p-12 lg:p-14
      grid grid-cols-1 lg:grid-cols-2
      gap-10 sm:gap-14 lg:gap-16
      items-center
      relative overflow-hidden
      transition-all duration-700 ease-in-out
      hover:shadow-2xl hover:shadow-gray-800/20
      hover:bg-white
      hover:scale-[1.02]
      hover:border-gray-800
      group
    ">
      {/* Liquid ripple effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-700/20 via-blue-500/20 to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glass shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-200/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* IMAGE — TOP ON MOBILE */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
        <img
          src={digital}
          alt="Cybersecurity illustration"
          className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px] rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-gray-800/20"
        />
        {/* Liquid glow effect behind image */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 to-blue-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </div>

      {/* TEXT CONTENT */}
      <div className="order-2 lg:order-1 text-center lg:text-left">

        <h2 className="text-black text-[22px] sm:text-[28px] text-left md:text-[34px] lg:text-[38px] font-semibold mb-5 sm:mb-6">
          Digital Marketing Services
        </h2>

        <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-left">
          From brand awareness to customer conversion, we create digital campaigns that move your business forward. Every strategy is optimized for performance, reach, and long-term growth.
        </p>

        <ul className="space-y-3 sm:space-y-4 text-gray-800 text-[14px] sm:text-[15px] md:text-[16px] max-w-md mx-auto lg:mx-0">
          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] font-semibold mt-[2px]"><MdDone /></span>
            Higher Customer Conversions
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] font-semibold mt-[2px]"><MdDone /></span>
            Performance-Focused Strategies
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] font-semibold mt-[2px]"><MdDone /></span>
            Targeted Audience Engagement
          </li>
        </ul>

      </div>

    </div>

  </div>


  {/* /DIGITAL BRANDING */}
</section>
     <section 
       ref={el => sectionRefs.current[6] = el}
       className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-black overflow-hidden z-70"
       style={{
         transform: getSectionTransform(6),
         transition: 'transform 0.3s ease-out'
       }}
     >

  {/* Background Pattern */}
  <img
    src={cloudBg}
    alt=""
    className="absolute right-0 top-0 h-full w-auto opacity-70 pointer-events-none"
  />

  {/* Glass Card Wrapper */}
  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="
      border border-white/40 rounded-3xl bg-white/10
      backdrop-blur-xl
      p-6 sm:p-10 md:p-12 lg:p-14
      grid grid-cols-1 lg:grid-cols-2
      gap-10 sm:gap-14 lg:gap-16
      items-center
      relative overflow-hidden
      transition-all duration-700 ease-in-out
      hover:shadow-2xl hover:shadow-white/20
      hover:bg-white/20
      hover:scale-[1.02]
      hover:border-white/60
      group
    ">
      {/* Liquid ripple effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Glass shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* IMAGE */}
      <div className="flex justify-center lg:justify-start relative">
        <img
          src={brandImg}
          alt="digital branding"
          className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px] rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/20"
        />
        {/* Liquid glow effect behind image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </div>

      {/* CONTENT */}
      <div className="text-center lg:text-left">

        <h2 className="text-white text-[19px] sm:text-[28px] text-left md:text-[34px] lg:text-[38px] font-semibold mb-5 sm:mb-6">
          Business Branding Solutions
        </h2>

        <p className="text-white/90 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-left">
          Business branding solutions that turn ideas into trusted brands. We help businesses create clear identities that drive recognition, credibility, and growth.
        </p>

        <ul className="space-y-3 sm:space-y-4 text-white text-[14px] sm:text-[15px] md:text-[16px] max-w-md mx-auto lg:mx-0">
          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] mt-[2px]"><MdDone /></span>
            Consistent Brand Messaging
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] mt-[2px]"><MdDone /></span>
            Stronger Market Positioning
          </li>

          <li className="flex items-start gap-3">
            <span className="text-[#007CBA] mt-[2px]"><MdDone /></span>
            Brand Assets That Scale
          </li>
        </ul>

      </div>

    </div>

  </div>
</section>

<section>
  <div className="py-15 bg-white"></div>
</section>

      

      <Footer />
    </div>
  );
}

export default Services;
