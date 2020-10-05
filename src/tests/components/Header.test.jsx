import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import ThemeProvider from '../../providers/Theme';
import '../../providers/SearchContext';
import '../../providers/Auth';

jest.mock('../../providers/SearchContext', () => ({
  default: jest.fn(),
  useSearch: () => ({ query: 'test', setQuery: jest.fn() }),
}));

jest.mock('../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => {
    let authenticated = true;
    return {
      logout: jest.fn(() => {
        authenticated = false;
      }),
      authenticated,
    };
  },
}));

describe('Header logged in', () => {
  afterAll(cleanup);

  it('renders correctly when logged in', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly when logged out', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    );
    const logOutButton = screen.getByRole('button');
    fireEvent.click(logOutButton);
    expect(container.firstChild).toMatchSnapshot();
  });
});
