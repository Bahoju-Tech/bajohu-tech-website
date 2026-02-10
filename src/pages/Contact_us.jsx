import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Get_in_touch from "../components/Get_in_touch";




function Contact_us() {
  return (
    <div>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Get in touch with our team to learn more about Bahoju Tech and let us
            know how we can be of assistance with you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-8">
            Send us a message
          </h2>

          <form className="space-y-6">
            {/* Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F87]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Your last name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F87]"
                />
              </div>
            </div>

            {/* Email & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F87]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F87]"
                />
              </div>
            </div>

            {/* Enquiry */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Type of Enquiry
              </label>
              <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#005F87] ">
                <option>Select enquiry type</option>
                <option>General</option>
                <option>Product</option>
                <option>Support</option>
                <option>Partnership</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Type your message"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#005F87]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#005F87] text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Get_in_touch />

      <Footer />
    </div>
  );
}

export default Contact_us;
