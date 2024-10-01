import React from 'react';
import { render, screen } from '@testing-library/react';
import Qualifications from '../pages/Qualifications';

test('renders Qualifications page', () => {
  render(<Qualifications />);

  const pageTitle = screen.getByRole('heading', { name: /My Qualifications/i });
  expect(pageTitle).toBeInTheDocument();

  const experienceSection = screen.getByRole('heading', { name: /Experience/i });
  expect(experienceSection).toBeInTheDocument();

  const certificationsSection = screen.getByRole('heading', { name: /Certifications/i });
  expect(certificationsSection).toBeInTheDocument();

  const nationalitiesSection = screen.getByRole('heading', { name: /Nationalities Taught/i });
  expect(nationalitiesSection).toBeInTheDocument();
});
