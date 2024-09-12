import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import logo from '../logo.webp'; // Import logo with a relative path

test('renders the logo and its link to "/"', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const logoLink = screen.getByRole('link', { name: /An AJDStudios production/i });
  expect(logoLink).toBeInTheDocument();
  expect(logoLink).toHaveAttribute('href', '/');

  const logoImage = screen.getByRole('img', { alt: 'Logo' });
  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute('src', logo);
});

test('renders text below the logo', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const logoText = screen.getByText(/An AJDStudios production/i);
  expect(logoText).toBeInTheDocument();
});