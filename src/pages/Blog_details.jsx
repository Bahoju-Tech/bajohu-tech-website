import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import digitalImg from "../assets/digital.png";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popularPosts, setPopularPosts] = useState([]);
  const [helpful, setHelpful] = useState(null); // like / dislike
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);

        // Fetch main blog post
        try {
          const res = await fetch(`/api/blog/${slug}`);
          if (!res.ok) throw new Error("Blog not found");
          const data = await res.json();
          setBlog(data);
        } catch (apiError) {
          console.warn("API not available, using mock data");

          const mockBlog = slug === "software-development-vs-uiux-design" ? {
            slug: "software-development-vs-uiux-design",
            title:
              "Software Development vs UI/UX Design: Which Should You Choose?",
            author: {
              name: "John Carter",
              role: "Senior Software Engineer",
              avatar: "/api/placeholder/80/80",
            },
            readTime: "5 min read",
            date: "February 13, 2026",
            views: "2.1k",
            likes: "245",
            heroImage: digitalImg,
            secondImage: digitalImg,
            tags: ["Website", "Articles"],
            content: [
              "Choosing a career in tech is one of the smartest decisions you can make in today's digital world. However, once you decide to enter the tech industry, another important question arises: Should you choose Software Development or UI/UX Design?",
              "Both career paths are in high demand. Both offer strong earning potential. And both play critical roles in building digital products. But they require different skills, mindsets, and interests.",
              "In this guide, we'll break down everything you need to know to confidently choose the path that aligns with your strengths and career goals.",
            ],
          } : slug === "data-science-business-growth" ? {
            slug: "data-science-business-growth",
            title: "The Role of Data Science in Business Growth",
            author: {
              name: "Sarah Johnson",
              role: "Data Scientist",
              avatar: "/api/placeholder/80/80",
            },
            readTime: "6 min read",
            date: "February 13, 2026",
            views: "1.2k",
            likes: "189",
            heroImage: digitalImg,
            secondImage: digitalImg,
            tags: ["Data Science", "Business", "Analytics"],
            content: [
              "Data science has become a critical driver of business growth in today's data-driven economy. Companies that leverage data effectively gain significant competitive advantages and make better strategic decisions.",
              "The role of data scientists extends beyond just analyzing numbers. They translate complex data into actionable insights that drive business strategy, optimize operations, and identify new opportunities for growth.",
              "From predictive analytics to machine learning models, data science tools help businesses understand customer behavior, market trends, and operational efficiency. This enables data-driven decision making at all levels of the organization.",
              "As businesses continue to generate massive amounts of data, the demand for skilled data scientists who can extract meaningful insights will only grow. This makes data science one of the most valuable career paths in the modern business landscape.",
            ],
          } : slug === "data-science-business-growth-2" ? {
            slug: "data-science-business-growth-2",
            title: "The Role of Data Science in Business Growth",
            author: {
              name: "Michael Chen",
              role: "Business Analyst",
              avatar: "/api/placeholder/80/80",
            },
            readTime: "5 min read",
            date: "February 13, 2026",
            views: "1.2k",
            likes: "142",
            heroImage: digitalImg,
            secondImage: digitalImg,
            tags: ["Data Science", "Business Intelligence", "Strategy"],
            content: [
              "Business intelligence and data science work hand in hand to drive organizational success. While business intelligence focuses on historical data analysis, data science predicts future trends and patterns.",
              "The integration of data science into business processes has transformed how companies approach problem-solving. From supply chain optimization to customer segmentation, data-driven strategies are becoming the norm.",
              "Key areas where data science impacts business growth include customer analytics, operational efficiency, risk management, and product development. Each area benefits from advanced analytics and machine learning techniques.",
              "Companies that invest in data science capabilities see measurable improvements in revenue growth, cost reduction, and market positioning. The ROI of data science initiatives continues to increase as technology becomes more accessible.",
            ],
          } : slug === "data-science-business-growth-3" ? {
            slug: "data-science-business-growth-3",
            title: "The Role of Data Science in Business Growth",
            author: {
              name: "Emily Rodriguez",
              role: "Analytics Manager",
              avatar: "/api/placeholder/80/80",
            },
            readTime: "7 min read",
            date: "February 13, 2026",
            views: "1.2k",
            likes: "312",
            heroImage: digitalImg,
            secondImage: digitalImg,
            tags: ["Data Science", "Analytics", "Growth"],
            content: [
              "The future of business growth lies in the effective use of data science. As organizations collect more data than ever before, the ability to extract actionable insights becomes a competitive differentiator.",
              "Advanced analytics techniques, including machine learning and artificial intelligence, are revolutionizing how businesses operate. From personalized customer experiences to automated decision-making, data science is at the core of innovation.",
              "Successful data science implementation requires a combination of technology, talent, and organizational culture. Companies that foster data-driven cultures see faster adoption of insights and better business outcomes.",
              "The integration of data science into strategic planning enables businesses to identify emerging trends, optimize resource allocation, and make proactive decisions. This shift from reactive to proactive management is transforming industries.",
            ],
          } : slug === "getting-started-with-react" ? {
            slug: "getting-started-with-react",
            title: "Getting Started with React",
            author: {
              name: "Sarah Johnson",
              role: "Frontend Developer",
              avatar: "/api/placeholder/80/80",
            },
            readTime: "7 min read",
            date: "February 13, 2026",
            views: "1.8k",
            likes: "156",
            heroImage: digitalImg,
            secondImage: digitalImg,
            tags: ["React", "JavaScript", "Frontend"],
            content: [
              "React has become one of the most popular JavaScript libraries for building user interfaces. Whether you're a complete beginner or an experienced developer looking to expand your skills, learning React is a valuable investment in your career.",
              "At its core, React is all about components. You can think of components as building blocks that encapsulate HTML, CSS, and JavaScript logic. This component-based architecture makes it easier to build and maintain complex applications.",
              "In this comprehensive guide, we'll walk you through everything you need to know to get started with React, from setting up your development environment to building your first interactive component.",
            ],
          } : slug === "css-grid-vs-flexbox" ? {
            slug: "css-grid-vs-flexbox",
            title: "CSS Grid vs Flexbox",
            author: {
              name: "Michael Chen",
              role: "CSS Specialist",
              avatar: "/api/placeholder/80/80",
            },
            readTime: "6 min read",
            date: "February 13, 2026",
            views: "1.5k",
            likes: "142",
            heroImage: digitalImg,
            secondImage: digitalImg,
            tags: ["CSS", "Layout", "Web Design"],
            content: [
              "CSS Grid and Flexbox are two powerful layout systems that have revolutionized the way we create web layouts. While both are incredibly useful, they serve different purposes and excel in different scenarios.",
              "Flexbox is designed for one-dimensional layouts - either a row or a column. It's perfect for arranging items in a single direction, making it ideal for navigation bars, card layouts, and aligning items within a container.",
              "CSS Grid, on the other hand, is built for two-dimensional layouts. It allows you to create complex grid structures with rows and columns, making it perfect for overall page layouts, image galleries, and dashboard interfaces.",
              "Understanding when to use each layout system is key to becoming a proficient frontend developer. In this article, we'll explore the strengths and use cases for both CSS Grid and Flexbox.",
            ],
          } : slug === "javascript-es6-features" ? {
            slug: "javascript-es6-features",
            title: "JavaScript ES6 Features",
            author: {
              name: "Emily Rodriguez",
              role: "JavaScript Developer",
              avatar: "/api/placeholder/80/80",
            },
            readTime: "8 min read",
            date: "February 13, 2026",
            views: "2.1k",
            likes: "189",
            heroImage: digitalImg,
            secondImage: digitalImg,
            tags: ["JavaScript", "ES6", "Programming"],
            content: [
              "ES6, also known as ECMAScript 2015, brought a wave of powerful features to JavaScript that transformed the way we write code. These features not only make our code more readable and concise but also enable new programming patterns.",
              "Arrow functions provide a more concise syntax for writing functions and automatically bind the 'this' context. Template literals make string interpolation much cleaner with backtick syntax. Destructuring allows you to extract values from arrays and objects in a more elegant way.",
              "Other game-changing features include classes for object-oriented programming, promises for handling asynchronous operations, and the spread/rest operators for working with arrays and function parameters.",
              "Mastering these ES6 features is essential for modern JavaScript development. In this comprehensive guide, we'll explore each feature with practical examples and best practices.",
            ],
          } : slug === "responsive-design-principles" ? {
            slug: "responsive-design-principles",
            title: "Responsive Design Principles",
            author: {
              name: "David Kim",
              role: "UI/UX Designer",
              avatar: "/api/placeholder/80/80",
            },
            readTime: "6 min read",
            date: "February 13, 2026",
            views: "1.9k",
            likes: "167",
            heroImage: digitalImg,
            secondImage: digitalImg,
            tags: ["Responsive", "CSS", "Mobile", "Design"],
            content: [
              "In today's multi-device world, responsive design is no longer optional—it's essential. Users expect websites to work seamlessly across desktops, tablets, and smartphones, and it's our job as developers to deliver that experience.",
              "The foundation of responsive design lies in flexible grids, flexible images, and media queries. By using relative units like percentages and ems instead of fixed pixels, we can create layouts that adapt to different screen sizes automatically.",
              "Mobile-first design has become the standard approach. Instead of designing for desktop and then scaling down, we start with the mobile experience and progressively enhance it for larger screens. This ensures a solid foundation and better performance on all devices.",
              "Beyond just layout, responsive design encompasses touch-friendly interfaces, optimized images, and performance considerations. In this guide, we'll explore the principles and techniques needed to create truly responsive web experiences.",
            ],
          } : null;

          setBlog(mockBlog);
        }

        // Fetch popular posts
        try {
          const popularRes = await fetch('/api/blog/popular');
          if (popularRes.ok) {
            const popularData = await popularRes.json();
            setPopularPosts(popularData);
          }
        } catch (popularApiError) {
          console.warn("Popular posts API not available, using mock data");
          // Mock popular posts data
          const allMockPopularPosts = [
            {
              id: 1,
              slug: "getting-started-with-react",
              title: "Getting Started with React",
              excerpt: "Learn the fundamentals of React and build your first component...",
              image: digitalImg,
              date: "February 13, 2026",
              views: "1.8k",
              likes: "156"
            },
            {
              id: 2,
              slug: "css-grid-vs-flexbox",
              title: "CSS Grid vs Flexbox",
              excerpt: "When to use CSS Grid and when to use Flexbox in your layouts...",
              image: digitalImg,
              date: "February 13, 2026",
              views: "1.5k",
              likes: "142"
            },
            {
              id: 3,
              slug: "javascript-es6-features",
              title: "JavaScript ES6 Features",
              excerpt: "Explore the most useful ES6 features for modern development...",
              image: digitalImg,
              date: "February 13, 2026",
              views: "2.1k",
              likes: "189"
            }
          ];
          
          // Filter out the current blog post from popular posts
          const mockPopularPosts = allMockPopularPosts.filter(post => post.slug !== slug);
          setPopularPosts(mockPopularPosts);
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  /* LOADING */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading blog...
      </div>
    );
  }

  /* ERROR */
  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center lato-semibold">
        {error || "Blog not found"}
      </div>
    );
  }

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className="bg-[#F3F3F3] min-h-screen py-14 pt-32">
        <div className="max-w-4xl mx-auto px-6">

        {/* META */}
        <p className="text-sm text-gray-500 mb-3 lato-regular">
          {blog.date} | Views {blog.views} | Likes {blog.likes}
        </p>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 lato-bold">
          {blog.title}
        </h1>

        {/* AUTHOR */}
        <div className="flex items-center gap-3 mb-8">
          {/* <img
            src={blog.author?.avatar}
            className="w-12 h-12 rounded-full object-cover"
          /> */}

          <div>
            <p className="font-semibold lato-semibold">{blog.author?.name}</p>
            <p className="text-sm text-gray-500 lato-regular">
              {blog.author?.role} • {blog.readTime}
            </p>
          </div>
        </div>

        {/* HERO IMAGE */}
        <img
          src={blog.heroImage}
          className="w-full rounded-xs mb-8 object-cover h-[500px]"
        />

        {/* CONTENT */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] lato-regular">
          {blog.content?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* SECOND IMAGE */}
        {blog.secondImage && (
          <img
            src={blog.secondImage}
            alt="image "
            className="w-full rounded-sm mt-10 object-cover h-[500px]"
          />
        )}

        {/* CONTENT */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] mt-5 lato-regular">
          {blog.content?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* ===== TAGS SECTION ===== */}
        {blog.tags && (
          <div className="mt-10">
            <p className="text-sm text-gray-600 mb-3 lato-regular">Tags:</p>

            <div className="flex gap-3 flex-wrap">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 bg-gray-200 rounded text-sm text-gray-700 lato-regular"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ===== HELPFUL SECTION ===== */}
        <div className="mt-8 flex items-center gap-4">
          <p className="text-sm text-gray-600 lato-regular">Was this helpful?</p>

          <button
            onClick={() => {
              setHelpful("like");
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 1000);
            }}
            className={`p-2 rounded transition  ${
              helpful === "like"
                ? "bg-green-100 text-green-600"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            <ThumbsUp size={18} />
          </button>

          <button
            onClick={() => {
              setHelpful("dislike");
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 1000);
            }}
            className={`p-2 rounded transition ${
              helpful === "dislike"
                ? "bg-red-100 text-red-600"
                : "text-gray-500 hover:text-red-600"
            }`}
          >
            <ThumbsDown size={18} />
          </button>
        </div>

        {/* ===== CUSTOM ALERT ===== */}
        {showAlert && (
          <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 animate-pulse z-50">
            Thank you for your feedback!
          </div>
        )}

        {/* ===== POPULAR POSTS SECTION ===== */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 lato-bold">Popular Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="block"
              >
                <div className="bg-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer ">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[150px] object-cover rounded-md"
                  />
                  <div className="p-5 pl-0">
                    <p className="text-xs text-gray-400 mb-2 lato-regular">{post.date} | {post.views} views | {post.likes} likes</p>
                    <h3 className="lato-semibold text-gray-800 text-base mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-500 mb-3 lato-regular">{post.excerpt}</p>
                    <span className="text-[#005F87] text-sm font-medium lato-regular relative group inline-block">
                    Read More...
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005F87] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
