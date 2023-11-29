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
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
  const notificationData = {
    title: 'Hello!',
    message: 'This is a sample notification.',
  };
  return (
    <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" noWrap component="div">
                        Notifications
                    </Typography>
                </Toolbar>
            </AppBar>
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {[
                "Drivers",
                "Ride Requests",
                "Map",
                "Profile",
                "Notifications",
                "Back",
              ].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  onClick={
                    index === 3
                      ? (event) => handleProfile(event)
                      : index === 4
                      ? (event) => handleNotifications(event)
                      : index === 5
                      ? (event) => handleBackButtonClick(event)
                      : null
                  }
                >
                  <ListItemIcon>
                    {index === 0 ? (
                      <DirectionsCarIcon />
                    ) : index === 1 ? (
                      <PeopleIcon />
                    ) : (
                      <MapIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      <div className="app">
      <h1>Notification Example</h1>
      <NotificationComponent notification={notificationData} />
    </div>
      </Box>
      
  );
  
  

};

export default Notifications;
