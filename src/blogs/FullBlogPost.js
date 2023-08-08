import React from 'react';
import { useParams } from 'react-router-dom';
import mockBlogPosts from './mockBlogPosts';
import '../assets/css/FullBlogPost.css'; // Import the CSS file

function FullBlogPost() {
    const { postId } = useParams();
    const selectedPost = mockBlogPosts.find(post => post.id === parseInt(postId, 10));

    if (!selectedPost) {
        return <div>Post not found</div>;
    }

    return (
        <div className="blog-container">
            <img src={selectedPost.featuredImage} alt="Featured" className="blog-featured-image" />
            <h2 className="blog-heading">{selectedPost.heading}</h2>
            <div className="blog-main-content">{selectedPost.mainContent}</div>
        </div>
    );
}

export default FullBlogPost;
