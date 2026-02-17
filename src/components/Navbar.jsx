import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-black w-full">
      <div className="relative flex items-center justify-between p-4 sm:p-6 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Bahoju Logo" className="h-6 sm:h-8" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10 ">
          
          {[
            { name: "Home", path: "/" },
            { name: "Ride", path: "/ride" },
            { name: "Features", path: "/ride/features" },
            { name: "Blog", path: "/blog" },
        
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-[16px] transition relative group cursor-pointer ${
                location.pathname === item.path
                  ? "text-blue-400"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block text-white">
          <Link to="/contact-us">
            <Button icon={<FaArrowRightLong />}>
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white text-2xl cursor-pointer"
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
  className={`lg:hidden bg-black border-t border-gray-800 overflow-hidden transition-all duration-300 ${
    mobileOpen ? "max-h-[500px] py-6" : "max-h-0"
  }`}
>
  <div className="flex flex-col items-start px-6 gap-6">

    {[
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about-us" },
      { name: "Products", path: "/products" },
      { name: "Blog", path: "/blog" },
      
    ].map((item) => (
      <Link
        key={item.name}
        to={item.path}
        onClick={() => setMobileOpen(false)}
        className={`text-lg transition relative group cursor-pointer ${
          location.pathname === item.path
            ? "text-blue-400"
            : "text-white hover:text-gray-300"
        }`}
      >
        {item.name}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
      </Link>
    ))}

    <Link to="/contact-us" onClick={() => setMobileOpen(false)}>
      <button className="w-full text-white text-[17px]"  icon={<FaArrowRightLong />}>
        Contact Us
      </button>
    </Link>

  </div>
</div>

    </header>
  );
}

export default Navbar;
