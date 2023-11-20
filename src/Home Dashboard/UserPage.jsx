/*
  UserPage Component - View Another User's Profile
  
  This component displays the profile information and reviews of another user.
  This is a UserPage component that accepts three optional props: 
  enableAcceptRide, enableRequestRide, and enableMessage. By default, all three 
  props are set to false. To customize the component's behavior, you can pass 
  these props with true or false values. Enable or disable the "Accept Ride", 
  "Request Ride", and "Message" buttons by setting the corresponding props when 
  calling the UserPage component.
*/
import React from 'react';
import Review from './Review.jsx';
import './UserPage.css';
import { useNavigate } from 'react-router-dom';

const UserPage = ({
  EnableAcceptRide = false,
  EnableRequestRide = false,
  EnableMessage = true,
  UserInformation = {
    name: 'John Doe',
    major: 'Computer Science',
    aboutMeText: 'Passionate about technology and innovation.',
    preferences: 'Prefers non-smokers and no pets in the car.',
    reviews: [
      { name: "Ben Smith", rating: 4, text: "Pretty Good" },
      { name: "Mark Wahlburg", rating: 3.5, text: "No Complaints" },
      { name: "Dr. Fisk", rating: 5, text: "My review is written for the sole purpose of demonstrating what happens when the site has to render a longer review." }
    ]
  }
}) => {
    const navigate = useNavigate();
    
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  const handleRequestRideClick = () => {
    console.log("Request Ride Clicked");
  };
  const handleAcceptRideClick = () => {
    console.log("Accept Ride Clicked");
  };
  const handleMessageClick = () => {
    console.log("Message Clicked");
  };

  return (
    <div className="profile-page">
      <header className="header">
        <button className="back-button" onClick={handleBackButtonClick}>
          Back
        </button>
      </header>

      <section className="user-section">
        <div className="user-info">
          <div className="user-image"></div>
          <h2>{UserInformation.name}</h2>
          <p>
            <strong>Major:</strong> {UserInformation.major}
          </p>
          <p>
            <strong>About Me:</strong> {UserInformation.aboutMeText}
          </p>
          <p>
            <strong>Carpool Preferences:</strong> {UserInformation.preferences}
          </p>
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-header">
          <h3>Reviews</h3>
          {UserInformation.reviews.length > 0 ? (
            <div className="reviews-container">
              {UserInformation.reviews.map((review, index) => (
                <Review
                  key={index}
                  name={review.name}
                  rating={review.rating}
                  reviewText={review.text}
                />
              ))}
            </div>
          ) : (
            <div className="no-reviews-container">No Reviews Yet</div>
          )}
          <div className="carpool-preference-buttons"></div>
        </div>
      </section>

      <nav className="navigation">
        {EnableRequestRide && (
          <button
            className="navigation-button"
            onClick={handleRequestRideClick}
          >
            Request Ride
          </button>
        )}
        {EnableAcceptRide && (
          <button className="navigation-button" onClick={handleAcceptRideClick}>
            Accept Ride
          </button>
        )}
        {EnableMessage && (
          <button className="navigation-button" onClick={handleMessageClick}>
            Message
          </button>
        )}
      </nav>
    </div>
  );
};

export default UserPage;
