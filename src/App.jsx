import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Ride from "./pages/Ride";
import Contact_us from "./pages/Contact_us";
import ScrollToTop from "./components/ScrollToTop";
import Mart from "./pages/Mart";
import Services from "./pages/Services";
import BlogDetails from "./pages/Blog_details";
import Explore from "./components/Explore";




function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ride" element={<Ride />} />
        <Route path="/contact-us" element={<Contact_us />} />
        <Route path="/mart" element={<Mart />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        
        

      </Routes>
    </Router>
  );
}

export default App;
