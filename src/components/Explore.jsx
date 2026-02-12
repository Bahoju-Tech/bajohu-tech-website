import { useState } from "react";
import serviceBg from "../assets/service_img.png";
import rideBg from "../assets/ride.png";
const categories = ["All", "Services", "Institution", "Ride", "Mart"];

const blogPosts = [
  {
    id: 1,
    category: "Services",
    title: "Festive Traffic, No Panic: Scaling Your Tech Without Breaking",
    excerpt:
      "Festive traffic is the annual test that your tech stack didn’t ask for. Here’s how to scale safely.",
    image: serviceBg ,
    date: "23.12.2025",
  },
  {
    id: 2,
    category: "Services",
    title: "Festive Traffic, No Panic: Scaling Your Tech Without Breaking",
    excerpt:
      "Festive traffic is the annual test that your tech stack didn’t ask for. Here’s how to scale safely.",
    image: rideBg,
    date: "23.12.2025",
  },
  {
    id: 3,
    category: "Institution",
    title: "Festive Traffic, No Panic: Scaling Your Tech Without Breaking",
    excerpt:
      "Festive traffic is the annual test that your tech stack didn’t ask for. Here’s how to scale safely.",
    image: serviceBg,
    date: "23.12.2025",
  },
  {
    id: 4,
    category: "Ride",
    title: "Festive Traffic, No Panic: Scaling Your Tech Without Breaking",
    excerpt:
      "Festive traffic is the annual test that your tech stack didn’t ask for. Here’s how to scale safely.",
    image: rideBg,
    date: "23.12.2025",
  },
  {
    id: 5,
    category: "Mart",
    title: "Festive Traffic, No Panic: Scaling Your Tech Without Breaking",
    excerpt:
      "Festive traffic is the annual test that your tech stack didn’t ask for. Here’s how to scale safely.",
    image: serviceBg,
    date: "23.12.2025",
  },
  {
    id: 6,
    category: "Services",
    title: "Festive Traffic, No Panic: Scaling Your Tech Without Breaking",
    excerpt:
      "Festive traffic is the annual test that your tech stack didn’t ask for. Here’s how to scale safely.",
    image: rideBg,
    date: "23.12.2025",
  },
];

function Explore() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category === activeCategory
        );

  const visiblePosts = expanded
    ? filteredPosts
    : filteredPosts.slice(0, 4);

  return (
 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
  {/* Section header */}
  <span className="text-md text-gray-400 flex items-center gap-2 italic">
    <span className="w-6 h-[1px] bg-gray-400"></span>
    {/* Explore */}
  </span>

  <h4 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold mt-2 text-center">
    COMING SOON
  </h4>

  {/* Categories */}
  {/* <div className="flex gap-4 sm:gap-6 lg:gap-6 mt-8 sm:mt-10 mb-10 text-sm sm:text-base lg:text-xl overflow-x-auto whitespace-nowrap scrollbar-hide">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => {
          setActiveCategory(cat);
          setExpanded(false);
        }}
        className={`transition cursor-pointer ${
          activeCategory === cat
            ? "text-blue-600 font-medium"
            : "text-gray-500 hover:text-black"
        }`}
      >
        
      </button>
    ))}
  </div> */}

  {/* Blog cards */}
  {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {visiblePosts.map((post) => (
      <div
        key={post.id}
        className="bg-white rounded-xl overflow-hidden hover:shadow-md transition cursor-pointer"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-44 sm:h-48 object-cover"
        />

        <div className="p-4 pl-0 ">
          <p className="text-xs text-gray-400 mb-2">
            {post.date}
          </p>

          <h3 className="lato-semibold text-sm sm:text-base mb-2 leading-snug">
            {post.title}
          </h3>

          <p className="lato-regular text-xs sm:text-sm text-gray-500">
            {post.excerpt}
          </p>
        </div>
      </div>
    ))}
  </div> */}

  {/* View more */}
  {/* {filteredPosts.length > 4 && (
    <div className="mt-10 sm:mt-12 text-center lato-bold">
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="text-[#52525B] hover:underline transition text-sm sm:text-base cursor-pointer"
      >
        {expanded ? "View Less" : "View More"}
      </button>
    </div>
  )} */}
</section>

  );
}

export default Explore;
