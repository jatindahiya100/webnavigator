import React, { useEffect, useState } from "react";
import Header from './components/Header';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Hire from './pages/Hire';
import Footer from './components/Footer';
import Loader from './components/Loader';

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

      // Add any other checks for additional resources if needed

      // Set resourcesLoaded to true if all required resources are loaded
      if (fontsLoaded && imagesLoaded) {
        setResourcesLoaded(true);
      }
    };

    // Add an event listener for window.onload to check when all resources have loaded
    window.addEventListener("load", checkResourcesLoaded);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("load", checkResourcesLoaded);
    };
  }, []);

  if (!resourcesLoaded) {
    // Show the loader until resources are loaded
    return <Loader />;
  }

  // Once resources are loaded, render the main content
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/services' element={<Services />} />
        <Route path='/start-project' element={<Hire />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
