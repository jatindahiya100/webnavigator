import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use BrowserRouter here
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import Work from './pages/Work';
import Blogs from './blogs/Blogs';
import Hire from './pages/Hire';
import Footer from './components/Footer';
import Loader from './components/Loader';
import FullBlogPost from './blogs/FullBlogPost';
import NotFound from './components/NotFound';
import LandingArea from "./components/LandingArea";

function App() {
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    // Check if all resources are loaded
    const checkResourcesLoaded = () => {
      // Check if all required fonts are loaded
      const fontsLoaded = document.fonts ? document.fonts.status === "loaded" : true;

      // Check if all images are loaded
      const images = document.querySelectorAll("img");
      const imagesLoaded = Array.from(images).every(img => img.complete && img.naturalWidth !== 0);

      // Set resourcesLoaded to true if all required resources are loaded
      if (fontsLoaded && imagesLoaded) {
        setResourcesLoaded(true);
      }
    };

    // Check resources loaded once the DOM content is ready
    document.addEventListener("DOMContentLoaded", checkResourcesLoaded);

    // Fallback in case the event doesn't fire (useful if all resources are already cached)
    const timeoutId = setTimeout(() => {
      checkResourcesLoaded();
    }, 500); // Wait for .5 seconds, adjust the time as needed

    // Cleanup the event listener and timeout on component unmount
    return () => {
      document.removeEventListener("DOMContentLoaded", checkResourcesLoaded);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!resourcesLoaded) {
    // Show the loader until resources are loaded
    return (
      <div style={{ width: "100%", height: "calc(100vh - 80px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Loader />
      </div>
    );
  }

  // Once resources are loaded, render the main content
  return (
    <Router basename="/">
      <ScrollToTop />
      <LandingArea />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/what-we-do' element={<WhatWeDo />} />
        <Route path='/work' element={<Work />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path="/blogs/:slug" element={<FullBlogPost />} />
        <Route path='/start-project' element={<Hire />} />
        {/* Add a route for unmatched paths */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
