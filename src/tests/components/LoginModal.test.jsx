import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LoginModal from '../../components/LoginModal';
import '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ authenticated: true, login: jest.fn() }),
}));

describe('LoginModal', () => {
  afterAll(cleanup);

  it('renders correctly', async () => {
    const { container } = render(<LoginModal isOpen />);
    expect(container).toMatchSnapshot();
  });
});
