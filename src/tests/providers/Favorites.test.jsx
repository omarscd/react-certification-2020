import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FavoritesProvider from '../../providers/Favorites';

import '../../utils/storage';
import '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ authenticated: true }),
}));

jest.mock('../../utils/storage', () => {
  return {
    storage: {
      get: jest.fn(),
      set: jest.fn(),
      remove: jest.fn(),
    },
  };
});

describe('FavoritesProvider', () => {
  afterAll(cleanup);

  it('Renders correctly', () => {
    const { container } = render(
      <FavoritesProvider>
        <p>Mock content</p>
      </FavoritesProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
