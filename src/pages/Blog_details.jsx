import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import blogImg from "../assets/services_img.png";

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

          const res = await fetch(`${API_URL}/api/blog/${slug}`);

          if (!res.ok) throw new Error("Blog not found");

          const data = await res.json();

          setBlog(data);

        } catch (apiError) {

          console.warn("API not available, using mock data");



          const mockBlog = slug === "bahoju-tech-digital-transformation" ? {

            slug: "bahoju-tech-digital-transformation",

            title: "Bahoju Tech's Digital Transformation Solutions",

            author: {

              name: "David Chen",

              role: "Digital Transformation Lead",

              avatar: "/api/placeholder/80/80",

            },

            readTime: "5 min read",

            date: "February 15, 2026",

            views: "2.1k",

            likes: "245",

            heroImage: blogImg,

            secondImage: blogImg,

            tags: ["Digital Transformation", "Technology", "Innovation"],

            content: [

              "In today's rapidly evolving digital landscape, businesses must adapt or risk being left behind. Bahoju Tech's comprehensive digital transformation solutions help companies navigate this complex journey with confidence and success.",

              "Our approach begins with a thorough assessment of your current digital infrastructure and business processes. We identify pain points, opportunities for improvement, and areas where technology can drive meaningful change.",

              "From implementing cloud-based solutions to automating manual processes, our team ensures a smooth transition that minimizes disruption while maximizing efficiency gains. We work closely with your team to ensure adoption and success.",

              "The results speak for themselves: increased productivity, reduced operational costs, enhanced customer experiences, and improved competitive positioning in the market.",

            ],

          } : slug === "bahoju-tech-cloud-services" ? {

            slug: "bahoju-tech-cloud-services",

            title: "Cloud Computing Services by Bahoju Tech",

            author: {

              name: "Sarah Williams",

              role: "Cloud Solutions Architect",

              avatar: "/api/placeholder/80/80",

            },

            readTime: "6 min read",

            date: "February 14, 2026",

            views: "1.8k",

            likes: "189",

            heroImage: blogImg,

            secondImage: blogImg,

            tags: ["Cloud Computing", "Infrastructure", "Scalability"],

            content: [

              "Cloud computing has revolutionized how businesses operate, offering unprecedented scalability, flexibility, and cost-efficiency. Bahoju Tech's cloud services help organizations harness this power to drive growth and innovation.",

              "Our cloud solutions span from basic infrastructure migration to complex multi-cloud strategies. We assess your unique requirements and design a cloud architecture that aligns with your business goals and compliance requirements.",

              "Security is at the core of everything we do. We implement robust security measures, including data encryption, access controls, and continuous monitoring to ensure your cloud environment remains protected against threats.",

              "With our 24/7 support and proactive monitoring, you can focus on your core business while we handle the complexities of cloud management, ensuring optimal performance and reliability.",

            ],

          } : slug === "bahoju-tech-web-development" ? {

            slug: "bahoju-tech-web-development",

            title: "Bahoju Tech's Web Development Expertise",

            author: {

              name: "Michael Rodriguez",

              role: "Senior Web Developer",

              avatar: "/api/placeholder/80/80",

            },

            readTime: "7 min read",

            date: "February 13, 2026",

            views: "1.5k",

            likes: "312",

            heroImage: blogImg,

            secondImage: blogImg,

            tags: ["Web Development", "Frontend", "Backend"],

            content: [

              "Your website is often the first interaction customers have with your brand. Bahoju Tech's web development team creates stunning, high-performance websites that captivate audiences and drive business results.",

              "We specialize in modern web technologies including React, Vue.js, Node.js, and Python. Our full-stack capabilities allow us to handle everything from responsive frontend design to robust backend architecture and database optimization.",

              "Performance is paramount in today's fast-paced digital world. We implement best practices for speed optimization, SEO, and user experience to ensure your website loads quickly and ranks well in search engines.",

              "Beyond development, we provide ongoing support, maintenance, and updates to keep your website secure, current, and performing at its best. Our agile approach ensures we can quickly adapt to changing business needs.",

            ],

          } : slug === "bahoju-tech-mobile-apps" ? {

            slug: "bahoju-tech-mobile-apps",

            title: "Mobile App Development with Bahoju Tech",

            author: {

              name: "Emily Thompson",

              role: "Mobile Development Lead",

              avatar: "/api/placeholder/80/80",

            },

            readTime: "6 min read",

            date: "February 12, 2026",

            views: "1.9k",

            likes: "167",

            heroImage: blogImg,

            secondImage: blogImg,

            tags: ["Mobile Development", "iOS", "Android"],

            content: [

              "Mobile apps have become essential tools for business growth and customer engagement. Bahoju Tech's mobile development team creates innovative, user-friendly applications that deliver exceptional experiences across all devices.",

              "Our expertise spans both native iOS and Android development, as well as cross-platform solutions using React Native and Flutter. We help you choose the right approach based on your target audience, budget, and performance requirements.",

              "User experience is at the heart of everything we create. Our design team works closely with developers to ensure intuitive interfaces, smooth navigation, and engaging interactions that keep users coming back.",

              "From concept to deployment and beyond, we provide comprehensive mobile app services including UI/UX design, development, testing, app store optimization, and ongoing maintenance to ensure your app succeeds in the competitive mobile marketplace.",

            ],

          } : null;



          setBlog(mockBlog);

        }



        // Fetch popular posts

        try {

          const popularRes = await fetch(`${API_URL}/api/blog`);

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

              slug: "bahoju-tech-digital-transformation",

              title: "Bahoju Tech's Digital Transformation Solutions",

              excerpt: "How Bahoju Tech helps businesses transition to digital platforms...",

              image: blogImg,

              date: "February 15, 2026",

              views: "2.1k",

              likes: "245"

            },

            {

              id: 2,

              slug: "bahoju-tech-cloud-services",

              title: "Cloud Computing Services by Bahoju Tech",

              excerpt: "Explore Bahoju Tech's comprehensive cloud solutions...",

              image: blogImg,

              date: "February 14, 2026",

              views: "1.8k",

              likes: "189"

            },

            {

              id: 3,

              slug: "bahoju-tech-web-development",

              title: "Bahoju Tech's Web Development Expertise",

              excerpt: "Building responsive and scalable websites with Bahoju Tech...",

              image: blogImg,

              date: "February 13, 2026",

              views: "1.5k",

              likes: "312"

            },

            {

              id: 4,

              slug: "bahoju-tech-mobile-apps",

              title: "Mobile App Development with Bahoju Tech",

              excerpt: "Creating innovative mobile applications that drive business growth...",

              image: blogImg,

              date: "February 12, 2026",

              views: "1.9k",

              likes: "167"

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

          className="w-full rounded-xs mb-8 object-contain h-auto max-h-[500px] bg-gray-50"

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

            className="w-full rounded-sm mt-10 object-contain h-auto max-h-[500px] bg-gray-50"

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

