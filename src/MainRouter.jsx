import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Signup from './Sign in up/Signup';
import SignIn from './Sign in up/Signin';
import Homescreen from './Home Dashboard/Homescreen';
import AvailabilitySection from './Availability/AvailabilitySection';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/Dashboard" element={<Homescreen/>} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
