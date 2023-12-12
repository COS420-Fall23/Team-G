import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
//import PeopleIcon from '@mui/icons-material/People';
import MapIcon from '@mui/icons-material/Map';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/PersonRounded';
import NotificationsIcon from '@mui/icons-material/NotificationsRounded';

const Navbar = () => {
    const navigate = useNavigate();

  const handleDashboardClick = () => {
    // Handle the logic for handling the request ride click
    navigate("/Dashboard");
    console.log('Dashboard clicked');
  };

  const handleSetUpRideClick = () => {
    // Handle the logic for handling the set up ride click
    navigate("/RideRequestForm");
    console.log('Set up ride clicked');
  };

  const handleProfileClick = () => {
    // Handle the logic for handling the profile click
    navigate("/ProfilePage");
    console.log('Profile clicked');
  };

  const handleNotificationsClick = () => {
    // Handle the logic for handling the notifications click
    navigate("/Notifications");
    console.log('Notifications clicked');
  };

  return (
    <nav className="navigation">
      <button className="navigation-button" onClick={handleDashboardClick}>
        <div className = "icon"> <MapIcon /> </div>
        Dashboard
      </button>
      <button className="navigation-button" onClick={handleSetUpRideClick}>
      <div className = "icon"> <DirectionsCarIcon /> </div>
        Set up ride
      </button>
      <button className="navigation-button" onClick={handleProfileClick}>
      <div className = "icon"> <PersonIcon /> </div>
        Profile
      </button>
      <button className="navigation-button" onClick={handleNotificationsClick}>
      <div className = "icon"> <NotificationsIcon /> </div>
        Notifications
      </button>
    </nav>
  );
};

export default Navbar;
