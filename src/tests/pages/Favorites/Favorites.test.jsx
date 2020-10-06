import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Favorites from '../../../pages/Favorites';
import ThemeProvider from '../../../providers/Theme';
import '../../../providers/SearchContext';
import '../../../providers/Auth';
import '../../../providers/Favorites';

jest.mock('../../../providers/SearchContext', () => ({
  default: jest.fn(),
  useSearch: () => ({ query: 'test', setQuery: jest.fn() }),
}));

jest.mock('../../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ authenticated: true }),
}));

jest.mock('../../../providers/Favorites', () => ({
  default: jest.fn(),
  useFavorites: () => {
    return {
      favorites: [
        {
          id: 'YNZmZ4ARr38',
          thumbnail: 'https://i.ytimg.com/vi/YNZmZ4ARr38/mqdefault.jpg',
          title:
            'Shrek Forever After (2010) - Daddy Ever After Scene (2/10) | Movieclips',
          description:
            'Shrek Forever After - Daddy Ever After: Shrek (Mike Myers) begins to feel the monotony of family life with Donkey (Eddie Murphy) and Fiona (Cameron Diaz).',
        },
        {
          id: '0L1sL54G45Q',
          thumbnail: 'https://i.ytimg.com/vi/0L1sL54G45Q/mqdefault.jpg',
          title:
            'Shrek the Third (2007) - Damsels of Destruction Scene (8/10) | Movieclips',
          description:
            'Shrek the Third - Damsels of Destruction: The princesses break into the castle. BUY THE MOVIE: ...',
        },
        {
          id: 'mFl8nzZuExE',
          thumbnail: 'https://i.ytimg.com/vi/mFl8nzZuExE/mqdefault.jpg',
          title: 'Shrek (2001) - Do You Know the Muffin Man? Scene (2/10) | Movieclips',
          description:
            'Shrek - Do You Know the Muffin Man?: Lord Farquad (John Lithgow) interrogates the Gingerbread Man (Conrad Vernon) as to the whereabouts of the other ...',
        },
      ],
    };
  },
}));

describe('Favorites page', () => {
  afterAll(cleanup);

  it('renders correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <BrowserRouter>
          <Favorites />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
