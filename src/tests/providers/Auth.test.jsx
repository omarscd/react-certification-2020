import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AuthProvider from '../../providers/Auth';

import '../../utils/storage';

jest.mock('../../utils/storage', () => {
  return {
    storage: {
      get: jest.fn(),
      set: jest.fn(),
      remove: jest.fn(),
    },
  };
});

describe('AuthProvider', () => {
  afterAll(cleanup);

  it('Renders correctly', () => {
    const { container } = render(
      <AuthProvider>
        <p>Mock content</p>
      </AuthProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
