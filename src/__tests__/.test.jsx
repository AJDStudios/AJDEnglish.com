import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

// Renders the app and verifies snapshot
test('renders the app component', () => {
  const { asFragment } = render(
    <App />
  );
  expect(asFragment()).toMatchSnapshot();
});

// Checks that no redundant code or comments exist
test('does not contain redundant code or comments', () => {
  const { queryByText } = render(
    <App />
  );
  expect(queryByText('<!-- Notice the use of %PUBLIC_URL% in the tags above.')).toBeNull();
});

// Verifies that the splash screen is rendered correctly
test('renders the splash screen', () => {
  render(
    <App />
  );
  const splashScreen = screen.getByTestId('splash-screen');
  expect(splashScreen).toBeInTheDocument();
});

// Simulate initial loading state
describe('App Loading State', () => {
  test('renders with initial loading state', () => {
    act(() => {
      render(
        
        <App />

      );
    });
    const loadingIndicator = screen.getByTestId('splash-screen');
    expect(loadingIndicator).toBeInTheDocument();
  });

  test('renders loading state when isLoading is true', () => {
    act(() => {
      render(

        <App isLoading={true} />

      );
    });
    const loadingIndicator = screen.getByTestId('splash-screen');
    expect(loadingIndicator).toBeInTheDocument();
  });
});
