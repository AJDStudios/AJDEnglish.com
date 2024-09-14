import React from 'react';
import { render, screen } from '@testing-library/react';
import MyMission from '../pages/MyMission';

test('renders MyMission page', () => {
  render(<MyMission />);
  
  const pageTitle = screen.getByRole('heading', { name: /AD's Mission/i });
  expect(pageTitle).toBeInTheDocument();

  const missionText1 = screen.getByText(/Help All Communicate with Fewer Barriers/i);
  expect(missionText1).toBeInTheDocument();

  const missionText2 = screen.getByText(/Build Better Learning Tools/i);
  expect(missionText2).toBeInTheDocument();

  const missionText3 = screen.getByText(/Make Language Learning Exciting/i);
  expect(missionText3).toBeInTheDocument();

  const missionText4 = screen.getByText(/Teachers as One of Many Tools/i);
  expect(missionText4).toBeInTheDocument();

  const missionText5 = screen.getByText(/Empower Students to Help Themselves/i);
  expect(missionText5).toBeInTheDocument();
});
