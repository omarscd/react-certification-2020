import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RecommendationsList from '../../components/RecommendationsList';
import ThemeProvider from '../../providers/Theme';

describe('RecommendationsList', () => {
  afterAll(cleanup);

  it('renders correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <RecommendationsList />
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
