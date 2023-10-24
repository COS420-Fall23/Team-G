import logo from './logo.svg';
import './App.css';
import Signup from './Sign in up/Signup'
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AnimatedContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100%',
  background: `linear-gradient(45deg, #E8F4FA, #4BB5E8, #E8F4FA)`,
  backgroundSize: '300% 300%',
  animation: `${gradientAnimation} 15s infinite`,
});



// Include the AnimatedContainer and gradientAnimation definitions from above

const AppButton = styled(Button)({
  backgroundColor: '#4BB5E8',
  margin: '10px',
  '&:hover': {
    backgroundColor: '#3A9DCD',
  },
});

function App() {
  const navigate = useNavigate();


  return (
    <AnimatedContainer>
      <AppButton variant="contained" onClick={() => navigate('/signup')}>Sign Up</AppButton>
      <AppButton variant="contained" onClick={() => navigate('/signin')}>Sign In</AppButton>
    </AnimatedContainer>
  );
}

export default App;

