// Blogs.js
import React, { useState } from 'react';
import BlogPostCard from '../components/BlogPostCard';
import '../assets/css/Blogs.css'
import CategoriesList from '../components/CategoriesList';
import Pagination from '../components/Pagination'; // Add the import statement for Pagination


const mockBlogPosts = [
    {
        image: 'image-url-1.jpg',
        heading: 'Blog Post 1',
        text: 'Lorem ipsum dolor sit amet...',
    },
    // Add more blog posts as needed
];

const mockCategories = ['Category 1', 'Category 2', 'Category 3'];


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
                        <BlogPostCard key={index} {...post} />
                    ))}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
                <div className="categories">
                    <CategoriesList categories={mockCategories} />
                </div>
            </div>
        </div>
    );
}

export default Blogs;
