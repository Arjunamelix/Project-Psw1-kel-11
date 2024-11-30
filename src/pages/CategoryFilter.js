import React from 'react';
import './Filter.css';

const CategoryFilter = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto no-scrollbar">
      {categories.map((category, index) => (
        <button
        key={index}
        onClick={() => onSelect(category.name)}
        className={`flex items-center py-2 px-4 rounded-full whitespace-nowrap ${
          selected === category.name ? 'active' : ''
        }`}
      >
        <span className="category-name">{category.name}</span>
        <span className="category-watched">({category.learned}/{category.total})</span>
      </button>
      
      ))}
    </div>
  );
};

export default CategoryFilter;
