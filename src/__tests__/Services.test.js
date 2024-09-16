import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Services from '../pages/Services';

test('renders Services page and checks content', () => {
  render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );

  const pageTitle = screen.getByRole('heading', { name: /Lesson Overview/i });
  expect(pageTitle).toBeInTheDocument();

  const standardLesson = screen.getByText(/Standard Communication Lesson/i);
  expect(standardLesson).toBeInTheDocument();

  const bookNowButtons = screen.getAllByRole('button', { name: /Book Now/i });
  expect(bookNowButtons.length).toBeGreaterThan(0);

  const firstBookNowButton = bookNowButtons[0];
  userEvent.click(firstBookNowButton);

  expect(firstBookNowButton).toBeEnabled();
});
