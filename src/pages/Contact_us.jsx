import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Get_in_touch from "../components/Get_in_touch";
import axios from "axios";
import { API_URL } from "../../config";
function Contact_us() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!firstName) {
      setError("First name is required");
      return;
    }

    if (!lastName) {
      setError("Last name is required");
      return;
    }
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!company) {
      setError("Company name is required");
      return;
    }
    if (!inquiryType) {
      setError("Inquiry type is required");
      return;
    }
    if (!message) {
      setError("Message is required");
      return;
    }
  };

  const ContactUs = async (e) => {
    e.preventDefault();
    setLoading(true);
    validateForm();

    try {
      const response = await axios.post(
        `${API_URL}/api/contact`,

        {
          firstName,
          lastName,
          email,
          company,
          inquiryType,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      await response.data;
      console.log(response.data);

      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setCompany(""),
        setInquiryType(""),
        setMessage("");

      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="lato-regular">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24 lato-regular">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-4 lato-bold">Contact Us</h1>
          <p className="text-gray-500 max-w-xl mx-auto lato-regular">
            Get in touch with our team to learn more about Bahoju Tech and let
            us know how we can be of assistance with you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-4xl mx-auto lato-regular">
          <h2 className="text-xl font-semibold mb-8 lato-semibold">
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F87]"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F87]"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F87]"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#005F87]"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
            </div>

            {/* Enquiry */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Type of Enquiry
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#005F87] "
              >
                <option value="">Select enquiry type</option>
                <option value="TECH SERVICES">TECH SERVICES</option>
                <option value="TRAINING">TRAINING</option>
                <option value="INTERNSHIP">INTERNSHIP</option>
              </select>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#005F87]"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              onClick={ContactUs}
              // disabled={loading}
              className="w-full bg-[#005F87] text-white py-3 rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Submit"}
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
