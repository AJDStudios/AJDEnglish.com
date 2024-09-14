import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '../pages/Testimonials';

test('renders Testimonials page', () => {
  render(<Testimonials />);
  
  const pageTitle = screen.getByRole('heading', { name: /My Students Are Awesome/i });
  expect(pageTitle).toBeInTheDocument();

  const introText = screen.getByText(/No matter how many years I do this, students continue to inspire and humble me./i);
  expect(introText).toBeInTheDocument();

  const gratitudeSection = screen.getByRole('heading', { name: /Gratitude from My Students/i });
  expect(gratitudeSection).toBeInTheDocument();

  const classSection = screen.getByRole('heading', { name: /In Class and Beyond/i });
  expect(classSection).toBeInTheDocument();

  const funSection = screen.getByRole('heading', { name: /Fun in the Classroom/i });
  expect(funSection).toBeInTheDocument();
});
