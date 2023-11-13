import React from 'react';
import Review from './Review.jsx'
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
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', backgroundColor: '#f5f5f5', maxWidth: '400px', margin: 'auto' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>Profile</h1>
        <button style={{ backgroundColor: '#ddd', border: 'none', borderRadius: '5px', padding: '10px' }}>Edit Profile</button>
      </header>
      
      <section style={{ backgroundColor: '#fff', borderRadius: '5px', padding: '15px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#9e9e9e', marginBottom: '10px' }}></div>
          <h2 style={{ margin: '0' }}>{UserInformation.name}</h2>
          <p>Major: {UserInformation.major}</p>
          <p>About Me: {UserInformation.aboutMeText}</p>
        </div>
        <div>
          <h3>Carpool Preferences</h3>
          {UserInformation.preferences}
        </div>
      </section>

      <section style={{ backgroundColor: '#fff', borderRadius: '5px', padding: '15px' }}>
        <div style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '10px' }}>
          <h3>Reviews</h3>
          {UserInformation.reviews.length > 0 ? (
            <h3>Carpool Preferences</h3>,
            <div>
              {UserInformation.reviews.map((review, index) => (
                /* ToDo: Edit so that each of these draws the review component */
                <Review key = {index} name = {review.name} rating = {review.rating} reviewText={review.text} /> //Pass props to the review component
              ))}
              </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '5px' }}>
            No Reviews Yet
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button style={{ backgroundColor: '#ddd', border: 'none', borderRadius: '5px', padding: '10px' }}>Passenger</button>
            <button style={{ backgroundColor: '#ddd', border: 'none', borderRadius: '5px', padding: '10px' }}>Driver</button>
          </div>
        </div>
        
      </section>

      <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '30px' }}>
        <button style={{ backgroundColor: '#ddd', border: 'none', borderRadius: '5px', padding: '10px' }}>Set Up Drive</button>
        <button style={{ backgroundColor: '#ddd', border: 'none', borderRadius: '5px', padding: '10px' }}>Request Ride</button>
        <button style={{ backgroundColor: '#ddd', border: 'none', borderRadius: '5px', padding: '10px' }}>Profile</button>
        <button style={{ backgroundColor: '#ddd', border: 'none', borderRadius: '5px', padding: '10px' }}>Notifications</button>
      </nav>
    </div>
  );
};

export default ProfilePage;
