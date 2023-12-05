import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarEmptyIcon from '@mui/icons-material/StarBorder';

const SearchResult = ({ userInformation, distance=0, time="12:00" }) => {
    const navigate = useNavigate();

    // Create an array of stars based on the rating
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="star">
          {index < userInformation.rating ? (
            userInformation.rating - index < 1 ? (
              <StarHalfIcon data-testid="half-star-icon" />
            ) : (
              <StarIcon data-testid="star-icon" />
            )
          ) : (
            <StarEmptyIcon />
          )}
        </span>
      ));

    const handleClick = () => {
        navigate(`/user/${userInformation.uid}`);
    };

    return (
      <div className="search-result" onClick={handleClick}>
        <div>
            <div className="title">
                <img src={userInformation.profileImageUrl} alt="User Profile" className="user-icon"/>
                <h2> {userInformation.name} </h2>
            </div>
            <div className="review-stars">{stars}</div>
        </div>
        <div className="search-info">
            <p>Distance: {distance}</p>
            <p>Time: {time}</p>
        </div>
      </div>
    );
};

export default SearchResult;
