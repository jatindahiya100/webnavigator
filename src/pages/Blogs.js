// Blogs.js
import React, { useState } from 'react';
import BlogPostCard from '../components/BlogPostCard';
import '../assets/css/Blogs.css'
import MediaComponent from '../components/MediaComponent'
import BlogsLottie from '../assets/images/Lottie/Blogs-Lottie-01.json';
import Pagination from '../components/Pagination'; // Add the import statement for Pagination
import { Link } from 'react-router-dom';
import mockBlogPosts from '../components/mockBlogPosts';


const LottieData = {
    mediaType: "lottie",
    lottieOptions: {
        loop: true,
        autoplay: true,
        animationData: BlogsLottie,
    },
}

const ITEMS_PER_PAGE = 3; // Number of blog posts per page

function Blogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = mockBlogPosts.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = mockBlogPosts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="blogs-container">
            <div className="content-container">
                <div className="blog-posts">
                    {currentItems.map((post, index) => (
                        <Link
                            key={index}
                            to={`/blog/${post.id}`} // Modify the link to include the post id in the URL
                            className="blog-post-link"
                        >
                            <BlogPostCard {...post} />
                        </Link>
                    ))}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
                <div>
                    <MediaComponent mediaType={LottieData.mediaType} lottieOptions={LottieData.lottieOptions} />
                </div>
            </div>
        </div>
    );
}

export default Blogs;
