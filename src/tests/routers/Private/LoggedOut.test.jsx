import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Private from '../../../routers/Private';
import '../../../providers/Auth';

jest.mock('../../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ authenticated: false }),
}));

describe('Private', () => {
  afterAll(cleanup);

  it('renders redirect when not authenticated', () => {
    const { container } = render(
      <BrowserRouter>
        <Private />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
