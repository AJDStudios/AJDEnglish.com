import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import logo from '../logo.webp'; // Import logo with a relative path

test('renders the logo and verifies it is the only link that redirects to "/"', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  // Find all links in the component
  const allLinks = screen.getAllByRole('link');
  const homeLinks = allLinks.filter(link => link.getAttribute('href') === '/');

  // Assert there is exactly one link that leads to the home page
  expect(homeLinks.length).toBe(1);

  // Validate that the logo link is the one that leads to the home page
  const logoLink = screen.getByRole('link', { name: 'Logo' }); // Adjust the name according to your actual implementation if needed
  expect(logoLink).toBeInTheDocument();
  expect(logoLink).toHaveAttribute('href', '/');

  // Check that the image inside the link has the correct attributes
  const logoImage = screen.getByRole('img', { alt: 'Logo' });
  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute('src', logo);
});