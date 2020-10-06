import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Favorites from '../../../pages/Favorites';
import ThemeProvider from '../../../providers/Theme';
import '../../../providers/SearchContext';
import '../../../providers/Auth';
import '../../../providers/Favorites';

jest.mock('../../../providers/SearchContext', () => ({
  default: jest.fn(),
  useSearch: () => ({ query: 'test', setQuery: jest.fn() }),
}));

jest.mock('../../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ authenticated: true }),
}));

jest.mock('../../../providers/Favorites', () => ({
  default: jest.fn(),
  useFavorites: () => {
    return { favorites: [] };
  },
}));

describe('Favorites page', () => {
  afterAll(cleanup);

  it('renders correctly with empty favorites array', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <Favorites />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
