/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import MapInterface from './MapInterface';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Toolbar, 
  AppBar, 
  Box, 
  Typography, 
  IconButton, 
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Added for hamburger menu
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleIcon from '@mui/icons-material/People';
import MapIcon from '@mui/icons-material/Map';
import LocationComponent from '../Location and Routing/LocationComponent';
import { BrowserRouter, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Homescreen = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
        error: null
    });


    //List of navigation components to rest in the Drawer
    const navigate = useNavigate();
    // const handleDrivers = (event) => {
    //     event.preventDefault();
    //     navigate('/Drivers');
    //   };
    // const handleRequest = (event) => {
    //     event.preventDefault();
    //     navigate('/RideRequest');
    //   };
    // const handleMap = (event) => {
    //     event.preventDefault();
    //     navigate('/Map');
    //   };
    const handleProfile = (event) => {
      event.preventDefault();
      navigate('/ProfilePage');
    };
    /*const handlelogout = (event) => {
        event.preventDefault();
        navigate('/ProfilePage');
      };*/



    const [mobileOpen, setMobileOpen] = useState(false); // State to handle drawer for mobile view
    const theme = useTheme();
    // Breakpoint for mobile devices
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLocation = (data) => {
        setLocation(data);
    };

    const drawerContent = (
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {['Drivers', 'Ride Requests', 'Map'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index === 0 ? <DirectionsCarIcon /> : index === 1 ? <PeopleIcon /> : <MapIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <LocationComponent onLocation={handleLocation} />
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
                        BearPool Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={mobileOpen}
                data-testID="Drawer"
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Drivers', 'Ride Requests', 'Map','Profile','Logout'].map((text, index) => (
                            <ListItem button key={text} onClick={index === 3 ? (event)=>handleProfile(event): null}>
                                <ListItemIcon>
                                    {index === 0 ? <DirectionsCarIcon /> : index === 1 ? <PeopleIcon /> : <MapIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` }
                }}
            >
                <Toolbar />
                <MapInterface coordinates={location.coordinates}/>
            </Box>
        </Box>
    );
};

export default Homescreen;
