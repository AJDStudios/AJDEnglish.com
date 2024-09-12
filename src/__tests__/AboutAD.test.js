import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutAD from '../pages/AboutAD';

test('renders AboutAD page', () => {
  render(<AboutAD />);
  
  const pageTitle = screen.getByRole('heading', { name: /About AD/i });
  expect(pageTitle).toBeInTheDocument();

  const pageContent = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi nec purus tempor fringilla sed id lectus. Vivamus id mauris euismod, posuere felis sed, malesuada urna. Aliquam suscipit efficitur arcu, vel eleifend urna consequat a./i);
  expect(pageContent).toBeInTheDocument();
});

