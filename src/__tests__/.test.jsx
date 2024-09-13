import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

test('renders the app component', () => {
  const { asFragment } = render(
    <Router>
      <App />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('does not contain redundant code or comments', () => {
  const { queryByText } = render(
    <Router>
      <App />
    </Router>
  );
  expect(queryByText('<!-- Notice the use of %PUBLIC_URL% in the tags above.')).toBeNull();
});

test('renders the splash screen', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const splashScreen = screen.getByTestId('splash-screen');
  expect(splashScreen).toBeInTheDocument();
});

describe('App', () => {
  test('renders with initial loading state', () => {
    act(() => {
      render(<App />);
    });
    const loadingIndicator = screen.getByTestId('splash-screen'); 
    expect(loadingIndicator).toBeInTheDocument();
  });

  test('renders loading state when isLoading is true', () => {
    act(() => {
      render(<App isLoading={true} />);
    });
    const loadingIndicator = screen.getByTestId('splash-screen'); 
    expect(loadingIndicator).toBeInTheDocument();
  });
})