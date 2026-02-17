import React, { useState, useEffect } from "react";
import digitalImg from "../assets/digital.png";
import { Link } from "react-router-dom";

const Explore = () => {
  const [featuredPost, setFeaturedPost] = useState(null);

  const [taggedPosts, setTaggedPosts] = useState([]);

  const [blogPosts, setBlogPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  // API endpoints - replace with your actual backend URLs

  const API_ENDPOINTS = {
    featured: "/api/blog/featured",

    tagged: "/api/blog/tagged",

    posts: "/api/blog/posts",
  };

  // Mock data for development/testing

  const mockData = {
    featured: {
      id: 1,

      title: "Software Development vs UI/UX Design: Which Should You Choose?",

      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      image: digitalImg,

      slug: "software-development-vs-uiux-design",
    },

    tagged: [
      {
        id: 1,

        title: "Frontend Development Best Practices",

        excerpt:
          "Learn modern frontend development techniques and best practices.",

        date: "February 13, 2026",

        views: "1.2k",
      },

      {
        id: 2,

        title: "UI/UX Design Principles",

        excerpt:
          "Essential design principles for creating user-friendly interfaces.",

        date: "February 13, 2026",

        views: "1.2k",
      },

          
      
      {
        id: 8,

        title: "React vs Vue Comparison",

        excerpt:
          "Compare React and Vue frameworks for your next project.",

        date: "February 13, 2026",

        views: "1.2k",
      },
    ],

    posts: [
      {
        id: 1,

        title: "The Role of Data Science in Business Growth",

        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        image: "/api/placeholder/400/360",

        date: "February 13, 2026",

        views: "1.2k",

        likes: "245",

        slug: "data-science-business-growth",

        showDimensions: false,
      },

      {
        id: 2,

        title: "The Role of Data Science in Business Growth",

        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        image: "/api/placeholder/400/360",

        date: "February 13, 2026",

        views: "1.2k",

        likes: "189",

        slug: "data-science-business-growth-2",

        showDimensions: false,
      },

      {
        id: 3,

        title: "The Role of Data Science in Business Growth",

        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        image: "/api/placeholder/400/360",

        date: "February 13, 2026",

        views: "1.2k",

        likes: "312",

        slug: "data-science-business-growth-3",

        showDimensions: false,
      },

      {
        id: 4,

        title: "Responsive Design Principles",

        excerpt:
          "Master responsive design techniques for all device types, lorem  ",

        image: digitalImg,

        date: "February 13, 2026",

        views: "1.9k",

        likes: "167",

        slug: "responsive-design-principles",

        showDimensions: false,
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        try {
          const [featuredRes, taggedRes, postsRes] = await Promise.all([
            fetch(API_ENDPOINTS.featured),
            fetch(API_ENDPOINTS.tagged),
            fetch(API_ENDPOINTS.posts),
          ]);

          if (!featuredRes.ok || !taggedRes.ok || !postsRes.ok) {
            throw new Error("Failed to fetch blog data");
          }

          const [featuredData, taggedData, postsData] = await Promise.all([
            featuredRes.json(),
            taggedRes.json(),
            postsRes.json(),
          ]);

          setFeaturedPost(featuredData);
          setTaggedPosts(taggedData);
          setBlogPosts(postsData);
        } catch (apiError) {
          console.warn("Using mock data:", apiError.message);
          setFeaturedPost(mockData.featured);
          setTaggedPosts(mockData.tagged);
          setBlogPosts(mockData.posts);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4F4F4] py-12">
        <div className="max-w-6xl mx-auto px-6 animate-pulse">
          <div className="h-8 bg-gray-300 w-64 mb-6 rounded"></div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 h-96 bg-gray-300 rounded-xl"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-gray-300 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ================= ERROR ================= */

  if (error) {
    return (
      <div className="min-h-screen bg-[#F4F4F4] py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-red-600 text-xl mb-4">Error loading content</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <div className="bg-[#F4F4F4] min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* ===== FEATURED + TAGGED ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* FEATURED */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-12">
              <span className="w-9 h-[1px] bg-gray-400"></span>
              <p className="text-sm tracking-widest text-gray-500">
                MAIN FEATURED POST
              </p>
            </div>
        
            <h2 className="text-[38px] font-semibold text-gray-800 mb-6">
              {featuredPost?.title}
            </h2>

            {featuredPost && (
              <Link to={`/blog/${featuredPost.slug}`} className="block">
                <div className="bg-gray-100 rounded-xl overflow-hidden  transition-shadow cursor-pointer">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />

                  <div className=" pt-4">
                    <p className="text-xs text-gray-400 mb-2">
                      {featuredPost.date} February 18, 2026 | {featuredPost.views}
                      2.1k views
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed lato-regular">
                      {featuredPost.description}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* TAGGED BLOG */}
          <div className="relative mt-23">
            <p className="text-sm tracking-widest text-gray-500 mb-12 lato-regular">
              TAGGED BLOG
            </p>

            <div
              className="max-h-[500px] overflow-y-auto space-y-7 pl-4 "
              style={{
                direction: "rtl",
                scrollbarWidth: "thin",
                scrollbarColor: "#005F87 transparent",
              }}
            >
              <div style={{ direction: "ltr" }} className="pr-2 ">
                {taggedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="pb-8 bg-gray-100 rounded-md p-2"
                  >
                    <p className="text-xs text-gray-400 mb-2 lato-regular">
                      {post.date} | {post.views} views
                    </p>

                    <h4 className="font-semibold text-gray-800 text-[20px] mb-2 lato-semibold ">
                      {post.title}
                    </h4>

                    <p className="text-xs text-gray-500 lato-regular">
                      {post.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== BLOG GRID ===== */}
        <h2 className="text-[41px] lato-bold text-gray-800 mt-21 mb-8">
          Blog Post
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-100 rounded-xl  overflow-hidden transition-shadow"
            >
              <div className="relative">
                <img
                  src={digitalImg}
                  alt={post.title}
                  className="w-full h-[150px] object-cover rounded-md "
                />

                {post.showDimensions && (
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs">
                    {post.dimensions}
                  </div>
                )}
              </div>

              <div className="p-5 pl-0">
                <h3 className="font-semibold text-gray-800 text-base mb-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3 leading-relaxed whitespace-normal">{post.excerpt}</p>

                <p className="text-xs text-gray-400 mb-2">
                  {post.date} | Views {post.views} | Likes {post.likes}
                </p>

                <Link to={`/blog/${post.slug}`} className="text-[#005F87] text-sm font-medium lato-regular relative group inline-block">
                  Read More...
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#005F87] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
