import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Signup from './Sign in up/Signup';
import SignIn from './Sign in up/Signin';
import Homescreen from './Home Dashboard/Homescreen';
import ProfilePage from './Home Dashboard/ProfilePage';
import UserPage from './Home Dashboard/UserPage';
import Notifications from './Home Dashboard/Notifications';
import PreferencesPage from './Home Dashboard/PreferencesPage';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
        <Route path="/UserPage" element={<UserPage
          customuid = {"lU8cWcrGcmVNyqNZHpIz"}
          EnableRequestRide={true}
        />} />
        <Route path="/user/:uid" element={<UserPage EnableRequestRide={true}/>} />
        <Route path="/Dashboard" element={<Homescreen/>} />
        <Route path="/Notifications" element={<Notifications/>}/>
        <Route path="/Preferences" element={<PreferencesPage/>}/>
      </Routes>
    </Router>
  );
}

export default MainRouter;
