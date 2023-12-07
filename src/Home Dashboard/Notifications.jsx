import React, { useState, useEffect } from 'react';
import {
  Toolbar,
  Box,
  AppBar,
  Typography,
} from "@mui/material";
import NotificationComponent from './NotificationComponent';
import Navbar from './Navbar.jsx';
import { GetNotificationsForuid } from "../DatabaseFacade";

const Notifications = () => {
  const fake_uid = "lU8cWcrGcmVNyqNZHpIz"; // Todo: set based on logged-in user

  const [notifications, setNotifications] = useState([]);

  const accepted = [];

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedNotifications = await GetNotificationsForuid(fake_uid);
        setNotifications(fetchedNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        // Handle error, show a message, etc.
      }
    }

    fetchData();
  }, [fake_uid]);

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
      <div className="Accepted list">
          {/* Display notifications as components */}
          {accepted.map((accepted) => (
            <NotificationComponent key={accepted.id} accepted={accepted} />
          ))}
        </div>
        <div className="notification-list">
          {/* Display notifications as components */}
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
