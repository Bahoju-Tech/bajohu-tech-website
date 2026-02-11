import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import logo from "../assets/logo.png";

function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Animate footer on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll to top when logo is clicked
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      className={`bg-black text-gray-300 pt-20 pb-10 px-2 transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      <div className="max-w-7xl lg:mx-auto ">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Logo */}
          <div>
            <Link
              to="/"
              onClick={handleLogoClick}
              className="inline-block mb-4"
            >
              <img
                src={logo}
                alt="Bahoju logo"
                className="cursor-pointer hover:opacity-80 transition"
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
                  44 Community Road, <br />Off Allen Ikeja
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white mb-2">Socials</h4>
            <ul className="space-y-4 text-xs">
              <li>
                <a 
                href="https://www.instagram.com/bahojutech" 
                className="group inline-block relative hover:text-white transition">
                  Instagram
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/bahojutech" 
                  className="group inline-block relative hover:text-white transition"
                >
                  Facebook
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/bahojutech" 
                  className="group inline-block relative hover:text-white transition"
                >
                  Twitter
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/2348073762546" 
                  className="group inline-block relative hover:text-white transition"
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
 <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Your email address..."
            className="flex-1 h-9 px-4 rounded-md bg-white text-gray-900 text-sm focus:outline-none"
          />

          <button className="h-9 px-4 rounded-md bg-[#0A6D8C] text-white text-sm">
            Subscribe
          </button>
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
