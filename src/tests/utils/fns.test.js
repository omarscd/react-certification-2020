import { getQueryURL, getRelatedURL, getInfoURL } from '../../utils/fns';

describe('utility funtions', () => {
  it('creates url to query search', () => {
    const q = 'nice query';
    const url = getQueryURL(q);
    expect(url).toBe(
      `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${q}&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
  });

  it('creates url to get related videos', () => {
    const videoId = 'abc123';
    const url = getRelatedURL(videoId);
    expect(url).toBe(
      `https://www.googleapis.com/youtube/v3/search?part=snippet,id&relatedToVideoId=${videoId}&type=video&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
  });

  it('creates url to get info of a specific video', () => {
    const videoId = 'abc123';
    const url = getInfoURL(videoId);
    expect(url).toBe(
      `https://www.googleapis.com/youtube/v3/videos?part=id,snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
  });
});
