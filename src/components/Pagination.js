// Pagination.js
import React from 'react';
import '../assets/css/Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="center">
            <div className="pagination">
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`pagination-link ${currentPage === pageNumber ? 'active' : ''}`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Pagination;
