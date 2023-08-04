import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../assets/css/ClientReviewsSlideshow.css'; // Import your CSS file for styling

const reviewsData = [
  {
    Job: "Find out the payment gateway and processor for a particular website",
    text: "Very fast turnaround, did the job as requested, no issues or problems, would use again",
    author: "Andrew Davies",
  },
  {
    Job: "Full Stack Development",
    text: "I really love the work Jatin has provided. He is offering fast & reliable service. He has good knowledge in building a highly-customized website, and I will be working with him more in the future",
    author: "Yang Henry",
  },
  {
    Job: "Full Stack Development",
    text: "Jatin has done a great job on my full stack development project. My project is really big but he managed to get every step done perfectly. Also he is always full of pashion & his working speed is fast. He has professional skills and knowledge that allow him to finish complicated tasks. I Really enjoy the experience working with him and will continue working with him on the further changes.",
    author: "Yang Henry",
  },
  {
    Job: "To Add Features to Account, Chat System and Upgrade Admin Dashboard",
    text: "Very Patient and talented. This work was extended for a month because I was continuously asking for changes, but Jatin was always very patient and successfully completed all the work that I asked for. I really appreciate his hard work. Meanwhile, he spent a lot of time communicating with me regarding to the project. His way of expressing was pretty clear and polite.  I would highly recommend hiring him for your project.",
    author: "Yang Henry",
  },
  {
    Job: "HTML , CSS - 2 Pages",
    text: "Jatin Dahiya did exactly what we requested in exactly the right timeframe. Excellent work. A++++",
    author: "Mr. Chalapathi Rao",
  },
  {
    Job: "Create Website Landing Page",
    text: "Excellent work!!!! He gave me exactly what I requested. I am looking forward to using him again in the future🙂",
    author: "James Lewis",
  },
  {
    Job: "Digital Ocean Expert",
    text: "Jatin Dahiya was great! Completed my task really quickly and was very knowledgeable. Highly recommend!",
    author: "Mr. Chalapathi Rao",
  },
  {
    Job: "Build a simple 2-3 pages website with fully responsive",
    text: "I want to thank Jatin, for all the hard work he has done. From start to finish there was always a strong level of respect & understanding for the goal at hand. Working closely with him really took our programming to the next level!! He thinks about problems, finds solutions, and has awesome morale. Great communication, great working skills in outreach, and high work quality and efficiency. He had a DEEP understanding of what work was needed and performed above and BEYOND expectations. The tone of his communication was wonderful and emotionally engaging on all levels. To top it off, his experience is incredibly professional, fast, and reliable. Thank You Again, Faizy Jamal",
    author: "Faizy Jamal",
  },
  {
    Job: "I need a website designer to design my existing website at GoDaddy.",
    text: "Jatin incorporated all the changes that I wanted in the website. He was professional and responded very quickly. I highly recommend him! He's very good at designing websites. I would definitely work with him again. He worked on a Sunday and gave me the desired outcomes for my website.",
    author: "Caroline Swamidoss",
  },
  {
    Job: "Need help opening a blog",
    text: "Very helpful and very cooperative Thanks Jatin",
    author: "Preeti Bhatia",
  },
  // Add more reviews as needed
];

const ClientReviewsSlideshow = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const slideshowIntervalRef = useRef();
  const wrapperRef = useRef(null);

  // Function to increment the review index
  const nextReview = useCallback(() => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  }, []);

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
        {reviewsData.map((review, index) => {
          const isActive = index === currentReviewIndex;
          const shouldSlideIn = index >= currentReviewIndex - 1 && index <= currentReviewIndex + 1;

          return (
            <div key={index} className={`review ${isActive ? 'active' : ''} ${shouldSlideIn ? 'slide-in' : ''}`} style={{ transform: `translateX(${(index - currentReviewIndex) * 100}%)` }}>
              <h3>Job Title: {review.Job}</h3> <br /><br />
              <p className="review-text">{"\"" + review.text + "\""}</p>
              <p className="author">- {review.author}</p>
            </div>
          );
        })}
      </div>
      <div className="dots-container">
        {reviewsData.map((_, index) => (
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
