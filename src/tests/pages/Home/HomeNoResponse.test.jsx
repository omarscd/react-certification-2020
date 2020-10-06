import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../../pages/Home';
import ThemeProvider from '../../../providers/Theme';
import '../../../providers/SearchContext';
import '../../../providers/Auth';
import '../../../providers/Favorites';

jest.mock('../../../providers/Favorites', () => ({
  default: jest.fn(),
  useFavorites: () => ({ favorites: [] }),
}));

jest.mock('../../../providers/SearchContext', () => ({
  default: jest.fn(),
  useSearch: () => ({ query: 'test', setQuery: jest.fn() }),
}));

jest.mock('../../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ authenticated: true }),
}));

jest.mock('../../../utils/fns.js', () => {
  const fetchData = jest.fn(() => {
    return Promise.resolve(undefined);
  });

  return {
    getQueryURL: jest.fn(),
    getRelatedURL: jest.fn(),
    getInfoURL: jest.fn(),
    fetchData,
  };
});

describe('Home page', () => {
  afterAll(cleanup);

  it('renders correctly while waiting for response', async () => {
    await act(async () => {
      render(
        <ThemeProvider>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </ThemeProvider>
      );
    });
    expect(screen.getByText('Loading...')).toBeTruthy();
  });
});
