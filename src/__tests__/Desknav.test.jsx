import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DeskNavBar from '../components/DeskNav';

test('renders DeskNavBar on desktop screen', () => {
  window.innerWidth = 1200;
  render(
    <MemoryRouter>
      <DeskNavBar />
    </MemoryRouter>
  );

  const deskNav = screen.getByRole('navigation');
  expect(deskNav).toBeInTheDocument();
});

test('does not render DeskNavBar on mobile screen', () => {
  window.innerWidth = 800;
  render(
    <MemoryRouter>
      <DeskNavBar />
    </MemoryRouter>
  );

  const deskNav = screen.queryByRole('navigation', { name: /desknav/i });
  expect(deskNav).not.toBeInTheDocument();
});
