import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/NotFound';
import ThemeProvider from '../../providers/Theme';
import '../../providers/SearchContext';
import '../../providers/Auth';

jest.mock('../../providers/SearchContext', () => ({
  default: jest.fn(),
  useSearch: () => ({ query: 'test', setQuery: jest.fn() }),
}));

jest.mock('../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ authenticated: true }),
}));

describe('NotFound page', () => {
  afterAll(cleanup);

  it('renders correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
