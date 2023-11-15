/*
 * Filename: c:\Users\20neu\Desktop\COS420\Team-G\src\Home Dashboard\Review.jsx
 * Path: c:\Users\20neu\Desktop\COS420\Team-G
 * Created Date: Wednesday, November 8th 2023, 12:13:10 pm
 * Author: David Neufeld
 * 
 * Copyright (c) 2023 Your Company
 */
import React from 'react';
import './Review.css'; // Ensure you have a CSS file for styling
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarEmptyIcon from '@mui/icons-material/StarBorder';

const Review = ({ name, rating, reviewText }) => {
    // Create an array of stars based on the rating
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="star">
        {index < rating ? (
          rating - index < 1 ? (
            <StarHalfIcon data-testid="half-star-icon" />
          ) : (
            <StarIcon data-testid="star-icon" />
          )
        ) : (
          <StarEmptyIcon />
        )}
      </span>
    ));

    return (
        <div className="review-container">
            <div className="user-details">
                <div className="user-name">{name}</div>
                <div className="user-icon">👤</div>
            </div>
            <div className="review-content">
                <div className="review-stars">
                    {stars}
                </div>
                <div className="review-text">
                    {reviewText}
                </div>
            </div>
        </div>
    );
};

export default Review;
