import React, { useState } from 'react';
import MapInterface from './MapInterface';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, Box, Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleIcon from '@mui/icons-material/People';
import MapIcon from '@mui/icons-material/Map';
import LocationComponent from '../Location and Routing/LocationComponent';
const drawerWidth = 240;

const Homescreen = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
        error: null
    });

    const handleLocation = (data) => {
        setLocation(data);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <LocationComponent onLocation={handleLocation} />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        BearPool Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
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
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <MapInterface coordinates={location.coordinates}/>
            </Box>
        </Box>
    );
};

export default Homescreen;
