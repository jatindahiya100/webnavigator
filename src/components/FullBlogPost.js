import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the post id from the URL
import mockBlogPosts from '../components/mockBlogPosts';


function FullBlogPost() {
    const { postId } = useParams(); // Get the post id from the URL
    const selectedPost = mockBlogPosts.find(post => post.id === parseInt(postId, 10));

    if (!selectedPost) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h2>{selectedPost.heading}</h2>
            {/* Render the rest of the content here */}
        </div>
    );
}

export default FullBlogPost;
