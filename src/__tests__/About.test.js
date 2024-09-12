import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('renders About page', () => {
  render(<About />);
  
  const pageTitle = screen.getByRole('heading', { name: /About Page/i });
  expect(pageTitle).toBeInTheDocument();

  const pageContent = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi nec purus tempor fringilla sed id lectus. Vivamus id mauris euismod, posuere felis sed, malesuada urna. Aliquam suscipit efficitur arcu, vel eleifend urna consequat a./i);
  expect(pageContent).toBeInTheDocument();
});
