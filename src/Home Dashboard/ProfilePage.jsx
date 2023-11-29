/**
 * The ProfilePage component is used for and editing your own profile page. 
 * It displays user information such as the name, major, about me text, and 
 * carpool preferences. It includes a section for displaying reviews. 
 * The component uses the useState hook to manage the editEnabled state for 
 * toggling editable mode. When in edit mode, input fields are displayed to 
 * modify the user information. The changes are reflected in real-time. The 
 * component also includes a "Back" button and handles the display of reviews. 
 * To use this component, import it into your app and render it within a route.
 */
import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig.js';
import { doc, getDoc } from "firebase/firestore";


const ProfilePage = () => {
  const [editEnabled, setEditEnabled] = useState(false); // State variable to store EditEnabled
  const navigate = useNavigate();
  const [UserInformation, setUserInformation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "UserInformation", "lU8cWcrGcmVNyqNZHpIz");
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

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const handleEditButtonClick = () => {
    setEditEnabled(!editEnabled);
  };

  const handleInputChange = (e, field) => {
    UserInformation[field] = e.target.value;
  };

  return (
    <div className="profile-page">
      <header className="header">
        <button className="back-button" onClick={handleBackButtonClick}>
          Back
        </button>
        <h1>Your Profile</h1>
        <button className="edit-profile-button" onClick={handleEditButtonClick}>
          Edit Profile
        </button>
      </header>
      {UserInformation ? (<>
      <section className="user-section">
        <div className="user-info">
          <div className="user-image"></div>
          <h2>{UserInformation.name}</h2>
          {editEnabled ? (
            <div>
              <p>
                <strong>Major:</strong>{" "}
                <input
                  type="text"
                  defaultValue={UserInformation.major}
                  onChange={(e) => handleInputChange(e, "major")}
                />
              </p>
              <p>
                <strong>About Me:</strong>{" "}
                <input
                  type="text"
                  defaultValue={UserInformation.aboutMeText}
                  onChange={(e) => handleInputChange(e, "aboutMeText")}
                />
              </p>
              <p>
                <strong>Carpool Preferences:</strong>{" "}
                <input
                  type="text"
                  defaultValue={UserInformation.preferences}
                  onChange={(e) => handleInputChange(e, "preferences")}
                />
              </p>
            </div>
          ) : (
            <div>
              <p>
                <strong>Major:</strong> {UserInformation.major}
              </p>
              <p>
                <strong>About Me:</strong> {UserInformation.aboutMeText}
              </p>
              <p>
                <strong>Carpool Preferences:</strong>{" "}
                {UserInformation.preferences}
              </p>
            </div>
          )}
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
      </section></>): (
        // Render a loading message or handle loading state
        <div>Loading...</div>
      )}
      {/* <nav className="navigation">
<button className="navigation-button"> Button</button>
<button className="navigation-button"> Button</button>
<button className="navigation-button">Message</button>
</nav> */}
    </div>
  );
};

export default ProfilePage;