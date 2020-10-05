import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecommendationItem from '../../components/RecommendationItem';
import favorites from '../fixtures/favorites';
import ThemeProvider from '../../providers/Theme';

describe('RecommendationItem', () => {
  afterAll(cleanup);

  it('renders correctly', () => {
    const recommendation = favorites[0];
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <RecommendationItem
            id={recommendation.id}
            thumbnail={recommendation.thumbnail}
            title={recommendation.title}
          />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
