import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer with flags and copyright', () => {
  render(<Footer />);

  // Check for flags (using one or two flags as representative examples)
  expect(screen.getByText('🇫🇷')).toBeInTheDocument();
  expect(screen.getByText('🇪🇸')).toBeInTheDocument();

  // Check for the copyright text
  expect(screen.getByText(/© AJDEnglish 2024/i)).toBeInTheDocument();
});
