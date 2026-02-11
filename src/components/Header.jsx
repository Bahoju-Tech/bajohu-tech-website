import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleNavScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollTo(id), 100);
    } else {
      scrollTo(id);
    }
  };

  return (
    <header className="bg-black w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Bahoju Logo" className="h-6 w-auto sm:h-7 md:h-8" />
        </Link>
        
         {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl cursor-pointer"
        >
          {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-between gap-10">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-white hover:text-gray-300 relative group transition cursor-pointer">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <button
            onClick={() => handleNavScroll("about-us")}
            className="text-white hover:text-gray-300 relative group transition cursor-pointer"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button
            onClick={() => handleNavScroll("products")}
            className="text-white hover:text-gray-300 relative group transition cursor-pointer"
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>

          <Link to="/blog" className="text-white hover:text-gray-300 relative group transition cursor-pointer">
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </Link>

          
          </div>

        </nav>

          <div className="hidden md:flex">
            <Link to="/contact-us">
            <Button icon={<FaArrowRightLong />}>Contact Us</Button>
          </Link>
          </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="flex flex-col gap-6 px-6 py-6">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white relative group transition cursor-pointer"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <button
              onClick={() => handleNavScroll("about-us")}
              className="text-left text-white relative group transition cursor-pointer"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => handleNavScroll("products")}
              className="text-left text-white relative group transition cursor-pointer"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </button>

            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="text-white relative group transition cursor-pointer"
            >
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>

            

            <Link
              to="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="text-white relative group transition cursor-pointer"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
