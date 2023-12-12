import React, { useState, useEffect } from 'react';
import MapInterface from './MapInterface';
import { 
  Toolbar, 
  AppBar, 
  Box, 
  Typography, 
  IconButton, 
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Added for hamburger menu
import LocationComponent from '../Location and Routing/LocationComponent';

import RideRequestForm from '../Home Dashboard/RideRequestForm'; // Import the RideRequestForm component
import { getDrivers } from '../DatabaseFacade';


const drawerWidth = 240;




const Homescreen = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    error: null
  });

  const [mobileOpen, setMobileOpen] = useState(false); // State to handle drawer for mobile view
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLocation = (data) => {
    setLocation(data);
  };

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const driversData = await getDrivers();
        setDrivers(driversData);
      } catch (error) {
        console.error("Error fetching drivers: ", error);
        // Handle error appropriately
      }
    };

    fetchDrivers();
  }, []);

  const [drivers, setDrivers] = useState([]);

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

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <MapInterface coordinates={location.coordinates} drivers={drivers} />
        <RideRequestForm /> 
      </Box>
    </Box>
  );
};

export default Homescreen;