import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer with copyright', () => {
  render(<Footer />);

  expect(screen.getByText(/© AJDEnglish 2024/i)).toBeInTheDocument();
});
