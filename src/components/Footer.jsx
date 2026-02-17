import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import logo from "../assets/logo.png";
import axios from "axios";
import { API_URL } from "../../config";

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
      className={`bg-black text-gray-300 pt-20 pb-20 px-2 transition-all duration-700 ease-out
        
      `}
    >
      <div className="max-w-7xl lg:mx-auto ">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Logo */}
          <div>
            <Link
              to="/"
              // onClick={handleLogoClick}
              className="inline-block mb-4"
            >
              <img
                src={logo}
                alt="Bahoju logo"
                className="cursor-pointer hover:opacity-80 transition w-28 h-auto max-h-14"
              />
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-2">Contact Info</h4>

            <ul className="space-y-5 text-xs">
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

          {/* Socials */}
          <div>
            <h4 className="text-white mb-2 lato-semibold">Socials</h4>
            <ul className="space-y-4 text-xs">
              <li>
                <a
                  href="https://www.instagram.com/bahojutech"
                  className="group inline-block relative hover:text-white transition lato-regular"
                >
                  Instagram
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/bahojutech"
                  className="group inline-block relative hover:text-white transition lato-regular"
                >
                  Facebook
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/bahojutech"
                  className="group inline-block relative hover:text-white transition lato-regular"
                >
                  Twitter
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2349045441715"
                  className="group inline-block relative hover:text-white transition lato-regular"
                >
                  Whatsapp
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="">
            <h4 className="text-white mb-2 lato-semibold">
              Subscribe to our newsletter
            </h4>

            <p className="text-xs mb-4 leading-relaxed lato-regular">
              Join our community and stay connected to the future of technology
              and urban living. Get exclusive updates on our tech services,
              learning programs, ride solutions, and marketplace offerings.
            </p>

            {/* Input + Button */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-center gap-2">
                <input
                  type="email"
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
        <div className="border-t border-gray-700 mt-14 mb-6" />

        {/* Bottom */}
        <p className="text-center text-sm text-gray-500">
          © 2026 Bahoju Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
