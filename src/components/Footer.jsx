import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import logo from "../assets/logo.png";
import axios from "axios";
import { API_URL } from "../../config";
import { FaTwitter, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import instagramIcon from "../assets/instagram.png";
import xIcon from "../assets/x.png";
import linkedinIcon from "../assets/linkedin.png";
import youtubeIcon from "../assets/youtube.png";

function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success or error

  // Animate footer on scroll into view
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //         observer.disconnect();
  //       }
  //     },
  //     { threshold: 0.2 }
  //   );

  //   if (footerRef.current) {
  //     observer.observe(footerRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  // Scroll to top when logo is clicked
  // const handleLogoClick = () => {
  //   if (location.pathname === "/") {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address");
      setMessageType("error");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${API_URL}/api/newsletter/subscribe`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setMessage(response.data.message);
      setMessageType("success");
      setEmail("");

      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 3000);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Failed to subscribe. Please try again.",
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      ref={footerRef}
      className={`bg-black text-gray-300 pt-8 pb-8 px-2 transition-all duration-700 ease-out
        
      `}
    >
      <div className="max-w-7xl lg:mx-auto ">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          {/* Logo */}
          <div className="col-span-1">
            <Link
              to="/"
              className="inline-block mb-3"
            >
              <img
                src={logo}
                alt="Bahoju logo"
                className="cursor-pointer hover:opacity-80 transition h-4 w-auto sm:h-5 md:h-6"
              />
            </Link>
            
            {/* Socials */}
            <div className="lg:translate-y-5">
              <h4 className="text-gray-500 lato-semibold mt-1 text-sm ">Follow us</h4>
              <div className="flex flex-wrap ">
                <a
                  href="https://www.instagram.com/bahojutech"
                  className="text-pink-500 hover:text-pink-600 transition-colors p-2 rounded-full hover:bg-pink-50"
                  aria-label="Follow on Instagram"
                >
                  <img 
                    src={instagramIcon} 
                    alt="Instagram" 
                    className="w-[18px] h-[18px]"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@bahoju.tech"
                  className="text-white-600 p-2 rounded-full hover:bg-gray-500"
                  aria-label="Follow on TikTok"
                >
                  <FaTiktok size={18} />
                </a>
                <a
                  href="https://twitter.com/bahojutech"
                  className="text-white hover:text-gray-300 transition-colors p-2 rounded-full"
                  aria-label="Follow on X"
                >
                  <img 
                    src={xIcon} 
                    alt="X" 
                    className="w-[20px] h-[20px]"
                  />
                </a>
                <a
                  href="https://wa.me/2349045441715"
                  className="text-green-600 hover:text-green-700 transition-colors p-2 rounded-full hover:bg-green-50"
                  aria-label="Contact on WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  // href="https://www.facebook.com/bahojutech"
                  rel="nofollow"
                  className="text-blue-600 hover:text-blue-700 transition-colors p-2 rounded-full hover:bg-blue-50"
                  aria-label="Follow on Facebook"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  // href="https://www.linkedin.com/company/bahojutech" 
                  rel="nofollow"
                  className="text-blue-700 hover:text-blue-800 transition-colors p-2 rounded-full hover:bg-blue-50"
                  aria-label="Follow on LinkedIn"
                >
                  <img 
                    src={linkedinIcon} 
                    alt="LinkedIn" 
                    className="w-[18px] h-[18px]"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@bahojutech"
                  className="text-red-600 hover:text-red-700 transition-colors p-2 rounded-full hover:bg-red-50"
                  aria-label="Subscribe on YouTube"
                >
                  <img 
                    src={youtubeIcon} 
                    alt="YouTube" 
                    className="w-[18px] h-[18px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-gray-500 mb-2">Contact Info</h4>

            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="mailto:info@bahojutech.com"
                  className="group inline-block relative hover:text-white transition"
                >
                  hello@bahojutech.com
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>

              <li>
                <a
                  href="tel:+2348073762546"
                  className="group inline-block relative hover:text-white transition"
                >
                  +234 807 376 2546
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=44+Community+Road+Off+Allen+Ikeja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block relative hover:text-white transition"
                >
                  44 Community Road, <br />
                  Off Allen Ikeja
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:ml-[-25px]">
            <h4 className="text-gray-500 mb-2">Quick Links</h4>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {/* First Column */}
              <ul className="space-y-3 text-xs">
                <li>
                  <Link
                    to="/"
                    className="group inline-block relative hover:text-white transition"
                  >
                    Home
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="group inline-block relative hover:text-white transition"
                  >
                    Services
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/blog"
                    className="group inline-block relative hover:text-white transition"
                  >
                    Blogs
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/ride"
                    className="group inline-block relative hover:text-white transition"
                  >
                    Ride
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              </ul>

              {/* Second Column */}
              <ul className="space-y-3 text-xs">
                <li>
                  <Link
                    to="/mart"
                    className="group inline-block relative hover:text-white transition"
                  >
                    Mart
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact-us"
                    className="group inline-block relative hover:text-white transition"
                  >
                    Contact
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>

                <li>
                  <a
                    href="#about-us"
                    className="group inline-block relative hover:text-white transition"
                  >
                    About
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>

                <li>
                  <a
                    href="#products"
                    className="group inline-block relative hover:text-white transition"
                  >
                    Products
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-gray-500 mb-2 lato-semibold">
              Subscribe to our newsletter
            </h4>

            <p className="text-xs mb-3 leading-relaxed lato-regular">
              Join our community and stay connected to the future of technology
              and urban living. Get exclusive updates on our tech services,
              learning programs, ride solutions, and marketplace offerings.
            </p>

            {/* Input + Button */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  className="flex-1 h-9 px-4 rounded-md bg-white text-gray-900 text-sm focus:outline-none"
                  disabled={loading}
                />

                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="h-9 px-4 rounded-md bg-[#0A6D8C] text-white text-sm cursor-pointer hover:bg-[#085a73] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>

              {/* Message Display */}
              {message && (
                <div
                  className={`text-xs px-2 py-1 rounded ${
                    messageType === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 mb-4" />

        {/* Bottom */}
        <p className="text-center text-sm text-gray-500">
          © 2026 Bahoju Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
