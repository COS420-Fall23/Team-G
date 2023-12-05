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
import {
  Toolbar,
  Box,
  AppBar,
  Typography,
} from "@mui/material";
import NotificationComponent from './NotificationComponent';
import Navbar from './Navbar.jsx'
import notificationsData from './notificationsData.js'; // Importing notifications from the separate file
//import { db } from '../firebaseConfig.js';
//import { doc, getDoc, updateDoc } from "firebase/firestore";

const Notifications = () => {
  const uid = "user1" //todo: set based on logged in user
  const userNotifications = notificationsData.userNotifications[uid] || [];


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
          {userNotifications.map((notification) => (
            <NotificationComponent key={notification.id} notification={notification} />
          ))}
        </div>
      </div>
      <Navbar />
    </Box>
  );
};

export default Notifications;
