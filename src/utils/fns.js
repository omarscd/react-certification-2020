// TODO: convert to fetch
const getURL = (query) =>
  `https://content.googleapis.com/youtube/v3/search?part=id&part=snippet&q=${query}&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export { getURL };
