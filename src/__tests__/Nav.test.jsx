import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '../components/Nav';
import { createMemoryHistory } from 'history';

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
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));
  
    render(<Navigation />);
    screen.debug();
  
    const burgerIconsMobile = screen.queryAllByText('☰');
    expect(burgerIconsMobile.length).toBe(1);
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

        const burgerIcon = screen.getByText('☰');

        expect(burgerIcon).toBeInTheDocument();
    
        fireEvent.click(burgerIcon);

        expect(burgerIcon).toHaveTextContent('✕');

        fireEvent.click(burgerIcon);

        expect(burgerIcon).toHaveTextContent('☰');
    });
  });