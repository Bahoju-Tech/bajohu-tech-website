import { useEffect, useRef, useState } from "react";

import user1 from "../assets/service_img.png";
import user2 from "../assets/institute.png";
import user3 from "../assets/ride.png";
import user4 from "../assets/logo.png";
import user5 from "../assets/logo.png";
import user6 from "../assets/logo.png";
import user7 from "../assets/logo.png";
import user8 from "../assets/logo.png";

const testimonials = [
  {
    id: 1,
    name: "Ifok Success",
    image: user1,
    text: "Working with Bahoju Tech has been a seamless experience. Their solutions are intuitive, reliable, and thoughtfully designed to solve real problems.",
    rating: 4,
    position: "left-[18%] top-[30%]",
  },
  {
    id: 2,
    name: "Amaka Johnson",
    image: user2,
    text: "The level of professionalism and innovation they bring truly makes a difference.",
    rating: 5,
    position: "top-[45%] left-[10%]",
  },
  {
    id: 3,
    name: "Daniel Obi",
    image: user3,
    text: "Reliable, innovative, and professional. Working with them was smooth from start to finish.",
    rating: 5,
    position: "top-[30%] right-[18%]",
  },
  {
    id: 4,
    name: "Sarah Williams",
    image: user4,
    text: "They translated our ideas into a clean, functional product with excellent attention to detail.",
    rating: 4,
    position: "top-[48%] right-[10%]",
  },
  {
    id: 5,
    name: "John Doe",
    image: user5,
    text: "Their team is highly skilled and always goes above and beyond to meet our needs.",
    rating: 5,
    position: "top-[65%] left-[18%]",
  },
  {
    id: 6,
    name: "Jane Smith",
    image: user6,
    text: "Exceptional service and support. They went above and beyond to ensure our satisfaction.",
    rating: 5,
    position: "top-[45%] left-[25%]",
  },
  {
    id: 7,
    name: "Michael Brown",
    image: user7,
    text: "A true partner in our journey. They understand our challenges and provide effective solutions.",
    rating: 4,
    position: "top-[65%] right-[18%]",
  },
  {
    id: 8,
    name: "Emily Davis",
    image: user8,
    text: "Their team is highly skilled and always goes above and beyond to meet our needs.",
    rating: 5,
    position: "top-[45%] right-[25%]",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isIdle, setIsIdle] = useState(true);

  const autoplayRef = useRef(null);
  const idleTimeoutRef = useRef(null);

  // 🔁 autoplay
  useEffect(() => {
  if (!isIdle) return;

  autoplayRef.current = setTimeout(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, 8000);

  return () => clearTimeout(autoplayRef.current);
}, [activeIndex, isIdle]);


  const handleUserSelect = (index) => {
    setActiveIndex(index);
    setIsIdle(false);

    clearTimeout(idleTimeoutRef.current);
    idleTimeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    },10000);
  };

  return (
    <section className="relative lg:py-32 md:py-20 bg-white overflow-hidden ">
  <h2 className="text-center text-[40px] sm:text-[40px] md:text-[45px] font-bold mb-30 md:mb-16 ">
    Testimonials
  </h2>

  {/* Floating background images */}
   <div className="absolute inset-0 pointer-events-none hidden lg:block">
    {testimonials.map((item, index) => {
      const isActive = index === activeIndex;

      return (
        <img
          key={item.id}
          src={item.image}
          alt={item.name}
          onClick={() => handleUserSelect(index)}
          className={`
            absolute rounded-full object-cover cursor-pointer pointer-events-auto
            transition-all duration-700 ease-in-out
            ${
              isActive
                ? "opacity-0 scale-0"
                : `${item.position} w-[70px] h-[70px] opacity-70`
            }
          `}
        />
      );
    })}
  </div>

  {/* CENTERED STACK */}
   <div className="relative mx-auto mb-20 lg:mt-32 md:mt-24 w-full max-w-[340px] sm:max-w-[420px]  lg:max-w-[600px] flex flex-col items-center">
    {/* ACTIVE IMAGE — CENTERED ABOVE CARD */}
  <img
      src={
        testimonials[activeIndex].image_jobs ??
        testimonials[activeIndex].image
      }
      alt={testimonials[activeIndex].name}
      className="
        relative
        -top-[60px] sm:-top-[80px] lg:-top-[10px]
        w-[90px] h-[90px]
        sm:w-[110px] sm:h-[110px]
        lg:w-[140px] lg:h-[140px]
        rounded-full object-cover
        z-20
        transition-all duration-700 ease-in-out
      "
    />

    {/* CARD */}
    <div
      className="
        w-full h-[250px]
        bg-white rounded-[28px]
        shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        flex items-center justify-center
        px-10 lg:mt-15 md:mt-16
        overflow-hidden
        "
    >
      {testimonials.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={item.id}
            className={`
              absolute flex flex-col items-center text-center
              transition-all duration-500 ease-in-out
              ${
                isActive
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }
            `}
          >
            <p className="text-[14px] leading-[1.7] text-gray-600 mb-3 max-w-[520px]">
              “{item.text}”
            </p>

            <h4 className="font-semibold text-[15px] mb-1">
              {item.name}
            </h4>

            <div className="flex gap-1 text-yellow-400 text-[16px]">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < item.rating ? "★" : "☆"}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
}

export default Testimonials;
