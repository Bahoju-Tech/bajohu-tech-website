import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What does Bahoju Tech do?",
    answer:
      "We are a multi-service technology company offering a ride-hailing platform, an online mart, a tech education institution, and professional website and application development services.",
  },
  {
    question: "Who are your clients?",
    answer:
      "Our clients include individuals, startups, SMEs, and large organizations looking for digital solutions, transportation services, or tech education.",
  },
  {
    question: "How does your ride app work?",
    answer:
      "Users can book rides through our mobile app, get matched with nearby drivers, track rides in real time, and make secure payments.",
  },
  {
    question: "What can I buy from your mart?",
    answer:
      "Our mart offers groceries, household items, electronics, and other everyday essentials delivered to your doorstep.",
  },
  {
    question: "What courses does your tech institution offer?",
    answer:
      "We offer courses in web development, mobile app development, UI/UX design, data analysis, and other in-demand tech skills.",
  },
  {
    question: "Do you build websites and mobile applications for businesses?",
    answer:
      "Yes, we design and develop high-quality websites and mobile applications tailored to business needs.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4 lato-regular">
      <div className="max-w-4xl mx-auto lato-regular">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 lato-bold">
          Frequently asked questions
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-12">
          Everything you need to know about Bahoju
        </p>

        {/* FAQ List */}
        <div className="border-t border-gray-200">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-200 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="group w-full flex justify-between items-center py-6 text-left transition-colors hover:bg-gray-50"
                >
                  {/* Question */}
                  <span className="text-gray-900 font-medium transition-colors group-hover:text-gray-700">
                    {item.question}
                  </span>

                  {/* Icon */}
                  <span className="flex items-center justify-center w-8 h-8">
                    <span
                      className={`transition-all duration-300 ${
                        isOpen ? "rotate-180 opacity-100" : "rotate-0 opacity-70"
                      } group-hover:opacity-100`}
                    >
                      {isOpen ? (
                        <FiMinus size={20} />
                      ) : (
                        <FiPlus size={20} />
                      )}
                    </span>
                  </span>
                </button>

                {/* Animated Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-6 pr-8">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
