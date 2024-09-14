import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutAD from '../pages/AboutAD';

test('renders AboutAD page', () => {
  render(<AboutAD />);

  const teacherHeading = screen.getByRole('heading', { name: /about the teacher/i });
  expect(teacherHeading).toBeInTheDocument();

  const manHeading = screen.getByRole('heading', { name: /about the man/i });
  expect(manHeading).toBeInTheDocument();

  const teacherContent = screen.getByText(/15 years of experience teaching english/i);
  expect(teacherContent).toBeInTheDocument();

  const manContent = screen.getByText(/I love creating/i);
  expect(manContent).toBeInTheDocument();
});

test('renders both images in AboutAD page', () => {
  render(<AboutAD />);

  const teacherImage = screen.getByAltText(/ad with three adult students at christmas/i);
  expect(teacherImage).toBeInTheDocument();

  const manImage = screen.getByAltText(/ad standing in front of the borodino museum panorama/i);
  expect(manImage).toBeInTheDocument();
});