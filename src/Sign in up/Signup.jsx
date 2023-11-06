import React, { useState } from 'react';
import { Button, TextField, Typography, Link } from '@mui/material';
import styled from '@emotion/styled';
import Alert from '@mui/material/Alert';

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

const SignupButton = styled(Button)({
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

function Signup() {
  const [email, setEmail] = useState('student@maine.edu');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (emailError && event.target.value.endsWith('@maine.edu')) {
      setEmailError(false); // Clear the error state if the user corrects the email
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (passwordError && confirmPassword === event.target.value) {
      setPasswordError(false); // Clear the error state if the passwords now match
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (passwordError && password === event.target.value) {
      setPasswordError(false); // Clear the error state if the passwords now match
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Reset the message
    setMessage('');
    let isValid = true;

    // Email validation
    if (!email.endsWith('@maine.edu')) {
      setMessage('Email must be a @maine.edu address.');
      setEmailError(true);
      isValid = false;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setPasswordError(true);
      isValid = false;
    }

    if (isValid) {
      // Here you would usually handle the actual sign-up logic.
      console.log('Sign up logic goes here');
    }
  };

  return (
    <Container>
      <Header variant="h5">Welcome to BearPool</Header>
      <Form onSubmit={handleSubmit}>
        <TextField 
          error={emailError}
          variant="outlined" 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={handleEmailChange}
          helperText={emailError ? "Email must be a @maine.edu address." : ""}
        />
        <TextField 
          error={passwordError}
          variant="outlined" 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={handlePasswordChange}
        />
        <TextField 
          error={passwordError}
          variant="outlined" 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          helperText={passwordError ? "Passwords do not match." : ""}
        />
        {message && <Alert severity="error">{message}</Alert>}
        <SignupButton variant="contained" color="primary" type="submit">Sign Up</SignupButton>
        <PrivacyLink href="#">About Privacy</PrivacyLink>
      </Form>
    </Container>
  );
}

export default Signup;
