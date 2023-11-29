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
import { React, useState, useEffect } from 'react';
import Review from './Review.jsx';
import './UserPage.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx'
import { db } from '../firebaseConfig.js';
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';

const UserPage = ({
  customuid,
  EnableAcceptRide = false,
  EnableRequestRide = true,
  EnableMessage = true
}) => {
  let { uid } = useParams();
  if(!uid){
    uid = customuid
  }

  const [UserInformation, setUserInformation] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "UserInformation", uid);//todo: set based on logged in user
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserInformation(docSnap.data())
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    fetchData();
  }, []);
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
      {UserInformation ? (<>
      <section className="user-section">
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
      <nav className="choices">
      {EnableRequestRide && (
        <button
          className="choice-button"
          onClick={handleRequestRideClick}
        >
          Request Ride
        </button>
      )}
      {EnableAcceptRide && (
        <button className="choice-button" onClick={handleAcceptRideClick}>
          Accept Ride
        </button>
      )}
      {EnableMessage && (
        <button className="choice-button" onClick={handleMessageClick}>
          Message
        </button>
      )}
    </nav>
    </section></>): (
        // Render a loading message or handle loading state
        <div>Loading...</div>
      )}
    <Navbar />
    </div>
  );
};

export default UserPage;
