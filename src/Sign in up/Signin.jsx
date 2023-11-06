import React from 'react';
import { Button, TextField, Typography, Link } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#E8F4FA',
  height: '100vh',
  ['@media (min-width:600px)']: {
    padding: '40px',
  },
});

const Header = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '24px',
  color: '#000',
  backgroundColor: '#4BB5E8',
  padding: '10px 20px',
  borderRadius: '10px',
});

const Form = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '300px',
  background: '#FFF',
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0px 0px 15px rgba(0,0,0,0.1)',
  '& .MuiTextField-root': {
    marginBottom: '16px',
  },
  ['@media (min-width:960px)']: {
    maxWidth: '400px',
  },
});

const SignInButton = styled(Button)({
  backgroundColor: '#4BB5E8',
  '&:hover': {
    backgroundColor: '#3A9DCD',
  },
  marginBottom: '16px',
});

const PrivacyLink = styled(Link)({
  color: '#007BFF',
  alignSelf: 'center',
});



function SignIn() {
  const navigate = useNavigate();
  const handleSignIn = (event) => {
    console.log("hi")
    event.preventDefault();
    navigate('/dashboard');
  };
  return (
    <Container>
      <Header variant="h5">Welcome Back to BearPool</Header>
      <Form>
        <TextField variant="outlined" type="email" placeholder="Email" defaultValue="student@maine.edu" />
        <TextField variant="outlined" type="password" placeholder="Password" />
        <SignInButton variant="contained" color="primary" type="submit" onClick={(event)=>handleSignIn(event)}>Sign In</SignInButton>
        <PrivacyLink href="#">About Privacy</PrivacyLink>
      </Form>
    </Container>
  );
}

export default SignIn;
