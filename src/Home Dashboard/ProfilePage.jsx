import React from 'react';
import Review from './Review.jsx'
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';
const UserInformation = {
  name: 'John Doe',
  major: 'Computer Science',
  aboutMeText: 'Passionate about technology and innovation.',
  preferences: 'Prefers non-smokers and no pets in the car.',
  reviews: [
    {name: "Ben Smith", rating: 4, text: "Pretty Good"},
    {name: "Mark Wahlburg", rating: 3.5 , text: "No Complaints"},
    {name: "Dr. Fisk", rating: 5 , text: "My review is written for the sole purpose of demonstrating what happens when the site has to render a longer review."}
  ]
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate('/dashboard')
  };
  return (
    <div className="profile-page">
      <header className="header">
        <button className="back-button" onClick={handleBackButtonClick}>Back</button>
        <h1>Your Profile</h1>
        <button className="edit-profile-button">Edit Profile</button>
      </header>
      
      <section className="user-section">
        <div className="user-info">
          <div className="user-image"></div>
          <h2>{UserInformation.name}</h2>
          <p><strong>Major:</strong> {UserInformation.major}</p>
          <p><strong>About Me:</strong> {UserInformation.aboutMeText}</p>
          <p><strong>Carpool Preferences:</strong> {UserInformation.preferences}</p>
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-header">
          <h3>Reviews</h3>
          {UserInformation.reviews.length > 0 ? (
            <div className="reviews-container">
              {UserInformation.reviews.map((review, index) => (
                <Review key={index} name={review.name} rating={review.rating} reviewText={review.text} />
              ))}
            </div>
          ) : (
            <div className="no-reviews-container">
              No Reviews Yet
            </div>
          )}
          <div className="carpool-preference-buttons">
          </div>
        </div>
      </section>

      {/* 
<nav className="navigation">
    <button className="set-up-drive-button">Set Up Drive</button>
    <button className="request-ride-button">Request Ride</button>
    <button className="profile-button">Profile</button>
    <button className="notifications-button">Notifications</button>
</nav>
*/}

    </div>
  );
};

export default ProfilePage;
