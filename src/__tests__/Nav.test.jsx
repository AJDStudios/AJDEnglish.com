import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '../components/Nav';
import { createMemoryHistory } from 'history';


//test for the presense of the burger icon
describe('Navigation', () => {
  const originalWindow = { ...window };

  beforeEach(() => {
    delete window.innerWidth;
    window.innerWidth = 0;
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 0,
    });
    window.dispatchEvent = jest.fn();
  });

  test('displays burger icon on mobile', () => {
    // Set the window.innerWidth to simulate a mobile screen
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
  
    render(<Navigation />);
    screen.debug();
  
    const burgerIconsMobile = screen.queryAllByText('☰');
    expect(burgerIconsMobile.length).toBe(1); // Expect burger icon to be displayed on mobile
  });
});

describe('Navigation', () => {
   test('should switch burger icon on click', () => {
      const history = createMemoryHistory();
      render(
        <MemoryRouter history={history}>
          <Navigation />
        </MemoryRouter>
      );
        // Arrange
        const burgerIcon = screen.getByText('☰');

        // Assert initial state
        expect(burgerIcon).toBeInTheDocument();
    
        // Act
        fireEvent.click(burgerIcon);
    
        // Assert
        expect(burgerIcon).toHaveTextContent('✕');
    
        // Act again
        fireEvent.click(burgerIcon);
    
        // Assert
        expect(burgerIcon).toHaveTextContent('☰');
    });
  });