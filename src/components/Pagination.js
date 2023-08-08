// Pagination.js
import React from 'react';
import '../assets/css/Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="center">
            <div className="pagination">
                <button
                    className={`pagination-link ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &laquo;
                </button>
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`pagination-link ${currentPage === pageNumber ? 'active' : ''}`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button
                    className={`pagination-link ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &raquo;
                </button>
            </div>
        </div>
    );
}

export default Pagination;
