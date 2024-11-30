import React from 'react';
import './Card.css';

const CourseCard = ({ image, title, category, by, learned, total, categoryColor }) => {
  return (
    <div className="course-card">
      <div className="image-container">
        <img
          src={image || 'https://via.placeholder.com/300x150'}
          alt={title}
        />
      </div>
      <div className="title-container">
        <h3>{title}</h3>
      </div>
      <div className="info-container">
        <p className="info">By: {by}</p>
        <p className="learned-info">Learned: {learned}/{total}</p>
      </div>
    </div>
  );
};

export default CourseCard;
