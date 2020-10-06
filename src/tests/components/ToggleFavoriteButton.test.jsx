import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ToggleFavoriteButton from '../../components/ToggleFavoriteButton';
import ThemeProvider from '../../providers/Theme';
import '../../providers/SearchContext';
import '../../providers/Auth';
import '../../providers/Favorites';

jest.mock('../../providers/SearchContext', () => ({
  default: jest.fn(),
  useSearch: () => ({ query: 'test', setQuery: jest.fn() }),
}));

jest.mock('../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ authenticated: true }),
}));

jest.mock('../../providers/Favorites', () => ({
  default: jest.fn(),
  useFavorites: () => {
    // eslint-disable-next-line global-require
    return {
      favorites: [
        {
          id: 'mFl8nzZuExE',
          thumbnail: 'https://i.ytimg.com/vi/mFl8nzZuExE/mqdefault.jpg',
          title: 'Shrek (2001) - Do You Know the Muffin Man? Scene (2/10) | Movieclips',
          description: 'Do You Know the Muffin Man?',
        },
      ],
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
    };
  },
}));

const fav = {
  id: 'mFl8nzZuExE',
  thumbnail: 'https://i.ytimg.com/vi/mFl8nzZuExE/mqdefault.jpg',
  title: 'Shrek (2001) - Do You Know the Muffin Man? Scene (2/10) | Movieclips',
  description: 'Do You Know the Muffin Man?',
};

const notFav = {
  id: 'asd123',
  thumbnail: 'https://i.ytimg.com/vi/mFl8nzZuExE/mqdefault.jpg',
  title: 'Shrek (2001) - Do You Know the Muffin Man? Scene (2/10) | Movieclips',
  description: 'Do You Know the Muffin Man?',
};

describe('ToggleFavoriteButton', () => {
  afterAll(cleanup);

  it('renders correctly when element is favorite', async () => {
    const { container } = render(
      <ThemeProvider>
        <ToggleFavoriteButton {...fav} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly when element is not favorite', async () => {
    const { container } = render(
      <ThemeProvider>
        <ToggleFavoriteButton {...notFav} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
