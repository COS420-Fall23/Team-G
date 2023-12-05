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
import React, { useState } from "react";
import Review from "./Review.jsx";
import "./UserPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { GetUserByUid, UpdateUserInformation, UpdateUserImage } from "../DatabaseFacade";

const ProfilePage = () => {
  const [editEnabled, setEditEnabled] = useState(false); // State variable to store EditEnabled
  const navigate = useNavigate();
  //const [UserInformation, setUserInformation] = useState(null);
  const uid = "lU8cWcrGcmVNyqNZHpIz"; //todo: set based on logged in user
  //setUserInformation(GetUserByUid(uid));
  let UserInformation = GetUserByUid(uid);
  let file;
  const handleFileChange = (event) => {
    file = event.target.files[0];
  };
  
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  
  const handleEditButtonClick = () => {
    if (editEnabled) {
      // Save the modified user information to the database
      UpdateUserInformation(uid, UserInformation);
      if (file) {//upload the chosen file and change pfp
        UpdateUserImage(file, uid) 
      }
    }
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
          {editEnabled ? "Save Profile" : "Edit Profile"}
        </button>
      </header>
      {UserInformation ? (
        <>
          <section className="user-section">
            <div className="user-info">
              {editEnabled ? (
                <div className="centered">
                  <img src={UserInformation.profileImageUrl} alt="User Profile" className="user-image"/>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              ) : (
                <img src={UserInformation.profileImageUrl} alt="User Profile"  className="user-image"/>
              )}
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
          </section>
        </>
      ) : (
        // Render a loading message or handle loading state
        <div>Loading...</div>
      )}
      <Navbar />
    </div>
  );
};

export default ProfilePage;
