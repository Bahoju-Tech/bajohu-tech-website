import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <img src={logo} alt="Bahoju Logo"  />

      <div>
        <ul className="flex items-center justify-center gap-10">
          <li className="lato-regular text-[16px] text-white">Home</li>
          <li className="lato-regular text-[16px] text-white">About</li>
          <li className="lato-regular text-[16px] text-white">Product</li>
          <li className="lato-regular text-[16px] text-white">Blog</li>
          <li className="lato-regular text-[16px] text-white">Careers</li>
        </ul>
      </div>

      <div>
        <Button text="Contact Us" icon={<FaArrowRightLong />} />
      </div>
    </div>
  );
}
export default Header;
