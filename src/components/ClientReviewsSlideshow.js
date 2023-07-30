import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/ClientReviewsSlideshow.css'; // Import your CSS file for styling

const ClientReviewsSlideshow = ({ reviews }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideshowIntervalRef = useRef();
  const wrapperRef = useRef(null);

  // Function to increment the review index
  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  useEffect(() => {
    // Auto change review every 5 seconds
    slideshowIntervalRef.current = setInterval(nextReview, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(slideshowIntervalRef.current);
  }, []);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      const handleMouseEnter = () => {
        setIsHovered(true);
        clearInterval(slideshowIntervalRef.current);
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
        slideshowIntervalRef.current = setInterval(nextReview, 3000);
      };

      wrapperElement.addEventListener('mouseenter', handleMouseEnter);
      wrapperElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        wrapperElement.removeEventListener('mouseenter', handleMouseEnter);
        wrapperElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [wrapperRef]);

  // Handle click on a dot to show the corresponding review
  const handleDotClick = (index) => {
    setCurrentReviewIndex(index);
  };

  return (
    <div ref={wrapperRef} className="client-reviews-wrapper">
      <div className="client-reviews">
        {reviews.map((review, index) => {
          const isActive = index === currentReviewIndex;
          const shouldSlideIn = index >= currentReviewIndex - 1 && index <= currentReviewIndex + 1;

          return (
            <div key={index} className={`review ${isActive ? 'active' : ''} ${shouldSlideIn ? 'slide-in' : ''}`} style={{ transform: `translateX(${(index - currentReviewIndex) * 100}%)`, }}>
              <h3>Job Title: {review.Job}</h3> <br /><br />
              <p className="review-text">{"\"" + review.text + "\""}</p>
              <br />
              <p className="author">- {review.author}</p>
            </div>
          );
        })}
      </div>
      <div className="dots-container">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentReviewIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientReviewsSlideshow;
