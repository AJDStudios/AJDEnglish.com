import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../pages/contact';

test('renders Contact page', () => {
  render(<Contact />);
  
  // Check if the form is rendered
  const nameField = screen.getByLabelText(/name/i);
  expect(nameField).toBeInTheDocument();

  const emailField = screen.getByLabelText(/email/i);
  expect(emailField).toBeInTheDocument();

  const messageField = screen.getByLabelText(/message/i);
  expect(messageField).toBeInTheDocument();

  const phoneNumber = screen.getByText('+44-7498-284-613');
  expect(phoneNumber).toBeInTheDocument();

  const emailLink = screen.getByText('Aaronjdodd1989@gmail.com');
  expect(emailLink).toBeInTheDocument();

  const location = screen.getByText(/Cinderford/i);
  expect(location).toBeInTheDocument();
});
