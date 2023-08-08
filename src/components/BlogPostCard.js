// BlogPostCard.js
import React from 'react';
import '../assets/css/BlogPostCard.css'


function BlogPostCard({ image, heading, text }) {
  return (
    <div className="blog-post-card">
      <img src={image} alt="Blog Post" />
      <div className="content">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default BlogPostCard;
