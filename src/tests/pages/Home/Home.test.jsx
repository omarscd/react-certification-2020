import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../../pages/Home';
import ThemeProvider from '../../../providers/Theme';
import '../../../providers/SearchContext';
import '../../../providers/Auth';
import '../../../providers/Favorites';

jest.mock('../../../providers/Favorites', () => ({
  default: jest.fn(),
  useFavorites: () => ({ favorites: [] }),
}));

jest.mock('../../../providers/SearchContext', () => ({
  default: jest.fn(),
  useSearch: () => ({ query: 'test', setQuery: jest.fn() }),
}));

jest.mock('../../../providers/Auth', () => ({
  default: jest.fn(),
  useAuth: () => ({ authenticated: true }),
}));

jest.mock('../../../utils/fns.js', () => {
  const fetchData = jest.fn(() => {
    return Promise.resolve({
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'uJPj_I_BYZov6Vq_TnDRVnOqR7c',
          id: {
            kind: 'youtube#video',
            videoId: 'fB5u4asbDW0',
          },
          snippet: {
            publishedAt: '2019-02-16T03:05:28Z',
            channelId: 'UC4p2hVcKHkxiYvwjrBbogvQ',
            title: 'Nimrodel / The Procession / The White Rider',
            description:
              'Provided to YouTube by The Orchard Enterprises Nimrodel / The Procession / The White Rider · Camel Mirage ℗ 1974 © Janus Records™ a division of 43 North ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/fB5u4asbDW0/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/fB5u4asbDW0/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/fB5u4asbDW0/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Camel - Topic',
            liveBroadcastContent: 'none',
            publishTime: '2019-02-16T03:05:28Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'Iitwfq2qdCTIgqJKMvvp463tdr8',
          id: {
            kind: 'youtube#video',
            videoId: 'lFZbzKN4S78',
          },
          snippet: {
            publishedAt: '2009-06-04T12:22:16Z',
            channelId: 'UC4AjmgokCYu8lkc3LSMUfyA',
            title: 'Lay of Nimrodel',
            description:
              'Lay of Nimrodel: Words by J.R.R. Tolkien, Music by Margaret Davis. Sung by Margaret Davis of Broceliande. This version. have actually been authorized by the ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/lFZbzKN4S78/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/lFZbzKN4S78/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/lFZbzKN4S78/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Víctor Gondra',
            liveBroadcastContent: 'none',
            publishTime: '2009-06-04T12:22:16Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'RMAlkOsh2JbAilDiEMMIX4hd0yE',
          id: {
            kind: 'youtube#video',
            videoId: 'AD2fKNnTnME',
          },
          snippet: {
            publishedAt: '2017-03-14T01:25:42Z',
            channelId: 'UCDBi17csnWqzshvwFHhjB8Q',
            title: 'Song of Nimrodel',
            description:
              "Here is the new song from my Tolkien Project: Song of Nimrodel!! Please let me know if you enjoy it...I'd love to hear from you! http://www.yolandamott.com ...",
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/AD2fKNnTnME/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/AD2fKNnTnME/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/AD2fKNnTnME/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Yolanda Mott',
            liveBroadcastContent: 'none',
            publishTime: '2017-03-14T01:25:42Z',
          },
        },
      ],
    });
  });

  return {
    getQueryURL: jest.fn(),
    getRelatedURL: jest.fn(),
    getInfoURL: jest.fn(),
    fetchData,
  };
});

describe('Home page', () => {
  afterAll(cleanup);

  it('renders correctly', () => {
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
