// CategoriesList.js
import React from 'react';
import '../assets/css/CategoriesList.css'


function CategoriesList({ categories }) {
  return (
    <div className="categories-list">
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
