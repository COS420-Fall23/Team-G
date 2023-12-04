/**
 * This will be a page for notifications to appear in
 *
 *
 *
 *
 *
 *
 *
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Toolbar,
  Box,
  AppBar,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import NotificationComponent from './NotificationComponent';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import MapIcon from "@mui/icons-material/Map";
import Navbar from './Navbar.jsx'

const drawerWidth = 240;

const Notifications = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  const handleProfile = (event) => {
    event.preventDefault();
    navigate("/ProfilePage");
  };
  const handleNotifications = (event) => {
    event.preventDefault();
    navigate("/Notifications");
  };
  const [mobileOpen, setMobileOpen] = useState(false); // State to handle drawer for mobile view

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const notifications = [
    {
      id: 1,
      title: 'Notification 1',
      message: 'This is the first notification.',
      hasOptionalFeature: false, // Set hasOptionalFeature for each notification as needed
    },
    {
      id: 2,
      title: 'Notification 2',
      message: 'This is the second notification.',
      hasOptionalFeature: false,
    },
    {
      id: 3,
      title: 'Notification 3',
      message: 'This is the third notification.',
      hasOptionalFeature: true, // Third notification has the optional feature
    },
  ];
  return (
    <Box>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Notifications
        </Typography>
      </Toolbar>
    </AppBar>
        <div className="app">
      <div className="notification-list">
        {notifications.map((notification) => (
          <NotificationComponent key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
    <Navbar />
      </Box>
      
      
  );
  
  

};

export default Notifications;
