import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../assets/css/ClientReviewsSlideshow.css'; // Import your CSS file for styling

const ClientReviewsSlideshow = ({ reviews }) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const slideshowIntervalRef = useRef();
  const wrapperRef = useRef(null);

  // Function to increment the review index
  const nextReview = useCallback(() => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, [reviews]);

  useEffect(() => {
    // Auto change review every 3 seconds
    slideshowIntervalRef.current = setInterval(nextReview, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(slideshowIntervalRef.current);
  }, [nextReview]);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      const handleMouseEnter = () => {
        clearInterval(slideshowIntervalRef.current);
      };

      const handleMouseLeave = () => {
        slideshowIntervalRef.current = setInterval(nextReview, 3000);
      };

      wrapperElement.addEventListener('mouseenter', handleMouseEnter);
      wrapperElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        wrapperElement.removeEventListener('mouseenter', handleMouseEnter);
        wrapperElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [nextReview]);

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
            <div key={index} className={`review ${isActive ? 'active' : ''} ${shouldSlideIn ? 'slide-in' : ''}`} style={{ transform: `translateX(${(index - currentReviewIndex) * 100}%)` }}>
              <h2>Job Title: {review.Job}</h2> <br /><br />
              <p className="review-text">{"\"" + review.text + "\""}</p>
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
