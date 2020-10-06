import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Private from '../../../routers/Private';
import '../../../providers/Auth';

jest.mock('../../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ authenticated: true }),
}));

describe('Private', () => {
  afterAll(cleanup);

  it('renders when authenticated', () => {
    const { container } = render(
      <BrowserRouter>
        <Private />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
