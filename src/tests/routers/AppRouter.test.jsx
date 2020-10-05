import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AppRouter from '../../routers/AppRouter';
import ThemeProvider from '../../providers/Theme';
import '../../providers/SearchContext';
import '../../providers/Auth';

jest.mock('../../providers/SearchContext', () => ({
  default: jest.fn(),
  useSearch: () => ({ query: 'test', setQuery: jest.fn() }),
}));

jest.mock('../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ logout: jest.fn() }),
}));

describe('AppRouter', () => {
  afterAll(cleanup);

  it('renders correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
