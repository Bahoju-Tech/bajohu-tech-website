import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Get_in_touch() {
  return (
    <section className="max-w-6xl mx-auto px-1 py-10 mb-24 lato-regular">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)] p-12 max-w-4xl mx-auto lato-regular">
        <h2 className="text-3xl font-semibold mb-8 lato-bold">
          Get in Touch
        </h2>

        {/* Info list */}
        <div className="space-y-6 mb-10">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="text-[#005F87] mt-1">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="font-medium">Office Address</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                44 Community Road, <br />
                Off Allen Ikeja, Lagos <br />
                Nigeria.
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="text-[#005F87] mt-1">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="font-medium">Phone Number</p>
              <a
                href="tel:+2380762546"
                className="text-gray-600 text-sm hover:text-[#005F87] transition"
              >
                +238 076 2546
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="text-[#005F87] mt-1">
              <FaEnvelope />
            </div>
            <div>
              <p className="font-medium">Email Address</p>
              <a
                href="mailto:info@bahojutech.com"
                className="text-gray-600 text-sm hover:text-[#005F87] transition"
              >
                info@bahojutech.com
              </a>
            </div>
          </div>
        </div>

       
       
      </div>
    </section>
  );
}

export default Get_in_touch;
