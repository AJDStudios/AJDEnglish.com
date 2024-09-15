import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Services from '../pages/Services';

test('renders Services page', () => {
  render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );

  const pageTitle = screen.getByRole('heading', { name: /Lesson Overview/i });
  expect(pageTitle).toBeInTheDocument();

  const standardLesson = screen.getByText(/Standard Communication Lesson/i);
  expect(standardLesson).toBeInTheDocument();

  const bookNowButtons = screen.getAllByText(/Book Now/i);
  expect(bookNowButtons.length).toBeGreaterThan(0);
});
