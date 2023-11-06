import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from './Signup'; // Adjust the import to match the path to your Signup component.

describe('Signup Component', () => {
  test('renders Signup form', () => {
    render(<Signup />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
  });

  test('validates email ending with @maine.edu', async () => {
    render(<Signup />);
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'student@example.com' },
    });
    fireEvent.click(screen.getByText('Sign Up'));

    await waitFor(() => {
      expect(screen.getByText('Email must be a @maine.edu address.')).toBeInTheDocument();
    });
  });

  test('allows @maine.edu emails', async () => {
    render(<Signup />);
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'student@maine.edu' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByText('Sign Up'));

    await waitFor(() => {
      expect(screen.queryByText('Email must be a @maine.edu address.')).not.toBeInTheDocument();
    });
  });

  test('checks if passwords match', async () => {
    render(<Signup />);
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
      target: { value: 'password321' },
    });
    fireEvent.click(screen.getByText('Sign Up'));

    await waitFor(() => {
      expect(screen.getByText('Passwords do not match.')).toBeInTheDocument();
    });
  });

  test('turns input red when invalid', async () => {
    render(<Signup />);
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'student@example.com' },
    });
    fireEvent.click(screen.getByText('Sign Up'));

    await waitFor(() => {
      const emailInput = screen.getByPlaceholderText('Email');
      expect(emailInput).toHaveClass('Mui-error');
    });
  });
});
