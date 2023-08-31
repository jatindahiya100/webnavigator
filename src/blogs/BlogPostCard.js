import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../assets/css/BlogPostCard.css';

function BlogPostCard({ featuredImage, heading, shortDescription }) {
  return (
    <div className="blog-post-card">
      <LazyLoadImage
        src={featuredImage}
        alt="Blog Post"
        className="thumbnail"
        effect="blur" // You can choose other effects as well
      />
      <div className="content">
        <h2 className="heading">{heading}</h2>
        <p className="short-description">{shortDescription}</p>
      </div>
    </div>
  );
}

export default BlogPostCard;
