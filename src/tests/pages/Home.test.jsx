import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
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

jest.mock('../../utils/fns.js', () => {
  const fetchData = jest.fn(() => {
    // eslint-disable-next-line global-require
    const apiSearchResponse = require('../fixtures/apiSearchResponse');
    return Promise.resolve(apiSearchResponse[0]);
  });
  fetchData.mockReturnValueOnce(Promise.resolve(false));

  return {
    getQueryURL: jest.fn(),
    getRelatedURL: jest.fn(),
    getInfoURL: jest.fn(),
    fetchData,
  };
});

describe('Home page', () => {
  afterAll(cleanup);

  it('renders correctly without api response', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly with api response', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
